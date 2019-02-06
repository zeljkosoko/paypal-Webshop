function ShoppingCart() {
    
    this.getProductList = function (filename) {
        loadJSON(function (jsonResponse) {
            var productList = JSON.parse(jsonResponse);
            populateProducts(productList);
        },filename);
    }

    function populateProducts(plist) {
        
        var prodListHolder = document.getElementsByClassName('productList')[0];

        plist['productList'].forEach(productObject => {
       
            var allProducts = '<form class="col-md-10 productListItem" target="_self" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">'+
                    
                    '<img src="'+ productObject['imageFile']+'" alt="pic" class="imgClass">'+
                    '<div class="productTitle">'+ productObject['prodTitle'] +'</div>'+
                    '<div class="productDescription">'+ productObject['prodDescription'] +'</div>'+
                    '<div class="productPrice">'+ '\$'+ productObject['prodPrice'] +'</div>'+
                    
                    '<input type="hidden" name="business" value="zex.sokolovic-facilitator@gmail.com">'+

                    '<input type="hidden" name="cmd" value="_xclick">'+
                    '<input type="hidden" name="item_name" value="'+ productObject['prodTitle'] +'"></input>'+
                    '<input type="hidden" name="amount" value="'+ productObject['prodPrice'] +'">'+
                    '<input type="hidden" name="currency_code" value="USD">'+
                    '<button class="btn btn-primary btn-sm">Buy now</button>'+
                '</form>'+

                '<form class="col-md-2"  target="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">'+
                
                    '<input type="hidden" name="business" value="zex.sokolovic-facilitator@gmail.com">'+

                    '<input type="hidden" name="cmd" value="_cart">'+
                    '<input type="hidden" name="add" value="1">'+
                    '<input type="hidden" name="item_name" value="'+ productObject['prodTitle'] +'"></input>'+
                    '<input type="hidden" name="amount" value="'+ productObject['prodPrice'] +'">'+
                    '<input type="hidden" name="currency_code" value="USD">'+
                    '<input type="hidden" name="shopping_url" value="' + window.location.href + '"></input>'+
                    '<button class="btn btn-secondary btn-sm mb-1" onclick="getContinueShoppingURL(this.form)">Add to cart</button>'+
                '</form>';         
            
        prodListHolder.innerHTML += allProducts;
        });  
    }
    
}
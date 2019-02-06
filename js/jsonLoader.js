function loadJSON(callback, filename) {
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            callback(xhr.responseText);
        }
    };
    xhr.open('GET', filename, true);
    xhr.send();
}
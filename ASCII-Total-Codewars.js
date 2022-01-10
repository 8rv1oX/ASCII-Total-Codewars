function uniTotal(str) {
    // total up dem unicodes!
    var count=0;
    for (var a=0;a<str.length;a++){
    count += str.charCodeAt(a);
    }
    return count;
    }
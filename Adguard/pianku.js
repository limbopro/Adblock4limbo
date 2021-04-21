var x = document.querySelectorAll("script[src*=suning]");
var i;
for (i = 0; i < x.length; i++) {
    x[i].src = "";
}
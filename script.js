// Define menu toggle function:
document.getElementById("nav-toggle").onclick = function() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("nav-hidden");
}



// Change copyright year:
var copyrightYear = document.getElementById("copyright-year").innerText;
var currentYear = new Date().getFullYear();
if (copyrightYear != currentYear) {
    document.getElementById("copyright-year").innerText = copyrightYear + " - " + currentYear;
}

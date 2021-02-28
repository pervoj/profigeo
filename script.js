// Define menu toggle function:
document.getElementById("nav-toggle").onclick = function() {
    var menu = document.getElementById("nav-menu");
    menu.classList.toggle("nav-hidden");
}



// Define accordion opening:
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("accordion-active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.classList.contains("accordion-panel")) {
            panel.classList.toggle("accordion-panel-hidden");
        }
    });
}



// Change copyright year:
var copyrightYear = document.getElementById("copyright-year").innerText;
var currentYear = new Date().getFullYear();
if (copyrightYear != currentYear) {
    document.getElementById("copyright-year").innerText = copyrightYear + " - " + currentYear;
}

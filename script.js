/* Toggle between adding and removing the "responsive" class to nav-bar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}
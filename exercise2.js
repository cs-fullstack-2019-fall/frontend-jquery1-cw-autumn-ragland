// grab middle image by id
let middle_image = document.getElementById("middle_image");
// flag
let show = true;
// callback function to show hide
function timer() {
    // if show = true
    if (show) {
        middle_image.setAttribute("hidden", "");
        show = false;
    }
    // if show = false
    else{
        middle_image.removeAttribute("hidden");
        show = true;
    }
}
// every 2000 seconds run timer function
function interval() {
    let my_interval = window.setInterval(timer, 2000);
}

interval();
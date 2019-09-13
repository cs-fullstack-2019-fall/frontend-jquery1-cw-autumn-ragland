let middle_image = document.getElementById("middle_image");
let show = true;
function timer() {
    if (show) {
        middle_image.setAttribute("hidden", "");
        show = false;
    }
    else{
        middle_image.removeAttribute("hidden");
        show = true;
    }
}

function interval() {
    let my_interval = window.setInterval(timer, 2000);
}

interval();
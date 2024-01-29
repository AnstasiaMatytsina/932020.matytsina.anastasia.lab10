document.getElementById("1").addEventListener('click', event => {
    event.target.style.transition = 'top 3s';
    event.target.style.top = '-100vh';
});

let focus = false;
document.getElementById("hat").addEventListener('click', event => {
    if (focus) {
        focus = false;
        document.getElementById("rabbit").style.top = "35%";
        document.getElementById("dove").style.top = "50%";
    } else {
        focus = true;
        document.getElementById("rabbit").style.top = "50%";
        document.getElementById("dove").style.top = "35%";
    }
});

let light = "50%"
document.getElementById("lamp").addEventListener('click', event => {
    if (light === "0%") {
        light = "50%";
    }
    else {
        light = "0%";
    }
    document.getElementById("light").style.opacity = light;
});
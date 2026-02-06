// script.js

// Page Navigation function
function navigateTo(page) {
    window.location.href = page;
}

// Theme Switching function
function switchTheme(theme) {
    document.body.className = theme;
}

// Form Validation function
function validateForm(form) {
    // Example validation logic
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert('Please fill out all fields.');
            return false;
        }
    }
    return true;
}

// Animation function
function fadeIn(element) {
    element.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();
        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}
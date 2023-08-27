// DO NOT EDIT, DISTRIBUTE NOR SCAN THIS CODE, IT IS PUNISHABLE BY LAW

var topDisplay = "";

// var form = document.getElementById("form"); // this variable is already declared in the startup() function

function clearForm() {
    form.innerHTML = "";
}

function blur() {
    document.getElementById('blur-area').style.filter = "blur(10px)";
}

function unblur() {
    document.getElementById("blur-area").style.filter = "blur(0px)";
    topDisplay = "";
}

function reminder() {
    if (topDisplay == "") {
        topDisplay = "reminder";
        document.getElementById("reminder").style.display = "block";
        blur();
    }
}

function close_reminder () {
    document.getElementById("reminder").style.display = "none";
    unblur();
}

function donate() {
    if (topDisplay == "") {
    topDisplay = "donate";
    document.getElementById("donate").style.display = "block";
    blur();
    }
}

function close_donate() {
    document.getElementById("donate").style.display = "none";
    unblur();
}

function privacy() {
    if (topDisplay == "") {
    topDisplay = "privacy";
    document.getElementById("privacy").style.display = "block";
    blur();
    }
}

function close_privacy() {
    document.getElementById("privacy").style.display = "none";
    unblur();
}

function terms() {
    if (topDisplay == "") {
        topDisplay = "terms";
        document.getElementById("terms").style.display = "block";
        blur();
    }
}

function close_terms() {
    document.getElementById("terms").style.display = "none";
    unblur();
}

function get_started() {
    if (topDisplay == "") { // this make sure that it doesn't interfere with input field
        document.getElementById("headline").style.display = "none";
        form.style.display = "block";
        form.style.animation = "showform 1s ease-out";
    }
}

function startup() {
    document.getElementById("every-display").style.display = "block";
    reminder();
    var form = document.getElementById("form"); // i initially declare this outside the function but it doesn't work
}

function prevent_reload() {
    window.addEventListener('beforeunload', function(event) {
        event.preventDefault();
        event.returnValue = ''; // Required for some browsers to show the confirmation dialog
    });
}
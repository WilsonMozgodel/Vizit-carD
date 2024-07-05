var title = "Wilsooon!"; 
var speed = 200; 
var i = 0;
var isAppearing = true;

function animateTitle() {
    setInterval(function() {
        if (isAppearing) {
            document.title = title.substring(0, i) + "|";
            i++;
            if (i > title.length) {
                isAppearing = false;
            }
        } else {
            document.title = title.substring(0, i);
            i--;
            if (i === 0) {
                isAppearing = true;
            }
        }
    }, speed);
}

animateTitle();



const texts = ["python dev", "cock cock", "Silicon Valley soon", "Just wait for me."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;
let cursorVisible = true;

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (!isDeleting && index <= currentText.length) {
        letter = currentText.slice(0, ++index);
    } else {
        isDeleting = true;
        letter = currentText.slice(0, --index);
        if (index === 0) {
            isDeleting = false;
            count++;
        }
    }

    if (isDeleting && letter.length === 0) {
        document.getElementById("text").style.fontSize = "16px";
        document.getElementById("text").style.padding = "10px";
    } else {
        document.getElementById("text").style.fontSize = "24px";
        document.getElementById("text").style.padding = "20px";
    }

    if (cursorVisible) {
        document.getElementById("text").textContent = letter + "|";
        cursorVisible = false;
    } else {
        document.getElementById("text").textContent = letter;
        cursorVisible = true;
    }

    setTimeout(type, isDeleting ? 50 : 200);
})();

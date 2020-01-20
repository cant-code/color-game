var difficulty = 'hard';
var r = 0;
var g = 0;
var b = 0;

document.getElementById("easy").onclick = function () {
    document.getElementById("hard").classList.remove("btn-primary");
    document.getElementById("easy").classList.remove("btn-outline-primary");
    document.getElementById("easy").classList.add("btn-primary");
    difficulty = 'easy';
    document.getElementById("hardef").classList.remove("show");
    document.getElementById("hardef").classList.add("hide");
};

document.getElementById("hard").onclick = function () {
    document.getElementById("easy").classList.remove("btn-primary");
    document.getElementById("hard").classList.remove("btn-outline-primary");
    document.getElementById("hard").classList.add("btn-primary");
    difficulty = 'hard';
    document.getElementById("hardef").classList.remove("hide");
    document.getElementById("hardef").classList.add("show");
};

document.getElementById("new_color").onclick = gen;

function gen() {
    document.getElementById("jumbotron").classList.add("bg-primary");
    document.getElementById("new_color").innerText = "New Colors";
    document.getElementById("success").innerHTML = "";
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    document.getElementById("display-2").textContent = "RGB(" + r + ", " + g + ", " + b + ")";
    if (difficulty === 'hard') {
        var boxes = document.getElementsByClassName("square");
        var randomBox = Math.floor(Math.random() * boxes.length);
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("hide");
            boxes[i].style.background = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256)
                + ')';
        }
        boxes[randomBox].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    } else {
        var boxes = document.getElementsByClassName("easy");
        var randomBox = Math.floor(Math.random() * boxes.length);
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("hide");
            boxes[i].style.background = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256)
                + ')';
        }
        boxes[randomBox].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
};

var things = document.getElementsByClassName("square");

for (var i = 0; i < things.length; i++) {
    things[i].addEventListener("click", function () {
        if (this.style.background === "rgb(" + r + ", " + g + ", " + b + ")") {
            document.getElementById("success").innerHTML = "Correct!!";
            win(i);
        } else {
            document.getElementById("success").innerHTML = "Try Again!!!";
            this.classList.add("hide");
        }
    });
}

function win(no) {
    document.getElementById("jumbotron").style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.getElementById("jumbotron").classList.remove("bg-primary");
    var boxes = document.getElementsByClassName("square");
    for (var i = 0; i < boxes.length; i++) {
        if (i !== no) {
            boxes[i].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            boxes[i].classList.remove("hide");
            boxes[i].classList.add("show");
        }
    }
    document.getElementById("new_color").innerText = "Play Again?";
}
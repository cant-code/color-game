var difficulty = 'hard';
var r = 0;
var g = 0;
var b = 0;
var chances = 1;

document.getElementById("easy").onclick = function () {
    difficulty = 'easy';
    document.getElementById("hardef").classList.remove("show");
    document.getElementById("dif_med").classList.remove("show");
    document.getElementById("hardef").classList.add("hide");
    document.getElementById("dif_med").classList.add("hide");
    gen();
};

document.getElementById("hard").onclick = function () {
    difficulty = 'hard';
    document.getElementById("hardef").classList.remove("hide");
    document.getElementById("dif_med").classList.remove("show");
    document.getElementById("hardef").classList.add("show");
    document.getElementById("dif_med").classList.add("hide");
    gen();
};

document.getElementById("medium").onclick = function () {
    difficulty = 'medium';
    document.getElementById("hardef").classList.remove("hide");
    document.getElementById("dif_med").classList.remove("hide");
    document.getElementById("hardef").classList.add("show");
    document.getElementById("hardef").classList.add("show");
    gen();
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
    if (difficulty === 'medium') {
        var boxes = document.getElementsByClassName("square");
        var randomBox = Math.floor(Math.random() * boxes.length);
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("hide");
            boxes[i].style.background = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256)
                + ')';
        }
        boxes[randomBox].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    } else if (difficulty === 'hard') {
        var boxes = document.getElementsByClassName("medium");
        var randomBox = Math.floor(Math.random() * boxes.length);
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("hide");
            boxes[i].style.background = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256)
                + ')';
        }
        boxes[randomBox].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    else {
        var boxes = document.getElementsByClassName("easy");
        var randomBox = Math.floor(Math.random() * boxes.length);
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("hide");
            boxes[i].style.background = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256)
                + ')';
        }
        boxes[randomBox].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
    document.getElementById("dif_med").focus();
}

var things = document.getElementsByClassName("square");

for (var i = 0; i < things.length; i++) {
    things[i].addEventListener("click", function () {
        if (this.style.background.indexOf("rgb(" + r + ", " + g + ", " + b + ")") >=0 )  {
            chances = 1;
            document.getElementById("success").innerHTML = "Correct!!";
            win();
        } else {
            document.getElementById("success").innerHTML = "Try Again!!!";
            this.classList.add("hide");
            chances++;
            if (((chances === 3) && (difficulty === 'easy')) || ((chances === 5) && (difficulty === 'hard')) || ((chances === 4) && (difficulty === 'medium'))) {
                document.getElementById("success").innerHTML = "You Lost!!";
                chances = 1;
                win();
            }
        }
    });
}

function win() {
    document.getElementById("jumbotron").style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.getElementById("jumbotron").classList.remove("bg-primary");
    if (difficulty === 'medium') {
        var boxes = document.getElementsByClassName("square");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            boxes[i].classList.remove("hide");
            boxes[i].classList.add("show");
        }
    } else if (difficulty === 'hard') {
        var boxes = document.getElementsByClassName("medium");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            boxes[i].classList.remove("hide");
            boxes[i].classList.add("show");
        }
    }
    else {
        var boxes = document.getElementsByClassName("easy");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.background = 'rgb(' + r + ', ' + g + ', ' + b + ')';
            boxes[i].classList.remove("hide");
            boxes[i].classList.add("show");
        }
    }
    document.getElementById("new_color").innerText = "Play Again?";
}

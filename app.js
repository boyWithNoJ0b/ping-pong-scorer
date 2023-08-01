const spanP1 = document.querySelector("#player-1");
const spanP2 = document.querySelector("#player-2");
const buttonP1 = document.querySelector(".player-1");
const buttonP2 = document.querySelector(".player-2");
const buttonReset = document.querySelector(".reset");

let forScoreP1 = 1;
buttonP1.addEventListener('click', scoreKeepP1);

let forScoreP2 = 1;
buttonP2.addEventListener('click', scoreKeepP2);

buttonReset.addEventListener('click', function(){
    spanP1.innerHTML = 0;
    spanP2.innerHTML = 0;
    forScoreP1 = 1;
    forScoreP2 = 1;
    spanP1.style.color = "black";
    spanP2.style.color = "black";
    buttonP1.classList.remove("disabled");
    buttonP2.classList.remove("disabled");
    buttonP1.addEventListener('click', scoreKeepP1);
    buttonP2.addEventListener('click', scoreKeepP2);

})


function scoreKeepP1() {
    let winScoreP1 = document.querySelector("#pt").selectedOptions[0].innerHTML;
    spanP1.innerHTML = forScoreP1;
    forScoreP1++;
    if(spanP1.innerHTML == winScoreP1){
        spanP1.style.color = "green";
        spanP2.style.color = "red";
        buttonP1.removeEventListener('click', scoreKeepP1);
        buttonP2.removeEventListener('click', scoreKeepP2);
        buttonP1.classList.add("disabled");
        buttonP2.classList.add("disabled");
    }
}

function scoreKeepP2() {
    let winScoreP2 = document.querySelector("#pt").selectedOptions[0].innerHTML;
    spanP2.innerText = forScoreP2;
    forScoreP2++;
    if(spanP2.innerHTML == winScoreP2) {
        spanP2.style.color = "green";
        spanP1.style.color = "red";
        buttonP1.removeEventListener('click', scoreKeepP1);
        buttonP2.removeEventListener('click', scoreKeepP2);
        buttonP1.classList.add("disabled");
        buttonP2.classList.add("disabled");
    }
}
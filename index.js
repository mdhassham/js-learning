const heading = document.getElementById("heading");
const btn = document.getElementById("myBtn");
const box1 = document.getElementById("box1");
const input = document.querySelector("input");



btn.addEventListener("click", () => {

    box1.classList.add("classForDiv");
});
btn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    btn.style.backgroundColor = "purple";

    box1.removeEventListener('mouseover', func1);
});

function func1() {
    btn.style.transform = "scale(1.1)";
    heading.style.backgroundColor = "pink";
}

box1.addEventListener("mouseover", func1);


box1.addEventListener("mouseout", () => {
    heading.style.backgroundColor = "";
    btn.style.transform = "";

});

box1.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "rgb(50,50,50)"
});

box1.addEventListener("click", () => {
    document.body.style.backgroundColor = "red"
});





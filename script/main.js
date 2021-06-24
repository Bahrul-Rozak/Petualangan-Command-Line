let button = document.getElementById('button-menu');
let main = document.getElementById('main');
button.addEventListener("click", e => {
       button.classList.toggle("active");
       main.classList.toggle("active");
})
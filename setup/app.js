// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

//Gore smo našoj varijabli btns dodali vrijednosti sve koje sadrže klasu btn

//Ovdje smo loopali kroz sve buttone doslovno pošto ih ima više.
btns.forEach(function(btn){
btn.addEventListener('click', function(e){
//Našoj varijabli styles smo dodali vrijednosti klasa koje ima dugme koje klikamo u tom trenutku(currentTarget).
const styles = e.currentTarget.classList;
//Ostalo bi trebalo biti jasno
if(styles.contains('decrease')){
    count--;
}
else if (styles.contains('increase')){
    count ++;
}
else{
    count = 0;
}
if(count > 0){
    value.style.color = 'green';
}
if (count < 0) {
  value.style.color = "red";
}
if (count == 0) {
  value.style.color = "#222";
}
value.textContent = count;
})

});
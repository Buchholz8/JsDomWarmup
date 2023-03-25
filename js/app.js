let logo = document.querySelector(`#logo_name`);
logo [`style`][`color`] = `red`;
logo [`style`][`fontSize`] = `2rem`;
let body_p = document.querySelectorAll (`.body_p`);
for(let i=0 ; i < body_p.length ; i++){
    body_p[i][`innerHTML`] = `replacement text link`;
}
let img = document.querySelector(`img`);
img.setAttribute(`src`, `https://images.pexels.com/photos/15688843/pexels-photo-15688843.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load`)
let all_p = document.querySelectorAll(`p`);
for(let i=0 ; i < all_p.length ; i++){
 if(all_p[i][`innerHTML`].includes(`link`) === true){
    all_p[i].insertAdjacentHTML(`beforeend`, `<a href="https://www.google.com/maps/@52.9926336,-112.8443741,14z">Does Not Support </a>`)
 }
}
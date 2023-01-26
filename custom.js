
 let imagen1 = document.querySelector('#imagen1');

function onHover() {
        imagen1.setAttribute('src', './img/img2.jpg');
}
function offHover() {
    imagen1.setAttribute('src','./img/img1.jpg')
}
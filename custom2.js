let imagen2 = document.querySelector('#imagen2');

imagen2.addEventListener("mouseover", changeimage);
function changeimage(){
    imagen2.setAttribute('src','./img/img4.jpg');
}

imagen2.addEventListener("mouseout", backimage);

function backimage(){
    imagen2.setAttribute('src','./img/img3.jpg');
}

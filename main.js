const colorImgHtml = document.querySelector(".color");
const grayImgHtml = document.querySelector(".gray");
const h1Html = document.querySelector(".member h1");
const h2Html = document.querySelector(".member h2");


const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Ania', 'Marek', 'Arek'];
const professions = ['Programista JS', 'UX,UI Designer', 'Front-end Developer'];

let i = 0;
const timeInterval = 4000;

function changeElement() {
    i++;

    if (i >= names.length) {
        i = 0;
    }

    colorImgHtml.src = colorImages[i];
    grayImgHtml.src = grayImages[i];
    h1Html.src = names[i];
    h2Html.src = professions[i];
}

setInterval(changeElement, timeInterval)
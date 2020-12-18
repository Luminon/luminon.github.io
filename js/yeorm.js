const btnExpandA = document.getElementById("expand-article-a");
const btnExpandB = document.getElementById("expand-article-b");
const btnExpandC = document.getElementById("expand-article-c");
const btnExpandD = document.getElementById("expand-article-d");
const areaExpandA = document.getElementById("area-a");
const areaExpandB = document.getElementById("area-b");
const areaExpandC = document.getElementById("area-c");
const areaExpandD = document.getElementById("area-d");

btnExpandA.addEventListener('click', () => {
    areaExpandA.classList.toggle('expand');
});

btnExpandB.addEventListener('click', () => {
    areaExpandB.classList.toggle('expand');
});

btnExpandC.addEventListener('click', () => {
    areaExpandC.classList.toggle('expand');
});

btnExpandD.addEventListener('click', () => {
    areaExpandD.classList.toggle('expand');
});
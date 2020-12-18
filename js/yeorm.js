const btnExpandA = document.getElementById("expand-article-a");
const btnExpandB = document.getElementById("expand-article-b");
const btnExpandC = document.getElementById("expand-article-c");
const btnExpandD = document.getElementById("expand-article-d");
const areaExpandA = document.getElementById("area-a");
const areaExpandB = document.getElementById("area-b");
const areaExpandC = document.getElementById("area-c");
const areaExpandD = document.getElementById("area-d");
const locationA = document.getElementById("article-a").offsetTop;
const locationB = document.getElementById("article-b").offsetTop;
const locationC = document.getElementById("article-c").offsetTop;
const locationD = document.getElementById("article-d").offsetTop;

btnExpandA.addEventListener('click', () => {
    areaExpandA.classList.toggle('expand');
    window.scrollTo({top:locationA, behavior:'smooth'});
});

btnExpandB.addEventListener('click', () => {
    areaExpandB.classList.toggle('expand');
    window.scrollTo({top:locationB, behavior:'smooth'});
});

btnExpandC.addEventListener('click', () => {
    areaExpandC.classList.toggle('expand');
    window.scrollTo({top:locationC, behavior:'smooth'});
});

btnExpandD.addEventListener('click', () => {
    areaExpandD.classList.toggle('expand');
    window.scrollTo({top:locationD, behavior:'smooth'});
});
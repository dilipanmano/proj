function dateClick(){ 
    const birthdate = document.getElementById("birthday").value;
    console.log(birthdate);
    if (birthdate === "") {
        removeHome();
    } else {
        removeHome();
    }
}

function removeHome(){
    const homeElement = document.getElementById('homePage');  
    homeElement.remove();
    createPageOne();
}

function createPageOne(){
    const pageOne = document.createElement("div");
    pageOne.innerHTML = `
    <h3 id='fadeIT'>Vanakam ley</h3>
    <button id='target'>Next</button>
    `
    const htmlPage = document.getElementById("pageOne");
    htmlPage.appendChild(pageOne);
    htmlPage.classList.add("pages");
    document.getElementById("target").addEventListener('click', fadeOutEffect);

}

function fadeOutEffect() {
    var fadeTarget = document.getElementById("fadeIT");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 80);
}


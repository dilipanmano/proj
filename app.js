function dateClick(){ 
    const birthdate = document.getElementById("birthday").value;
    console.log(birthdate);
    if (birthdate === "") {
        removeHome();
    } else {

    }
}

function removeHome(){
    const homeElement = document.getElementById('homePage');  
    homeElement.remove();
}
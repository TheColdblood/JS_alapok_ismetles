window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELEM = document.querySelectorAll("section h2")[0];
    ELEM.innerHTML;
    console.log(ELEM);

}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const ELEM = document.getElementById("ide");
    ELEM.innerHTML = "<p> Jó reggelt! </p>";
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const ELEM = document.getElementsByClassName("ide")[0];
    ELEM.innerHTML = "<p> Jó reggelt! </p>"
}

function elemekElerese4() {
    /**Ide jön az 4. feladat */
    const ELEM = document.getElementsByClassName("lista")[0];
    let txt = "<ul>"
    for (let index = 0; index < 5; index++){
        randomSzam = Math.floor(Math.random() * 20) + 10;
        txt += `<li>${randomSzam}</li>`
    }
    txt +="</ul>"
    ELEM.innerHTML = txt;
}

function elemekFormazasa1() {
    /**Ide jön az 5. feladat */
    const ELEM = document.getElementsByClassName("lista")[0];
    ELEM.classList.add("formazott");
}
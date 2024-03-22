window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenykezeles1();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELEM = $("#f1");
    let kiir = ELEM.html();
    console.log(kiir);

}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    const ELEM = $("#ide");
    ELEM.html("Jó reggelt!");
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const ELEM = $(".ide");
    ELEM.html ("<p> Jó reggelt! </p>");
}

function elemekElerese4() {
    /**Ide jön az 4. feladat */
    const ELEM = $(".lista");
    let txt = "<ul>"
    for (let index = 0; index < 5; index++){
        randomSzam = Math.floor(Math.random() * 20) + 10;
        txt += `<li>${randomSzam}</li>`
    }
    txt +="</ul>"
    ELEM.html(txt);
}

function elemekFormazasa1() {
    /**Ide jön az 5. feladat */
    const ELEM = $(".lista");
    ELEM.addClass("formazott");
}

function esemenykezeles1(){
    const ELEM = $(".lista")
    ELEM.on("click", function(){
        const ELEM2 = $(".kattintasutan");
        ELEM2.html(ELEM.html());
    });
}
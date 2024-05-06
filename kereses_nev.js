console.log(prizes);

kereses_nev();

function kereses_nev(){
    var bemenet = document.getElementById("bemenet");
    if (bemenet.value != ""){
        let szoveg = "<table><tr><th>Név</th><th>Év</th><th>Kategória</th><th>Motiváció</th></tr>";
        for (const elem of prizes.prizes) {
            if(elem.laureates != null){
                for (const szemely of elem.laureates) {
                    let szemely_nev = "";
                    if(szemely.firstname != null && szemely.surname != null) { szemely_nev= szemely.firstname + " " + szemely.surname; }
                    else if(szemely.firstname != null) { szemely_nev = szemely.firstname; }
                    else if(szemely.surname != null) { szemely_nev = szemely.surname; }
                    if(szemely_nev.toLowerCase().includes(bemenet.value.toLowerCase())){
                        szoveg += `<tr><td><b>${szemely_nev}</b></td><td>${elem.year}</td><td>${elem.category}</td><td>${szemely.motivation}</td></tr>`;
                    }
                }
            }
        }
        szoveg += "</table>"
        document.getElementById("kimenet_nev").innerHTML = szoveg;
    }
    else {
        let szoveg = "<table><tr><th>Név</th><th>Év</th><th>Kategória</th><th>Motiváció</th></tr>";
        for (const elem of prizes.prizes) {
            if(elem.laureates != null){
                for (const szemely of elem.laureates) {
                    let szemely_nev = "";
                    if(szemely.firstname != null && szemely.surname != null) { szemely_nev= szemely.firstname + " " + szemely.surname; }
                    else if(szemely.firstname != null) { szemely_nev = szemely.firstname; }
                    else if(szemely.surname != null) { szemely_nev = szemely.surname; }
                    szoveg += `<tr><td><b>${szemely_nev}</b></td><td>${elem.year}</td><td>${elem.category}</td><td>${szemely.motivation}</td></tr>`;
                }
            }
        }
        szoveg += "</table>"
        document.getElementById("kimenet_nev").innerHTML = szoveg;
    }

}
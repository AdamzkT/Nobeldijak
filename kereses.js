console.log(prizes);

var min = prizes.prizes[0].year;
var max = prizes.prizes[0].year;

for (const elem of prizes.prizes) {
    if (elem.year > max) { max = elem.year; }
    if (elem.year < min) { min = elem.year; }
}

document.getElementById("bemenet").min = min;
document.getElementById("bemenet").max = max;
document.getElementById("bemenet").value = max;

kereses();

function kereses(){
    var bemenet = document.getElementById("bemenet");
    if (Number(bemenet.value) >= min && Number(bemenet.value) <= max){
        bemenet.style.backgroundColor = "lightgreen";
        let szoveg = `<h1>${bemenet.value}</h1><ul>`;
        for (const elem of prizes.prizes) {
            if (elem.year == bemenet.value && elem.laureates != null) {
                szoveg += `<h2>${elem.category.toUpperCase()}</h2>`;
                for(const szemely of elem.laureates){
                    szoveg += `<li>`;
                    if(szemely.firstname != null && szemely.surname != null) { szoveg += `<b>${szemely.firstname} ${szemely.surname}</b>`;}
                    else if(szemely.firstname != null) { szoveg += `<b>${szemely.firstname}</b>`;}
                    else if(szemely.surname != null) { szoveg += `<b>${szemely.surname}</b>`;}
                    szoveg += `<p><i>${szemely.motivation}</i></p></li>`;
                }
            }
        }
        szoveg += "</ul>";
        document.getElementById("kimenet").innerHTML = szoveg;
    }
    else { bemenet.style.backgroundColor = "pink"; document.getElementById("kimenet").innerHTML = "";}

}
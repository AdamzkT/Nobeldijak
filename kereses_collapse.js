console.log(prizes);

var min = prizes.prizes[0].year;
var max = prizes.prizes[0].year;

for (const elem of prizes.prizes) {
    if (elem.year > max) { max = elem.year; }
    if (elem.year < min) { min = elem.year; }
}

for (let i = max; i >= min; i--) {
    document.getElementById("bemenet").innerHTML += `<option value="${i}">${i}</option>`;
}
document.getElementById("bemenet").value = max;

kereses_collapse();

function kereses_collapse(){
    var bemenet = document.getElementById("bemenet");
    let szoveg = `<h1>${bemenet.value}</h1>`;
    for (const elem of prizes.prizes) {
        if (elem.year == bemenet.value && elem.laureates != null) {
            szoveg += `<button data-bs-toggle="collapse" data-bs-target="#${elem.category}">${elem.category.toUpperCase()}</button>`;
            szoveg += `<div id="${elem.category}" class="collapse">`;
            for(const szemely of elem.laureates){
                if(szemely.firstname != null && szemely.surname != null) { szoveg += `<b>${szemely.firstname} ${szemely.surname}</b>`;}
                else if(szemely.firstname != null) { szoveg += `<b>${szemely.firstname}</b>`;}
                else if(szemely.surname != null) { szoveg += `<b>${szemely.surname}</b>`;}
                szoveg += `<p><i>${szemely.motivation}</i></p>`;
            }
            szoveg += `</div><br>`;
        }
    }
    document.getElementById("kimenet_collapse").innerHTML = szoveg;

}
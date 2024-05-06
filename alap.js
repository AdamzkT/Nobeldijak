console.log(prizes);

for (let i = 0; i < prizes.prizes.length; i++) {
        let dijazott = prizes.prizes[i];
        let szoveg = "";
        szoveg +=
        `
        <div class="col-sm-4">

        <!-- Button to Open the Modal -->
        <div type="button" class="szepites" data-bs-toggle="modal" data-bs-target="#myModal_${i}">
            ${dijazott.category}<br>${dijazott.year}
        </div>

        <!-- The Modal -->
        <div class="modal" id="myModal_${i}">
            <div class="modal-dialog">
                <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title"><span style="text-transform: uppercase;">${dijazott.category}</span> - ${dijazott.year}</h4>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div> 

                <!-- Modal body -->
                <div class="modal-body">
        `;
        if(dijazott.laureates == null) {szoveg += `<p>${dijazott.overallMotivation}</p>`;}
        else{
            for (const szemely of dijazott.laureates) {
                let szemely_szoveg = "";
                szemely_szoveg += "<p>";
                if(szemely.firstname != null && szemely.surname != null) { szemely_szoveg += `<b>${szemely.firstname} ${szemely.surname}</b> : `; }
                else if (szemely.firstname != null){ szemely_szoveg += `<b>${szemely.firstname}</b> : `; }
                else if (szemely.surname != null){ szemely_szoveg += `<b>${szemely.surname}</b> : `; }
                szemely_szoveg += `<i>${szemely.motivation}</i></p>`;
                szoveg += szemely_szoveg;
            }
        }
        szoveg +=
        `
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
        </div>
        `;
        document.getElementById("dijazottak").innerHTML += szoveg;
}
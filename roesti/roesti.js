
/* 
    Object syntax

'{''}'

{"key": "value"}

{"key": "value", "key": "value"}

let y = {hello: "world"};

let z = {
            cake: "Rübelitorte", 
            drink: "Kaffee"};
*/

let zutaten = {

kartoffeln: {einheit: "Gramm", menge: 1000, typ:"Bio"},
milch: {einheit: "deziliter", menge: 2},
salz: {einheit: "Gramm", menge: 1.5},
pfeffer: {einheit: "gramm", menge: 0.5}
};

let kartoffeln = kartoffelnKaufen(zutaten.kartoffeln);

let milch = milchKaufen(zutaten.milch);

let salz = salzKaufen(zutaten.salz);

let pfeffer = pfefferKaufen(zutaten.pfeffer);


waschen(kartoffeln);
schaelen(kartoffeln);
kochen(kartoffeln);


while(kartoffelnWeich) {
    kartoffelnWeich = kochen(kartoffeln);
}

reiben(kartoffeln);

while (!gutGemischt) {
    gutGemischt = zutatenVermischen(salz, pfeffer, milch, kartoffeln);
}
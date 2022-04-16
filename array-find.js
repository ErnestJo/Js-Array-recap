let cities =["Dar es Salaam","Songea","Tabora","Iringa","Mwanza","Kigoma"];
let city ="Iringa";
let chars = 13;

let match1 = cities.find(item => {
if (city == item ) return true;
});

//console.log("the city that your were looking for is",  match1);

let match2 = cities.find(item => chars = item.length);

//console.log("the item of matched element is ", match2);

let index = cities.findIndex(item => item.toLocaleLowerCase().indexOf("o") > 0);

//console.log (`Letter "o" found in item  at  index  ${index}`);

let person = {
    id : 129,
    name: "Ernest",
    town: "Mwanza"
}
let match3 = cities.find(function (item) {
    if(item == this.town) return true;
}, person);

//console.log(person.name, "Lives in matching town", match3);
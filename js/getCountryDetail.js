let countryName = localStorage.getItem("countryName")
let nativeName = localStorage.getItem("nativeName")
let population = localStorage.getItem("population")
let region = localStorage.getItem("region")
let subregion = localStorage.getItem("subregion")
let capital = localStorage.getItem("capital")
let tld = localStorage.getItem("tld")
let currencies = localStorage.getItem("currencies")
let languages = localStorage.getItem("languages")
let borders = localStorage.getItem("borders")
let flagImage = localStorage.getItem("flagImage")
let flagIcon = document.createElement("img")
flagIcon.src = flagImage;

let firstList = [nativeName, population, region, subregion, capital]
let secondList = [tld, currencies, languages]

function createCountryCard(){
    document.getElementById("countryCardImg").appendChild(flagIcon);
    document.getElementById("countryCardTitle").innerHTML = countryName
    firstList.map(element =>{
        let listItem = document.createElement("li");
        listItem.innerHTML = element
        document.getElementById("firstList").appendChild(listItem)
    })
    secondList.map(element =>{
        let listItem = document.createElement("li");
        listItem.innerHTML = element
        document.getElementById("secondList").appendChild(listItem)
    })

    dispayBorders();

}

function dispayBorders(){
    if(borders !== undefined){
        let borderArray = borders.split(" ");
        borderArray.map(element =>{
            let borderItem = document.createElement("li");
            borderItem.className ="border-item";
            borderItem.innerHTML = element;
            document.getElementById("bordersList").appendChild(borderItem)
        })
    }
}

if(borders !== undefined){
    createCountryCard()
}if(borders == undefined){
    createCountryCard()
}
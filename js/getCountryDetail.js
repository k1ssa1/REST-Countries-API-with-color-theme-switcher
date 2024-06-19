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
    let i = 0;
    let j = 0;
    firstList.map(element =>{
        let listName = ["Native name :","Population :","Region :","Sub Region :", "Capital: "]
        let listItem = document.createElement("li");
        let listNameComponent = document.createElement("span");
        listNameComponent.innerHTML = listName[i];
        listNameComponent.className = "listNames";
        listItem.innerHTML = listNameComponent.innerHTML + " " + element;
        document.getElementById("firstList").appendChild(listItem);
        i = i + 1;
    })
    secondList.map(element =>{
        let listName2 = ["Top level domain : ","Currencies : ","Languages : "]
        let listItem = document.createElement("li");
        let listNameComponent2 = document.createElement("span");
        listNameComponent2.innerHTML = listName2[j];
        listNameComponent2.className = "listNames";
        listItem.innerHTML = listNameComponent2.innerHTML + " " + element;
        document.getElementById("secondList").appendChild(listItem);
        j = j + 1
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

createCountryCard()
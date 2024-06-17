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
flagIcon.src = flagImage


document.getElementById("countryCardDetail").appendChild(flagIcon);
if(borders !== undefined){
    document.getElementById("countryCardDetail").innerHTML += countryName + population + nativeName + region + subregion + "capital :" + capital + "<br>" + "tld: " + tld  + "<br>" + currencies + languages + "<br>" + "borders:" + borders;
}if(borders == undefined){
    document.getElementById("countryCardDetail").innerHTML += countryName + population + nativeName + region + subregion + "capital :" + capital + "<br>" + "tld: " + tld  + "<br>" + currencies + languages + "<br>" + "borders:" + "no borders";
}
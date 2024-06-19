let card = document.createElement("div");
card.className = "card";

function clickFunction(item, element){
  item.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("flagImage", element.flags.png);
    localStorage.setItem("countryName", element.name.common);
    localStorage.setItem("nativeName", element.name.official);
    localStorage.setItem("population", element.population);
    localStorage.setItem("region", element.region);
    localStorage.setItem("subregion", element.subregion);
    localStorage.setItem("capital", element.capital[0]);
    localStorage.setItem("tld", Object.values(element.tld).join(", "));
    localStorage.setItem("currencies", Object.values(element.currencies)[0].name);
    localStorage.setItem("languages", Object.values(element.languages).join(", "));
    if(element.borders !== undefined){
      localStorage.setItem("borders", element.borders.join(" "));
    }if(element.borders == undefined){
      localStorage.setItem("borders", element.borders = "no/borders" );
    }
    window.location.assign("countryDetails.html")
  });
}

const displayAll = () => {
  let xhr_all = new XMLHttpRequest();
  let url_all = "https://restcountries.com/v3.1/all";

  xhr_all.open("GET", url_all);

  xhr_all.onload = function () {
    if (xhr_all.status >= 200 && xhr_all.status <= 300) {
      let response_all = JSON.parse(xhr_all.responseText);
      response_all.forEach((element) => {
        let main_card_displayer = document.getElementById(
          "countries-card-displayer"
        );
        let card = document.createElement("div");
        card.className = "card";
        let card_description = document.createElement("div");
        card_description.className = "country-info";
        let list_group = document.createElement("ul");
        let flag_container = document.createElement("div");
        flag_container.className = "flag-container";
        let country_flag = document.createElement("img");
        country_flag.src = element.flags.png;
        let country_name = document.createElement("h4");
        let country_population = document.createElement("li");
        let country_region = document.createElement("li");
        let country_capital = document.createElement("li");

        country_name.innerHTML = element.name.common;
        country_population.innerHTML =
          "<b>Population:</b> " + element.population;
        country_region.innerHTML = "<b>Region:</b> " + element.region;
        country_capital.innerHTML = "<b>Capital:</b> " + element.capital;

        const country_info = [
          country_population,
          country_region,
          country_capital,
        ];
        country_info.forEach((e) => {
          list_group.appendChild(e);
        });

        flag_container.appendChild(country_flag);
        card_description.appendChild(country_name);
        card_description.appendChild(list_group);
        card.appendChild(flag_container);
        card.appendChild(card_description);

        clickFunction(card, element);

        main_card_displayer.appendChild(card);
      });
    } else {
      console.log("Something went wrong", xhr_all.status);
    }
  };

  xhr_all.send();
};

document.addEventListener("DOMContentLoaded", displayAll)
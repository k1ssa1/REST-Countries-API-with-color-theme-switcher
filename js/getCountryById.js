let text_search = document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let searchedCountry = document.getElementById("country_search").value;
    let endpoint = "https://restcountries.com/v3.1/name/"
    let url_one = endpoint + searchedCountry;

    let xhr_one = new XMLHttpRequest();
    xhr_one.open("GET", url_one);

    xhr_one.onload = function(){

        if(searchedCountry === ""){
            displayAll()
        }

        if(xhr_one.status >= 200 && xhr_one.status <= 300){
            let searchResponse = JSON.parse(xhr_one.responseText);
            let  main_card_displayer = document.getElementById("countries-card-displayer")
            main_card_displayer.innerHTML = "";
            let card = document.createElement("div");
            card.className = "card";
            let card_description = document.createElement("div");
            card_description.className = "country-info";
            let list_group = document.createElement("ul");
            let flag_container = document.createElement("div");
            flag_container.className = "flag-container";
            let country_flag = document.createElement("img");
            country_flag.src = searchResponse[0].flags.png;
            let country_name = document.createElement("h4");
            let country_population = document.createElement("li");
            let country_region = document.createElement("li");
            let country_capital = document.createElement("li");

            country_name.innerHTML = searchResponse[0].name.common;
            country_population.innerHTML =
            "<b>Population:</b> " + searchResponse[0].population;
            country_region.innerHTML = "<b>Region:</b> " + searchResponse[0].region;
            country_capital.innerHTML = "<b>Capital:</b> " + searchResponse[0].capital;

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
            main_card_displayer.appendChild(card);

            clickFunction(card, searchResponse[0])
        }else{
            console.log("something went wrong" + xhr_one.status)
        }
    }

    xhr_one.send()
})
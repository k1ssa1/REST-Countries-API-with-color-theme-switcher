let select_search = document.getElementById("region_search").addEventListener("change", (e) =>{
    e.preventDefault();
    let endpoint = "https://restcountries.com/v3.1/region/";
    let selectedRegion = document.getElementById("region_search").value;
    let url = endpoint + selectedRegion

    let xhr_region = new XMLHttpRequest();
    xhr_region.open("GET", url)

    xhr_region.onload = function(){
        if(xhr_region.status >= 200 && xhr_region.status <= 300){
            let selectResponse = JSON.parse(xhr_region.responseText)
            let  main_card_displayer = document.getElementById("countries-card-displayer")
            main_card_displayer.innerHTML = "";

            selectResponse.map(value =>{
                let card = document.createElement("div");
                card.className = "card";
                let card_description = document.createElement("div");
                card_description.className = "country-info";
                let list_group = document.createElement("ul");
                let flag_container = document.createElement("div");
                flag_container.className = "flag-container";
                let country_flag = document.createElement("img");
                country_flag.src = value.flags.png;
                let country_name = document.createElement("h4");
                let country_population = document.createElement("li");
                let country_region = document.createElement("li");
                let country_capital = document.createElement("li");
    
                country_name.innerHTML = value.name.common;
                country_population.innerHTML =
                "<b>Population:</b> " + value.population;
                country_region.innerHTML = "<b>Region:</b> " + value.region;
                country_capital.innerHTML = "<b>Capital:</b> " + value.capital;
    
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
                document.getElementById("countries-card-displayer").appendChild(card);
                
            })
        }else{
            console.log("something went wrong :" + xhr_region.status)
        }
    }

    xhr_region.send()
})
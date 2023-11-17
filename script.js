let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = "India";
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img" alt="Flag Image"> 
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">

            <div class="data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
            </div>

            <div class="data-wrapper">
            <h4>continents:</h4>
            <span>${data[0].continents[0]}</span>
            </div>

            <div class="data-wrapper">
            <h4>Currency:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)[0]].name}</span>
            </div>

            <div class="data-wrapper">
            <h4>Languages:</h4>
            <span>${Object.values(data[0].languages).join(', ')}</span>
            </div>

            <div class="data-wrapper">
            <h4>Population:</h4>
            <span>${data.[0].population}</span>
            </div>

        </div>
      `;
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
      result.innerHTML = "Country not found or an error occurred.";

    // .then((data) => {
    //   console.log(data[0]);
    //   console.log(data[0].capital[0]);
    //   console.log(data[0].flags.svg);
    //   console.log(data[0].name.common);
    //   console.log(data[0].continents[0]);
    //   console.log(Object.keys(data[0].currencies)[0]);
    //   console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    //   console.log(
    //     Object.values(data[0].languages).soString().split(",").json(",")
    //   );
    // result.innerHTML = `
    // <img src = "${data[0].flags.svg}"
    // class="flag-img"
    // `;
    });
});

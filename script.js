let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInp.value;
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
            <span>${
              data[0].currencies[Object.keys(data[0].currencies)[0]].name
            }</span>
            </div>

            <div class="data-wrapper">
            <h4>Languages:</h4>
            <span>${Object.values(data[0].languages).join(", ")}</span>
            </div>

        </div>
      `;
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
      result.innerHTML = "Country not found or an error occurred.";
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input faild cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});

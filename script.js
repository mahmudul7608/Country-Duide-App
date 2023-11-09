let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = "India";
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    // Change "then" to "data" in the second .then() block
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]); // Fix typo in continents
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name); // Fix currency access
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",") // Fix typo in join method
      );
      // Change "result" to "document.getElementById("result")"
      document.getElementById("result").innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
      `;
    });
});
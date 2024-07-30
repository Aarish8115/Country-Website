let result=document.querySelector(".result")
let button = document.querySelector(".search-btn button")
let input=document.querySelector(".search-bar input")

button.addEventListener("click", ()=>{
    let countryName=input.value;
    let finalDetails=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(finalDetails).then((response)=>response.json()).then((data)=>{
        result.style.padding="0px 43px 30px";
    result.innerHTML=`<div class="flag">
    <img src=${data[0].flags.svg} alt="">
    </div>
    <h3>${data[0].name["common"].toUpperCase()}</h3>
    <div class="details">
    <div class="capital det"><h4>Capital:</h4><span>${data[0].capital[0]}</span>
    </div><div class="continent det"><h4>Continent:</h4><span>${data[0].continents[0]}</span></div>
    <div class="population det"><h4>Population:</h4><span>${data[0].population}</span></div>
    <div class="currency det"><h4>Currency:</h4><span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)[0]].name}</span></div>
    <div class="lang det"><h4>Common Languages:</h4><span>${Object.values(data[0].languages).join().replaceAll(',',', ')}</span></div>
    </div>`;
    }).catch(()=>{
        if(countryName.length==0){
            result.style.padding="0px 43px 20px";
            result.innerHTML="<h2>Enter country name</h2>";
        }
        else{
            result.style.padding="0px 43px 20px";
            result.innerHTML="<h2>Invalid country name</h2>";
        }
    })

});

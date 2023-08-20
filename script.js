const temperateField=document.querySelector(".weather1")
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 p img")

const weatherField=document.querySelector(".weather3 span");

const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");

let target="delhi"


const fetchdata=async(target)=>{

const url=`https://api.weatherapi.com/v1/current.json?key=d0b4be268504482db2c184600232008&q=${target}`

    const response=await fetch(url)
    const data=await response.json()

    console.log(data);
    updateDom(data.current.temp_c,data.location.name,data.location.localtime,data.current.condition.icon,data.current.condition.text)

}




function updateDom(temperate,city,date,img,weather) {
  
    temperateField.innerText=temperate+"°"
    cityField.innerText=city
    dateField.innerText=date
    emojiField.src=img
    weatherField.innerText=weather
   
}
fetchdata(target)

const search=(e)=>{
    e.preventDefault();

target=searchField.value

fetchdata(target)

}
form.addEventListener("submit",search)
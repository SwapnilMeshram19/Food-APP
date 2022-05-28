import navbar from "../componenets/navbar.js";
import fetchdata from "../componenets/fetchdata.js";

var navbarcontainer=document.getElementById("navbar-container");
navbarcontainer.innerHTML=navbar();

async function main(){
    try {
        let foodsearch=document.getElementById("query").value;
        let url="https://www.themealdb.com/api/json/v1/1/search.php?s="+foodsearch;
        let data=await fetchdata(url);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}



var timerId;
async function debounce(func,delay){
if(timerId){
    clearTimeout(timerId);
}

timerId=setTimeout(function(){
    func();
},delay)

}
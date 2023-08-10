// 'https://www.themealdb.com/api/json/v1/1/random.php' console.log(res.meals[0])

const Foodname = document.querySelector("h3");
const steps = document.querySelector("p");
const video = document.querySelector(".recipie-video")
const generate = document.querySelector("button");

function display(meal)
{
    // console.log(meal)
    Foodname.textContent = meal["strMeal"];
    video.innerHTML = `
  <iframe width="420" height="315"
    src="https://www.youtube.com/embed/${meal["strYoutube"].slice(-11)}"
    frameborder="0" allowfullscreen>
  </iframe>
`;

    steps.textContent=meal["strInstructions"]
}

function getresponse()
{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then( res => res.json())
    .then( res => display(res.meals[0]))
    .catch( e => console.warn(e) )

    
}


getresponse()

generate.addEventListener("click",getresponse)
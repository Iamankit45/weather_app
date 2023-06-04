
const city=document.getElementById('city');
const btn=document.getElementById('btn');
const tempe=document.getElementById('tempe');
const tempmin_max=document.getElementById('tempmin_max');
const loc =document.getElementById('location');
// const location=document.getElementById('location');



const getinfo=async(event) =>{
    event.preventDefault();
  
   let cityval=city.value;
    if (cityval=="") {
        console.log("error");
    } else 
    console.log(cityval);
    try{
        loc.innerText=city.value;
        let url=  `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=74a51711144744adc92d486b7244c8bb`;
        const response= await fetch(url);
        const data= await response.json(); 
        const arr= [data];
        // console.log(data);
        tempe.innerText=`${arr[0].main.temp} C `+`${arr[0].weather[0].main}`;

tempmin_max.innerText=`Min ${arr[0].main.temp_min} C | `+` Max ${arr[0].main.temp_max} C`

    }
    catch{
        city.innerText="pls enter city name correctly";
    }
    
}


btn.addEventListener('click', (getinfo))
    
    
     
    
    
    let weathercon=document.getElementById("weathercon");
    
    const tempstatus="{%tempstatus%}";
    
    //condition to chec sunny or cloudy
    
    if (tempstatus=="Sunny") 
    {
        weathercon.innerHTML="<i class='fas fa-sun' style='color: rgb(255, 218, 53);'></i>";
    }
    else if (tempstatus=="Clouds")
     {
        weathercon.innerHTML="<i class='fas fa-cloud' style='color:  rgb(3%, 7%, 20%); '></i>";
    }
    else{
        weathercon.innerHTML="<i class='fas fa-cloud' style='color:  rgb(2%, 7%, 20%); '></i>";
    }
    
    
    
    
    // const btn = document.getElementById("btn");
    const v = document.getElementById('v');
    const option= document.getElementsByClassName("option");
    
    
    btn.addEventListener("click",()=>{
       
        // console.log("updating list");
      let name=document.getElementById('city').value;
    
       v.innerHTML = name;
    //    console.log("name by html page :"+name);
    
    
    //    module.export={name};
   
    })
    
    
    
    

    


    

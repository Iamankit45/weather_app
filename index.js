const path=require('path');
const express = require('express');
const requests = require('requests');
const app = express();
const bodyParser = require('body-parser');
// const export = require('export');var bodyParser = require('body-parser')
const hbs = require('hbs'); // for aquirining partials



const staticpath = path.join(__dirname, './public');
const templatepath = path.join(__dirname, './templates/views')
const partialspath = path.join(__dirname, './templates/partials')

app.set('view engine', 'hbs');
app.set('views',templatepath);
hbs.registerPartials(partialspath);

app.use(express.static(staticpath));





app.get('/', (req, res) => {
    res.render('index',{ 
        channelname:"ankit",
    });

});

app.get('/about', (req, res) => {
    res.render('about',{

        name:req.query.name,
    })
       
});

app.get('/contact', (req, res) => {
    res.render('contact')
       
});

app.get('/gallery', (req, res) => {
    res.render('gallery')
       
});




app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/weather', (req, res) => {

    // let c=`${req.body.cityname}`;
    // console.log(cityname);
   
//     requests(
//     `https://api.openweathermap.org/data/2.5/weather?q=${req.query.location}&units=metric&appid=74a51711144744adc92d486b7244c8bb`
//       )
//         .on("data", (chunk) => {
//           const obj = JSON.parse(chunk);
//     let arr = [obj]; //changing into array .......array of an object
// //   console.log(arr);
//           console.log(`city name is ${arr[0].name} and the temperature is ${arr[0].cod} `);
         
//           // ab multiple array ko tacle krne k liye MAP method ko use krna prega
  
//         //   const realTimedata = arr
//         //     .map((val) => replaceVal(homefile, val))
//         //     .join("");

//         //   res.write(realTimedata);
//         console.log(arr[0].name);
       
      

        res.render('weather')
       
        //     location:req.query.city,
        //     country:req.query.country,
        //    tempval:`${arr[0].cod}`
           
       
        

        // })
  
        // .on("end", (err) => {
        //   if (err) return console.log("connection closed due to fucking internet errors i guess", err);
        // //   res.end();
        //   console.log("end");
     
        // });

      
        
      
})

app.get('/about/*', (req, res) => {
    res.render('404',{
errorcomment: 'oops page not found',
    });
})

app.get('*', (req, res) => {
    res.render('404',{
errorcomment: 'oops page not found',
    });
})


app.get('/', (req, res) => {
    res.send('hiii');
});



app.listen(8000,()=>{
    console.log('listening on port 8000');
})
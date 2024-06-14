const myModule = require('../Modules/myModule')
// console.log(myModule); //{}
// console.log(exports); //{}
// console.log(module.exports); //{}

// myModule.addItem('Laptop' , 30_000)
// myModule.addItem('Mobile' , 20_000)
// myModule.addItem('Headphone' , 5_000)
// console.log(myModule.getSum());

// var OneUser = myModule.User;

// var user1 = new OneUser();  //OK
// var user2 = new myModule.User(); //OK

// user1.AddItem('Laptop' , 30_000);
// user1.AddItem('Mobile' , 20_000);
// user1.AddItem('Headphone' , 5_000);
// console.log(user1.GetSum());


const http = require('http');
const fs = require('fs');

//#region Data
//#region html
var mainHtml = '';
fs.readFile('../Client-Side/Pages/main.html' ,'utf-8', (err, res)=>{
    if(err){
        console.log('ERRor');
    } else {
        mainHtml = res;
    }
})
//#endregion

//#region css
var mainStyle = '';
fs.readFile('../Client-Side/Styles/style1.css' ,'utf-8', (err, res)=>{
    if(err){
        console.log('ERRor');
    } else {
        mainStyle = res;
    }
})
//#endregion

//#region script
var mainScript = '';
fs.readFile('../Client-Side/Scripts/script1.js' ,'utf-8', (err, res)=>{
    if(err){
        console.log('ERRor');
    } else {
        mainScript = res;
    }
})
//#endregion

//#region image
var img2 = '';
fs.readFile('../Client-Side/Images/dom.jpg' , (err, res)=>{
    if(err){
        console.log('ERRor');
    } else {
        img2 = res;
    }
})
//#endregion
//#endregion

http.createServer((req , res)=>{
    //#region GET
    if(req.method == 'GET'){
       switch(req.url){
        case '/':
            res.write(mainHtml);
        break;
        case '/Styles/style1.css':
            res.write(mainStyle);
        break;
        case '/Scripts/script1':
            res.write(mainScript);
        break;
        case '/Images/dom.jpg':
            res.write(img2);
        break;
       }
       res.end();
    }
    //#endregion 
    //#region POST
     else if(req.method == 'POST'){
       
    }
    //#endregion
    //#region PUT
    else if(req.method == 'PUT'){
       
    }
    //#endregion 
    //#region PATCH
    else if(req.method == 'PATCH'){
       
    }
    //#endregion 
    //#region DELETE
    else if(req.method == 'DELETE'){
       
    }    
    //#endregion 

}).listen(7000 , ()=>{console.log('localhost:7000');})




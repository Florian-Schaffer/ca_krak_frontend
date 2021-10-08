import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade";
//import * as bootstrap from 'bootstrap';
import '@popperjs/core';

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */



/* JS For Exercise-2 below */



/* JS For Exercise-3 below */



/* personFacade functions */

const URL = "www.floriandatamatiker.dk/CA_Krak_Backend/api/person";



function getById(id){
    return fetch(URL + '/' + id).then(result => httpErrorsHandler)
}


function getAllPersons(){
    fetch(URL+"/all")
        .then(handleHttpErrors)
        .then(data =>
            {
               const allRows = data.all.map(p => getPersonTableRow(p))
                document.getElementById("tablerows").innerHTML = allRows.join("");
            })
    .catch(err =>{
        if(err.status){
            err.fullError.then(e=> console.log(e.msg))
            }
            else{
                console.log("Network error");}
    });
}

function getPersonTableRow(p){
    return `<tr>
    <td>${p.id}</td>
    <td>${p.firstName}</td>
    <td>${p.lastName}</td>
    <td>${p.phone}</td>
    <td>${p.street}</td>
    <td>${p.zipCode}</td>
    <td>${p.City}</td>
    </tr>`
}

function getByHobby(hobby){
    return fetch(URL + '/' + hobby).then(result => httpErrorsHandler)
}

function getByNumber(number){
    return fetch(URL + '/' + number).then(result => httpErrorsHandler)
}

function getByZip(zip){
    return fetch(URL + '/' + zip).then(result => httpErrorsHandler)
}

function getCountWHobby(h){
    return fetch(URL + '/hobby/count' + h).then(result => httpErrorsHandler)
}

function addPerson(){

}

function editPerson(){
    
}





/* Helper methods */

function makeOptions(){
var opts = {
  method : method,
  headers: {
    "Content-type": "application/json",
    "Accept" : "application/json"
  }
}
if(body){
  opts.body = JSON.stringify(body);
}
return opts;
}

function handleHttpErrors(res){
  if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json()})
  }
  return res.json();
}





/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("search_html").style = "display:none"
  document.getElementById("home_html").style = "display:none"
  document.getElementById("admin_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "search": hideAllShowOne("search_html"); break
    case "admin": hideAllShowOne("admin_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("home_html"); getAllPersons(); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("home_html");




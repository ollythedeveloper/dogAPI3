'use strict';

//This function places the input breed into the GET(fetch) Request
//then a JSON response is generated
//then the response is put through the displayImage function
//if any errors are caught an alert will be displayed
function getDogImage(lowerDog) {
  fetch(`https://dog.ceo/api/breed/${lowerDog}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayImage(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//This function takes the responseJSON, creates images,
//and places them in the DOM
//If there is a code '404' error then a response message will be displayed
function displayImage(responseJson){
 if (responseJson.code == '404') {
 $('.imgResult').replaceWith(`<h3 class="imgResult">${responseJson.message}.</h3>`)
 $('#results').removeClass('hidden')
 
 }else{
   $('.imgResult').replaceWith(`<img src="${responseJson.message}" class="imgResult">
 `)
 $('#results').removeClass('hidden');
 }
}

//This function responds to the form submission by taking the input breed
//and placing it into the GET Request
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogBreed = $('#dogType').val();
    let lowerDog = dogBreed.toLowerCase();
    getDogImage(lowerDog);
    $('#dogType').val('');
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
'use strict';

function getDogImage(dogBreed) {
  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayImage(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

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

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogBreed = $('#dogType').val();
    console.log(dogBreed);
    getDogImage(dogBreed);
    $('#dogType').val('');
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
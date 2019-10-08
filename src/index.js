console.log('%c HI', 'color: firebrick')


  function fetchDogs() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json()).then(json => renderDogs(json));
  }
  
  function renderDogs(json) {
    // const main = document.querySelector('main')
    // json.forEach(book => {
    //   const h2 = document.createElement('h2')
    //   h2.innerHTML = `<h2>${book.name}</h2>`
    //   main.appendChild(h2)
    // })
  
 
    let imgURLs = [];

    
    json.message.forEach(function(url){ 
      imgURLs.push(url);
    })

    let dogImageContainer = document.querySelector('#dog-image-container');

    imgURLs.forEach(function(url){
      let newNode = document.createElement('img');
      dogImageContainer.append(newNode);
      newNode.setAttribute('src', url);
    })
  }

  function fetchAndRenderBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json()).then(json => renderBreeds(json));
  }

  function fetchBreeds(){
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json());
  }


  function renderBreeds(json){
    const breedsUl = document.querySelector('ul#dog-breeds');

    for (const key in json.message) {
      let newLi = document.createElement('li');
      newLi.innerText = key;
      newLi.classList.add('breed-entry');
      breedsUl.append(newLi);
    }


    breedsUl.addEventListener('click', function(){
      const breedFontColor = 'goldenrod';
      event.target.style.color = breedFontColor;
    })
     

  }

  function addBreedsFilter(){
    // const breedsJson = fetchBreeds();
    let letterDropdown = document.querySelector('select#breed-dropdown');
    letterDropdown.addEventListener('change', function(){
      let letter = event.target.value;
      filterBreedsByFirstLetter(letter);
    })
  }

  function filterBreedsByFirstLetter(letter){
    const breedEntries = document.querySelectorAll('li.breed-entry');

    for (let i = 0; i < breedEntries.length; i++) {
      let firstLetter = breedEntries[i].innerText.charAt(0);
      if (firstLetter == letter){
        breedEntries[i].style.display = 'block';
      }
      else {
        breedEntries[i].style.display = 'none';
      }
    }

  }
 
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchAndRenderBreeds();
    addBreedsFilter();
  })


  
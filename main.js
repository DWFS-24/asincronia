const axios = require('axios');

const apiUrl = 'https://api.thedogapi.com/v1/breeds'

axios.get(apiUrl)
  .then(response => {
    // Maneja la respuesta de la API
    // console.log(response)
    const breeds = response.data
    //Ejemplo filtrar las razas de tamaño medio
    
    const mediumBreeds = breeds.filter(breed => breed.breed_group === 'Toy')
    console.log('Razas de tamaño mediano:', mediumBreeds);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud a la API:', error.message);
  });



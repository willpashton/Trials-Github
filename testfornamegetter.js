const axios = require('axios');
const KEY = "c5387eb6cbcd424ca623e290f137b5b1"
const weaponTypesDict = {"1498876634":"Kinetic", "2465295065":"Energy", "953998645":"Power"};
var equippedWeapons = {};
axios.defaults.baseURL = 'https://www.bungie.net/Platform';
axios.defaults.headers.common = {
  'X-API-Key': KEY
};


axios.post("/User/Search/GlobalName/0/", {
    displayNamePrefix: "Irredium"
  })
  .then(function (response) {
    //console.log(response);
    info = {}
    var info = response.data;
    console.log(info["Response"]["searchResults"][0])
  })
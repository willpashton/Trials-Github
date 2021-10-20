const axios = require('axios');
const KEY = "c5387eb6cbcd424ca623e290f137b5b1"

weaponHash = []
axios.defaults.baseURL = 'https://www.bungie.net/Platform';
axios.defaults.headers.common = {
  'X-API-Key': KEY
};

axios.get("/Destiny2/3/Profile/4611686018483213969/Character/2305843009462394295/?components=205")
    .then(response => {
        console.log(response);
        var inventoryItems = {};
        inventoryItems = response.data
        for (let i = 0; i < 3; i++){
            weaponHash.push(inventoryItems['Response']['equipment']['data']['items'][i]['itemHash']);
        }
        console.log(weaponHash);
        for (let a = 0; a < weaponHash.length; a++){
            axios.get("/Destiny2/Manifest/DestinyInventoryItemDefinition/"+weaponHash[a]+"/")
                .then(response => {
                    var wepInfo = {};
                    wepInfo = response.data
                    console.log(wepInfo["Response"]["displayProperties"]["name"])
                })
                .catch(error => {
                    console.log(error);
                });
        };
    })
    .catch(error => {
        console.log(error);
    })
;


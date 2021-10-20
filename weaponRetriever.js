const axios = require('axios');
const KEY = "c5387eb6cbcd424ca623e290f137b5b1"
const weaponTypesDict = {"1498876634":"Kinetic", "2465295065":"Energy", "953998645":"Power"};
var equippedWeapons = {};
axios.defaults.baseURL = 'https://www.bungie.net/Platform';
axios.defaults.headers.common = {
  'X-API-Key': KEY
};

axios.get("/Destiny2/3/Profile/4611686018483213969/Character/2305843009462394295/?components=205")
    .then(response => {
        var inventoryItems = {};
        inventoryItems = response.data
        for (let i = 0; i < 3; i++){
            var weaponHash = (inventoryItems['Response']['equipment']['data']['items'][i]['itemHash']);
            var weaponType = (inventoryItems['Response']['equipment']['data']['items'][i]['bucketHash']);
            equippedWeapons[(weaponTypesDict[weaponType])] = weaponHash;
        };
        var count = 0
        for (const [key, value] of Object.entries(equippedWeapons)){
            axios.get("/Destiny2/Manifest/DestinyInventoryItemDefinition/"+value+"/")
                .then(response => {
                    var wepInfo = {};
                    wepInfo = response.data;
                    wepName = (wepInfo["Response"]["displayProperties"]["name"]);
                    wepType = (wepInfo["Response"]["inventory"]["bucketTypeHash"]);
                    var check = weaponTypesDict[wepType];
                    equippedWeapons[check] = wepName;
                    count = count + 1;
                    if (count == 3){
                        console.log(equippedWeapons)
                    }
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


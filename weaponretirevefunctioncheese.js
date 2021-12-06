const axios = require('axios');
const KEY = "c5387eb6cbcd424ca623e290f137b5b1"
const weaponTypesDict = {"1498876634":"Kinetic", "2465295065":"Energy", "953998645":"Power"};
var equippedWeapons = {};
axios.defaults.baseURL = 'https://www.bungie.net/Platform';
axios.defaults.headers.common = {
  'X-API-Key': KEY
};

function retrieveWeapons() {
}
async function playerSearch(namesearch, bungienamecode){
    try{
        var page = 0;
        const response = await axios.get("/User/Search/prefix/"+namesearch+"/"+page+"/");
        //console.log(response.data['Response']['searchResults'][0]['bungieGlobalDisplayNameCode']);
        var code = response.data['Response']['searchResults'][0]['bungieGlobalDisplayNameCode'];
        return code

        /*.then(response => {
            var nameinfo = {}
            nameinfo = response.data;
            console.log("More pages? " + nameinfo['Response']['hasMore']);
            if (bungienamecode == nameinfo['Response']['searchResults'][0]['bungieGlobalDisplayNameCode']){
                console.log(nameinfo['Response']['searchResults'][0]['destinyMemberships'][0]['membershipId']);
            }
            else{
                console.log('weiner');
            }
        })
        .catch(error => {
            console.log(error);
        })*/
    }
    catch (error){
        console.log("error")
    }
}
console.log((playerSearch("irredium", 1691).then(code => console.log(code))));
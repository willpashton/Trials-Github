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



function playerSearch(namesearch, bungienamecode){
    page=-1
    hasMore=false;
    do{
        page++;
        axios.get("/User/Search/prefix/"+namesearch+"/"+page+"/")
        .then(response=> {
            var nameinfo = {}
            nameinfo = response.data;
            hasMore = nameinfo['Response']['hasMore'];
            //console.log(nameinfo['Response']['searchResults'].length);
            for (var i=0; i<nameinfo['Response']['searchResults'].length; i++){
                if (bungienamecode == nameinfo['Response']['searchResults'][i]['bungieGlobalDisplayNameCode']){
                    console.log(nameinfo['Response']['searchResults'][i]['destinyMemberships'][page]['membershipId']);
                    var cheese = (nameinfo['Response']['searchResults'][i]['destinyMemberships'][page]['membershipId']);
                    return cheese;
                }
                else{
                    console.log('break');
                }
            }
        })
        .catch(error => {
            console.log(error);
        })
    }while(hasMore)
}

playerSearch("o2", 4750)
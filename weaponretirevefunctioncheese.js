const axios = require('axios');
const KEY = "c5387eb6cbcd424ca623e290f137b5b1"
const weaponTypesDict = {"1498876634":"Kinetic", "2465295065":"Energy", "953998645":"Power"};
var equippedWeapons = {};
axios.defaults.baseURL = 'https://www.bungie.net/Platform';
axios.defaults.headers.common = {
  'X-API-Key': KEY
};

<<<<<<< HEAD
async function retrieveWeapons() {
    //WEAPONS GETETTTRERER
};
async function character(membershipId, idType){
    try{
        const response = await axios.get("/Destiny2/"+idType+"/Profile/"+membershipId+"/?components=200");
        var characterdata = response.data["Response"]["characters"]["data"]
        return characterdata;
    }
    catch(error){
        console.log("Character Fetch Error")
    }
//CHARACTER ID GETTETERERE
};
async function playerSearch(namesearch, bungienamecode, page){
    try{
        var hasEnded = true;
        var membtype = 0;
        const response = await axios.post("/User/Search/GlobalName/"+page+"/", {
            displayNamePrefix: namesearch
          });
        var pageitems = response.data['Response']['searchResults'].length;
        for (var i=0; i<pageitems; i++){
            var code = response.data['Response']['searchResults'][i]['bungieGlobalDisplayNameCode'];
            if (code == bungienamecode){
                hasEnded = false;
                code = response.data['Response']['searchResults'][i]['destinyMemberships'][0]['membershipId'];
                membtype =response.data['Response']['searchResults'][i]['destinyMemberships'][0]['membershipType'];
                break;
            }
        }
        var morePages = response.data['Response']['hasMore'];
        if (hasEnded){
            code = "Cannot find player name";
        }
        hasEnded = false;
        const retcode = [code, morePages, membtype];
        return retcode;
    }
    catch (error){
        console.log("Name Search Error")
    }
}
async function main(){
    var morePages = true;
    var result = "";
    var membtype;
    page = -1;
    do{
        page++;
        var found = await playerSearch("irredium", 1691, page);
        console.log(found);
        if (found[0]=="Cannot find player name"){
            morePages = found[1];
            result = found[0];
        }else{
            morePages = false;
            result = found[0];
            membtype = found[2];
        }
    }while(morePages)
    console.log(result);
    console.log(membtype);

    var characterstuff = await character(result,membtype)
    console.log(characterstuff)
}
main();
=======
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
>>>>>>> ac27f0dfcd848503a1d844d00615b9f924fa9e8c

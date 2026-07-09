let token = ~~[Math.random() * 12345678];
let picture = ['01.jpg'];

function login(username, callback){
    console.log("Validasi Data.....")
    setTimeout(()=>{
        callback({token, username});
    },200)
}

function getUser(token, callback){
    console.log("Validasi API Key....")
    if(token) setTimeout(()=>{
        callback({apiKey: "xKey123"});
    },500);
}

function getPicture(apiKey, callback){
    console.log("Menghasilkan Gambar...")
    if(apiKey) setTimeout(()=>{
        callback({pic: picture});
    }, 1500)
}

const user = login("Johannes", function(response){
    const {token} = response;
    getUser(token, function(response){
        const {apiKey} = response;
        getPicture(apiKey, function(response){
            const {pic} = response;
            console.log("Picture: ", pic);
        })
    })
});

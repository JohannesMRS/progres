// function validasiApiKey(key){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(key === "RAHASIA123"){
//                 resolve("Akses Diterima");
//             }else{
//                 reject("API Key Tidak Valid");
//             }
//         }, 1000);
//     })
// }


// validasiApiKey("RAHASIA123").then((result)=>{
//     console.log(`Status: ${result}`);
// }).catch((err)=>{
//     console.log(`Status: ${err}`);
// });

// async function jalankanAsync(){
//     try{
//         const hasil = await validasiApiKey("RAHASIA123");
//         console.log(`Status: ${hasil}`);
//     }catch(error){
//         console.log(error);
//     }
// }

// jalankanAsync();


function userInfo(username, id){
    return new Promise((resolve, reject)=>{
        if(username == "Johannes" && id == 123){
            const OTP = '1243';
            resolve(OTP);
        }else{
            reject(`Id salah, gagal mendapatkan OTP`)
        }
    })
}

function login(otp){
    return new Promise((resolve, reject)=>{
        if(otp != 1243){
            reject('OTP Salah');
        }else{
            resolve('Login Berhasil!!!');
        }
    })
}

async function dataUser(){
    try{
        const responseUserInfo = await userInfo("Johannes", 123);
        const responseLogin = await login(responseUserInfo);
        console.log(responseUserInfo);
        console.log(responseLogin);
    }catch(error){
        console.log(error);
    }
}
dataUser();


userInfo("Johannes", 123)
.then((hasil)=>{
    return login(hasil);
}).then((finalResult)=>{
    console.log('Login Berhasil!!');
}).catch((error)=>{console.log(error)});
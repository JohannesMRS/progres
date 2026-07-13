// async function getUser(){
//     try{
//         const response = await fetch('https://api.github.com/users/JohannesMRS');

//         if(!response.ok){
//             throw new Error(`Server Response: ${response.status}`);
//         }
//         const dataUser = await response.json();
//         console.log(dataUser.id)
//     }catch(error){
//         console.log(error.message);
//     }
// }

// getUser();


async function getFollowers(username){
    try{
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const followers = await response.json();
        followers.forEach((follower)=>{
            console.log(follower.name);
        })
    }catch(error){
        console.log(error);
    }
}

getFollowers('JohannesMRS');
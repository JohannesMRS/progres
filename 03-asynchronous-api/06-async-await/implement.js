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


// async function getFollowers(username){
//     try{
//         const response = await fetch(`https://api.github.com/users/${username}/repos`);
//         const followers = await response.json();
//         followers.forEach((follower)=>{
//             console.log(follower.name);
//         })
//     }catch(error){
//         console.log(error);
//     }
// }

// getFollowers('JohannesMRS');

const followers = document.getElementById('follower');
const repository = document.getElementById('repo');

async function getFollowers(){
    try{
        const response = await fetch('https://api.github.com/users/JohannesMRS/followers');
        const repo = await fetch('https://api.github.com/users/JohannesMRS/repos');

        if(!response.ok || !repo.ok){
            throw new Error("Error Status: ", response.status);
        }

        const dataFollowers = await response.json();
        const dataRepo = await repo.json();

        let htmlString = '';
        let reposString = ''

        dataFollowers.forEach((item)=>{
            htmlString += `<li>${item.login}</li>`
        })

        dataRepo.forEach((item)=>{
            reposString += `<li>${item.name}</li>`;
        })

        followers.innerHTML = htmlString;
        repository.innerHTML = reposString;
    }catch(error){
        alert("Error", error.message);
    }
}

getFollowers();
/*
fetch() used to make HTTP requests to servers
*/

fetch('https://api.github.com/users/sadabazhar')
.then((response) => {
    return response.json()
})
.then((data) => {
    return { login: data.login, bio: data.bio };
})
.then((userData) => {
    console.log(`User name: ${userData.login}`);
    console.log(`Bio of user: ${userData.bio}`); 
})
.catch((error) => console.log(error))
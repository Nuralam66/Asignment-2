function handleUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> displayUser(data))
}
function displayUser(users){
    let userContanier = document.getElementById('userBox')
    for( let user of users){
        // console.log(user)
        let div =document.createElement('div')
        div.classList.add('userStyle')
        div.innerHTML=`
        <h2>Id:${user.id}</h2>
        <h3> Name:${user.name} </h3>
        <h3> UserName:${user.username} </h3>
        <h3> Email:${user.email} </h3>
        `;
        userContanier.appendChild(div)
        console.log(user)
    }

}
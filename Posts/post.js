console.log('click here')
function handlePost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data))
}

function displayPost(posts){
    let postContainer= document.getElementById('postBox');
    for(let post of posts){
    let div = document.createElement('div')
    div.classList.add('postStyle')
    div.innerHTML =`
    <h3>id:${post.id}<h3>
    <h4>title:${post.title}</h4>
    <p>discription:${post.body}</p>
    `;
    postContainer.appendChild(div)
    console.log(post)
    }

}
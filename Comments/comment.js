function handleClick(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComment(data))
}
function displayComment (comments){
    let commentContainer = document.getElementById('commentbox')
  for(let comment of comments){
    // console.log(comment)
    let div = document.createElement('div');
    div.classList.add('comment')
    div.innerHTML=`
     <h2>Id:${comment.id}</h2>
     <h3>Name:${comment.name}</h2>
     <h4>Email:${comment.email}</h4>
     <p>Discription:${comment.body}</p>
    `;
    commentContainer.appendChild(div);
    console.log(comment)
  }
}
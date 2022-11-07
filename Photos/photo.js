function handlePhoto (){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>displayphoto(data))
}

function displayphoto(photos){
    let photoContainer = document.getElementById('PhotoBox')
 for(let photo of photos){
//  console.log(photo)
let div= document.createElement('div')
div.classList.add('photoStyle')
div.innerHTML=`
<h2>Id:${photo.id}</h2>
<h3>Title:${photo.title}</h3>
<img src="${photo.url}"  alt="">
`;
photoContainer.appendChild(div)
console.log(photo)
 }
}
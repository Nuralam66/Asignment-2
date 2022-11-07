function handleAlbam(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res=> res.json())
    .then(data=>displayAlbam(data))
}
function displayAlbam(albums){
    let albumContainer = document.getElementById('albumBox')
for(let album of albums){
//   console.log(album)
let div = document.createElement('div');
div.classList.add('albumStyle')
div.innerHTML=`
<h2>Id:${album.id}</h2>
<h5> Group No:${album.userId} </h5>
<h3>Title:${album.title}</h3>

`;
albumContainer.appendChild(div)
console.log(album)
};
};
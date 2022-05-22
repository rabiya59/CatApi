 // On déclare les variables pour récupérer les élements du DOM
 
 let img = document.getElementById('img');
 let btn = document.querySelector('button');
 let positionX = document.getElementById('x-value');
 let positionY = document.getElementById('y-value');

// On récupère les données de l'api puis on les convertis en Json

const getCat = ()=>{
 fetch('https://api.thecatapi.com/v1/images/search')
 .then(res => res.json())
 .then(function (data){
    img.src = data[0].url
   /* img.setAttribute('src',`${data}`);*/
})
 .catch(function (error) {
 console.log('Erreur: ', error);
 });
}
    
btn.addEventListener('click', getCat)
getCat()

// position de la souris

const positionMouse = (e)=>{

    positionX.textContent = e.clientX;
    positionY.textContent = e.clientY;

}

window.addEventListener('mousemove', positionMouse);





const cardGestion = document.getElementById('gestion')
const cardTransporte = document.getElementById('transporte')
const cardServicios = document.getElementById('servicios')
const cardLogistica = document.getElementById('logistica')
const cardAlmacen = document.getElementById('almacen')
const cardControl = document.getElementById('control') 

 const clickCards=(param)=>{
    if (param.classList.contains('hidden')) {
        param.classList.remove('hidden');
        param.classList.add('displayItem');
    }
    else{
        param.classList.remove('displayItem');
        param.classList.add('hidden');
    }

 }
 cardGestion.addEventListener('click',()=>clickCards(cardGestion.children[1]))
 cardTransporte.addEventListener('click',()=>clickCards(cardTransporte.children[1]))
 cardServicios.addEventListener('click',()=>clickCards(cardServicios.children[1]))
 cardLogistica.addEventListener('click',()=>clickCards(cardLogistica.children[1]))
 cardAlmacen.addEventListener('click',()=>clickCards(cardAlmacen.children[1]))
 cardControl.addEventListener('click',()=>clickCards(cardControl.children[1]))

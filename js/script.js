
const ruleta = document.querySelector('#ruleta');

//const form = document.querySelector('#form')
//form.addEventListener('submit', handleSubmit )

/* function handleSubmit (e){
  e.preventDefault()
  if (email){
    trigger = true
  }
} */





ruleta.addEventListener('click', girar);
let giros = 0;
async function girar(e){

/*   e.preventDefault()
  const email = document.getElementById('email').value
  const result = await getIngles(email)
  console.log(result) */
/*   if(email && result){   */
  
  if (giros < 3) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'Resultado: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'Resultado: ' + premios;

}


 function calcular(rand) {

  let valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";
  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 180:
     premio("Ganador");
     
     break;
     case valor > 180 && valor <= 360:
     premio("Perdedor"); 
     break;
  }

 }, 5000);

}
/* }else{
  alert('inserte correo valido')
} */
}


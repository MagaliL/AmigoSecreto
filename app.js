// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; 


function agregarAmigo(){
    
    let amigoUsuario = document.getElementById('amigo').value;
    console.log(amigoUsuario);

    if (amigoUsuario === '' ){

        alert('Por favor, ingrese un nombre');
        return; 
    } else {

        if (amigos.includes(amigoUsuario)) {

            alert(`El amigo ${amigoUsuario} ya está en tu lista.`);
           
       

        } else{

                amigos.push(amigoUsuario);
                console.log(amigos);
                }

             limpiarcaja();    
        
             }

            

}

function limpiarcaja(){
    document.querySelector('#amigo').value = "";
    
}
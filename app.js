// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; 


function agregarAmigo(){
    
    let amigoUsuario = document.getElementById('amigo').value;
    // console.log(amigoUsuario);

    if (amigoUsuario === '' ){

        alert('Por favor, ingrese un nombre');
        return; 
    } else {

        if (amigos.includes(amigoUsuario)) {

            alert(`El amigo ${amigoUsuario} ya está en tu lista.`);
           

        } else{

                amigos.push(amigoUsuario);
                console.log(amigos);
                listaAmigos();
                }

             limpiarcaja();    
        
             }       

}
// Esta función es para agregar elementos ingresados por el usuario a la lista declarada anteriormente.


function limpiarcaja(){
    document.querySelector('#amigo').value = "";
    
}

function listaAmigos (){

    let listaAmi = document.getElementById('listaAmigos');
    // Limpiar la lista antes de agregar nuevos elementos
     listaAmi.innerHTML = "";

     for ( let i = 0; i<amigos.length ; i++ ){

        let nuevoAmigo = document.createElement('li');
        //Crear nuevo elemento li para cada amigo
        nuevoAmigo.textContent = amigos[i];
        //Recorre la lista amigos y lo agrega a nuevoAmigo
        listaAmi.appendChild(nuevoAmigo);
         // Agregar el nuevo <li> a la lista HTML
     }


}
//Esta función imprime en pantalla la lista de amigos que el usario va ingresando

function sortearAmigo(){

    //Verificar que el arreglo de amigos tenga elementos
    if (amigos.length == 0){

        alert('No tienes has agregado amigos a tu lista.');
    } else {
         //Generar un índice aleatorio
        let indiceRandom = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = ""; //limpiar contenido anterior

        let resultadoText = document.createElement('H2');
        resultadoText.textContent = `El amigo sorteado es ${amigos[indiceRandom]}`;

        amigoSorteado.appendChild(resultadoText);
        //mostrar el resultado en pantalla

    }
    
}


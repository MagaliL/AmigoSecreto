<h1>Proyecto: Sorteador de Amigos</h1>
  

  <h2>Descripción</h2>
            <p>Este proyecto es un ejercicio de lógica de programación en JavaScript. Su objetivo principal es fortalecer las habilidades en la manipulación del DOM y el manejo de arrays. Permite a un usuario agregar nombres a una lista y luego seleccionar uno de esos nombres al azar.</p>
        
<h2>Funcionalidades Clave</h2>
            <p>El proyecto se compone de varias funciones que trabajan en conjunto para lograr el objetivo.</p>
            
<article>
                <h3><code>agregarAmigo()</code></h3>
                <p>Obtiene un nombre del usuario, lo valida (verifica que no esté vacío o sea un duplicado) y lo añade al array <code>amigos</code>. Luego, actualiza la lista visual en la página y limpia el campo de texto.</p>
            </article>
            
<article>
                <h3><code>limpiarcaja()</code></h3>
                <p>Una función auxiliar que borra el contenido del campo de texto de entrada.</p>
            </article>
            
<article>
                <h3><code>listaAmigos()</code></h3>
                <p>Recorre el array <code>amigos</code> y genera una lista HTML (<code>&lt;li&gt;</code>) que se muestra en la página. Esta función limpia la lista existente antes de actualizarla para evitar duplicados.</p>
            </article>
            
<article>
                <h3><code>sortearAmigo()</code></h3>
                <p>Selecciona un nombre aleatorio del array <code>amigos</code> y lo muestra en la pantalla, con una validación previa para asegurar que la lista no esté vacía.</p>
            </article>
        </section>
        
<section>
            <h2>Instrucciones de Uso</h2>
            <ol>
                <li>Clona o descarga este repositorio.</li>
                <li>Abre el archivo <code>index.html</code> en tu navegador.</li>
                <li>Ingresa nombres en el campo de texto y haz clic en "Agregar Amigo".</li>
                <li>Una vez que tengas una lista, haz clic en "Sortear" para ver el resultado.</li>
            </ol>
        </section>
        
<section>
            <h2>Tecnologías Utilizadas</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </section>
 

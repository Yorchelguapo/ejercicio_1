
function listar() {

    let elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
  
    let lista = document.getElementById("miLista");
  
    lista.innerHTML = "";
  
    elementos.forEach(function(elemento) {
      let li = document.createElement('li');
      li.textContent = elemento;
      lista.appendChild(li);
    });
  }
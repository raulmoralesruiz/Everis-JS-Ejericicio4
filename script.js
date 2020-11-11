// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);

function getUsers() {
  fetch("users.json")
    // Se obtiene promesa, tanto si el resultado es correcto o da error
    .then(res => (res.ok ? Promise.resolve(res) : Promise.reject(res)))
    // Se transforma resultado a formato JSON
    .then(res => res.json())
    // Se filtran los usuarios
    .then(res => res.filter(user => user.money > 500))
    // Se recorren y se muestran los usuarios por consola
    .then(res => res.forEach(u => console.log(u.name)))
    // Se muestra mensaje en caso de error.
    .catch(res => console.log("Error al filtrar los usuarios."));
}

const header = document.getElementById("div-nav");
const iconNav = document.getElementById("icon-nav");


window.addEventListener("scroll", function () {
  header.classList.toggle("sticky-name", window.scrollY > 570);
});
window.addEventListener("scroll", function () {
    iconNav.classList.toggle("sticky", window.scrollY > 570);
  });
  

function determinarEstado() {
  var hoy = new Date();
  var hora = hoy.getHours();

  if (hora >= 9 && hora < 18 && hoy.getDay() !== 0) {
    return "Abierto";
  } else {
    return "Cerrado";
  }
}

var estado = determinarEstado();
document.getElementById("estado").innerHTML = estado;
var dot = document.querySelector(".dot");

if (estado === "Abierto") {
  dot.style.backgroundColor = "green";
} else {
  dot.style.backgroundColor = "red";
  dot.style.animation = "none";
}

// Seleccionamos el preloader y el modal
const preloader = document.querySelector(".preloader");
const modalWrapperNuevo = document.querySelector(".modal-wrapper-nuevo");
const closeModalBtnsNuevo = document.querySelectorAll(".close-modal-nuevo");

// Ocultamos el preloader
window.addEventListener("load", () => {
  preloader.classList.add("hide");
});

// Abrimos el modal
function openModalNuevo() {
  modalWrapperNuevo.style.visibility = "visible";
  modalWrapperNuevo.style.opacity = "1";
  modalWrapperNuevo.style.pointerEvents = "auto";
}

// Cerramos el modal
function closeModalNuevo() {
  modalWrapperNuevo.style.visibility = "hidden";
  modalWrapperNuevo.style.opacity = "0";
  modalWrapperNuevo.style.pointerEvents = "none";
}

// Agregamos un evento al botón para abrir el modal
window.addEventListener("load", () => {
  setTimeout(() => {
    openModalNuevo();
  }, 10);
});

// Agregamos eventos a los botones para cerrar el modal
closeModalBtnsNuevo.forEach((btn) => {
  btn.addEventListener("click", closeModalNuevo);
});

// Variables
const trigger = document.querySelector(".trigger");
const sidebar = document.querySelector(".sidebar");

// Functions
const sidebarToggle = () => {
  trigger.classList.toggle("active");
  sidebar.classList.toggle("show");
};

// Event Listeners
trigger.addEventListener("click", sidebarToggle);
document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.getElementById("#scrollButton");
  const bottom = document.getElementById("#tamanio23");

  scrollButton.addEventListener("click", () => {
    const targetPosition =
      bottom.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

var productos = [
  {
    nombre: "Ensalada de Salmon",
    precio: 140.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Ensalada de Arrachera",
    precio: 100.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Ensalada cuatro quesos",
    precio: 95.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Ensalada de Frutos Rojos",
    precio: 90.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Ensalada de Frutos Rojos Con Queso Panela",
    precio: 95.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Rollo de pechuga rellena",
    precio: 100.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Ensalada de Mango",
    precio: 95.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Ensalada Italiana",
    precio: 100.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Ensalada de la Casa",
    precio: 120.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Hamburguesa Americana",
    precio: 85.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Hamburguesa Ranchera",
    precio: 85.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Hamburguesa Hawaiana",
    precio: 80.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Costillitas BBQ",
    precio: 90.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Boneless de Pollo",
    precio: 85.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "HotDogs",
    precio: 65.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Papas a la Francesa",
    precio: 45.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Club Sandwich de Jamón",
    precio: 80.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Club Sandwich de Pollo ",
    precio: 85.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Spaguetti Alfredo",
    precio: 75.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Spaguetti Boloñesa",
    precio: 95.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Sangria Preparada",
    precio: 35.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Soda Italiana",
    precio: 50.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
  {
    nombre: "Malteada",
    precio: 50.0,
    tamanios: ["Chico", "Mediano", "Grande"],
  },
];
// FUNCION AGREGAR PRODUCTO...

function agregarProducto(producto, tamanio, cantidad) {
  cantidad = parseInt(cantidad); // convierte a número entero
  var carrito = document.getElementById("carrito");
  if (isNaN(cantidad) || cantidad <= 0) {
    cantidad = 1;
    console.log("La cantidad debe ser un número mayor que cero");
  } else {
    console.log("El elemento se ha agregado con éxito!");
  }

  var cantidadInput = document.createElement("input");
  cantidadInput.type = "number";
  cantidadInput.value = parseInt(cantidad);
  cantidadInput.min = 1;
  cantidadInput.addEventListener("change", function () {
    actualizarFila(
      this.parentNode.parentNode,
      producto,
      tamanio,
      cantidadInput.value
    );
  });
  var fila = document.createElement("tr");
  var columnaProducto = document.createElement("td");
  var columnaCantidad = document.createElement("td");
  var columnaTamanio = document.createElement("td");
  var columnaPrecio = document.createElement("td");
  var columnaSubtotal = document.createElement("td");

  fila.setAttribute("id", "filaProducto");
  columnaSubtotal.setAttribute("id", "subtotalId");
  columnaPrecio.setAttribute("id", "precio");
  columnaTamanio.setAttribute("id", "tamanioDeProductos");
  columnaCantidad.setAttribute("id", "cantidadDeProductos");
  columnaProducto.setAttribute("id", "nombreProductos");
  columnaCantidad.classList.add("inputcantidad");

  columnaProducto.innerHTML = producto.nombre;
  columnaCantidad.appendChild(cantidadInput);
  columnaTamanio.innerHTML = tamanio;
  columnaPrecio.innerHTML = "$" + producto.precio.toFixed(2);
  columnaSubtotal.innerHTML = "$" + (producto.precio * cantidad).toFixed(2);
  fila.appendChild(columnaProducto);
  fila.appendChild(columnaCantidad);
  cantidadInput.classList.add("cantidadinputmodalnuevo");
  fila.appendChild(columnaTamanio);
  fila.appendChild(columnaPrecio);
  fila.appendChild(columnaSubtotal);
  carrito.appendChild(fila);
  fila.classList.add("filaProducto");
  columnaPrecio.classList.add("preciounitariohidde");
  columnaTamanio.classList.add("tamaniohidde");
  actualizarTotal();

  // ELIMINAR PRODUCT ...
  var columnaEliminar = document.createElement("td");
  var botonEliminar = document.createElement("button");
  botonEliminar.innerHTML = "-";
  botonEliminar.classList.add("eliminarBoton"); // agregar clase eliminarBoton
  botonEliminar.addEventListener("click", function () {
    carrito.removeChild(fila);
    actualizarTotal();
  });
  columnaEliminar.appendChild(botonEliminar);
  fila.appendChild(columnaEliminar);
}

// funcion actualizar fila ...
function actualizarFila(fila, producto, tamanio, cantidad) {
  var tamaniosDisponibles = producto.tamanios;
  var precio = parseInt(producto.precio);
  var subtotal = precio * cantidad;

  fila.cells[2].innerHTML = tamanio;
  fila.cells[3].innerHTML = "$" + precio.toFixed(2);
  fila.cells[4].innerHTML = "$" + subtotal.toFixed(2);
  actualizarTotal();
}
function actualizarTotal() {
  var carrito = document.getElementById("carrito");
  var total = 0;
  for (var i = 0; i < carrito.rows.length; i++) {
    var fila = carrito.rows[i];
    var subtotal = fila.cells[4].innerHTML.replace("$", "");
    total += parseFloat(subtotal);
  }
  var totalElemento = document.getElementById("total");
  totalElemento.innerHTML = total.toFixed(2);

  var totalElemento2 = document.getElementById("total2");
  totalElemento2.innerHTML = total.toFixed(2);

  var totalElemento3 = document.getElementById("total3");
  totalElemento3.innerHTML = parseInt(total.toFixed(2) * 1);
}

const carritoBtn = document.getElementById("carrito-btn");
const carritoModal = document.getElementById("carrito-modal");
const overlay = document.getElementById("overlay");

// Función para abrir el modal
function openModal() {
  carritoModal.classList.add("show");
  overlay.classList.add("show");
  sumarTotalYPropina();
}

// Función para cerrar el modal
function closeModal() {
  carritoModal.classList.remove("show");
  overlay.classList.remove("show");
  sumarTotalYPropina();
}

carritoBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

function enviarWhatsApp() {
  // Obtener los elementos del carrito de compras
  var carrito = document.querySelectorAll("#filaProducto");

  if (!carrito) {
    alert("Sin comentarios");
    return;
  }

  // Convertir los elementos del carrito en un string
  let mensaje = "";

  carrito.forEach(function (item) {
    let nombre = item.querySelector("#nombreProductos").textContent;
    let cantidad = item.querySelector(
      "#cantidadDeProductos input[type='number']"
    ).value;
    let subtotal = item.querySelector("#subtotalId").textContent;
    mensaje += `${nombre} x ${cantidad} = ${subtotal}\n`;
  });

  let carritoModal = document.querySelectorAll("#carrito-modal");
  let comentario = "";
  carritoModal.forEach(function (item) {
    comentario += item.querySelector(
      "#comentario input[name='comentario']"
    ).value;
    if (!comentario) {
      alert("No se agregó ningún comentario en la nota");
      return;
    }
  });

  let direccion = "";
  carritoModal.forEach(function (item) {
    direccion += item.querySelector("#direccion input[name='direccion']").value;
    if (!comentario) {
      alert("No se agregó ningúna direccion a la nota");
      return;
    }
  });

  let email = "";
  carritoModal.forEach(function (item) {
    email += item.querySelector("#email input[name='email']").value;
    if (!comentario) {
      alert("No se agregó ningún email a la nota");
      return;
    }
  });
  //Agregar eltotal ala comanda de whatsapp
  let totaComanda = document.querySelector("#total").textContent;

  let mensajeFinal = `Hola 100% Natural , estos son los detalles de mi orden:
  \n
  \n ${mensaje}
  \n
  \nSubtotal:${totaComanda}
  Propina: ${propinaActual}
  Comentarios: ${comentario}
  Dirección: ${direccion}
  \nEmail: ${email}
  \n
  \n
  \n${tipoEntregaSeleccionado}
  \n${formaDePagoSeleccionada}
  \nMuchas gracias!`;

  // Codificar el mensaje para WhatsApp
  mensajeFinal = encodeURIComponent(mensajeFinal);

  // Abrir la aplicación de WhatsApp con el mensaje predefinido
  window.location.href = `https://wa.me/527717071790?text=${mensajeFinal}`;
}
//FUNCION PARA HACER +1 AL SELECCIONAR

// Obtener los elementos input tipo radio
const envio = document.getElementById("enviomodalInterno");
const recoger = document.getElementById("recoger");
const comer = document.getElementById("comer");

// Obtener el input de número de mesa
const numeroMesa = document.getElementById("numeroMesa");

// Variable para guardar el tipo de entrega seleccionado por el usuario
let tipoEntregaSeleccionado = "";

envio.addEventListener("change", function () {
  tipoEntregaSeleccionado = "Enviar  a mi Domicilio";
});

recoger.addEventListener("change", function () {
  tipoEntregaSeleccionado = "Paso a recoger el pedido a tienda";
});

comer.addEventListener("change", function () {
  tipoEntregaSeleccionado = comer.value;
});

// Si se ha seleccionado "Estoy en el Restaurante", guardar el número de mesa
comer.addEventListener("change", function () {
  if (comer.checked) {
    tipoEntregaSeleccionado =
      "Estoy en el Restaurante - Mesa " + numeroMesa.value;
  }
});

numeroMesa.addEventListener("input", function () {
  if (comer.checked) {
    tipoEntregaSeleccionado =
      "Estoy en el Restaurante - Mesa " + numeroMesa.value;
  }
});

const efectivo = document.getElementById("efectivo");
const transferencia = document.getElementById("transferencia");
const pagoEnCaja = document.getElementById("pago-en-caja");

// Obtener el input de número de mesa
const concuanto = document.getElementById("concuanto");

// Variable para guardar la forma de pago seleccionado por el usuario
let formaDePagoSeleccionada = "";

pagoEnCaja.addEventListener("change", function () {
  formaDePagoSeleccionada = "Pago en Caja Directamente";
});

transferencia.addEventListener("change", function () {
  formaDePagoSeleccionada = "Transfiero a tienda";
});

efectivo.addEventListener("change", function () {
  formaDePagoSeleccionada = "Efectivo";
});

// Si se ha seleccionado "Efectivo", pregunta con qué billete se pagará

efectivo.addEventListener("click", function () {
  if (efectivo.checked) {
    formaDePagoSeleccionada = "Efectivo";
    formaDePagoSeleccionada =
      "Voy a pagar con un billete de " + concuanto.value;
  }
});

concuanto.addEventListener("input", function () {
  if (efectivo.checked) {
    formaDePagoSeleccionada =
      "Voy a pagar con un billete de " + concuanto.value;
  }
});

//FUNCION EFECTIVO, TRANSFERENCIA O EN CAJA//

const pagoEfectivo = document.getElementById("pago-efectivo");
const datosTransferencia = document.getElementById("datos-transferencia");

// Ocultar ambos elementos al abrir el modal
pagoEfectivo.style.display = "none";
datosTransferencia.style.display = "none";

efectivo.addEventListener("click", function () {
  pagoEfectivo.style.display = "block";
  datosTransferencia.style.display = "none";
});

transferencia.addEventListener("click", function () {
  pagoEfectivo.style.display = "none";
  datosTransferencia.style.display = "block";
});

pagoEnCaja.addEventListener("click", function () {
  pagoEfectivo.style.display = "none";
  datosTransferencia.style.display = "none";
});
//propina

var itemsPropina = document.querySelectorAll(".propina-item");

itemsPropina.forEach(function (item) {
  item.onclick = function () {
    // Quitamos la clase "seleccionado" de todos los items de propina
    itemsPropina.forEach(function (item) {
      item.classList.remove("seleccionado");
    });

    // Agregamos la clase "seleccionado" al item clicado
    this.classList.add("seleccionado");
  };
});

//MUESTRA PROPINAS EN PANTALLA

// Obtener el input del número de mesa
const numeroMesaInput = document.querySelector(
  '#miModalInterno input[placeholder="Número de mesa"]'
);

// Agregar un evento change a los inputs de tipo radio con el nombre "tipo-entrega"
const tipoEntregaInputs = document.querySelectorAll(
  'input[name="tipo-entrega"]'
);
tipoEntregaInputs.forEach((input) => {
  input.addEventListener("change", () => {
    // Obtener el valor del input seleccionado
    const tipoEntregaSeleccionada = document.querySelector(
      'input[name="tipo-entrega"]:checked'
    ).value;

    // Si el valor es "comer-en-restaurante", mostrar el input del número de mesa
    if (tipoEntregaSeleccionada === "comer-en-restaurante") {
      numeroMesaInput.style.display = "block";
    } else {
      numeroMesaInput.style.display = "none";
    }
  });
});

//B
//FINALIZA TIPO DE ENTREGA /

const buttonAbrirModal = document.getElementById("buttonmodalabrir");
const modal = document.getElementById("miModalInterno");

buttonAbrirModal.addEventListener("click", () => {
  modal.style.display = "block";
});

var botonCerrarModal = document.getElementById("cerrar-modal");
botonCerrarModal.addEventListener("click", function () {
  var modal = document.getElementById("miModalInterno");
  modal.style.display = "none";
});

numeroMesaInput.style.display = "none";

//boton de whats modal nuevo
const botonModal = document.getElementById("buttonmodalabrir");
const botonWhatsapp = document.getElementById("whatsboton");

botonModal.addEventListener("click", function () {
  botonWhatsapp.style.display = "block";
});

//cierra boton de whats cuando retrocede el usuario al carrito modal nuevo
const cierredemodalnuevo = document.getElementById("cerrar-modal");
const botonWhatsappcierre = document.getElementById("whatsboton");

// Cierra el botón de WhatsApp cuando se hace clic en el botón cerrar del modal
const cierreModalNuevo = document.getElementById("cerrar-modal");
cierreModalNuevo.addEventListener("click", function () {
  botonWhatsapp.style.display = "none";
});

// Obtener los elementos de propina y el input de propinaRandom
const propinaCero = document.getElementById("propinaCero");
const propinaDiez = document.getElementById("propinaDiez");
const propinaVeinte = document.getElementById("propinaVeinte");
const propinaTreinta = document.getElementById("propinaTreinta");
const propinaCuarenta = document.getElementById("propinaCuarenta");
const propinaCincuenta = document.getElementById("propinaCincuenta");
const propinaRandomInput = document.getElementById("propinaRandom");

// Guardar los valores de las propinas en variables
const valorPropinaCero = "0";
const valorPropinaDiez = "10";
const valorPropinaVeinte = "20";
const valorPropinaTreinta = "30";
const valorPropinaCuarenta = "40";
const valorPropinaCincuenta = "50";

let propinaActual = ""; // Variable que almacenará el valor actual de la propina

// Asignar la función al evento "click" de cada elemento
propinaCero.addEventListener("click", function () {
  propinaActual = valorPropinaCero;
  actualizarPropina();
});

propinaDiez.addEventListener("click", function () {
  propinaActual = valorPropinaDiez;
  actualizarPropina();
});

propinaVeinte.addEventListener("click", function () {
  propinaActual = valorPropinaVeinte;
  actualizarPropina();
});

propinaTreinta.addEventListener("click", function () {
  propinaActual = valorPropinaTreinta;
  actualizarPropina();
});

propinaCuarenta.addEventListener("click", function () {
  propinaActual = valorPropinaCuarenta;
  actualizarPropina();
});

propinaCincuenta.addEventListener("click", function () {
  propinaActual = valorPropinaCincuenta;
  actualizarPropina();
});

function actualizarPropina() {
  let mensajePropina = ""; // Variable auxiliar para almacenar el mensaje correspondiente

  if (propinaActual === valorPropinaDiez) {
    mensajePropina = "woow gracias!";
  }
  if (propinaActual === valorPropinaVeinte) {
    mensajePropina = "¡Eres asombroso/a!";
  }
  if (propinaActual === valorPropinaTreinta) {
    mensajePropina = "que increible";
  }
  if (propinaActual === valorPropinaCuarenta) {
    mensajePropina = "¡Eso me ha hecho el día!";
  }
  if (propinaActual === valorPropinaCincuenta) {
    mensajePropina = "Eso es una propina increíble, gracias!";
  }

  document.getElementById("propina").innerHTML = `${propinaActual}`;
  document.getElementById("mensajepropina").innerHTML = mensajePropina; // Asignar el mensaje correspondiente
}

propinaRandomInput.addEventListener("input", function () {
  const propinaRandomValor = propinaRandomInput.value;
  if (propinaRandomValor) {
    propinaActual = "$" + propinaRandomValor;
    actualizarPropina();
  }
});

function sumarTotalYPropina() {
  const totalElement = document.getElementById("total3");
  const propinaElement = document.getElementById("propina");
  const totalFinalComandaElement = document.getElementById("totalfinalcomanda");

  // Convertir los valores a enteros
  const totalfinalconvertido = parseInt(totalElement.innerText) || 0;
  const propinafinal = parseInt(propinaElement.innerText.replace("$", "")) || 0;

  // Verificar si los valores son NaN y establecerlos en cero si es necesario
  if (isNaN(totalfinalconvertido)) {
    totalfinalconvertido = 0;
  }

  if (isNaN(propinafinal)) {
    propinafinal = 0;
  }

  // Sumar total y propina
  const totalFinal = totalfinalconvertido + propinafinal;

  // Mostrar el resultado en el elemento correspondiente
  totalFinalComandaElement.innerText = totalFinal;
}

// Llamamos a la función por primera vez al cargar la página
sumarTotalYPropina();

// Escuchamos los cambios en los elementos correspondientes y actualizamos el resultado
document
  .getElementById("total3")
  .addEventListener("DOMSubtreeModified", sumarTotalYPropina);
document
  .getElementById("propina")
  .addEventListener("DOMSubtreeModified", sumarTotalYPropina);
document
  .getElementById("total")
  .addEventListener("DOMSubtreeModified", sumarTotalYPropina);

var confetti1 = new Confetti("propinaCincuenta", valorPropinaCincuenta);

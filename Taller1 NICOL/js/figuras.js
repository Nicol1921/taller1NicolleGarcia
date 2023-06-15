// Variables globales
var currentShape = ""; // Variable para almacenar la figura seleccionada

// Función para abrir la ventana modal y configurar los datos según la figura seleccionada
function openModal(shape) {
  currentShape = shape; // Almacenar la figura seleccionada en la variable global
  var modalTitle = document.getElementById("modal-title");
  var modalBody = document.getElementById("modal-body");

  // Configurar título y campos de entrada según la figura seleccionada
  switch (shape) {
    case "circle":
      modalTitle.innerText = "Círculo";
      modalBody.innerHTML = "<label for='radius'>Radio:</label><br><input type='number' id='radius' required>";
      break;
    case "triangle":
      modalTitle.innerText = "Triángulo";
      modalBody.innerHTML = "<label for='side1'>Lado 1:</label><br><input type='number' id='side1' required><br><br>" +
                            "<label for='side2'>Lado 2:</label><br><input type='number' id='side2' required><br><br>" +
                            "<label for='side3'>Lado 3:</label><br><input type='number' id='side3' required>";
      break;
    case "rectangle":
      modalTitle.innerText = "Rectángulo";
      modalBody.innerHTML = "<label for='length'>Longitud:</label><br><input type='number' id='length' required><br><br>" +
                            "<label for='width'>Ancho:</label><br><input type='number' id='width' required>";
      break;
    case "square":
      modalTitle.innerText = "Cuadrado";
      modalBody.innerHTML = "<label for='side'>Lado:</label><br><input type='number' id='side' required>";
      break;
    default:
      modalTitle.innerText = "";
      modalBody.innerHTML = "";
  }

  // Mostrar la ventana modal
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Función para cerrar la ventana modal
function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Función para calcular el perímetro o área según la figura seleccionada
function calculate() {
  var result = 0;

  // Calcular el perímetro o área según la figura seleccionada
  switch (currentShape) {
    case "circle":
      var radius = parseFloat(document.getElementById("radius").value);
      result = 2 * Math.PI * radius; // Calcular perímetro del círculo
      break;
    case "triangle":
      var side1 = parseFloat(document.getElementById("side1").value);
      var side2 = parseFloat(document.getElementById("side2").value);
      var side3 = parseFloat(document.getElementById("side3").value);
      result = side1 + side2 + side3; // Calcular perímetro del triángulo
      break;
    case "rectangle":
      var length = parseFloat(document.getElementById("length").value);
      var width = parseFloat(document.getElementById("width").value);
      result = 2 * (length + width); // Calcular perímetro del rectángulo
      break;
    case "square":
      var side = parseFloat(document.getElementById("side").value);
      result = 4 * side; // Calcular perímetro del cuadrado
      break;
    default:
      result = 0;
  }
// Mostrar el resultado en la ventana modal
var modalBody = document.getElementById("modal-body");
modalBody.innerHTML = "<p>El resultado es: " + result + "</p>";
}

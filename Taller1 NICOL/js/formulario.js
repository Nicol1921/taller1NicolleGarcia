const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();

  const tipoDocumento = document.getElementById('tipoDocumento').value;
  const numDocumento = document.getElementById('numDocumento').value;
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const aceptarTerminos = document.getElementById('aceptarTerminos').checked;

  // Validar campos obligatorios
  if (
    tipoDocumento === '' ||
    numDocumento === '' ||
    nombre === '' ||
    apellido === '' ||
    fechaNacimiento === '' ||
    correo === '' ||
    password === '' ||
    confirmPassword === '' ||
    !aceptarTerminos
  ) {
    alert('Por favor complete todos los campos obligatorios.');
    return;
  }

  // Validar formato del No. Documento
  if (!/^[0-9]{5,}$/.test(numDocumento)) {
    alert('El No. Documento debe ser numérico y tener al menos 5 caracteres.');
    return;
  }

  // Validar formato de Nombre y Apellido
  if (!/^[A-Za-z0-9\s]+$/.test(nombre) || !/^[A-Za-z0-9\s]+$/.test(apellido)) {
    alert('El Nombre y Apellido deben contener solo caracteres alfanuméricos.');
    return;
  }

  // Validar fecha de nacimiento
  const birthYear = new Date(fechaNacimiento).getFullYear();
  const currentYear = new Date().getFullYear();
  if (currentYear - birthYear < 18) {
    alert('Debe ser mayor de 18 años para registrarse.');
    return;
  }

  // Validar formato de correo electrónico
  if (!/^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/.test(correo)) {
    alert('El Correo electrónico debe tener el formato correcto (ejemplo@misena.edu.co).');
    return;
  }

  // Validar formato de password
  if (!/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{10,}$/.test(password)) {
    alert('El Password debe tener al menos 10 caracteres e incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
    return;
  }

  // Validar confirmación de password
  if (password !== confirmPassword) {
    alert('El Password y su confirmación no coinciden.');
    return;
  }

  // Si se llega hasta aquí, el formulario es válido
  alert('¡Registro exitoso!');
  registrationForm.reset();
}

function showTerms() {
  const termsModal = document.getElementById('termsModal');
  termsModal.style.display = 'block';
}

function closeTermsModal() {
  const termsModal = document.getElementById('termsModal');
  termsModal.style.display = 'none';
}
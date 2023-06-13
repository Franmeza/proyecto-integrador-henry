
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /[0-9]/;

function validate(userData) {
    var errors = {};
    
    if(!userData.password) errors.password = 'Ingrese el password';
    if(userData.password.length > 10 || userData.password.length < 6 )
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
    if(!regexPassword.test(userData.password)) errors.password = 'Debe contener por lo menos un numero';
    if(!regexEmail.test(userData.email)) errors.email = 'Debe ser un correo electrónico';      
    if(!userData.email) errors.email = 'El campo de email no puede estar vacio'
    return errors;
}

export default validate
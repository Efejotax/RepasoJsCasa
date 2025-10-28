
// La clase constructor
class Usuario {
    constructor(nombre, apellido, correo, contraseña){
        // Los atributos
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña;
}
// Los métodos
encriptarContraseña(contraseña){
    // Lógica para encriptar la contraseña
}

verificarContraseña(contraseña){
    // Lógica para verificar si la contraseña ingresada es corecta
}

obtenerPorEmail(correo){
    // Lógica para obtener un objeto usuario a partir de su correo electrónico
}

}
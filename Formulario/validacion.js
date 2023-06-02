window.addEventListener('load', ()=> {
    const formulario = document.querySelector('#formulario')
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const email = document.getElementById('correo')
    const pass = document.getElementById('contraseña')

    formulario.addEventListener('submit', (d)=> {
        d.preventDefault();
        validarCampos();
    })

    //valindando campo Usuario

    function validarCampos() {
        // Capturamos los valores que ingresa el usuario
        const nombreValor = nombre.value.trim()  //eliminamos los espacios en blanco
        const apellidoValor = apellido.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()

        if(nombreValor === '') {           
            validarFalla(nombre, 'Campo Vacio')
        }else{
            validarOk(nombre)
        }

    //valindando campo Apellido

        if(apellidoValor === '') {           
            validarFalla(apellido, 'Campo Vacio')
        }else{
            validarOk(apellido)
        } 

    //valindando campo email
        
        if(emailValor === '') {
            validarFalla(email, 'Campo Vacio')
        }else if(!validarEmail(emailValor)) {
            validarFalla(email, 'El e-mail no es valido')
        }else{
            validarOk(email)
        }

    //validando campo password
        const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
        if(passValor === '') {
            validarFalla(pass, 'Campo Vacio')
        }else if (passValor.length < 8) {
            validarFalla(pass, 'Debe tener 8 caracteres como minimo')
        }else if(!passValor.match(er)) {
            validarFalla(pass, 'Debe tener una Mayu, una minu y un numero')
        }else{
            validarOk(pass)
        }

    }

    // Otra forma de hacer las funciones
 /* const validarCampos = ()=> {
        // Capturamos los valores que ingresa el usuario
        const nombreValor = nombre.value.trim()  //eliminamos los espacios en blanco
        const apellidoValor = apellido.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()

    }*/

    function validarFalla (input, msje) {
        const formControl = input.parentElement  //devuelve el elemnto padre del elemento especificado
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }

    function validarOk (input) {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    function validarEmail(email){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

})
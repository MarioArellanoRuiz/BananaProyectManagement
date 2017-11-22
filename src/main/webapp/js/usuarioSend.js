$(document).ready(function () {

    //console.clear();

    $('button#sendUsuario').on("click", function (event) {


        $.ajax({
            url: "http://localhost:8084/BananaSourceCode/UsuarioServlet",
            type: "POST",
            data: getUser(),
            contentType: "application/json",
            dataType: "json"
        })
                .done(function (data) {
                    console.log(data);
                })
                .fail(function (data) {
                    console.log(data);
                    console.log("Error");
                })
                .always(function (data) {

                });

    });
});

function getUser() {

    var formulario = document.forms['formUsuario'];

    var jsonUsuario = new Object();
    jsonUsuario.nombre = formulario['nombre'].value;
    jsonUsuario.apellido = formulario['apellido'].value;
    jsonUsuario.codigo = formulario['codigo'].value;
    jsonUsuario.departamento = formulario['departamento'].value;
    jsonUsuario.email = formulario['email'].value;
    jsonUsuario.password = formulario['password'].value;

    console.log(JSON.stringify(jsonUsuario));

    return JSON.stringify(jsonUsuario);
}
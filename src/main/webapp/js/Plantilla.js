$(document).ready(function () {

    console.clear();

    $('button#sendUsuario').on("click", function (event) {


        $.ajax({
            url: "http://localhost:8084/Banana/UsuarioServlet",
            type: "POST",
            data: {idP: ""}
        })
                .done(function (data) {
                    alert("hecho");
                }).fail(function (data) {
            alert("fail");
        }).always(function (data) {
            alert("siempre");
        });

    });
});
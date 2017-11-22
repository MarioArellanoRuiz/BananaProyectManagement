$(document).ready(function() {//Entra hasta que la pagine cargue

	var arregloObjetos = []; //Guardar posts
	var numeroPost = 0;

	$("button#add-post").on(/*Selector*/"click"/*Evento a manejar*/, function (event) {/*Funcion manejadora*/
		//console.log("Hiciste click");
		var textArea = $("textarea#FormControlTextarea").val(); //Devuelve un string
    textArea = $.trim(textArea);
    //Comparacion si hay contenido que publicar
    if (textArea !== ""){
      //console.log("Estamos listos jQuery");
    //console.log("Contenido", textArea);
    //nuestro nuevo post
    var nuevoPost = {
      //numero: numeroPost = 1,
      //numero: $("div.mi-post").length +1,
      numero: $("div.mi-post").length,
      contenido: textArea
    };

    console.log(nuevoPost);
    console.log(arregloObjetos);

    
      //numeroPost ++;
      //Obtienes contenido HTML
      var html = $("div#posts").html();
      //console.log(html);
      //Editas contenido HTML
      //$("div#posts").html("<h1>Publicacion</h1>");
      //$("div#posts").prepend("<h1>Publicacion "+(arregloObjetos.length + 1)+"</h1>");
      $("div#posts").prepend('<div id="mi-post-'+ nuevoPost.numero+'"class="container mi-post">'+
        '<div class="row">'+
          '<div class="col-md-2">'+
          '</div>'+
        '<!--Contenedor central con las fases de la publicacion-->'+
        '<div class="col-md-8" id="com">'+
          '<div class="row">'+
            '<div class="col-md-2" id="pic">'+
              '<i class="fa fa-cog fa-spin fa-5x fa-fw" aria-hidden="true"></i>'+
            '</div>'+
              '<div class="col-10">'+
                '<div class="row">'+
                  '<div class="col-5">'+
                    '<h2>Ramon</h2>'+
                    '<p></p>'+
                    '<h4>Post #'+nuevoPost.numero+ '</h4>'+
                  '</div>'+//col5
                  '<div class="col-md-1 ml-auto">'+
                    '<button class="btn btn-outline-danger btn-sm post-delete" data-numero=' + nuevoPost.numero + '>&times;</button>'+
                  '</div>'+
                '</div>'+ //row
              '</div>'+//col md 6
            '</div>'+//row
            '<div class="row justify-content-center">'+
              '<p></p>'+
            '</div>'+
            '<div class="row" id="tex">'+
              nuevoPost.contenido+
            '</div>'+
        '</div>'+
          '<div class="col-md-2">'+
          '</div>'+
        '</div>'+
      '</div>');

      //arregloObjetos[arregloObjetos.length] = nuevoPost;

      //Limpiar el TextArea
      $("textarea#FormControlTextarea").val("");
      //Clickear button cancelar
     // $("button#cancel-post").click();
     //esconder el modal 
      $("div#exampleModalLong").modal("hide");
    //Si no hay nada escribe algo 
    } else {
      alert("Escribe tu publicacion");
    }
		

	});
//Funcion para borrar publicacion
  $("div#posts").on("click","button.post-delete", function (event) {
    //console.log("Que le pacho");
    //$("div.mi-post").remove();
    //Saber cual boton presione y en que DIV
    //$(this).parent();
    //Confirmar la peticion de borrar
    if (confirm("Estas seguro?")) {
      //Nos traemos atributo del data-numero
    var numero = $(this).data("numero");
    //data-saludo
    //var saludo = $(this).data("saludo");
    var miId = "div#mi-post-"+ numero;
    $(miId).remove();
    }
    //console.log("miId");
  });

});

//Prueba antes de meter a codigo el HTML
/*'<div class="row">'+
        '<div class="col-md-2">'+
        '</div>'+
        '<!--Contenedor central con las fases de la publicacion-->'+
        '<div class="col-md-8" id="com">'+
          '<div class="row">'+
            '<div class="col-md-2" id="pic">'+
              '<i class="fa fa-cog fa-spin fa-5x fa-fw" aria-hidden="true"></i>'+
            '</div>'+
            '<div class="col-md-6">'+
              '<h2>Ramon</h2>'+
            '<p></p>'+
            '<h4>Post '+(arregloObjetos.length + 1)+ '</h4>'+
            '</div>'+
          '</div>'+
          '<div class="row justify-content-center">'+
            '<p></p>'+
          '</div>'+
          '<div class="row" id="tex">'+
          nuevoPost.contenido+
            '<p>Mi vida es bien divertida, Yupi!.</p>'+
          '</div>'+
        '</div>'+
        '<div class="col-md-2">'+
        '</div>'+
      '</div>'*/
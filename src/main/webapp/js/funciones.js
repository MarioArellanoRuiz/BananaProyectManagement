$(document).ready( function(){ 
    
    var arregloDeObjetos=[];
    var numeroProyecto = 1;

  //-----$ este signo indica que vamos a trabajar con el DOM (aquí buscamos un id #add-post especificando primero que esta dentro de un button)
 $("button#add-post")// este es el selector
   // on espera una acción
     .on( //metodo on
          "click", // estos son los eventos que maneja el selector
    function(event){ //Función manejadora
                                                  //.val trae los valores que se captan del boton textoPost en html (cuando el usuario escribe)a nuestra función
                var postProyect   = $("input#tituloProyecto").val(); //devuelve un String
                //var postEncargado = $("input#nombreEncargado").val();
                var postDescrip   = $("textarea#descripcion").val();
                var postInicio    = $("input#fechaInicio").val();
                var postFinal     = $("input#fechaFinal").val();
                
                postProyect   = $.trim(postProyect);// con esto (trim)quitamos los espacios en blanco a la hora de escribir en el post(para que no los tome como un post)
                //postEncargado = $.trim(postEncargado);
                postDescrip   = $.trim(postDescrip);
                postInicio    = $.trim(postInicio);
                postFinal     = $.trim(postFinal);

        if(postProyect !=='' && postDescrip !==''&& postInicio !==''&& postFinal !==''){ 
        //nuestro nuevo post
            var nuevoPost ={
                numero:$('div.mi-post').length + 1,
                //numero: numeroPost,
                postProyect:postProyect,
                //postEncargado:postEncargado,
                postDescrip:postDescrip,
                postInicio:postInicio,
                postFinal:postFinal
                };
            //todo esto es poner la información que ya recibimos del usuario y ponerla en la pagina principal al mismo tiempo

                      //.prpend organiza la informacion del #post y la regresa al idex
          $("div#post").prepend(//poner todo lo del html de la sección de post (todo esto es el template)


          '<div id="mi-post' + nuevoPost.numero+'"class="col-lg-sm mi-post" style="background-color:rgb(85, 186, 253); border-radius: 18px; padding: 15px; margin:35px; width: 80%; height: 180px;">'+
          
                      '<div class="container" align="center">'+ /////TITULOS ////////////////////////////////////////////// -->
                          '<strong style="font-size: 18pt; color:rgb(0, 91, 151)">'+nuevoPost.postProyect+'</strong>'+
                          '<h1 style="font-size:11pt; color:rgb(236, 253, 255)">Proyect : '+ nuevoPost.numero+'</h1>'+ 
                      '</div>'+
          
                      '<div class="container" aling="center">'+ ////FECHAS DEL PROYECTO ////////////////////////////////////////////////-->
                        '<div   Style="float:left; padding:1em;">'+
                          //'<label >Start Date</label>'+
                          '<p style="font-size:11pt; color:rgb(236, 253, 255)">'+nuevoPost.postInicio+'</p>'+
                        '</div>'+
                        '<div  Style="float:left; padding:1em;">'+
                            //'<label >Final Date</label>'+
                            '<p style="font-size:11pt; color:rgb(236, 253, 255)">'+nuevoPost.postFinal+'</p>'+
                        '</div>'+
                      '</div>'+
          
                        '<div class="container" aling="center">'+ //Estatus del Proyecto ///////////////////////////////// -->
                          //'<label >Description</label>'+
                          '<p style="font-size:13pt; color:rgb(43, 46, 226);"><CENTER>'+nuevoPost.postDescrip+'</CENTER></p>'+
                        '</div>'+
            
                        '<div class="container"aling="center">'+ //boton para borrar proyecto /////////////////////////////// -->
                          '<button class="btn btn-danger btn-sm post-delete" data-numero="'+ nuevoPost.numero +'" style="float:left;margin-left: -25%;">Drop</button>'+
                          '<a href="task.html"><button class="btn btn-success btn-sm"  style="float:right;    margin-right: 25%;">Admin</button></a>'+
                        '</div>'+
                '</div>'

            );

            $("input#tituloProyecto").val(''); //esta ultima acción limpia el text area
            //$("input#nombreEncargado").val('');
            $("textarea#descripcion").val('');
            $("input#fechaInicio").val('');
            $("input#fechaFinal").val('');
             // esto ace referencia al boton de cerrar para que cuando clikemos en guardar tambien se cierre
             // $("button#close-post").click(); //
             //este otro es otro modo de hacer lo de cerrar la ventana
             $("div#exampleModal").modal("hide");

        } 
        else {
            alert("Write Something!");

            $("input#tituloProyecto").val(''); //esta acción limpia despues de que te muestra la alerta para que puedas escribir en limpio de nuevo
            //$("input#nombreEncargado").val('');
            $("textarea#descripcion").val('');
            $("input#fechaInicio").val('');
            $("input#fechaFinal").val('');
        }

   });
   //Creamos aquí otro evento para darle una función al botón que creamos para borrar un post
   $("div#post" //En que contenedor lo vamos a buscar, en donde se in
              ).on("click", //Evento a validar
                           "button.post-delete", //Botón o elemento a validar
                           function(event){ //Función manejadora
                                 //console.log("Te vas a ir!");
                                 //$("div.mi-post").remove();
                                 //$(this).parent();
                          if(confirm("Are you shure?")){   
                             var numero = $(this).data("numero");
                             
                             var miId = "div#mi-post" + numero;

                             //console.log(miId);
                             $(miId).remove();
                          }

   })
   $("button#close-post" //En que contenedor lo vamos a buscar, en donde se in
              ).on("click", //Evento a validar
                           "button.close-post", //Botón o elemento a validar
                           function(event){ //Función manejadora
                            
                            $("input#tituloProyecto").val(''); //esta ultima acción limpia el text area
                            $("input#nombreEncargado").val('');
                            $("textarea#descripcion").val('');
                            $("input#fechaInicio").val('');
                            $("input#fechaFinal").val('');             

   })

});
$(document).ready(function(){
	$("#ASIR_AS").hide(); //oculta las asignaturas de ASIR
	$("#DAM_AS").hide(); //oculta las asignaturas de DAM
	$("#SMR_AS").hide(); //oculta las asignaturas de SMR
	$("#DAM").css("cursor","pointer"); //Cuando se pasa por encima de DAM se muestra el cursor
	$("#ASIR").css("cursor","pointer"); //Cuando se pasa por encima de ASIR se muestra el curso
	$("#SMR").css("cursor","pointer"); //Cuando se pasa por encima de SMR se muestra el curso
  $("#ASIR").click(function(){
  	$("#ASIR").css("border-color","red"); //Colorea el borde de color rojo al estar seleccionado
  	$("#SMR").css("border-color","grey"); //Colorea el borde de color gris al estar seleccionado
    $("#DAM").css("border-color","grey"); //Colorea el borde de color gris al estar seleccionado
    $("#ASIR_AS").show(); //Muestr las asignaturas de ASIR
    $("#DAM_AS").hide(); //oculta las asignaturas de DAM
	$("#SMR_AS").hide(); //oculta las asignaturas de SMR
  });
  $("#DAM").click(function(){
  	$("#DAM").css("border-color","red"); //Colorea el borde de color rojo al estar seleccionado
    $("#SMR").css("border-color","grey"); //Colorea el borde de color gris al estar seleccionado
    $("#ASIR").css("border-color","grey"); //Colorea el borde de color gris al estar seleccionado
    $("#DAM_AS").show(); //Muestra las asignaturas de DAM
    $("#ASIR_AS").hide(); //oculta las asignaturas de ASIR
	$("#SMR_AS").hide(); //oculta las asignaturas de SMR
  });
    $("#SMR").click(function(){
    $("#SMR").css("border-color","red"); //Colorea el borde de color rojo al estar seleccionado
    $("#DAM").css("border-color","grey"); //Colorea el borde de color gris al estar seleccionado
    $("#ASIR").css("border-color","grey"); //Colorea el borde de color gris al estar seleccionado
    $("#SMR_AS").show(); //Muestra las asignaturas de SMR
    $("#DAM_AS").hide(); //oculta las asignaturas de DAM
	$("#ASIR_AS").hide(); //oculta las asignaturas de ASIR
  });
});

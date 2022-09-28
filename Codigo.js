window.addEventListener("load",function(){
    
    formulario=this.document.getElementsById("formulario");
    formulario.addEventListener("submit",function(){
       event.preventDefault();
      let nombre = document.getElementById("nombre").value;
      let pass = document.getElementById("pwd").value;

      //alert("nombre es " + nombre + "con contraseña " + pass );
      let respuesta = document.getElementById("result");
      if(nombre=="G7S21" && pass=="si se puede"){
        respuesta.innerText="se acepto el ingreso a sistema...";
        respuesta.style.color="blue";
        respuesta.style.fontSize="2em";
        respuesta.style.width="500px";
        respuesta.style.height="150px";
        backgroundColor="white";    
    }else{
        respuesta.innerText="Estas mal de tu cabeza...";
        respuesta.style.color="red"; 
        respuesta.style.fontSize="2em";
        respuesta.style.width="500px";
        respuesta.style.height="150px";
        backgroundColor="cyan";
    }
    });
});
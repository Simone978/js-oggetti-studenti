// Esercizio 2
// In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.

$(document).ready(function(){

  $('.invia').click(function(){
    inviaRicevi();
  });

  $('.form input').keyup(function(event){
    if(event.which == 13){
      inviaRicevi();
    };
  });

  function inviaRicevi(){
    var userText = $('.form input').val();
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var context = {
      title: "il mio messaggio",
      text: userText,
      color: "blue"
    };
    var html = template(context);
    $('.message').append(html);
    setTimeout(function(){
     var pcText = 'ciao';
     var source = $('#entry-template').html();
     var template = Handlebars.compile(source);
     var context = {
       text: pcText,
       color: "red"
     };
     var html = template(context);
     $('.message').append(html);
    },1000);
  };
// var source = document.getElementById("entry-template").innerHTML;
// var template = Handlebars.compile(source);
// var context = { title: "My New Post", body: "This is my first post!" };
// var html = template(context);
// $('.message').append(html);
});

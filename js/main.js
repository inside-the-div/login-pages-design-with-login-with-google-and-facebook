$(document).ready(function () {
   $('.message').click(function(){
      $("form").animate({height:"toggle", opacity:"toggle"},"slow");
   })

   $(".passShowHide").click(function(){
      var pass = $("#signupPassword");
      if(pass.attr("type") === "password")
      {
         pass.attr("type", "text");
         $(".passShowHide").text("hide");
      }
      else{
         pass.attr("type", "password");
         $(".passShowHide").text("show");
      }
   })
});
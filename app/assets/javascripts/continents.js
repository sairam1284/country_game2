
$(document).ready(function() {
  $('#nation').on('keydown', function (e){

     if(e.which === 13){
         var example = $("#nation").val().toLowerCase();
         example=example.replace(/ /g,"_");
         console.log("The value of x is", example);
         $("#"+example).removeClass('hidden');
         $("#"+example).addClass('nationcorrect');
         $('#nation').val("");
   }

   var num = $('.hidden').length;
   var total = $('.natborder').length;
   $('.natcount').text(num+" /");
   percentage = num*100/total;
   $('.natpercent').text(percentage.toFixed(0) + "%");
   if(percentage < 80){
     $('h2').remove('#badstatusmessage');
     $('#goodstatusmessage').text("Getting Close!!");
   }
   if(percentage == 0){
     $('h2').remove('#goodstatusmessage');
     $('#finishedmessage').text("Awesome!! You got them all!!!");
   }

 });
 $('#nationshow').click(function () {
    $("."+"hidden").removeClass('hidden').addClass('nationwrong');
  });

});

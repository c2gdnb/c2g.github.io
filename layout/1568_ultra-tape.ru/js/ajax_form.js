$(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $('#overlay8').fadeIn('fast',function(){ 
                $('#nonebox8').animate({'top':'50%'},500); 
         });
                $('#nonebox').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
                $('#nonebox9').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay9').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
                $('#nonebox6').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay6').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
                $('#nonebox7').animate({'top':'-1100px'},500,function(){ // óáèðàåì íàø áëîê
             $('#overlay7').fadeOut('fast'); // è òåïåðü óáèðàåì îâåðëýé
         });
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
});
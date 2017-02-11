$(document).ready(function(){

    $("#form1").validate({
       rules:{ 
            name:{
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            mail:{
                required: true,
                minlength: 5,
                maxlength: 129,
                email: true,
            },
             place:{
                required: true,
                minlength: 2,
                maxlength: 50,
            },
       },
       messages:{
            name:{
                required: "Пожалуйста введите Ваше имя",
                minlength: "Не думаю что Ваше имя состоит из 1 буквы.",
                maxlength: "У Вас очень красивое, но слишком длиное имя.",
            },
            place:{
                required: "Пожалуйста введите Ваше Место Рождения",
                minlength: "Не думаю что Ваше место рождения состоит из 1 буквы.",
                maxlength: "У Вас очень красивое, но слишком длиное место Рождения.",
            },
            mail:{
                required: "Пожалуйста введите Ваш E-mail",
                minlength: "E-mail должен быть минимум 5 символов",
                maxlength: "E-mail может быть максимум 129 символов",
                email: "Пожалуйста введите корректный адрес",
            },
       }
        
    });


}); //end of ready
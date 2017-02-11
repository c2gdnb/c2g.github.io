$(document).ready(function(){

    $("#ourAwesomeForm1").validate({
       rules:{ 
            name:{
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            email:{
                required: true,
                minlength: 5,
                maxlength: 129,
                email: true,
            },
       },
       messages:{
            name:{
                required: "Пожалуйста введите Ваше имя",
                minlength: "Не думаю что Ваше имя состоит из 1 буквы.",
                maxlength: "У Вас очень красивое, но слишком длиное имя.",
            },
            email:{
                required: "Пожалуйста введите Ваш E-mail",
                minlength: "E-mail должен быть минимум 5 символов",
                maxlength: "E-mail может быть максимум 129 символов",
                email: "Пожалуйста введите корректный адрес",
            },
       }
        
    });

    $("#ourAwesomeForm2").validate({
       rules:{ 
            name:{
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            email:{
                required: true,
                minlength: 5,
                maxlength: 129,
                email: true,
            },
            textarea:{
                required: true,
                minlength: 5,
                maxlength: 129,
                email: false,
            },
            capture:{
                required: true,
                minlength: 5,
                maxlength: 129,
                email: false,
            }
       },
       messages:{
            name:{
                required: "Пожалуйста введите Ваше имя",
                minlength: "Не думаю что Ваше имя состоит из 1 буквы.",
                maxlength: "У Вас очень красивое, но слишком длиное имя.",
            },
            textarea:{
                required: "поле не заполнено",
                minlength: "Не думаю что Ваше имя состоит из 1 буквы.",
                maxlength: "У Вас очень красивое, но слишком длиное имя.",
            },
            capture:{
                required: "неправельно введен код",
                minlength: "Не думаю что Ваше имя состоит из 1 буквы.",
                maxlength: "У Вас очень красивое, но слишком длиное имя.",
            },
            email:{
                required: "Пожалуйста введите Ваш E-mail",
                minlength: "E-mail должен быть минимум 5 символов",
                maxlength: "E-mail может быть максимум 129 символов",
                email: "Пожалуйста введите корректный адрес",
            },
       }
        
    });


    $("#backCallForm").validate({
       rules:{ 
            name:{
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            tel:{
                required: true,
                minlength: 6,
                maxlength: 11,
                digits: true,
            },
       },
       messages:{
            name:{
                required: "Пожалуйста введите Ваше имя",
                minlength: "Не думаю что Ваше имя состоит из 1 буквы.",
                maxlength: "У Вас очень красивое, но слишком длиное имя.",
            },
            tel:{
                required: "Пожалуйста введите Ваш телефон",
                minlength: "Телефон должен быть указан с кодом города",
                maxlength: "Телефон может быть максимум 11 символов",
                digits: "Номер телефона состоит только из цифр",
            },
       }
        
    });

    $("#zakazForm").validate({
       rules:{ 
            name:{
                required: true,
                minlength: 2,
                maxlength: 50,
            },
            email:{
                required: true,
                minlength: 5,
                maxlength: 129,
                email: true,
            },
       },
       messages:{
            name:{
                required: "Пожалуйста введите Ваше имя",
                minlength: "Не думаю что Ваше имя состоит из 1 буквы.",
                maxlength: "У Вас очень красивое, но слишком длиное имя.",
            },
            email:{
                required: "Пожалуйста введите Ваш E-mail",
                minlength: "E-mail должен быть минимум 5 символов",
                maxlength: "E-mail может быть максимум 129 символов",
                email: "Пожалуйста введите корректный адрес",
            },
       }
        
    });


}); //end of ready
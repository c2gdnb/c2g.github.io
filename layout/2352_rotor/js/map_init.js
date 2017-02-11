$(document).ready(function(){  
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [48.470051, 135.064155],
            zoom: 16,
          controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'г. Хабаровск, ул.Комсомольская 62'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images//marker.png',
            // Размеры метки.
            iconImageSize: [65, 98],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -95]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('map1', {
            center: [48.445805, 135.109960],
            zoom: 16,
          controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'г. Хабаровск, ул. Краснореченская, д. 193'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images//marker.png',
            // Размеры метки.
            iconImageSize: [65, 98],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -95]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('map2', {
            center: [48.393322, 135.097860],
            zoom: 16,
          controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'г. Хабаровск, ул. Краснореченская, д. 53'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images//marker.png',
            // Размеры метки.
            iconImageSize: [65, 98],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -95]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});
ymaps.ready(function () {
    var myMap = new ymaps.Map('map3', {
            center: [48.504346, 135.140629],
            zoom: 16,
          controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'г. Хабаровск, ул. Окружная, д.23а'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images//marker.png',
            // Размеры метки.
            iconImageSize: [65, 98],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -95]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});
});
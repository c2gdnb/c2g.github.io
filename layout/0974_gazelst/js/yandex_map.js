ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.742119, 37.558957],
            zoom: 16,
          controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'проезд Серебрякова, 14бс5 '
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images//marker.png',
            // Размеры метки.
            iconImageSize: [32, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -55]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});
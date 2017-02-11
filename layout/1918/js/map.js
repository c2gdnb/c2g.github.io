ymaps.ready(function() {
    var map57503e832bd7d = new ymaps.Map("map57503e832bd7d", {
        center: [55.706765, 37.357692],
        zoom: 10,
        type: 'yandex#map',
        flying: true,
        controls: ['zoomControl']
    });
    map57503e832bd7d.controls.add("zoomControl");
    map57503e832bd7d.controls.add("typeSelector");

    map57503e832bd7d.geoObjects.add(new ymaps.Placemark([55.818872, 37.655095], {
        "metaType": "Point",
        "iconContent": "",
        "balloonContent": "м. ВДНХ Ракетный бул-р д. 17",

    }, {
        iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img//marker.png',
            // Размеры метки.
            iconImageSize: [55, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -15]

    }));
    map57503e832bd7d.geoObjects.add(new ymaps.Placemark([55.698914, 37.505076], {
        "metaType": "Point",
        "iconContent": "",
        "balloonContent": "м. Университет Мичуринский пр-т д. 21 корп. 4"
    }, {
       iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img//marker.png',
            // Размеры метки.
            iconImageSize: [55, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -15]
    }));
    map57503e832bd7d.geoObjects.add(new ymaps.Placemark([55.711752, 37.888396], {
        "metaType": "Point",
        "iconContent": "",
        "balloonContent": "м. Выхино, м.Новокосино, ул.Т.Макаровой д. 8"
    }, {
        iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img//marker.png',
            // Размеры метки.
            iconImageSize: [55, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -15]
    }));
     map57503e832bd7d.geoObjects.add(new ymaps.Placemark([55.817471, 37.648654], {
        "metaType": "Point",
        "iconContent": "",
        "balloonContent": "м. ВДНХ Ярославская улица, кафе «Соната»"
    }, {
        iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img//marker.png',
            // Размеры метки.
            iconImageSize: [55, 54],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -15]
    }));
    map57503e832bd7d.behaviors.disable('scrollZoom');
});
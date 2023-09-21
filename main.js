ymaps.ready(init);
function init() 
{
    var myMap = new ymaps.Map("map", 
    {
        center: [41.015137,28.979530],
         zoom: 10
    }, 
    {
         searchControlProvider: 'yandex#search'
    }),

   
    myGeoObject = new ymaps.GeoObject
    (
        {
            geometry: 
            {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
          
            properties: 
            {
                
                iconContent: 'I\'m draggable',
                hintContent: 'Come on, drag already!'
            }
        },

         {
           
            preset: 'islands#blackStretchyIcon',
           
            draggable: true
        }
        ),
        myPieChart = new ymaps.Placemark
        (
            [
            55.847, 37.6
            ], 
        {
           
            data: 
            [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            
            iconCaption: "Diagram"
        }, 
        {
           
            iconLayout: 'default#pieChart',
          
            iconPieChartRadius: 30,
           
            iconPieChartCoreRadius: 10,
          
            iconPieChartCoreFillStyle: '#ffffff',
          
            iconPieChartStrokeStyle: '#ffffff',
           
            iconPieChartStrokeWidth: 4,
          
            iconPieChartCaptionMaxWidth: 300
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([41.025867, 29.097079], 
        {
            balloonContent: '<strong><b>İstanbul / Ümraniye</b></strong>'
        }, 
        {
            preset: 'islandsdot#icon',
            iconColor: 'red'
        }))

        .add(new ymaps.Placemark([40.997437, 29.098866],
            {
            balloonContent: '<strong><b>İstanbul / Ataşehir</b></strong>'
        },  {
            preset: 'islands#Icon',
            iconColor: '#0095b6'
            
        }))
        .add(new ymaps.Placemark([41.076516, 29.043216], 
           {
            balloonContent: '<strong><b>İstanbul / Bebek</b></strong> '
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#3b5998'
        }))

        .add(new ymaps.Placemark([40.990461, 29.029157],
           {
            balloonContent: '<strong><b>İstanbul / Kadıköy</b></strong>'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#3b5998'
        }))

        .add(new ymaps.Placemark([41.025867, 29.097079], 
           {
            balloonContent: '<strong><b>İstanbul / Ümraniye / Çarşı Metro</b></strong>'
        }, {
            preset: 'islands#Icon',
            iconColor: 'red'
        }));
}
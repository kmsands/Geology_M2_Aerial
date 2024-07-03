ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7851").setExtent([494815.984004, 8072550.278773, 497719.009581, 8074729.596187]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_240525_Site_composite_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "240525_Site_composite",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/240525_Site_composite_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686318.745659, -1973799.047665, 13690974.632713, -1969212.879783]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_240525_Site_composite_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_240525_Site_composite_1];

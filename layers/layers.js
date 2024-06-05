ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:7851").setExtent([490959.507059, 8066860.464709, 505204.268497, 8075577.734362]);
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
var lyr_site_comp_may_2024_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "site_comp_may_2024",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/site_comp_may_2024_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13686318.745659, -1973799.047661, 13690974.580305, -1969212.879783]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_site_comp_may_2024_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_site_comp_may_2024_1];

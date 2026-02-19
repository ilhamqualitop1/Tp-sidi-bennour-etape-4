var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Limitescarrires_1 = new ol.format.GeoJSON();
var features_Limitescarrires_1 = format_Limitescarrires_1.readFeatures(json_Limitescarrires_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitescarrires_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitescarrires_1.addFeatures(features_Limitescarrires_1);
var lyr_Limitescarrires_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitescarrires_1, 
                style: style_Limitescarrires_1,
                popuplayertitle: 'Limites carrières',
                interactive: true,
                title: '<img src="styles/legend/Limitescarrires_1.png" /> Limites carrières'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Limitescarrires_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Limitescarrires_1];
lyr_Limitescarrires_1.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Date 3': 'Date 3', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Remb cumu3': 'Remb cumu3', 'Debl cumu3': 'Debl cumu3', 'Date 4': 'Date 4', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Date 5': 'Date 5', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', });
lyr_Limitescarrires_1.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Date 3': 'DateTime', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Remb cumu3': 'TextEdit', 'Debl cumu3': 'TextEdit', 'Date 4': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Date 5': 'DateTime', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', });
lyr_Limitescarrires_1.set('fieldLabels', {'Layer': 'header label - visible with data', 'Exploitant': 'header label - visible with data', 'X': 'header label - visible with data', 'Y': 'header label - visible with data', 'Surface': 'header label - visible with data', 'Date 1': 'header label - visible with data', 'Date 2': 'header label - visible with data', 'Remblais 2': 'header label - visible with data', 'Deblais 2': 'header label - visible with data', 'Date 3': 'header label - visible with data', 'Remblais 3': 'header label - visible with data', 'Deblais 3': 'header label - visible with data', 'Remb cumu3': 'header label - visible with data', 'Debl cumu3': 'header label - visible with data', 'Date 4': 'header label - visible with data', 'Remblais 4': 'header label - visible with data', 'Deblais 4': 'header label - visible with data', 'Remb cumu4': 'header label - visible with data', 'Debl cumu4': 'header label - visible with data', 'Date 5': 'header label - visible with data', 'Remblais 5': 'header label - visible with data', 'Deblais 5': 'header label - visible with data', 'Remb cumu5': 'header label - visible with data', 'Debl cumu5': 'header label - visible with data', });
lyr_Limitescarrires_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
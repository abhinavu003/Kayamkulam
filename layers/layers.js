ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8502404.592557, 1018572.221813, 8538237.854014, 1039118.495016]);
var wms_layers = [];


        var lyr_OSMMap_0 = new ol.layer.Tile({
            'title': 'OSM Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kayamkulam_1 = new ol.format.GeoJSON();
var features_Kayamkulam_1 = format_Kayamkulam_1.readFeatures(json_Kayamkulam_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kayamkulam_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kayamkulam_1.addFeatures(features_Kayamkulam_1);
var lyr_Kayamkulam_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kayamkulam_1, 
                style: style_Kayamkulam_1,
                popuplayertitle: "Kayamkulam",
                interactive: true,
                title: '<img src="styles/legend/Kayamkulam_1.png" /> Kayamkulam'
            });
var format_Geomorphology_2 = new ol.format.GeoJSON();
var features_Geomorphology_2 = format_Geomorphology_2.readFeatures(json_Geomorphology_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorphology_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorphology_2.addFeatures(features_Geomorphology_2);
var lyr_Geomorphology_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorphology_2, 
                style: style_Geomorphology_2,
                popuplayertitle: "Geomorphology",
                interactive: true,
    title: 'Geomorphology<br />\
    <img src="styles/legend/Geomorphology_2_0.png" /> Alluvial Plain<br />\
    <img src="styles/legend/Geomorphology_2_1.png" /> Coastal Plain<br />\
    <img src="styles/legend/Geomorphology_2_2.png" /> Lower Plateau (Lateritic)<br />\
    <img src="styles/legend/Geomorphology_2_3.png" /> Water Body<br />'
        });
var format_Drainage_3 = new ol.format.GeoJSON();
var features_Drainage_3 = format_Drainage_3.readFeatures(json_Drainage_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drainage_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drainage_3.addFeatures(features_Drainage_3);
var lyr_Drainage_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drainage_3, 
                style: style_Drainage_3,
                popuplayertitle: "Drainage",
                interactive: true,
                title: '<img src="styles/legend/Drainage_3.png" /> Drainage'
            });
var format_Railway_4 = new ol.format.GeoJSON();
var features_Railway_4 = format_Railway_4.readFeatures(json_Railway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_4.addFeatures(features_Railway_4);
var lyr_Railway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_4, 
                style: style_Railway_4,
                popuplayertitle: "Railway",
                interactive: true,
                title: '<img src="styles/legend/Railway_4.png" /> Railway'
            });
var format_Road_5 = new ol.format.GeoJSON();
var features_Road_5 = format_Road_5.readFeatures(json_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_5.addFeatures(features_Road_5);
var lyr_Road_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_5, 
                style: style_Road_5,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_5.png" /> Road'
            });
var format_Junction_6 = new ol.format.GeoJSON();
var features_Junction_6 = format_Junction_6.readFeatures(json_Junction_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Junction_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Junction_6.addFeatures(features_Junction_6);
var lyr_Junction_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Junction_6, 
                style: style_Junction_6,
                popuplayertitle: "Junction",
                interactive: true,
                title: '<img src="styles/legend/Junction_6.png" /> Junction'
            });
var format_ImportentPlaces_7 = new ol.format.GeoJSON();
var features_ImportentPlaces_7 = format_ImportentPlaces_7.readFeatures(json_ImportentPlaces_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImportentPlaces_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImportentPlaces_7.addFeatures(features_ImportentPlaces_7);
var lyr_ImportentPlaces_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImportentPlaces_7, 
                style: style_ImportentPlaces_7,
                popuplayertitle: "Importent Places",
                interactive: true,
                title: '<img src="styles/legend/ImportentPlaces_7.png" /> Importent Places'
            });

lyr_OSMMap_0.setVisible(true);lyr_Kayamkulam_1.setVisible(true);lyr_Geomorphology_2.setVisible(true);lyr_Drainage_3.setVisible(true);lyr_Railway_4.setVisible(true);lyr_Road_5.setVisible(true);lyr_Junction_6.setVisible(true);lyr_ImportentPlaces_7.setVisible(true);
var layersList = [lyr_OSMMap_0,lyr_Kayamkulam_1,lyr_Geomorphology_2,lyr_Drainage_3,lyr_Railway_4,lyr_Road_5,lyr_Junction_6,lyr_ImportentPlaces_7];
lyr_Kayamkulam_1.set('fieldAliases', {'boundary': 'boundary', 'name': 'name', 'political_': 'political_', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', });
lyr_Geomorphology_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Drainage_3.set('fieldAliases', {'fid': 'fid', 'ORDER1': 'ORDER1', });
lyr_Railway_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Road_5.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'Length': 'Length', });
lyr_Junction_6.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_ImportentPlaces_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'image': 'image', 'Place Data_NAME': 'Place Data_NAME', 'Place Data_LONGITUDE': 'Place Data_LONGITUDE', 'Place Data_LATITUDE': 'Place Data_LATITUDE', });
lyr_Kayamkulam_1.set('fieldImages', {'boundary': 'TextEdit', 'name': 'TextEdit', 'political_': '', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Geomorphology_2.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Drainage_3.set('fieldImages', {'fid': 'TextEdit', 'ORDER1': 'Range', });
lyr_Railway_4.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Road_5.set('fieldImages', {'fid': 'TextEdit', 'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_Junction_6.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_ImportentPlaces_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'image': 'ExternalResource', 'Place Data_NAME': 'TextEdit', 'Place Data_LONGITUDE': 'TextEdit', 'Place Data_LATITUDE': 'TextEdit', });
lyr_Kayamkulam_1.set('fieldLabels', {'boundary': 'no label', 'name': 'no label', 'political_': 'no label', 'type': 'no label', 'wikidata': 'no label', 'wikipedia': 'no label', });
lyr_Geomorphology_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Drainage_3.set('fieldLabels', {'fid': 'no label', 'ORDER1': 'no label', });
lyr_Railway_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Road_5.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'Length': 'no label', });
lyr_Junction_6.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Jn_Name': 'no label', 'District': 'no label', 'Name': 'no label', });
lyr_ImportentPlaces_7.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'image': 'no label', 'Place Data_NAME': 'no label', 'Place Data_LONGITUDE': 'no label', 'Place Data_LATITUDE': 'no label', });
lyr_ImportentPlaces_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
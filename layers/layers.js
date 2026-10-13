var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lab1_1 = new ol.format.GeoJSON();
var features_Lab1_1 = format_Lab1_1.readFeatures(json_Lab1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lab1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lab1_1.addFeatures(features_Lab1_1);
var lyr_Lab1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lab1_1, 
                style: style_Lab1_1,
                popuplayertitle: 'Lab1',
                interactive: true,
                title: '<img src="styles/legend/Lab1_1.png" /> Lab1'
            });
var format_building_Lab2building_2 = new ol.format.GeoJSON();
var features_building_Lab2building_2 = format_building_Lab2building_2.readFeatures(json_building_Lab2building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_Lab2building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_Lab2building_2.addFeatures(features_building_Lab2building_2);
var lyr_building_Lab2building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_Lab2building_2, 
                style: style_building_Lab2building_2,
                popuplayertitle: 'building_Lab2 — building',
                interactive: true,
                title: '<img src="styles/legend/building_Lab2building_2.png" /> building_Lab2 — building'
            });
var format_highway_Lab2highway_3 = new ol.format.GeoJSON();
var features_highway_Lab2highway_3 = format_highway_Lab2highway_3.readFeatures(json_highway_Lab2highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_Lab2highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_Lab2highway_3.addFeatures(features_highway_Lab2highway_3);
var lyr_highway_Lab2highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_Lab2highway_3, 
                style: style_highway_Lab2highway_3,
                popuplayertitle: 'highway_Lab2 — highway',
                interactive: false,
                title: '<img src="styles/legend/highway_Lab2highway_3.png" /> highway_Lab2 — highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Lab1_1.setVisible(true);lyr_building_Lab2building_2.setVisible(true);lyr_highway_Lab2highway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Lab1_1,lyr_building_Lab2building_2,lyr_highway_Lab2highway_3];
lyr_Lab1_1.set('fieldAliases', {'name': 'name', });
lyr_building_Lab2building_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'addr:street': 'addr:street', 'description': 'description', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'waterway': 'waterway', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insulated': 'gas_insulated', 'frequency': 'frequency', 'branch': 'branch', 'addr:place': 'addr:place', 'name:ru': 'name:ru', 'amenity': 'amenity', 'shop': 'shop', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_Lab2highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lit': 'lit', 'trail_visibility': 'trail_visibility', 'tracktype': 'tracktype', 'description': 'description', 'footway': 'footway', 'ford': 'ford', 'depth': 'depth', 'oneway': 'oneway', 'sac_scale': 'sac_scale', 'man_made': 'man_made', 'smoothness': 'smoothness', 'railway': 'railway', 'ref': 'ref', 'old_ref': 'old_ref', 'name': 'name', 'lanes': 'lanes', 'bicycle': 'bicycle', 'access': 'access', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', 'service': 'service', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Lab1_1.set('fieldImages', {'name': 'TextEdit', });
lyr_building_Lab2building_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tourism': '', 'addr:street': '', 'description': '', 'religion': '', 'training': '', 'sport': '', 'leisure': '', 'waterway': '', 'voltage': '', 'substation': '', 'power': '', 'operator': '', 'location': '', 'gas_insulated': '', 'frequency': '', 'branch': '', 'addr:place': '', 'name:ru': '', 'amenity': '', 'shop': '', 'building:levels': '', 'type': '', 'name': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'address': '', });
lyr_highway_Lab2highway_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'lit': 'TextEdit', 'trail_visibility': 'TextEdit', 'tracktype': 'TextEdit', 'description': 'TextEdit', 'footway': 'TextEdit', 'ford': 'TextEdit', 'depth': 'TextEdit', 'oneway': 'TextEdit', 'sac_scale': 'TextEdit', 'man_made': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'bicycle': 'TextEdit', 'access': 'TextEdit', 'ramp': 'TextEdit', 'incline': 'TextEdit', 'handrail': 'TextEdit', 'foot': 'TextEdit', 'service': 'TextEdit', 'surface': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Lab1_1.set('fieldLabels', {'name': 'no label', });
lyr_building_Lab2building_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'description': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'waterway': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'frequency': 'no label', 'branch': 'no label', 'addr:place': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'shop': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_Lab2highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'lit': 'no label', 'trail_visibility': 'no label', 'tracktype': 'no label', 'description': 'no label', 'footway': 'no label', 'ford': 'no label', 'depth': 'no label', 'oneway': 'no label', 'sac_scale': 'no label', 'man_made': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name': 'no label', 'lanes': 'no label', 'bicycle': 'no label', 'access': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', 'service': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_highway_Lab2highway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
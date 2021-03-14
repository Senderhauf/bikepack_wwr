var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1 = new ol.format.GeoJSON();
var features_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1 = format_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1.readFeatures(json_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1.addFeatures(features_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1);
var lyr_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1, 
                style: style_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1,
                interactive: true,
                title: '<img src="styles/legend/AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1.png" /> AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003'
            });
var format_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2 = new ol.format.GeoJSON();
var features_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2 = format_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2.readFeatures(json_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2.addFeatures(features_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2);
var lyr_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2, 
                style: style_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2,
                interactive: true,
                title: '<img src="styles/legend/WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2.png" /> WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003'
            });
var format_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3 = new ol.format.GeoJSON();
var features_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3 = format_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3.readFeatures(json_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3.addFeatures(features_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3);
var lyr_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3, 
                style: style_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3,
                interactive: true,
                title: '<img src="styles/legend/WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3.png" /> WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003'
            });
var format_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4 = new ol.format.GeoJSON();
var features_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4 = format_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4.readFeatures(json_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4.addFeatures(features_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4);
var lyr_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4, 
                style: style_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4,
                interactive: true,
                title: '<img src="styles/legend/WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4.png" /> WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003'
            });
var format_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5 = new ol.format.GeoJSON();
var features_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5 = format_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5.readFeatures(json_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5.addFeatures(features_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5);
var lyr_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5, 
                style: style_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5,
                interactive: true,
                title: '<img src="styles/legend/WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5.png" /> WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003'
            });
var format_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6 = new ol.format.GeoJSON();
var features_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6 = format_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6.readFeatures(json_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6.addFeatures(features_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6);
var lyr_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6, 
                style: style_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6,
                interactive: true,
                title: '<img src="styles/legend/WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6.png" /> WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003'
            });
var format_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7 = new ol.format.GeoJSON();
var features_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7 = format_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7.readFeatures(json_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7.addFeatures(features_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7);
var lyr_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7, 
                style: style_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7,
                interactive: true,
                title: '<img src="styles/legend/WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7.png" /> WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003'
            });
var format_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8 = new ol.format.GeoJSON();
var features_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8 = format_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8.readFeatures(json_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8.addFeatures(features_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8);
var lyr_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8, 
                style: style_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8,
                interactive: true,
                title: '<img src="styles/legend/WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8.png" /> WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003'
            });
var format_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9 = new ol.format.GeoJSON();
var features_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9 = format_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9.readFeatures(json_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9.addFeatures(features_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9);
var lyr_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9, 
                style: style_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9,
                interactive: true,
                title: '<img src="styles/legend/WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9.png" /> WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003'
            });
var format_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10 = new ol.format.GeoJSON();
var features_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10 = format_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10.readFeatures(json_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10.addFeatures(features_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10);
var lyr_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10, 
                style: style_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10,
                interactive: true,
                title: '<img src="styles/legend/WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10.png" /> WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003'
            });
var format_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11 = new ol.format.GeoJSON();
var features_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11 = format_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11.readFeatures(json_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11.addFeatures(features_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11);
var lyr_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11, 
                style: style_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11,
                interactive: true,
                title: '<img src="styles/legend/WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11.png" /> WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003'
            });
var format_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12 = new ol.format.GeoJSON();
var features_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12 = format_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12.readFeatures(json_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12.addFeatures(features_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12);
var lyr_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12, 
                style: style_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12,
                interactive: true,
                title: '<img src="styles/legend/WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12.png" /> WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003'
            });
var format_WWR_Seg_8___waypoints_v1_waypoints_13 = new ol.format.GeoJSON();
var features_WWR_Seg_8___waypoints_v1_waypoints_13 = format_WWR_Seg_8___waypoints_v1_waypoints_13.readFeatures(json_WWR_Seg_8___waypoints_v1_waypoints_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WWR_Seg_8___waypoints_v1_waypoints_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WWR_Seg_8___waypoints_v1_waypoints_13.addFeatures(features_WWR_Seg_8___waypoints_v1_waypoints_13);
var lyr_WWR_Seg_8___waypoints_v1_waypoints_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WWR_Seg_8___waypoints_v1_waypoints_13, 
                style: style_WWR_Seg_8___waypoints_v1_waypoints_13,
                interactive: true,
                title: '<img src="styles/legend/WWR_Seg_8___waypoints_v1_waypoints_13.png" /> WWR_Seg_8___waypoints_v1_waypoints'
            });
var group_Route = new ol.layer.Group({
                                layers: [lyr_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1,lyr_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2,lyr_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3,lyr_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4,lyr_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5,lyr_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6,lyr_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7,lyr_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8,lyr_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9,lyr_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10,lyr_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11,lyr_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12,lyr_WWR_Seg_8___waypoints_v1_waypoints_13,],
                                title: "Route "});
var group_GoogleHybrid = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,],
                                title: "Google Hybrid"});

lyr_GoogleHybrid_0.setVisible(true);lyr_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1.setVisible(true);lyr_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2.setVisible(true);lyr_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3.setVisible(true);lyr_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4.setVisible(true);lyr_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5.setVisible(true);lyr_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6.setVisible(true);lyr_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7.setVisible(true);lyr_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8.setVisible(true);lyr_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9.setVisible(true);lyr_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10.setVisible(true);lyr_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11.setVisible(true);lyr_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12.setVisible(true);lyr_WWR_Seg_8___waypoints_v1_waypoints_13.setVisible(true);
var layersList = [group_GoogleHybrid,group_Route];
lyr_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'line': 'line', });
lyr_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', });
lyr_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', });
lyr_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', });
lyr_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', });
lyr_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'line': 'line', });
lyr_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'line': 'line', });
lyr_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'line': 'line', });
lyr_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'line': 'line', });
lyr_WWR_Seg_8___waypoints_v1_waypoints_13.set('fieldAliases', {'fid': 'fid', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7.set('fieldImages', {'fid': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9.set('fieldImages', {'fid': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11.set('fieldImages', {'fid': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'line': 'TextEdit', });
lyr_WWR_Seg_8___waypoints_v1_waypoints_13.set('fieldImages', {'fid': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_AZT800_2021v5_tracks_3a429768_7f4a_4e38_b012_01998f4111da_reproj_esri_102003_1.set('fieldLabels', {});
lyr_WWR_alt_AZ___AZT_link_v1_tracks_bca71486_5ad6_426d_ac08_8a03b4e8e935_reproj_esri_102003_2.set('fieldLabels', {});
lyr_WWR_alt_AZ___Kaibab_Alt_v1_tracks_db568d89_39dd_4ec8_829f_50258bf94118_reproj_esri_102003_3.set('fieldLabels', {});
lyr_WWR_alt_UT___Mirror_Lake_Alt_Shortcut_tracks_ec2ef6db_19d6_4176_88ea_f070e68d8c50_reproj_esri_102003_4.set('fieldLabels', {});
lyr_WWR_alt_UT___Mirror_Lake_Alt_tracks_b2507276_d84f_45a7_a87a_c4b9e3d21665_reproj_esri_102003_5.set('fieldLabels', {});
lyr_WWR_Seg_5___Idaho_border_to_Soldier_Summit_UT_SoBo_v1_tracks_4f34d1f4_7cbd_4a57_97f6_faf6e040d58e_reproj_esri_102003_6.set('fieldLabels', {});
lyr_WWR_Seg_5___waypoints_v1_waypoints_03935101_5e17_4f39_9051_54ef19c22931_reproj_esri_102003_7.set('fieldLabels', {});
lyr_WWR_Seg_6___Soldier_Summit_UT_to_Kanab_UT_SoBo_v1_tracks_59e88e4a_94c2_4a83_a6c9_6383f3a4661b_reproj_esri_102003_8.set('fieldLabels', {});
lyr_WWR_Seg_6___waypoints_v1_waypoints_c128581d_e0d6_406e_a008_c1c826378bb4_reproj_esri_102003_9.set('fieldLabels', {});
lyr_WWR_Seg_7___Kanab_UT_to_Grand_Canyon_Park_AZ_SoBo_v1_tracks_98a4b5ce_3663_40fc_96e4_8fe4146044f8_reproj_esri_102003_10.set('fieldLabels', {});
lyr_WWR_Seg_7___waypoints_v1_waypoints_reproj_esri_102003_11.set('fieldLabels', {});
lyr_WWR_Seg_8___Grand_Canyon_Park_AZ_to_Globe_AZ_SoBo_v1_tracks_reproj_esri_102003_12.set('fieldLabels', {});
lyr_WWR_Seg_8___waypoints_v1_waypoints_13.set('fieldLabels', {});
lyr_WWR_Seg_8___waypoints_v1_waypoints_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1383094.719055, 7481773.783623, 1395452.297419, 7490368.500754]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Kommunegrnse_1 = new ol.format.GeoJSON();
var features_Kommunegrnse_1 = format_Kommunegrnse_1.readFeatures(json_Kommunegrnse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommunegrnse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommunegrnse_1.addFeatures(features_Kommunegrnse_1);
var lyr_Kommunegrnse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommunegrnse_1, 
                style: style_Kommunegrnse_1,
                popuplayertitle: 'Kommunegrænse',
                interactive: true,
                title: '<img src="styles/legend/Kommunegrnse_1.png" /> Kommunegrænse'
            });
var format_kommuneplan_2 = new ol.format.GeoJSON();
var features_kommuneplan_2 = format_kommuneplan_2.readFeatures(json_kommuneplan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_2.addFeatures(features_kommuneplan_2);
var lyr_kommuneplan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_2, 
                style: style_kommuneplan_2,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_2.png" /> kommuneplan'
            });
var format_Nytemakort_3 = new ol.format.GeoJSON();
var features_Nytemakort_3 = format_Nytemakort_3.readFeatures(json_Nytemakort_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nytemakort_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nytemakort_3.addFeatures(features_Nytemakort_3);
var lyr_Nytemakort_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nytemakort_3, 
                style: style_Nytemakort_3,
                popuplayertitle: 'Nytemakort',
                interactive: true,
    title: 'Nytemakort<br />\
    <img src="styles/legend/Nytemakort_3_0.png" /> 001<br />\
    <img src="styles/legend/Nytemakort_3_1.png" /> 101-1<br />\
    <img src="styles/legend/Nytemakort_3_2.png" /> 102<br />\
    <img src="styles/legend/Nytemakort_3_3.png" /> 103<br />\
    <img src="styles/legend/Nytemakort_3_4.png" /> 104<br />\
    <img src="styles/legend/Nytemakort_3_5.png" /> 105<br />\
    <img src="styles/legend/Nytemakort_3_6.png" /> 106<br />\
    <img src="styles/legend/Nytemakort_3_7.png" /> 108<br />\
    <img src="styles/legend/Nytemakort_3_8.png" /> 109-1<br />\
    <img src="styles/legend/Nytemakort_3_9.png" /> 112<br />\
    <img src="styles/legend/Nytemakort_3_10.png" /> 115<br />\
    <img src="styles/legend/Nytemakort_3_11.png" /> 116<br />\
    <img src="styles/legend/Nytemakort_3_12.png" /> 118<br />\
    <img src="styles/legend/Nytemakort_3_13.png" /> 119<br />\
    <img src="styles/legend/Nytemakort_3_14.png" /> 120<br />\
    <img src="styles/legend/Nytemakort_3_15.png" /> 121<br />\
    <img src="styles/legend/Nytemakort_3_16.png" /> 122<br />\
    <img src="styles/legend/Nytemakort_3_17.png" /> 124<br />\
    <img src="styles/legend/Nytemakort_3_18.png" /> 126<br />\
    <img src="styles/legend/Nytemakort_3_19.png" /> 127<br />\
    <img src="styles/legend/Nytemakort_3_20.png" /> 128<br />\
    <img src="styles/legend/Nytemakort_3_21.png" /> 131<br />\
    <img src="styles/legend/Nytemakort_3_22.png" /> 132<br />\
    <img src="styles/legend/Nytemakort_3_23.png" /> 133<br />\
    <img src="styles/legend/Nytemakort_3_24.png" /> 134<br />\
    <img src="styles/legend/Nytemakort_3_25.png" /> 135<br />\
    <img src="styles/legend/Nytemakort_3_26.png" /> 137<br />\
    <img src="styles/legend/Nytemakort_3_27.png" /> 139<br />\
    <img src="styles/legend/Nytemakort_3_28.png" /> 140<br />\
    <img src="styles/legend/Nytemakort_3_29.png" /> 141<br />\
    <img src="styles/legend/Nytemakort_3_30.png" /> 142<br />\
    <img src="styles/legend/Nytemakort_3_31.png" /> 143<br />\
    <img src="styles/legend/Nytemakort_3_32.png" /> 144<br />\
    <img src="styles/legend/Nytemakort_3_33.png" /> 147<br />\
    <img src="styles/legend/Nytemakort_3_34.png" /> 148<br />\
    <img src="styles/legend/Nytemakort_3_35.png" /> 149<br />\
    <img src="styles/legend/Nytemakort_3_36.png" /> 150<br />\
    <img src="styles/legend/Nytemakort_3_37.png" /> 151<br />\
    <img src="styles/legend/Nytemakort_3_38.png" /> 152<br />\
    <img src="styles/legend/Nytemakort_3_39.png" /> 154<br />\
    <img src="styles/legend/Nytemakort_3_40.png" /> 202<br />\
    <img src="styles/legend/Nytemakort_3_41.png" /> 203<br />\
    <img src="styles/legend/Nytemakort_3_42.png" /> 206<br />\
    <img src="styles/legend/Nytemakort_3_43.png" /> 207<br />\
    <img src="styles/legend/Nytemakort_3_44.png" /> 208<br />\
    <img src="styles/legend/Nytemakort_3_45.png" /> 209<br />\
    <img src="styles/legend/Nytemakort_3_46.png" /> 210<br />\
    <img src="styles/legend/Nytemakort_3_47.png" /> 211<br />\
    <img src="styles/legend/Nytemakort_3_48.png" /> 216<br />\
    <img src="styles/legend/Nytemakort_3_49.png" /> 220<br />\
    <img src="styles/legend/Nytemakort_3_50.png" /> 221<br />\
    <img src="styles/legend/Nytemakort_3_51.png" /> 225<br />\
    <img src="styles/legend/Nytemakort_3_52.png" /> 226<br />\
    <img src="styles/legend/Nytemakort_3_53.png" /> 228<br />\
    <img src="styles/legend/Nytemakort_3_54.png" /> 229<br />\
    <img src="styles/legend/Nytemakort_3_55.png" /> 230<br />\
    <img src="styles/legend/Nytemakort_3_56.png" /> 231<br />\
    <img src="styles/legend/Nytemakort_3_57.png" /> 232<br />\
    <img src="styles/legend/Nytemakort_3_58.png" /> 233<br />\
    <img src="styles/legend/Nytemakort_3_59.png" /> 234<br />\
    <img src="styles/legend/Nytemakort_3_60.png" /> 236<br />\
    <img src="styles/legend/Nytemakort_3_61.png" /> 237<br />\
    <img src="styles/legend/Nytemakort_3_62.png" /> 238<br />\
    <img src="styles/legend/Nytemakort_3_63.png" /> 239<br />\
    <img src="styles/legend/Nytemakort_3_64.png" /> 240<br />\
    <img src="styles/legend/Nytemakort_3_65.png" /> 241<br />\
    <img src="styles/legend/Nytemakort_3_66.png" /> 301-1<br />\
    <img src="styles/legend/Nytemakort_3_67.png" /> 303<br />\
    <img src="styles/legend/Nytemakort_3_68.png" /> 304<br />\
    <img src="styles/legend/Nytemakort_3_69.png" /> 305<br />\
    <img src="styles/legend/Nytemakort_3_70.png" /> 306<br />\
    <img src="styles/legend/Nytemakort_3_71.png" /> 313<br />\
    <img src="styles/legend/Nytemakort_3_72.png" /> 314<br />\
    <img src="styles/legend/Nytemakort_3_73.png" /> 316<br />\
    <img src="styles/legend/Nytemakort_3_74.png" /> 322<br />\
    <img src="styles/legend/Nytemakort_3_75.png" /> 323<br />\
    <img src="styles/legend/Nytemakort_3_76.png" /> 324<br />\
    <img src="styles/legend/Nytemakort_3_77.png" /> 325<br />\
    <img src="styles/legend/Nytemakort_3_78.png" /> 326<br />\
    <img src="styles/legend/Nytemakort_3_79.png" /> 327<br />\
    <img src="styles/legend/Nytemakort_3_80.png" /> 328<br />\
    <img src="styles/legend/Nytemakort_3_81.png" /> 329<br />\
    <img src="styles/legend/Nytemakort_3_82.png" /> 330<br />\
    <img src="styles/legend/Nytemakort_3_83.png" /> 331<br />\
    <img src="styles/legend/Nytemakort_3_84.png" /> 332<br />\
    <img src="styles/legend/Nytemakort_3_85.png" /> 335<br />\
    <img src="styles/legend/Nytemakort_3_86.png" /> 338<br />\
    <img src="styles/legend/Nytemakort_3_87.png" /> 339<br />\
    <img src="styles/legend/Nytemakort_3_88.png" /> 340<br />\
    <img src="styles/legend/Nytemakort_3_89.png" /> 341<br />\
    <img src="styles/legend/Nytemakort_3_90.png" /> 342<br />\
    <img src="styles/legend/Nytemakort_3_91.png" /> 343<br />\
    <img src="styles/legend/Nytemakort_3_92.png" /> 345<br />\
    <img src="styles/legend/Nytemakort_3_93.png" /> 403-1<br />\
    <img src="styles/legend/Nytemakort_3_94.png" /> 404<br />\
    <img src="styles/legend/Nytemakort_3_95.png" /> 405<br />\
    <img src="styles/legend/Nytemakort_3_96.png" /> 407<br />\
    <img src="styles/legend/Nytemakort_3_97.png" /> 408<br />\
    <img src="styles/legend/Nytemakort_3_98.png" /> 409<br />\
    <img src="styles/legend/Nytemakort_3_99.png" /> 411<br />\
    <img src="styles/legend/Nytemakort_3_100.png" /> 412<br />\
    <img src="styles/legend/Nytemakort_3_101.png" /> 418<br />\
    <img src="styles/legend/Nytemakort_3_102.png" /> 423<br />\
    <img src="styles/legend/Nytemakort_3_103.png" /> 429<br />\
    <img src="styles/legend/Nytemakort_3_104.png" /> 432<br />\
    <img src="styles/legend/Nytemakort_3_105.png" /> 433<br />\
    <img src="styles/legend/Nytemakort_3_106.png" /> 440<br />\
    <img src="styles/legend/Nytemakort_3_107.png" /> 441<br />\
    <img src="styles/legend/Nytemakort_3_108.png" /> 447<br />\
    <img src="styles/legend/Nytemakort_3_109.png" /> 448<br />\
    <img src="styles/legend/Nytemakort_3_110.png" /> 452<br />\
    <img src="styles/legend/Nytemakort_3_111.png" /> 454<br />\
    <img src="styles/legend/Nytemakort_3_112.png" /> 455<br />\
    <img src="styles/legend/Nytemakort_3_113.png" /> 456<br />\
    <img src="styles/legend/Nytemakort_3_114.png" /> 457<br />\
    <img src="styles/legend/Nytemakort_3_115.png" /> 458<br />\
    <img src="styles/legend/Nytemakort_3_116.png" /> 459<br />\
    <img src="styles/legend/Nytemakort_3_117.png" /> 462<br />\
    <img src="styles/legend/Nytemakort_3_118.png" /> 463<br />\
    <img src="styles/legend/Nytemakort_3_119.png" /> 464<br />\
    <img src="styles/legend/Nytemakort_3_120.png" /> 466<br />\
    <img src="styles/legend/Nytemakort_3_121.png" /> 467<br />\
    <img src="styles/legend/Nytemakort_3_122.png" /> 468<br />\
    <img src="styles/legend/Nytemakort_3_123.png" /> 469<br />\
    <img src="styles/legend/Nytemakort_3_124.png" /> 470<br />\
    <img src="styles/legend/Nytemakort_3_125.png" /> 471<br />\
    <img src="styles/legend/Nytemakort_3_126.png" /> 472<br />\
    <img src="styles/legend/Nytemakort_3_127.png" /> 473<br />\
    <img src="styles/legend/Nytemakort_3_128.png" /> 475<br />\
    <img src="styles/legend/Nytemakort_3_129.png" /> 476<br />\
    <img src="styles/legend/Nytemakort_3_130.png" /> 504<br />\
    <img src="styles/legend/Nytemakort_3_131.png" /> 507<br />\
    <img src="styles/legend/Nytemakort_3_132.png" /> 508<br />\
    <img src="styles/legend/Nytemakort_3_133.png" /> 510<br />\
    <img src="styles/legend/Nytemakort_3_134.png" /> 511<br />\
    <img src="styles/legend/Nytemakort_3_135.png" /> 516<br />\
    <img src="styles/legend/Nytemakort_3_136.png" /> 518<br />\
    <img src="styles/legend/Nytemakort_3_137.png" /> 519<br />\
    <img src="styles/legend/Nytemakort_3_138.png" /> A1<br />\
    <img src="styles/legend/Nytemakort_3_139.png" /> A10<br />\
    <img src="styles/legend/Nytemakort_3_140.png" /> A11<br />\
    <img src="styles/legend/Nytemakort_3_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Nytemakort_3_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Nytemakort_3_143.png" /> A13<br />\
    <img src="styles/legend/Nytemakort_3_144.png" /> A14<br />\
    <img src="styles/legend/Nytemakort_3_145.png" /> A15<br />\
    <img src="styles/legend/Nytemakort_3_146.png" /> A3<br />\
    <img src="styles/legend/Nytemakort_3_147.png" /> A5<br />\
    <img src="styles/legend/Nytemakort_3_148.png" /> A7<br />\
    <img src="styles/legend/Nytemakort_3_149.png" /> A8<br />\
    <img src="styles/legend/Nytemakort_3_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Nytemakort_3_151.png" /> B17<br />\
    <img src="styles/legend/Nytemakort_3_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Nytemakort_3_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Nytemakort_3_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/Nytemakort_3_155.png" /> H10<br />\
    <img src="styles/legend/Nytemakort_3_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Nytemakort_3_157.png" /> H11<br />\
    <img src="styles/legend/Nytemakort_3_158.png" /> H12<br />\
    <img src="styles/legend/Nytemakort_3_159.png" /> H13<br />\
    <img src="styles/legend/Nytemakort_3_160.png" /> H14<br />\
    <img src="styles/legend/Nytemakort_3_161.png" /> H15<br />\
    <img src="styles/legend/Nytemakort_3_162.png" /> H16<br />\
    <img src="styles/legend/Nytemakort_3_163.png" /> H17<br />\
    <img src="styles/legend/Nytemakort_3_164.png" /> H18<br />\
    <img src="styles/legend/Nytemakort_3_165.png" /> H20<br />\
    <img src="styles/legend/Nytemakort_3_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Nytemakort_3_167.png" /> H3<br />\
    <img src="styles/legend/Nytemakort_3_168.png" /> H4<br />\
    <img src="styles/legend/Nytemakort_3_169.png" /> H5<br />\
    <img src="styles/legend/Nytemakort_3_170.png" /> H9<br />\
    <img src="styles/legend/Nytemakort_3_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/Nytemakort_3_172.png" /> <br />' });
var format_bindnger_lokalplaner_4 = new ol.format.GeoJSON();
var features_bindnger_lokalplaner_4 = format_bindnger_lokalplaner_4.readFeatures(json_bindnger_lokalplaner_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bindnger_lokalplaner_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bindnger_lokalplaner_4.addFeatures(features_bindnger_lokalplaner_4);
var lyr_bindnger_lokalplaner_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bindnger_lokalplaner_4, 
                style: style_bindnger_lokalplaner_4,
                popuplayertitle: 'bindnger_lokalplaner',
                interactive: true,
    title: 'bindnger_lokalplaner<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_0.png" /> <br />\
    <img src="styles/legend/bindnger_lokalplaner_4_1.png" /> 001<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_2.png" /> 101-1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_3.png" /> 102<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_4.png" /> 103<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_5.png" /> 104<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_6.png" /> 105<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_7.png" /> 106<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_8.png" /> 108<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_9.png" /> 109-1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_10.png" /> 112<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_11.png" /> 115<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_12.png" /> 116<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_13.png" /> 118<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_14.png" /> 119<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_15.png" /> 120<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_16.png" /> 121<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_17.png" /> 122<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_18.png" /> 124<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_19.png" /> 126<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_20.png" /> 127<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_21.png" /> 128<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_22.png" /> 131<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_23.png" /> 132<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_24.png" /> 133<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_25.png" /> 134<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_26.png" /> 135<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_27.png" /> 137<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_28.png" /> 139<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_29.png" /> 140<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_30.png" /> 141<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_31.png" /> 142<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_32.png" /> 143<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_33.png" /> 144<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_34.png" /> 147<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_35.png" /> 148<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_36.png" /> 149<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_37.png" /> 150<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_38.png" /> 151<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_39.png" /> 152<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_40.png" /> 154<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_41.png" /> 202<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_42.png" /> 203<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_43.png" /> 206<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_44.png" /> 207<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_45.png" /> 208<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_46.png" /> 209<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_47.png" /> 210<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_48.png" /> 211<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_49.png" /> 216<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_50.png" /> 220<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_51.png" /> 221<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_52.png" /> 225<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_53.png" /> 226<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_54.png" /> 228<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_55.png" /> 229<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_56.png" /> 230<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_57.png" /> 231<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_58.png" /> 232<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_59.png" /> 233<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_60.png" /> 234<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_61.png" /> 236<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_62.png" /> 237<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_63.png" /> 238<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_64.png" /> 239<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_65.png" /> 240<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_66.png" /> 241<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_67.png" /> 301-1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_68.png" /> 303<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_69.png" /> 304<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_70.png" /> 305<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_71.png" /> 306<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_72.png" /> 313<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_73.png" /> 314<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_74.png" /> 316<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_75.png" /> 322<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_76.png" /> 323<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_77.png" /> 324<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_78.png" /> 325<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_79.png" /> 326<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_80.png" /> 327<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_81.png" /> 328<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_82.png" /> 329<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_83.png" /> 330<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_84.png" /> 331<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_85.png" /> 332<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_86.png" /> 335<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_87.png" /> 338<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_88.png" /> 339<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_89.png" /> 340<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_90.png" /> 341<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_91.png" /> 342<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_92.png" /> 343<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_93.png" /> 345<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_94.png" /> 403-1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_95.png" /> 404<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_96.png" /> 405<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_97.png" /> 407<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_98.png" /> 408<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_99.png" /> 409<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_100.png" /> 411<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_101.png" /> 412<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_102.png" /> 418<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_103.png" /> 423<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_104.png" /> 429<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_105.png" /> 432<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_106.png" /> 433<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_107.png" /> 440<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_108.png" /> 441<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_109.png" /> 447<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_110.png" /> 448<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_111.png" /> 452<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_112.png" /> 454<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_113.png" /> 455<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_114.png" /> 456<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_115.png" /> 457<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_116.png" /> 458<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_117.png" /> 459<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_118.png" /> 462<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_119.png" /> 463<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_120.png" /> 464<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_121.png" /> 466<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_122.png" /> 467<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_123.png" /> 468<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_124.png" /> 469<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_125.png" /> 470<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_126.png" /> 471<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_127.png" /> 472<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_128.png" /> 473<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_129.png" /> 475<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_130.png" /> 476<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_131.png" /> 504<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_132.png" /> 507<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_133.png" /> 508<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_134.png" /> 510<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_135.png" /> 511<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_136.png" /> 516<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_137.png" /> 518<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_138.png" /> 519<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_139.png" /> A1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_140.png" /> A10<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_141.png" /> A11<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_142.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_143.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_144.png" /> A13<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_145.png" /> A14<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_146.png" /> A15<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_147.png" /> A3<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_148.png" /> A5<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_149.png" /> A7<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_150.png" /> A8<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_151.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_152.png" /> B17<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_153.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_154.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_155.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_156.png" /> H10<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_157.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_158.png" /> H11<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_159.png" /> H12<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_160.png" /> H13<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_161.png" /> H14<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_162.png" /> H15<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_163.png" /> H16<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_164.png" /> H17<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_165.png" /> H18<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_166.png" /> H20<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_167.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_168.png" /> H3<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_169.png" /> H4<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_170.png" /> H5<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_171.png" /> H9<br />\
    <img src="styles/legend/bindnger_lokalplaner_4_172.png" /> Lokalplan 127 med Tillæg nr. 1<br />' });
var format_frededeomrder_5 = new ol.format.GeoJSON();
var features_frededeomrder_5 = format_frededeomrder_5.readFeatures(json_frededeomrder_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_5.addFeatures(features_frededeomrder_5);
var lyr_frededeomrder_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_5, 
                style: style_frededeomrder_5,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_5_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_5_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_5_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_5_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_5_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_5_5.png" /> <br />' });
var format_Strandbeskyttelse_6 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_6 = format_Strandbeskyttelse_6.readFeatures(json_Strandbeskyttelse_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_6.addFeatures(features_Strandbeskyttelse_6);
var lyr_Strandbeskyttelse_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_6, 
                style: style_Strandbeskyttelse_6,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelse_6.png" /> Strandbeskyttelse'
            });
var format_Folkeskoler_7 = new ol.format.GeoJSON();
var features_Folkeskoler_7 = format_Folkeskoler_7.readFeatures(json_Folkeskoler_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_7.addFeatures(features_Folkeskoler_7);
var lyr_Folkeskoler_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_7, 
                style: style_Folkeskoler_7,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_7.png" /> Folkeskoler'
            });
var format_Biblioteker_8 = new ol.format.GeoJSON();
var features_Biblioteker_8 = format_Biblioteker_8.readFeatures(json_Biblioteker_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biblioteker_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biblioteker_8.addFeatures(features_Biblioteker_8);
var lyr_Biblioteker_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biblioteker_8, 
                style: style_Biblioteker_8,
                popuplayertitle: 'Biblioteker',
                interactive: true,
                title: '<img src="styles/legend/Biblioteker_8.png" /> Biblioteker'
            });
var format_Dagligvarer_9 = new ol.format.GeoJSON();
var features_Dagligvarer_9 = format_Dagligvarer_9.readFeatures(json_Dagligvarer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dagligvarer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dagligvarer_9.addFeatures(features_Dagligvarer_9);
var lyr_Dagligvarer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dagligvarer_9, 
                style: style_Dagligvarer_9,
                popuplayertitle: 'Dagligvarer',
                interactive: true,
                title: '<img src="styles/legend/Dagligvarer_9.png" /> Dagligvarer'
            });
var format_Brneinstitutioner_10 = new ol.format.GeoJSON();
var features_Brneinstitutioner_10 = format_Brneinstitutioner_10.readFeatures(json_Brneinstitutioner_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brneinstitutioner_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brneinstitutioner_10.addFeatures(features_Brneinstitutioner_10);
var lyr_Brneinstitutioner_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brneinstitutioner_10, 
                style: style_Brneinstitutioner_10,
                popuplayertitle: 'Børneinstitutioner',
                interactive: true,
                title: '<img src="styles/legend/Brneinstitutioner_10.png" /> Børneinstitutioner'
            });
var format_Togstationer_11 = new ol.format.GeoJSON();
var features_Togstationer_11 = format_Togstationer_11.readFeatures(json_Togstationer_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_11.addFeatures(features_Togstationer_11);
var lyr_Togstationer_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_11, 
                style: style_Togstationer_11,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_11.png" /> Togstationer'
            });
var format_Ellader_12 = new ol.format.GeoJSON();
var features_Ellader_12 = format_Ellader_12.readFeatures(json_Ellader_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ellader_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ellader_12.addFeatures(features_Ellader_12);
var lyr_Ellader_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ellader_12, 
                style: style_Ellader_12,
                popuplayertitle: 'El-lader',
                interactive: true,
                title: '<img src="styles/legend/Ellader_12.png" /> El-lader'
            });
var format_Fitness_13 = new ol.format.GeoJSON();
var features_Fitness_13 = format_Fitness_13.readFeatures(json_Fitness_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fitness_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fitness_13.addFeatures(features_Fitness_13);
var lyr_Fitness_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fitness_13, 
                style: style_Fitness_13,
                popuplayertitle: 'Fitness',
                interactive: true,
                title: '<img src="styles/legend/Fitness_13.png" /> Fitness'
            });
var format_Fritidsaktiviteter_14 = new ol.format.GeoJSON();
var features_Fritidsaktiviteter_14 = format_Fritidsaktiviteter_14.readFeatures(json_Fritidsaktiviteter_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fritidsaktiviteter_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fritidsaktiviteter_14.addFeatures(features_Fritidsaktiviteter_14);
var lyr_Fritidsaktiviteter_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fritidsaktiviteter_14, 
                style: style_Fritidsaktiviteter_14,
                popuplayertitle: 'Fritidsaktiviteter',
                interactive: true,
                title: '<img src="styles/legend/Fritidsaktiviteter_14.png" /> Fritidsaktiviteter'
            });
var format_Hospital_15 = new ol.format.GeoJSON();
var features_Hospital_15 = format_Hospital_15.readFeatures(json_Hospital_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_15.addFeatures(features_Hospital_15);
var lyr_Hospital_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_15, 
                style: style_Hospital_15,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_15.png" /> Hospital'
            });
var format_Kirker_16 = new ol.format.GeoJSON();
var features_Kirker_16 = format_Kirker_16.readFeatures(json_Kirker_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_16.addFeatures(features_Kirker_16);
var lyr_Kirker_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_16, 
                style: style_Kirker_16,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_16.png" /> Kirker'
            });
var format_Lge_17 = new ol.format.GeoJSON();
var features_Lge_17 = format_Lge_17.readFeatures(json_Lge_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lge_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lge_17.addFeatures(features_Lge_17);
var lyr_Lge_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lge_17, 
                style: style_Lge_17,
                popuplayertitle: 'Læge',
                interactive: true,
                title: '<img src="styles/legend/Lge_17.png" /> Læge'
            });
var format_Moskeer_18 = new ol.format.GeoJSON();
var features_Moskeer_18 = format_Moskeer_18.readFeatures(json_Moskeer_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moskeer_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moskeer_18.addFeatures(features_Moskeer_18);
var lyr_Moskeer_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moskeer_18, 
                style: style_Moskeer_18,
                popuplayertitle: 'Moskeer',
                interactive: true,
                title: '<img src="styles/legend/Moskeer_18.png" /> Moskeer'
            });
var format_Parkernaturomrder1Parkernaturomrder_19 = new ol.format.GeoJSON();
var features_Parkernaturomrder1Parkernaturomrder_19 = format_Parkernaturomrder1Parkernaturomrder_19.readFeatures(json_Parkernaturomrder1Parkernaturomrder_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkernaturomrder1Parkernaturomrder_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkernaturomrder1Parkernaturomrder_19.addFeatures(features_Parkernaturomrder1Parkernaturomrder_19);
var lyr_Parkernaturomrder1Parkernaturomrder_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkernaturomrder1Parkernaturomrder_19, 
                style: style_Parkernaturomrder1Parkernaturomrder_19,
                popuplayertitle: 'Parkernaturområder (1) — Parker/naturområder',
                interactive: true,
                title: '<img src="styles/legend/Parkernaturomrder1Parkernaturomrder_19.png" /> Parkernaturområder (1) — Parker/naturområder'
            });
var format_Parking_20 = new ol.format.GeoJSON();
var features_Parking_20 = format_Parking_20.readFeatures(json_Parking_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parking_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parking_20.addFeatures(features_Parking_20);
var lyr_Parking_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parking_20, 
                style: style_Parking_20,
                popuplayertitle: 'Parking',
                interactive: true,
                title: '<img src="styles/legend/Parking_20.png" /> Parking'
            });
var format_Offenligbus_21 = new ol.format.GeoJSON();
var features_Offenligbus_21 = format_Offenligbus_21.readFeatures(json_Offenligbus_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offenligbus_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offenligbus_21.addFeatures(features_Offenligbus_21);
var lyr_Offenligbus_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Offenligbus_21, 
                style: style_Offenligbus_21,
                popuplayertitle: 'Offenlig bus',
                interactive: true,
                title: '<img src="styles/legend/Offenligbus_21.png" /> Offenlig bus'
            });
var format_OffenligtToilet_22 = new ol.format.GeoJSON();
var features_OffenligtToilet_22 = format_OffenligtToilet_22.readFeatures(json_OffenligtToilet_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OffenligtToilet_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OffenligtToilet_22.addFeatures(features_OffenligtToilet_22);
var lyr_OffenligtToilet_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OffenligtToilet_22, 
                style: style_OffenligtToilet_22,
                popuplayertitle: 'Offenligt Toilet ',
                interactive: true,
                title: '<img src="styles/legend/OffenligtToilet_22.png" /> Offenligt Toilet '
            });
var format_restauranter3_23 = new ol.format.GeoJSON();
var features_restauranter3_23 = format_restauranter3_23.readFeatures(json_restauranter3_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restauranter3_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restauranter3_23.addFeatures(features_restauranter3_23);
var lyr_restauranter3_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restauranter3_23, 
                style: style_restauranter3_23,
                popuplayertitle: 'restauranter3',
                interactive: true,
                title: '<img src="styles/legend/restauranter3_23.png" /> restauranter3'
            });
var format_ShelterQuarknaturcenterShelterQuarknaturcenter_24 = new ol.format.GeoJSON();
var features_ShelterQuarknaturcenterShelterQuarknaturcenter_24 = format_ShelterQuarknaturcenterShelterQuarknaturcenter_24.readFeatures(json_ShelterQuarknaturcenterShelterQuarknaturcenter_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShelterQuarknaturcenterShelterQuarknaturcenter_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShelterQuarknaturcenterShelterQuarknaturcenter_24.addFeatures(features_ShelterQuarknaturcenterShelterQuarknaturcenter_24);
var lyr_ShelterQuarknaturcenterShelterQuarknaturcenter_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShelterQuarknaturcenterShelterQuarknaturcenter_24, 
                style: style_ShelterQuarknaturcenterShelterQuarknaturcenter_24,
                popuplayertitle: 'ShelterQuark naturcenter — Shelter/Quark naturcenter',
                interactive: true,
                title: '<img src="styles/legend/ShelterQuarknaturcenterShelterQuarknaturcenter_24.png" /> ShelterQuark naturcenter — Shelter/Quark naturcenter'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Kommunegrnse_1.setVisible(true);lyr_kommuneplan_2.setVisible(true);lyr_Nytemakort_3.setVisible(true);lyr_bindnger_lokalplaner_4.setVisible(true);lyr_frededeomrder_5.setVisible(true);lyr_Strandbeskyttelse_6.setVisible(true);lyr_Folkeskoler_7.setVisible(true);lyr_Biblioteker_8.setVisible(true);lyr_Dagligvarer_9.setVisible(true);lyr_Brneinstitutioner_10.setVisible(true);lyr_Togstationer_11.setVisible(true);lyr_Ellader_12.setVisible(true);lyr_Fitness_13.setVisible(true);lyr_Fritidsaktiviteter_14.setVisible(true);lyr_Hospital_15.setVisible(true);lyr_Kirker_16.setVisible(true);lyr_Lge_17.setVisible(true);lyr_Moskeer_18.setVisible(true);lyr_Parkernaturomrder1Parkernaturomrder_19.setVisible(true);lyr_Parking_20.setVisible(true);lyr_Offenligbus_21.setVisible(true);lyr_OffenligtToilet_22.setVisible(true);lyr_restauranter3_23.setVisible(true);lyr_ShelterQuarknaturcenterShelterQuarknaturcenter_24.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Kommunegrnse_1,lyr_kommuneplan_2,lyr_Nytemakort_3,lyr_bindnger_lokalplaner_4,lyr_frededeomrder_5,lyr_Strandbeskyttelse_6,lyr_Folkeskoler_7,lyr_Biblioteker_8,lyr_Dagligvarer_9,lyr_Brneinstitutioner_10,lyr_Togstationer_11,lyr_Ellader_12,lyr_Fitness_13,lyr_Fritidsaktiviteter_14,lyr_Hospital_15,lyr_Kirker_16,lyr_Lge_17,lyr_Moskeer_18,lyr_Parkernaturomrder1Parkernaturomrder_19,lyr_Parking_20,lyr_Offenligbus_21,lyr_OffenligtToilet_22,lyr_restauranter3_23,lyr_ShelterQuarknaturcenterShelterQuarknaturcenter_24];
lyr_Kommunegrnse_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_kommuneplan_2.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Nytemakort_3.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_bindnger_lokalplaner_4.set('fieldAliases', {'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'anvendelse': 'anvendelse', });
lyr_frededeomrder_5.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Strandbeskyttelse_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Folkeskoler_7.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'adresse': 'adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Biblioteker_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Dagligvarer_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brneinstitutioner_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ellader_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Fitness_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Fritidsaktiviteter_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hospital_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirker_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lge_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Moskeer_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parkernaturomrder1Parkernaturomrder_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parking_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Offenligbus_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OffenligtToilet_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_restauranter3_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ShelterQuarknaturcenterShelterQuarknaturcenter_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kommunegrnse_1.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_kommuneplan_2.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Nytemakort_3.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_bindnger_lokalplaner_4.set('fieldImages', {'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_frededeomrder_5.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Fred_tkode': 'Range', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'Range', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_Strandbeskyttelse_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Folkeskoler_7.set('fieldImages', {'Skolenavn': 'TextEdit', 'adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Biblioteker_8.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Dagligvarer_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Brneinstitutioner_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Togstationer_11.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Ellader_12.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Fitness_13.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Fritidsaktiviteter_14.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Hospital_15.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Kirker_16.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lge_17.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Moskeer_18.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Parkernaturomrder1Parkernaturomrder_19.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Parking_20.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Offenligbus_21.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_OffenligtToilet_22.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_restauranter3_23.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ShelterQuarknaturcenterShelterQuarknaturcenter_24.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Kommunegrnse_1.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'no label', });
lyr_kommuneplan_2.set('fieldLabels', {'fid': 'no label', 'oid': 'inline label - always visible', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_Nytemakort_3.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_bindnger_lokalplaner_4.set('fieldLabels', {'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_frededeomrder_5.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Strandbeskyttelse_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Folkeskoler_7.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Biblioteker_8.set('fieldLabels', {'Name': 'no label', });
lyr_Dagligvarer_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Brneinstitutioner_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Togstationer_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ellader_12.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Fitness_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Fritidsaktiviteter_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Hospital_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Kirker_16.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lge_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Moskeer_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Parkernaturomrder1Parkernaturomrder_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Parking_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Offenligbus_21.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_OffenligtToilet_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_restauranter3_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ShelterQuarknaturcenterShelterQuarknaturcenter_24.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ShelterQuarknaturcenterShelterQuarknaturcenter_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
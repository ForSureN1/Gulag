// import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
// import mapboxgl from 'mapbox-gl';
// mapboxgl = require('mapbox-gl')


let contentPrison = document.getElementById('info');
let contentMap = document.querySelector('.map');
let contentMapContainer = document.querySelector('.map__container');
if(contentMap) {

    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VsYWsxMjMiLCJhIjoiY2wyNDgzbjUyMGluczNncDk1MHlheGNsNiJ9.4nOUSEub8-sL4CUDVdQR-A';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/gulak123/cl25ozzsm000414mo0rgvu5fv',
        center: [72.5702, 	49.1961],
        zoom: 8,
        boxZoom: true,
        pitchWithRotate: false,
        dragRotate: false,
        viewportChangeMethod: 'linear'
    });
    
    const geojsonLags = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    'id': 1,
                    "title": "Гулаг",
                    "size": "500",
                    "history": "<p>Lorem ipsum</p><p>Lorem ipsum</p><p>Lorem ipsum</p>",
                    "source": "Система исправительно-трудовых лагерей в СССР, 1923–1960: справочник / составитель М. Б. Смирнов; под редакцией Н. Г. Охотина, А. Б. Рогинского. М., 1998.",
                    "link": "https://www.novayagazeta.ru/articles/2008/12/04/35579-ostrov-alzhir-v-arhipelage-gulag",
                    "files": ['img/pr1.jpg','img/pr2.jpg','img/pr3.jpg','img/pr3.jpg','img/pr3.jpg','img/pr3.jpg','img/pr3.jpg'],
                    "stats": {
                        '1989': 3000,
                        '1999': 5000,
                    },
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        72.2736,
                        49.4824
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    'id': 2,
                    "title": "Гулаг - 2",
                    "size": "1000",
                    "history": "<p>Lorem ipsum</p><p>Lorem ipsum</p>",
                    "source": "Система исправительно-трудовых лагерей в СССР, 1923–1960: справочник / составитель М. Б. Смирнов; под редакцией Н. Г. Охотина, А. Б. Рогинского. М., 1998.",
                    "link": "https://www.novayagazeta.ru/articles/2008/12/04/35579-ostrov-alzhir-v-arhipelage-gulag",
                    "files": ['img/pr1.jpg','img/pr1.jpg'],
                    "stats": {
                        '1995': 10000,
                        '2000': 45000,
                        '2001': 0,
                    },
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        72.0758,
                        48.5166
                    ]
                }
            },
        ]
    };

    const geojsonAdmins = {
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Feature",
              "properties": {
                  'id': 3,
                  "title": "Административный центр",
                  "size": "500",
                  "history": "<p>Lorem ipsum</p><p>Lorem ipsum</p><p>Lorem ipsum</p>",
                  "source": "Система исправительно-трудовых лагерей в СССР, 1923–1960: справочник / составитель М. Б. Смирнов; под редакцией Н. Г. Охотина, А. Б. Рогинского. М., 1998.",
                  "link": "https://www.novayagazeta.ru/articles/2008/12/04/35579-ostrov-alzhir-v-arhipelage-gulag",
                  "files": ['img/pr1.jpg','img/pr2.jpg','img/pr3.jpg','img/pr3.jpg','img/pr3.jpg','img/pr3.jpg','img/pr3.jpg'],
                  "stats": {
                      '1989': 3000,
                      '1999': 5000,
                  },
              },
              "geometry": {
                  "type": "Point",
                  "coordinates": [
                    72.0428466796875,
                    49.427053613259595
                  ],
              }
          },
      ]
    };
    
    
    map.on('load', () => {
        // polygon
        map.addSource('maine', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'geometry': {
            'type': 'Polygon',
            // These coordinates outline Maine.
            'coordinates': [
                [
                  [
                    72.7094486701392,
                    50.0458797175941,
                    0
                  ],
                  [
                    72.709377410393,
                    50.0457881951954,
                    0
                  ],
                  [
                    72.7086648129305,
                    50.0391065887294,
                    0
                  ],
                  [
                    72.708522293438,
                    49.9804653868523,
                    0
                  ],
                  [
                    72.810281211077,
                    49.9700164965027,
                    0
                  ],
                  [
                    72.8285237061159,
                    49.9298496524003,
                    0
                  ],
                  [
                    72.7695206362244,
                    49.7777751432251,
                    0
                  ],
                  [
                    72.7666702463746,
                    49.7615747124017,
                    0
                  ],
                  [
                    72.7814922735937,
                    49.7523675097999,
                    0
                  ],
                  [
                    72.8114213670169,
                    49.7519991853337,
                    0
                  ],
                  [
                    72.8353646417555,
                    49.7413165590375,
                    0
                  ],
                  [
                    72.8527520198395,
                    49.7427901645958,
                    0
                  ],
                  [
                    72.877835450518,
                    49.7258409984014,
                    0
                  ],
                  [
                    72.9679077697727,
                    49.7265780417592,
                    0
                  ],
                  [
                    73.0032526039105,
                    49.7133095491713,
                    0
                  ],
                  [
                    73.1520429540717,
                    49.7092545643378,
                    0
                  ],
                  [
                    73.1828271644499,
                    49.6398988443843,
                    0
                  ],
                  [
                    73.2181719985878,
                    49.6055533278277,
                    0
                  ],
                  [
                    73.2569373005455,
                    49.5654529558796,
                    0
                  ],
                  [
                    73.266058548065,
                    49.5423387005897,
                    0
                  ],
                  [
                    73.2954175635182,
                    49.5316099706739,
                    0
                  ],
                  [
                    73.3250616179565,
                    49.5284648965918,
                    0
                  ],
                  [
                    73.400311909992,
                    49.4599631490607,
                    0
                  ],
                  [
                    73.416844171121,
                    49.3731803400875,
                    0
                  ],
                  [
                    73.3673899072263,
                    49.2639977097553,
                    0
                  ],
                  [
                    73.2967002389505,
                    49.1448081800546,
                    0
                  ],
                  [
                    73.2443955852062,
                    49.090822486506,
                    0
                  ],
                  [
                    73.1913783339994,
                    49.0045101203172,
                    0
                  ],
                  [
                    73.0931824036726,
                    48.910063172411,
                    0
                  ],
                  [
                    73.0385974380485,
                    48.8944412714262,
                    0
                  ],
                  [
                    72.978169173232,
                    48.8456939391093,
                    0
                  ],
                  [
                    72.8695693199535,
                    48.8351882971301,
                    0
                  ],
                  [
                    72.8547472927344,
                    48.8351882971301,
                    0
                  ],
                  [
                    72.8453410062299,
                    48.8372520792839,
                    0
                  ],
                  [
                    72.8370748756654,
                    48.8057232300674,
                    0
                  ],
                  [
                    72.8275260696685,
                    48.7635599654067,
                    0
                  ],
                  [
                    72.8029414572137,
                    48.7508054116929,
                    0
                  ],
                  [
                    72.7772879485652,
                    48.7613287394547,
                    0
                  ],
                  [
                    72.7385226466075,
                    48.7680925718417,
                    0
                  ],
                  [
                    72.7328218669078,
                    48.8120352792909,
                    0
                  ],
                  [
                    72.6256472085542,
                    48.8018980701369,
                    0
                  ],
                  [
                    72.5412756689992,
                    48.8142877141446,
                    0
                  ],
                  [
                    72.5059308348613,
                    48.8199183585546,
                    0
                  ],
                  [
                    72.5025103670415,
                    48.7992695702808,
                    0
                  ],
                  [
                    72.5122016925309,
                    48.7609529442783,
                    0
                  ],
                  [
                    72.4985198212517,
                    48.7286240401792,
                    0
                  ],
                  [
                    72.5122016925309,
                    48.6386705366903,
                    0
                  ],
                  [
                    72.4836977940326,
                    48.6377287513343,
                    0
                  ],
                  [
                    72.4893985737322,
                    48.5404419520029,
                    0
                  ],
                  [
                    72.4677356108735,
                    48.5257195100905,
                    0
                  ],
                  [
                    72.4842678720025,
                    48.4837937428574,
                    0
                  ],
                  [
                    72.4973796653118,
                    48.4656529392237,
                    0
                  ],
                  [
                    72.5184725502005,
                    48.4301084087622,
                    0
                  ],
                  [
                    72.5395654350893,
                    48.3858320556056,
                    0
                  ],
                  [
                    72.5412756689992,
                    48.3422749940768,
                    0
                  ],
                  [
                    72.5344347333596,
                    48.330906156139,
                    0
                  ],
                  [
                    72.5298741095998,
                    48.3172602041088,
                    0
                  ],
                  [
                    72.5144820044108,
                    48.3017145342055,
                    0
                  ],
                  [
                    72.4489230378647,
                    48.2531512383862,
                    0
                  ],
                  [
                    72.4244096851561,
                    48.2364469433569,
                    0
                  ],
                  [
                    72.4118679698169,
                    48.2060615203969,
                    0
                  ],
                  [
                    72.3611310304899,
                    48.1764183665322,
                    0
                  ],
                  [
                    72.342318457481,
                    48.162731127157,
                    0
                  ],
                  [
                    72.3326271319915,
                    48.1539845894588,
                    0
                  ],
                  [
                    72.3235058844721,
                    48.1395305209239,
                    0
                  ],
                  [
                    72.3138145589826,
                    48.1155582278591,
                    0
                  ],
                  [
                    72.3064035453731,
                    48.1075649769249,
                    0
                  ],
                  [
                    72.2967122198837,
                    48.095001641934,
                    0
                  ],
                  [
                    72.2830303486045,
                    48.0904323952179,
                    0
                  ],
                  [
                    72.2778996468748,
                    48.086243562385,
                    0
                  ],
                  [
                    72.2727689451451,
                    48.086243562385,
                    0
                  ],
                  [
                    72.2613673857458,
                    48.0790075020786,
                    0
                  ],
                  [
                    72.2511059822864,
                    48.0771031065014,
                    0
                  ],
                  [
                    72.2357138770973,
                    48.0679610264597,
                    0
                  ],
                  [
                    72.2112005243887,
                    48.0740559269522,
                    0
                  ],
                  [
                    72.1940981852897,
                    48.0774839912562,
                    0
                  ],
                  [
                    72.1832667038604,
                    48.0668181522531,
                    0
                  ],
                  [
                    72.1370903882931,
                    48.0706276342484,
                    0
                  ],
                  [
                    72.1291092967136,
                    48.0816735374594,
                    0
                  ],
                  [
                    72.1188478932542,
                    48.1022354522197,
                    0
                  ],
                  [
                    72.1040258660351,
                    48.1178417854746,
                    0
                  ],
                  [
                    72.0846432150562,
                    48.130399538175,
                    0
                  ],
                  [
                    72.0692511098671,
                    48.145997317929,
                    0
                  ],
                  [
                    72.0179440925702,
                    48.1676741627759,
                    0
                  ],
                  [
                    71.9902953110268,
                    48.2396743345942,
                    0
                  ],
                  [
                    71.9141899020364,
                    48.2687116941901,
                    0
                  ],
                  [
                    71.8505549486388,
                    48.3143694471285,
                    0
                  ],
                  [
                    71.8232624658267,
                    48.3414224191694,
                    0
                  ],
                  [
                    71.8029534381466,
                    48.3674195388551,
                    0
                  ],
                  [
                    71.7802928388405,
                    48.3822826026766,
                    0
                  ],
                  [
                    71.7584160967431,
                    48.3824245855463,
                    0
                  ],
                  [
                    71.7353279389594,
                    48.4061774747362,
                    0
                  ],
                  [
                    71.7170141841742,
                    48.4255217309341,
                    0
                  ],
                  [
                    71.716942924428,
                    48.437531329659,
                    0
                  ],
                  [
                    71.7125248201608,
                    48.4398950895307,
                    0
                  ],
                  [
                    71.7108145862509,
                    48.4425423700118,
                    0
                  ],
                  [
                    71.6954224810618,
                    48.4646134258959,
                    0
                  ],
                  [
                    71.6683437774884,
                    48.4636683953041,
                    0
                  ],
                  [
                    71.6539493087468,
                    48.502258573764,
                    0
                  ],
                  [
                    71.6231650983686,
                    48.5649226849333,
                    0
                  ],
                  [
                    71.6174643186689,
                    48.5852906788223,
                    0
                  ],
                  [
                    71.6197446305488,
                    48.6154504023937,
                    0
                  ],
                  [
                    71.665920946116,
                    48.6700690076906,
                    0
                  ],
                  [
                    71.6442579832573,
                    48.7426765114451,
                    0
                  ],
                  [
                    71.698985468374,
                    48.8755807498049,
                    0
                  ],
                  [
                    71.7628342010103,
                    48.8778303284297,
                    0
                  ],
                  [
                    71.783927085899,
                    48.8485779150965,
                    0
                  ],
                  [
                    71.8329537913161,
                    48.8489530542363,
                    0
                  ],
                  [
                    71.8449254286854,
                    48.8429504907364,
                    0
                  ],
                  [
                    71.8557569101148,
                    48.8437008505217,
                    0
                  ],
                  [
                    71.8711490153039,
                    48.8463270212372,
                    0
                  ],
                  [
                    71.8871111984629,
                    48.8617061127697,
                    0
                  ],
                  [
                    71.9230261105708,
                    48.8617061127697,
                    0
                  ],
                  [
                    71.953240242979,
                    48.8399489391717,
                    0
                  ],
                  [
                    72.0917691896808,
                    48.8376976574521,
                    0
                  ],
                  [
                    72.0854983320111,
                    48.9265463590039,
                    0
                  ],
                  [
                    72.0487283029483,
                    48.9254226781596,
                    0
                  ],
                  [
                    72.0316259638493,
                    48.9246735435493,
                    0
                  ],
                  [
                    72.0096779620056,
                    48.946393884799,
                    0
                  ],
                  [
                    71.9766134397476,
                    48.9572505115606,
                    0
                  ],
                  [
                    71.9683473091831,
                    48.9774600043413,
                    0
                  ],
                  [
                    71.9994165585462,
                    49.0081328319315,
                    0
                  ],
                  [
                    71.9429788395196,
                    49.0582160797732,
                    0
                  ],
                  [
                    71.9344276699701,
                    49.1750051876821,
                    0
                  ],
                  [
                    71.8979426798923,
                    49.1772412706612,
                    0
                  ],
                  [
                    71.9064938494417,
                    49.504477052593,
                    0
                  ],
                  [
                    71.9310072021503,
                    49.5259440661376,
                    0
                  ],
                  [
                    71.8916718222226,
                    49.566261756692,
                    0
                  ],
                  [
                    71.9053536935018,
                    49.5777221792687,
                    0
                  ],
                  [
                    71.9566607107988,
                    49.6379375548895,
                    0
                  ],
                  [
                    71.9800339075674,
                    49.6700466093537,
                    0
                  ],
                  [
                    71.9863047652371,
                    49.6818515078016,
                    0
                  ],
                  [
                    71.9965661686964,
                    49.6951285934782,
                    0
                  ],
                  [
                    72.02079448242,
                    49.7163275283482,
                    0
                  ],
                  [
                    72.0239299112548,
                    49.7400961955554,
                    0
                  ],
                  [
                    72.0507235758432,
                    49.7570403835908,
                    0
                  ],
                  [
                    72.0564243555428,
                    49.7600326278499,
                    0
                  ],
                  [
                    72.0877786438909,
                    49.7753132107766,
                    0
                  ],
                  [
                    72.1242636339689,
                    49.7905429728824,
                    0
                  ],
                  [
                    72.1354514141295,
                    49.7989609977744,
                    0
                  ],
                  [
                    72.1464966747975,
                    49.8082053389098,
                    0
                  ],
                  [
                    72.1630289359265,
                    49.8201605747391,
                    0
                  ],
                  [
                    72.1807013529955,
                    49.824574069114,
                    0
                  ],
                  [
                    72.1966635361546,
                    49.829538769035,
                    0
                  ],
                  [
                    72.2100603684488,
                    49.833215996018,
                    0
                  ],
                  [
                    72.2357138770972,
                    49.8407534373038,
                    0
                  ],
                  [
                    72.2636476976256,
                    49.8420402001036,
                    0
                  ],
                  [
                    72.278826023576,
                    49.8410751312145,
                    0
                  ],
                  [
                    72.2976385965849,
                    49.8458543314688,
                    0
                  ],
                  [
                    72.313030701774,
                    49.8484275512985,
                    0
                  ],
                  [
                    72.3238621832033,
                    49.8506330592691,
                    0
                  ],
                  [
                    72.3375440544825,
                    49.8517357755149,
                    0
                  ],
                  [
                    72.3478054579419,
                    49.8546762291696,
                    0
                  ],
                  [
                    72.3614873292211,
                    49.8572489793567,
                    0
                  ],
                  [
                    72.3671881089207,
                    49.8594540847823,
                    0
                  ],
                  [
                    72.3747416420228,
                    49.8603728490088,
                    0
                  ],
                  [
                    72.3815825776624,
                    49.8734174156119,
                    0
                  ],
                  [
                    72.396262085389,
                    49.8807649159069,
                    0
                  ],
                  [
                    72.4157872558604,
                    49.8796628621364,
                    0
                  ],
                  [
                    72.4351699068392,
                    49.8882031209049,
                    0
                  ],
                  [
                    72.4511320899981,
                    49.8903149948861,
                    0
                  ],
                  [
                    72.470229701992,
                    49.9051873158863,
                    0
                  ],
                  [
                    72.4997312369379,
                    49.9144572455999,
                    0
                  ],
                  [
                    72.5088524844574,
                    49.9376701397451,
                    0
                  ],
                  [
                    72.5336508761509,
                    49.9468421144546,
                    0
                  ],
                  [
                    72.5591618653069,
                    49.9479426340746,
                    0
                  ],
                  [
                    72.5637224890666,
                    49.9600466903747,
                    0
                  ],
                  [
                    72.589946075685,
                    49.967839358755,
                    0
                  ],
                  [
                    72.6093287266639,
                    49.9791135748838,
                    0
                  ],
                  [
                    72.6175948572284,
                    49.9864449807532,
                    0
                  ],
                  [
                    72.6302790920602,
                    49.9924009253322,
                    0
                  ],
                  [
                    72.654293626545,
                    49.9999135263681,
                    0
                  ],
                  [
                    72.6602081854834,
                    50.0047686074198,
                    0
                  ],
                  [
                    72.6614908609158,
                    50.0091652388332,
                    0
                  ],
                  [
                    72.6552200032462,
                    50.0132867155347,
                    0
                  ],
                  [
                    72.6539373278138,
                    50.0190561891107,
                    0
                  ],
                  [
                    72.655790081216,
                    50.0205213419303,
                    0
                  ],
                  [
                    72.6553625227387,
                    50.0259237067892,
                    0
                  ],
                  [
                    72.6641987312731,
                    50.0295859814556,
                    0
                  ],
                  [
                    72.6733199787926,
                    50.0326071478346,
                    0
                  ],
                  [
                    72.6788782389998,
                    50.036360453429,
                    0
                  ],
                  [
                    72.6865742915943,
                    50.0393811936207,
                    0
                  ],
                  [
                    72.7013963188134,
                    50.0458797175941,
                    0
                  ],
                  [
                    72.7094486701392,
                    50.0458797175941,
                    0
                  ]
                ]
              ]
            }
            }
        });
        map.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine', // reference the data source
            'layout': {},
            'paint': {
            'fill-color': '#3E5983', // blue color fill
            'fill-opacity': 0.6
            }
        });
        map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'maine',
            'layout': {},
            'paint': {
            'line-color': '#d12d4a',
            'line-opacity': .45,
            'line-width': 3
            }
        });
        // lag
        map.addSource('geojsonLags', {
            'type': 'geojson',
            'data': geojsonLags
        });
        map.addLayer({
            id: 'point',
            type: 'circle',
            source: 'geojsonLags',
            paint: {
                // 'circle-color': '#be4f4f',
                'circle-radius': 3,
                'circle-stroke-width': 25,
                'circle-opacity': 0,
                // 'circle-stroke-color': '#e47171',
                'circle-stroke-opacity': 0,
            },
            filter: ['in', '$type', 'Point'],
        });
        // add markers to map LAGS
        for (const feature of geojsonLags.features) {
          // create a HTML element for each feature
          const el = document.createElement('div');
          el.className = 'lags';
          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
        }
        // administrative center
        map.addSource('geojsonAdmins', {
          'type': 'geojson',
          'data': geojsonAdmins
        });
        map.addLayer({
            id: 'AdminCenters',
            type: 'circle',
            source: 'geojsonAdmins',
            paint: {
                // 'circle-color': '#be4f4f',
                'circle-radius': 3,
                'circle-stroke-width': 13,
                'circle-opacity': 0,
                // 'circle-stroke-color': '#e47171',
                'circle-stroke-opacity' : 0,
            },
            filter: ['in', '$type', 'Point'],
            layout: {
              'visibility': 'visible'
            },
        });
        // add markers to map
        for (const feature of geojsonAdmins.features) {
          // create a HTML element for each feature
          const el = document.createElement('div');
          el.className = 'admins';
          // make a marker for each feature and add to the map
          new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
        }
    });
    map.on('click', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
            layers: ['point', 'AdminCenters']
        });
        // console.log(features[0]?.properties)
        if(features[0]?.properties != undefined) {
          let objTitle = features[0]?.properties.title;
          let objSize = features[0]?.properties.size;
          let objHistory = features[0]?.properties.history;
          let objSource = features[0]?.properties.source;
          let objLink = features[0]?.properties.link;
          let objFiles = features[0]?.properties.files ? JSON.parse(features[0]?.properties.files) : 0;
          let objStats = features[0]?.properties.stats ? JSON.parse(features[0]?.properties.stats) : 0;
          if (pointCurrentId === features[0].properties.id) {
              // e.preventDefault();
          } else {
              pointCurrentId = features[0].properties.id;
              // Анимация появления блока
              if(contentPrison.classList.contains('active')) {
                contentPrison.animate([
                  { transform: 'translateY(40%)' },
                  { transform: 'translateY(0%)' },
              ], { duration: 400, fill: 'forwards', easing: 'ease-in' });
              }
              // Вывод контента 
              htmlMapTitle.textContent = objTitle; //Заголовок
              htmlMapSize.textContent = objSize //Размер населённого пункта
              htmlMapHistory.innerHTML = objHistory //История лагеря
              htmlMapSource.textContent = objSource //Источник
              htmlMapLink.innerHTML = objLink //Ссылка
              htmlMapLink.setAttribute('href', objLink)
              // Вывод изображений
              if(objFiles != 0) {
                  htmlMapFiles.innerHTML = '';
                  objFiles.forEach((img, i) => {
                      htmlMapFiles.innerHTML += `<img src="${objFiles[i]}" >`;
                  })
              } else {
                  htmlMapFiles.innerHTML = '';
              }
              // Вывод статистики заключенных
              htmlMapGrafic.innerHTML= '';
              Object.keys(objStats).forEach((key, i) => {
                  htmlMapGrafic.innerHTML += `
                      <div class="info__content-line">
                      <div class="info__content-date js-date">${Object.keys(objStats)[i]}</div>
                      <div class="info__content-count">
                          <span class="js-count-prisoner">${Object.values(objStats)[i]}</span>
                      </div>
                      </div>
                  `
              })
              let nodeStats = document.querySelectorAll('.info__content-count span');
              let nodeLineStats = document.querySelectorAll('.info__content-count');
              let statsWidth = document.querySelector('.info__content-grafic').offsetWidth;
              let arrayStats = [];
              nodeStats.forEach(item => { arrayStats.push(parseInt(item.textContent)) })
          
              function getMaxOfArray(numArray) {
                  return Math.max.apply(null, numArray);
              }
              let scaleX = d3.scaleLinear()
                  .domain([0, getMaxOfArray(arrayStats)])
                  .range([0, statsWidth - 100]);
              nodeLineStats.forEach((line, i) => {
                  if (arrayStats[i] === 0) {
                      line.querySelector('span').textContent = 'нет данных';
                  }
                  line.style.width = `${parseInt(scaleX(arrayStats[i]))}px`
              })
          }
          // Перемещение карты в центральное положение относительно активного поинта
          map.flyTo({
              center: [
                  e.lngLat.lng,
                  e.lngLat.lat
              ],
              essential: true
          })
          // Первое открытие контента
          if (!contentPrison.classList.contains('active')) {
            contentPrison.classList.add('active');
            contentMap.classList.add('active');
            contentPrison.animate([
                { top: '100vh' },
                { top: '30%' },
            ], { duration: 500, fill: 'forwards' });
            // contentPrison.style.top = '0%';
            // Сдвигаем карту на 30% вверх
            filterShowHide(1,0,'none');
          }
        }
    });

    // filterShowHide
    function filterShowHide(a,b,pointer) {
      let filterBlock = filter.animate([
        {opacity: a},
        {opacity: b}
      ], {duration: 400, easing: 'ease-out', fill: 'forwards'})
      filterBlock.addEventListener('finish', () => {filter.style.pointerEvents = `${pointer}`});
    }

    // hover cursor pointer on point
    map.on('mouseenter', 'point', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    // cursor default outer point
    map.on('mouseleave', 'point', () => {
        map.getCanvas().style.cursor = ''
    })

    let filter = document.querySelector('.filter');
    if(filter) {
      let allType = document.querySelector('#type-all');
      let lagType = document.querySelector('#type-lag');
      let admType = document.querySelector('#type-admin');
      // console.log(allType)
      // console.log(lagType)
      // console.log(admType)
      allType.addEventListener('click', () => {
        if(allType.checked) {
          // map.setLayoutProperty('point', 'visibility', 'visible');
          lagType.checked = true;
          admType.checked = true;
          document.querySelectorAll('.lags').forEach(item => {
            item.style.opacity = 1;
          })
          document.querySelectorAll('.admins').forEach(item => {
            item.style.opacity = 1;
          })
        } else {
          // map.setLayoutProperty('point', 'visibility', 'none');
          lagType.checked = false;
          admType.checked = false;
          document.querySelectorAll('.lags').forEach(item => {
            item.style.opacity = 0;
          })
          document.querySelectorAll('.admins').forEach(item => {
            item.style.opacity = 0;
          })
        }
      });
      lagType.addEventListener('click', () => {
        if(lagType.checked) {
          // map.setLayoutProperty('point', 'visibility', 'visible');
          document.querySelectorAll('.lags').forEach(item => {
            item.style.opacity = 1;
          })
        } else {
          // map.setLayoutProperty('point', 'visibility', 'none');
          document.querySelectorAll('.lags').forEach(item => {
            item.style.opacity = 0;
          })
        }
        if(lagType.checked && admType.checked) {
          allType.checked = true;
        }
        if(!lagType.checked && !admType.checked) {
          allType.checked = false;
        }
      });
      admType.addEventListener('click', () => {
        if(admType.checked) {
          map.setLayoutProperty('AdminCenters', 'visibility', 'visible');
          document.querySelectorAll('.admins').forEach(item => {
            item.style.opacity = 1;
          })
        } else {
          map.setLayoutProperty('AdminCenters', 'visibility', 'none');
          document.querySelectorAll('.admins').forEach(item => {
            item.style.opacity = 0;
          })
        }
        if(lagType.checked && admType.checked) {
          allType.checked = true;
        }
        if(!lagType.checked && !admType.checked) {
          allType.checked = false;
        }
      });
    }

}
let pointCurrentId;
let htmlMapTitle = document.querySelector('.js-title');
let htmlMapSize = document.querySelector('.js-size');
let htmlMapHistory = document.querySelector('.js-history');
let htmlMapSource = document.querySelector('.js-source');
let htmlMapLink = document.querySelector('.js-link');
let htmlMapFiles = document.querySelector('.js-images');
let htmlMapDate = document.querySelectorAll('.js-date');
let htmlMapCountPrisoner = document.querySelectorAll('.js-count-prisoner');
let htmlMapGrafic = document.querySelector('.info__content-grafic');

// close content-map
let closeMap = document.querySelector('.close-content-map');
if(closeMap) {
    closeMap.addEventListener('click', () => {
        if(contentMap.classList.contains('active')) {
          let contentAnimate = contentPrison.animate([
            { top: '30%' },
            { top: '100vh' },
        ], { duration: 500, fill: 'forwards'});
        contentAnimate.addEventListener('finish', () => {
          contentPrison.classList.remove('active')
        })
            filterShowHide(0,1,'unset');
            contentMap.classList.remove('active')
        }
    })
}


document.querySelector('body').style.overflow = 'hidden';
window.onload = () => {
    let sliderSection = document.querySelector('.slider');
    if (sliderSection) {
        let newSwiper = undefined;
        window.addEventListener('resize', initSlider);
    
        function initSlider() {
            if (window.innerWidth > 600 && newSwiper === undefined) {
                newSwiper = new Swiper('.slider__items-1', {
                    freeMode: true,
                    mousewheel: true,
                    centeredSlides: true,
                    slidesPerView: 1,
                    spaceBetween: 300,
                    parallax: true,
                    touchRatio: 0,
                    allowTouchMove: false,
                    init: true,
                    scrollBar: {
                        draggable: false,
                    },
                    breakpoints: {
                        1450: {
                            spaceBetween: 300,
                        },
                        768: {
                            spaceBetween: 200,
                        },
                        0: {
                            spaceBetween: 100,
                        }
                    }
                });
            } else if (window.innerWidth < 600 && newSwiper != undefined) {
                newSwiper.forEach(item => {
                    item.destroy();
                });
                let container = document.querySelectorAll('.slider__items-1');
                container.forEach(slider => {
                    slider.querySelectorAll('.slider__item-img').forEach(item => item.setAttribute('style', ' '))
                });
                newSwiper = undefined;
            }
        }
        initSlider();
        sliderSection.addEventListener('wheel', e => {
            const target = e.target;
            if (target.classList.contains('slider__content') || target.closest('.slider__content')) {
                let progressBarLine = target.closest('.slider__content').querySelector('.progress-line');
                let progressSlider = parseInt((target.closest('.slider__content').querySelector('.slider__wrapper').style.transform.split(/\w+\(|\);?/)[1].split(',')[0]));
                let slides = target.closest('.slider__content').querySelector('.slider__items').querySelectorAll('.slider__item');
                let widthSlider = 0;
                slides.forEach(slide => {
                    widthSlider += parseInt(slide.offsetWidth)
                });
                progressBarLine.style.transform = `translateX(${Math.round(100 * (Math.abs(progressSlider / widthSlider)))}px)`;
            }
        })
    }
    let preloader = document.querySelector('.preloader');
    let mainBody = document.querySelector('.mainbody');
    if(preloader && contentMap) {
      map.on('load', () => {
        closePreloader();
        document.querySelector('body').style.overflow = 'unset';
      })
    } else if(preloader) {
      closePreloader();
      if(!mainBody) {
        document.querySelector('body').style.overflow = 'unset';
      }
    }
    function closePreloader() {
      let animpreloader = preloader.animate([
        {opacity: '1'},
        {opacity: '0'}
      ], {duration: 300, easing: 'ease-out'});
      animpreloader.addEventListener('finish', () => {
        preloader.style.display = 'none';
      })
    }
    if(mainBody) {
      let mainText = document.querySelector('.hero__title');
      let mainTextSplit = mainText.textContent.split('');
      let newWord = '';
      mainTextSplit.forEach((item, i) => {
        newWord += `<span>${item}</span>`;
      })
      mainText.innerHTML = newWord;
      let spanMainText = mainText.querySelectorAll('span');
      let spanAnimationTimeout;
      let opacityAnimationTimeout;
        spanMainText.forEach((span, i) => {
          let animSpan = span.animate([
            {opacity: '0'},
            {opacity: '1'}
          ], {
            duration: 500,
            delay: 150*i});
            animSpan.addEventListener('finish', () => {
              clearTimeout(spanAnimationTimeout);
              spanAnimationTimeout = setTimeout(animationSpan, 400);
            })
            function animationSpan() {
                let animationElements = document.querySelectorAll('.js-anim');
                animationElements.forEach((item, i) => {
                let animItem = item.animate([
                  {opacity: '0'},
                  {opacity: '1'}
                ], {duration: 350, delay: 250*i, easing: 'ease-out', fill: 'forwards'});
                animItem.addEventListener('finish', () => {
                  clearTimeout(opacityAnimationTimeout);
                  opacityAnimationTimeout = setTimeout(()=>{document.querySelector('body').style.overflow = 'unset';}, 500);
                })
              })
            }
          })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let prisonCards = document.querySelectorAll('.prison__item');
    // let prisonParent = document.querySelector('.prison__items');
    if (prisonCards) {
        prisonCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                // let src = card.getAttribute('data-src');
                // prisonParent.animate([{ opacity: .80 }, { opacity: 1 }], { duration: 300 })
                // prisonParent.style.backgroundImage = `url(${src})`;
                // console.log(src)
            })
        })
    }
    // tabs main
    let mainSlider = document.querySelector('.slider');

    function tabsMain() {
        let descParentTabs = document.querySelector('.slider__nav')
        let btn = document.querySelectorAll('.slider__nav-tab');
        let block = document.querySelectorAll('.slider__content');
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                    item.animate([{ opacity: 0 }, { opacity: 1, }], { duration: 300 })
                });
            });
        });
        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('slider__nav-tab')) {
                btn.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        });
    }
    if (mainSlider) {
        tabsMain();
    }
    // Burger menu
    let burger = document.querySelector('.header__menu');
    let menu = document.querySelector('.header__nav');
    if (burger) {
        burger.addEventListener('click', () => {
                console.log('123')
                burger.classList.toggle('active');
                menu.classList.toggle('active')
            })
            // window.addEventListener('scroll', () => {
            //     if (menu.classList.contains('active')) {
            //         burger.classList.remove('active');
            //         menu.classList.remove('active');
            //     }
            // })
        document.addEventListener('click', e => {
            const target = e.target;
            if (!target.closest('.header__menu') && !target.closest('.header__nav-list')) {
                menu.classList.remove('active');
                burger.classList.remove('active');
            }
        })
    }
    // lang 
    let langDownBtn = document.querySelector('.lang-down_active');
    let langDownBlock = document.querySelector('.header__lang-other');
    if (langDownBtn) {
        langDownBtn.addEventListener('click', () => {
            langDownBlock.classList.toggle('active');
        })
    }

    // tabs prison
    let publicSec = document.querySelector('.public');

    function tabsPrison() {
        let descParentTabs = document.querySelector('.content__tabs')
        let btn = document.querySelectorAll('.content__tab');
        let block = document.querySelectorAll('.content__item-tab');
        btn.forEach((key, index) => {
            key.addEventListener('click', function() {
                block.forEach((item, itemindex) => {
                    item.classList.toggle('active', index === itemindex)
                    item.animate([{ opacity: 0 }, { opacity: 1, }], { duration: 300 })
                });
            });
        });
        descParentTabs.addEventListener('click', (e) => {
            const target = e.target
            if (target.classList.contains('content__tab')) {
                btn.forEach(item => {
                    item.classList.remove('active')
                })
            }
            target.classList.add('active')
        });
    }
    if (publicSec) {
      tabsPrison();
    }

    // scroll animation decor elem
    let decorElem = document.querySelector('.decor-elem');
    let startScroll = scrollY;
    if(decorElem) {
      let count = 0;
      document.addEventListener('scroll', () => {
        if(scrollY > startScroll || (scrollY + window.innerHeight) === document.querySelector('body').offsetHeight) {
          count = count + 5;
        } else {
          count = count - 5;
        }
        startScroll = scrollY;
        decorElem.style.transform = `rotate(${count}deg)`;
      })
    }

    
    // scroll to slider
    let secSlider = document.querySelector('.slider');
    let flagSecSlider = false;
    if(secSlider) {
      let secSliderY = secSlider.offsetTop;
      window.addEventListener('scroll', () => {
        // if(scrollY)
        // console.log(secSliderY)
        // console.log(scrollY)
        if(scrollY > (secSliderY / 2 + 200) && flagSecSlider === false){
          flagSecSlider = true;
          window.scrollTo({
            top: secSliderY,
            behavior: "smooth",
          });
        }
      }) 
    }

    // skip slider Section
    let skipSection = document.querySelector('.skip-slider');
    if(skipSection) {
      skipSection.addEventListener('click', () => {
        window.scrollTo({
          top: document.querySelector('.partners').offsetTop,
          behavior: "smooth",
        })
        skipSection.style.opacity = '0';
      })
    }

})


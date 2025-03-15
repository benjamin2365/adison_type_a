var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5732916820507139,
          "pitch": 0.12146606498087209,
          "rotation": 7.853981633974483,
          "target": "1-kitchen"
        },
        {
          "yaw": -1.4909624811512145,
          "pitch": 0.5236643060270332,
          "rotation": 16.493361431346422,
          "target": "2-living"
        },
        {
          "yaw": -2.0204942673738095,
          "pitch": -0.01486291158506603,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -2.209093120242459,
          "pitch": 0.1792559401764322,
          "rotation": 4.71238898038469,
          "target": "3-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04337367136868764,
          "pitch": 0.040233055484069524,
          "rotation": 4.71238898038469,
          "target": "0-entrance"
        },
        {
          "yaw": 1.3748311826880144,
          "pitch": -0.007358920918260736,
          "rotation": 0,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 2.743496466010731,
        "pitch": -0.08440770442023471,
        "fov": 1.3417914392319403
      },
      "linkHotspots": [
        {
          "yaw": 2.9086570066055604,
          "pitch": 0.05665723585429561,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -0.11458101461064274,
          "pitch": 0.07352379519176289,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2222541624469354,
          "pitch": 0.055317937440918286,
          "rotation": 4.71238898038469,
          "target": "2-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.375072143727957,
          "pitch": 0.09082853287952375,
          "rotation": 1.5707963267948966,
          "target": "2-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ADISON_TYPE_A",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

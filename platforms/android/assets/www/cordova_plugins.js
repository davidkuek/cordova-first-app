cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-ezar-facedetector.FaceInfo",
        "file": "plugins/cordova-plugin-ezar-facedetector/www/FaceInfo.js",
        "pluginId": "cordova-plugin-ezar-facedetector",
        "clobbers": [
            "FaceInfo"
        ]
    },
    {
        "id": "cordova-plugin-ezar-facedetector.facedetector",
        "file": "plugins/cordova-plugin-ezar-facedetector/www/facedetector.js",
        "pluginId": "cordova-plugin-ezar-facedetector",
        "merges": [
            "ezar"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-ezar-facedetector": "1.0.0",
    "cordova-plugin-inappbrowser": "1.7.1"
};
// BOTTOM OF METADATA
});
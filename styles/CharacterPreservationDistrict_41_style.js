var size = 0;
var placement = 'point';
function categories_CharacterPreservationDistrict_41(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Township':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7.6}),fill: new ol.style.Fill({color: 'rgba(245,162,122,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Not In Township':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7.6}),fill: new ol.style.Fill({color: 'rgba(255,235,175,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_CharacterPreservationDistrict_41 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("value");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_CharacterPreservationDistrict_41(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};

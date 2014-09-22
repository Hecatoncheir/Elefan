$('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "highlight": {
        "grip_class": "gripHighlighted",
        "panel_selector": ".highlightPanel"
    },
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $('.leftLabel').text(leftValue);
        $('.rightLabel').text(rightValue);
    },
});

// Call methods and such...
var highlightMin = Math.random() * 20,
    highlightMax = highlightMin + Math.random() * 80;
$('.nstSlider').nstSlider('highlight_range', highlightMin, highlightMax);
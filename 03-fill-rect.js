var i2c = require('i2c-bus'),
    Oled = require('oled-i2c-bus'),
    font = require('oled-font-5x7');

const SIZE_X=128,
    SIZE_Y=32,
    CHANNEL = 1
;
var i2cBus = i2c.openSync(CHANNEL)

var opts = {
    width: SIZE_X,
    height: SIZE_Y,
    address: 0x3C
};

var oled = new Oled(i2cBus, opts);


oled.clearDisplay();
oled.turnOnDisplay();

oled.fillRect(1, 1, 10, 20, 1);

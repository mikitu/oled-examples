var i2c = require('i2c-bus'),
    oled = require('oled-i2c-bus');

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

var oled = new oled(i2cBus, opts);
var font = require('oled-font-5x7');


oled.clearDisplay();
oled.turnOnDisplay();

oled.setCursor(1, 1);
oled.writeString(font, 1, 'Cats and dogs are really cool animals, you know.', 1, true);
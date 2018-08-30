const DMXUniverse = require('./dmx/DMXUniverse')
const MovingHead = require('./lights/MovingHead')
const Par = require('./lights/Par').default
const Bar = require('./lights/Bar').default

const Pulseing = require('./color/Pulseing').default
const Fadeing = require('./color/Fadeing')
const Hue = require('./color/hue')

const RGB = require('./color/RGB').default
const RGBW = require('./color/RGBW')
const Angle = require('./movement/Angle')
const Sweep = require('./movement/Sweep')
const Percent = require('./Percent')
let universe = new DMXUniverse(0,50)
let i = 1;
let time = 1000;
universe.addItem(new Bar(new RGB(4,255,0,255),new RGB(4,255,0,255),new RGB(4,255,0,255),new RGB(4,255,0,255),new RGB(4,255,0,255),new RGB(4,255,0,255),new RGB(4,255,0,255),new RGB(4,255,0,255)),1)
universe.addItem(new Par(new RGB(4,255,0,255)),29)
universe.addItem(new Par(new RGB(4,2555,0,255)),36)
universe.addItem(new Par(new RGB(4,255,0,255)),43)
universe.addItem(new Par(new RGB(4,255,0,255)),50)
universe.addItem(new Par(new RGB(4,255,0,255)),57) // to add
let point = new MovingHead()
point.color = new Fadeing(new RGB(4,255,0,255),new RGB(4,255,0,255),2000)
// point.x = new Sweep(new Angle(0),new Angle(180),time,time);
// point.y = new Sweep(new Angle(0),new Angle(90),time/0.95,time);

universe.addItem(point,4)
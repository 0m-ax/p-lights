const DMXUniverse = require('./dmx/DMXUniverse')
const MovingHead = require('./lights/MovingHead')
const Par = require('./lights/Par').default
const Bar = require('./lights/Bar').default

const Pulseing = require('./color/Pulseing').default
const Fadeing = require('./color/Fadeing')
const swap = require('./color/swap')
const RGB = require('./color/RGB').default
const RGBW = require('./color/RGBW').default
const Angle = require('./movement/Angle')
const Sweep = require('./movement/Sweep')
const Percent = require('./Percent').default
let universe = new DMXUniverse(1,100)
let point = new MovingHead()
var fspeed = 1000;
let strobe =  new Percent(0)
point.color = new swap(new RGB(255,255,255,255), new RGB(255,255,255,255),fspeed)
//point.color = new RGBW(255,255,255,255,255)

point.x = new Sweep(new Angle(0),new Angle(360),10000)
point.y = new Sweep(new Angle(-20),new Angle(180 + 20),10000)
point.strobe = strobe
let tree1 = new Par(new Fadeing(new RGB(128,255,255,0),new RGB(128,255,0,255),500))
tree1.strobe = strobe;
// let tree2 = new Par(new Fadeing(new RGB(255,255,0,255),new RGB(255,0,255,255),fspeed))
// let tree3 = new Par(new Fadeing(new RGB(128,255,0,255),new RGB(128,0,255,255),fspeed))
// tree3.strobe = strobe;
// let tree4 = new Par(new Fadeing(new RGB(255,255,0,255),new RGB(255,0,255,255),fspeed))
// let tree5 = new Par(new Fadeing(new RGB(255,255,0,255),new RGB(255,0,255,255),fspeed))
// universe.addItem(tree1,1)
// universe.addItem(tree2,8)
// universe.addItem(tree3,15)
// universe.addItem(tree4,22)
// universe.addItem(tree5,29)
universe.addItem(new Bar())
universe.addItem(point,36)
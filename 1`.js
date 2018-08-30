const DMXUniverse = require('./dmx/DMXUniverse')
const MovingHead = require('./lights/MovingHead')
const Par = require('./lights/Par').default
const Pulseing = require('./color/Pulseing').default
const Fadeing = require('./color/Fadeing')
const RGB = require('./color/RGB').default
console.log(RGB)
const RGBW = require('./color/RGBW')
const Angle = require('./movement/Angle')
const Sweep = require('./movement/Sweep')
const Percent = require('./Percent')
let universe = new DMXUniverse(1,100)
let fade = new Fadeing(new RGB(255,255,0,255),new RGB(255,0,255,255),2000)
universe.addItem(new Par(fade),1)
universe.addItem(new Par(fade),8)
universe.addItem(new Par(fade),15)
universe.addItem(new Par(fade),22)
universe.addItem(new Par(fade),29)


let universe = new DMXUniverse(1,100)
let point = new MovingHead()
point.color = new Fadeing(new RGB(255,255,0,255),new RGB(255,0,255,255),2000)
point.x = new Sweep(new Angle(0),new Angle(360),1000,time);


let tree1c = new Fadeing(new RGB(255,255,0,255),new RGB(255,0,255,255),2000)





let 
/*
let uni = new DMXUniverse(1)

let par1 = new Par(uni,12);
par1.color.red = 255;
par1.color = new Pulseing(128,255,255,2000)
let par2 = new Par(uni,19);
let par3 = new Par(uni,26);
let par4 = new Par(uni,33);
let head = new MovingHead(uni,1)
let items = [par1,par2,par3,par4,head]
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
*/
/*
let head = new MovingHead();
head.x= new Sweep(new Angle(0),new Angle(90),600)
head.y = new Sweep(new Angle(0),new Sweep(new Angle(0),new Angle(90),3000),1000)
head.color = new Fadeing(new RGB(255,255,0,255),new RGB(255,0,255,255),2000)
head.speed = new Percent(1)
universe.addItem(head,1);
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
//module.exports = DMXUniverse;
*/
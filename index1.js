const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(8080);
const DMXUniverse = require('./dmx/DMXUniverse')
let universe = new DMXUniverse(1,100)
const Par = require('./lights/Par').default
const MovingHead = require('./lights/MovingHead')
const Pulseing = require('./color/Pulseing').default
const Fadeing = require('./color/Fadeing')
const RGBW = require('./color/RGBW').default
const Percent = require('./Percent').default
const Sweep = require('./movement/Sweep')
const Angle = require('./movement/Angle')

console.log(RGBW)
let par1 = new Par()
let par2 = new Par()
let par3 = new Par()
let par4 = new Par()
let par5 = new Par()
let head = new MovingHead()
universe.addItem(par1,1)
universe.addItem(par2,8)
universe.addItem(par3,15)
universe.addItem(par4,22)
universe.addItem(par5,29)
universe.addItem(head,36)
let lights = [
    par1,
    par2,
    par3,
    par4,
    par5,
    head
];
let time = Date.now();
let vals = {
    "c1:red":255,
    "c1:green":0,
    "c1:blue":0,
    "c2:red":0,
    "c2:green":255,
    "c2:blue":0,
    "c:speed":5000,
    "c:speed":2000,
    "x:speed":1000,
    "y:speed":1000,
    "strobe":0,
    "sweep":false
}
function update(){
    let color1 = new RGBW(255,vals["c1:red"],vals["c1:green"],vals["c1:blue"],0)
    let color2 = new RGBW(255,vals["c2:red"],vals["c2:green"],vals["c2:blue"],0)
    for(i in lights){
        lights[i].color = new Fadeing(color1,color2,vals['c:speed'],time)
        lights[i].strobe = new Percent(vals['strobe']);
        lights[i].x = new Sweep(new Angle(0),new Angle(360),vals["x:speed"],time);
        lights[i].y = new Sweep(new Angle(0),new Angle(180),vals["y:speed"],time);
    }
}
update()
app.use(express.static('static'))
io.on('connection', function (socket) {
    io.emit("values-up",vals)
    socket.on("value-up",function(value){
        vals[value.name]=value.value;
        io.emit("values-up",vals)
        update()
        console.log("update")
    })
});
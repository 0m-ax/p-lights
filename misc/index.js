const { spawn } = require('child_process');
const ola = spawn('ola_streaming_client', ['-u', '1']);
var x = 0;
var y=0;
ola.stdin.write("0\n")
var strobe = false;
ola.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
var keypress = require('keypress');
 
// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
    if(ch == "c"){
        process.exit()
    }
    if(ch == "w"){
        y+=4;
    }
    if(ch == "W"){
        y+=8;
    }
    if(ch == "s"){
        y-=4
    }
    if(ch == "S"){
        y-=8;
    }
    if(ch == "a"){
        x-=4;
    }
    if(ch == "A"){
        x-=8;
    }
    if(ch == "d"){
        x+=4;
    }
    if(ch == "D"){
        x+=8;
    }
    if(x < 0){
        x=0;
    }
    if(x > 255){
        x=255;
    }
    if(y < 0){
        y=0;
    }
    if(y > 255){
        y=255;
    }
    console.log(x,y)
    ola.stdin.write(x+",0,"+y+"\n")
});
process.stdin.setRawMode(true);
process.stdin.resume();
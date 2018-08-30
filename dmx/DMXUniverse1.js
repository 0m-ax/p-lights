const { spawn } = require('child_process');
class DMXUniverse{
    constructor(universe){
        this.__values = Array(512).fill(0)
        this._client = spawn('ola_streaming_client', ['-u', universe]);
        this._waitingToUpdate = false;
        this._apply()
    }
    _apply(){
        if(!this._waitingToUpdate){
            this._waitingToUpdate = true;
            process.nextTick(this._update.bind(this))
        }
    }
    _update(){
        this._waitingToUpdate = false;
        this._client.stdin.write(this.__values.join(',')+"\n")
    }
    setValue(address,value){
        this.__values[address-1] = value;
        this._apply()
    }
    setValues(startAddress,values){
        values.map((value,index)=>this.setValue(startAddress+index,value))
    }
    getValue(address){
        return this.__values[address-1]
    }
    getValues(startAddress,number){
        return Array(number).fill(0).map((c,index)=>this.getValue(startAddress+index))
    }
}
//let universe = new DMX(1)
//universe.setValues(1,[0,0,0,0])
module.exports = DMXUniverse;
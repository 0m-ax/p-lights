const { spawn } = require('child_process');
class DMXUniverse{
    constructor(universe,updatePeriod){
        this._items = [];
        this._client = spawn('ola_streaming_client', ['-u', universe]);
        setInterval(this._update.bind(this),updatePeriod)
        this.beforeUpdate = function(){};
        this._update()
    }
    addItem(item,offset){
        this._items.push({item,"offset":offset-1})
    }
    _update(){
        let time = Date.now();
        this.beforeUpdate(time);
        let output = []
        this._items.map((item)=>{
            return {
                "values":item.item.update(time),
                "offset":item.offset
            }
        })
        .forEach((item)=>{
            item.values.forEach((value,index)=>{
                output[item.offset+index] = value;
            })
        })
        output.map((value)=>{
            if(value >= 0 && value <= 255){
                return value
            }
        })
        if(output.length > 0){
            this._client.stdin.write(output.join(',')+"\n")
        }
        console.log(Date.now()-time)
    }
}
module.exports = DMXUniverse;
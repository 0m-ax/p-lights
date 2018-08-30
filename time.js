let redDef = {
    "eventType":"objDefintion",
    "obj":{
        "objType":"instance",
        "instanceType":"RGB",
        "params":[
            {
                "objType":"value",
                "value":255,
            },
            {
                "objType":"value",
                "value":64,
            },
            {
                "objType":"value",
                "value":128,
            },
            {
                "objType":"value",
                "value":255,
            }
        ]
    },
    "name":"red"
}
let a = {
    "eventType":"objDefintion",
    "obj":{
        "objType":"instance",
        "instanceType":"MovingHead",
        "params":[
            {
                "objType":"refrence",
                "name":"red"
            }
        ]
    },
    "name":"coolio"
}
let b = {
    "eventType":"objModification",
    "name":"coolio",
    "propertie":"color",
    "obj":{
        "objType":"instance",
        "instanceType":"RGB",
        "params":[
            {
                "objType":"value",
                "value":255,
            },
            {
                "objType":"value",
                "value":0,
            },
            {
                "objType":"value",
                "value":0,
            },
            {
                "objType":"value",
                "value":255,
            }
        ]
    }
}

let DMXUniverse = require('./dmx/DMXUniverse')

class EventManger{
    constructor(objectTypes = []){
        this.namedObjects = {};
        this.objectTypes = {};
        objectTypes.map(this.addObjectType.bind(this))
    }
    addObjectType(object){
        this.objectTypes[object.name] = object;
    }
    ProcessEvent(event){
        if(event.eventType == "objDefintion"){
            this.ProcessDefintion(event)
        }else if(event.eventType == "objModification"){
            this.ProcessModification(event)
        }else{
            throw new Error("unknown event")
        }
    }
    ProcessDefintion(defintion){
        this.namedObjects[defintion.name] = this.ProcessObj(defintion.obj)
    }
    ProcessModification(modification){
        this.namedObjects[modification.name][modification.propertie] = this.ProcessObj(modification.obj)
    }
    ProcessObj(obj){
        let output = null;
        if(obj.objType == "instance"){
            output = this.ProcessInstance(obj)
        }else if(obj.objType == "value"){
            output = this.ProcessValue(obj)
        }else if(obj.objType == "refrence"){
            output = this.ProcessRefrence(obj)
        }else{
            throw new Error("unknown type")
        }
        return output;
    }
    ProcessRefrence(refrence){
        return this.namedObjects[refrence.name]
    }
    ProcessValue(value){
        return value.value
    }
    ProcessInstance(instance){
        let params = []
        if(instance.params){
            params = instance.params.map(ProcessObj)
        }
        return new this.objectTypes[instance.instanceType](...params)
    }
}
class TimeLine {
    constructor(data,universeNo){
        this.eventManger = new EventManger(data.objectTypes.map((name)=>require(name)))
        this.events = data.events.sort((a,b)=>a.time-b.time)
        this.universe = new DMXUniverse(universeNo,100);
        data.fixtures.map((fixture)=>{
            return {
                "eventType":"objDefintion",
                "obj":{
                    "objType":"instance",
                    "instanceType":"MovingHead",
                    "params":[]
                },
                "name":"coolio"
            }
        })
        this.universe.beforeUpdate = this.update.bind(this)
        this.startTime = Date.now()
    }
    update(time){
        let timeOffset = time - this.startTime;
        for(let i in this.events){
            if(this.events[i].time < timeOffset && this.events[i].run !== true){
                this.events[i].run = true;
            }
        }
    }
}
let time = new TimeLine(require('./data.json'))
console.log(time)
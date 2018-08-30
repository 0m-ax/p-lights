class EventManger{
    constructor(objectTypes = []){
        this.namedObjects = {};
        this.objectTypes = {};
        objectTypes.map(this.addObjectType.bind(this))
    }
    addObjectType(object){
        console.log(object);
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
            params = instance.params.map(this.ProcessObj)
        }
        return new this.objectTypes[instance.instanceType](...params)
    }
}
module.exports = EventManger;
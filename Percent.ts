export default class Percent{
    public value:number;
    constructor(value){
        this.value = value;
    }
    update(time){
        return this.value;
    }
}

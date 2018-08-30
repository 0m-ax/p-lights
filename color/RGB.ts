export default class RGB {
    public static params = ['Number','Number','Number','Number'];
    public static properties = {
        brightness:'Number',
        red:'Number',
        green:'Number',
        blue:'Number',
    }
    public brightness: number;
    public red: number;
    public green: number;
    public blue: number;
    constructor(brightness,red,green,blue){
        this.brightness = brightness || 255;
        this.red = red || 0;
        this.green = green || 0;
        this.blue = blue || 0; 
    }
    update(time){
        return {
            "brightness":this.brightness,
            "red":this.red,
            "green":this.green,
            "blue":this.blue
        }
    }
}
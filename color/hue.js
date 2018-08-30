function hslToRgb(h, s, l) {
    var r, g, b;
  
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
  
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    return [ r * 255, g * 255, b * 255 ];
  }
class Hue{
    constructor(period,time){
        this.startTime = time || Date.now();
        this.period = period;
    }
    update(time){
        let timeOffset = time-this.startTime;;        
        let percent = (timeOffset%this.period)/this.period;   
        let color = hslToRgb(percent,1,0.5)     
        return {
            brightness:255,
            red:Math.pow(color[0]/255,2)*255,
            green:Math.pow(color[1]/255,2)*255,
            blue:Math.pow(color[2]/255,2)*255
        }
    }
}
module.exports = Hue;
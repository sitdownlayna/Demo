export function throttle(fn, wait = 1000){
    let previous = 0;
    return function(){
      let now = +Date();
      if(now - previous > wait){
        fn.apply(this, arguments);
        previous = now;
      }
    }
}
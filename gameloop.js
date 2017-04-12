let now = timestamp();
let last = dt = accumulation = fps = 0;
const step = 1/60;

function frame() {

    now = timestamp();
    dt = now - last;
    accumulation += Math.min(1, (dt)/1000);	//Limit accumulation time to 1 second.
    fps = 1000 / dt;

    // check key inputs here
    
    while(accumulation >= step){

        // update here
        
        accumulation -= step;
    }

    //draw here
    
    last = now;
    requestAnimationFrame(frame);
}

function timestamp() {
	
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();

}

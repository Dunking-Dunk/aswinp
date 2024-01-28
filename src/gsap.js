import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

import SplitText from "split-type";

gsap.registerPlugin(Draggable) 
gsap.registerPlugin(ScrollTrigger) 
ScrollTrigger.config({
    // a comma-delimited list of events that trigger a refresh. 
    // default: "visibilitychange,DOMContentLoaded,load,resize"
    // so you could remove the "resize" one:
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
  });


export function initiateAnimation() { 
    const texts = document.querySelectorAll('.reveal-text')
    const fadeInRight = document.querySelectorAll('.fade_in_right')
    
        const text = new SplitText(texts)
 
        gsap.from(text.words,
            {
                scrollTrigger: {
                    trigger: texts,
                    start: 'top 100%',
                    end: 'top 30%',
                    scrub: 2, 
                },
                y: 50,
                opacity: 0,
                stagger: 0.1
            }
        )


    // fadeInRight.forEach((ele) => {
    
    //         gsap.from(ele,
    //             {
    //                 scrollTrigger: {
    //                     trigger: ele,
    //                     start: 'top 90%',
    //                     end: '200 70%',
    //                     markers: true,
    //                     scrub: 2,
    //                 },
    //                 left: '-100%',
    //                 ease: 'power1.in',
    //             })
            
    //         })
    
    
}
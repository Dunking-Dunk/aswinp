import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

import SplitText from "split-type";

gsap.registerPlugin(Draggable) 
gsap.registerPlugin(ScrollTrigger) 

export function initiateAnimation() { 
    const texts = document.querySelectorAll('.reveal-text')
    const fadeInRight = document.querySelectorAll('.fade_in_right')
    
    texts.forEach((char, i) => {
        const text = new SplitText(char, { types: 'chars' })
 
        gsap.from(text.chars,
            {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 2, 
                },
                y: 50,
                opacity: 0,
                stagger: 0.1
            }
        )
    })

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
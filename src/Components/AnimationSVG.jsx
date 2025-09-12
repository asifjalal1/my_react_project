// import '../assets/css/animate-svg.css';
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";

function AnimationSVG() {
    const ToggleMenue = useRef(null);
    const tl = useRef(null);
    const  [togglehover, settogglehover] = useState(true);

    const hamburgerHoverEvent = () => {
        if(!togglehover){
            return;
        }
        // gsap.to(".line-one", { rotation: 27, x: 100, duration: 1 });
        // var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
        // let tl = gsap.timeline({});
        // tl.to('.line-one', {scaleX: 1.5, duration: .25, stagger: 0.125, repeat: 1, yoyo: true});
        // tl.to('.line-items', {scaleX: 1.5, duration: .25, stagger: 0.125, repeat: 1, yoyo: true});
        tl.current.to('.line-items', 0.25, {scaleX: 1.5, duration: 0.125, stagger: 0.125, repeat: 1, yoyo: true, ease: "power2.inOut", svgOrigin: '50 50'});
    }
    const hamburgerClickEvent = () => {
        settogglehover(() => !togglehover);
        ToggleMenue.current.reversed() ? ToggleMenue.current.play() : ToggleMenue.current.reverse();
        
    }
    useEffect(() => {
        ToggleMenue.current = gsap.timeline({paused: true, reversed: true})
            .to('.line-two', 0.125, {scaleX: 0}, 0)
            .to('.line-one', 0.25, {transformOrigin: '50% 50%', ease: "power2.inOut", y: 6}, 'slide')
            .to('.line-three', 0.25, {transformOrigin: '50% 50%', ease: "power2.inOut", y: -6}, 'slide')
            .to('.hamburger', 0.5, {rotate: 360, ease: "power4.inOut"})
            .to('.line-one', 0.25, {rotate: 45, ease: "power2.inOut"}, 'cross')
            .to('.line-three', 0.25, {rotate: -45, ease: "power2.inOut"}, 'cross');
        tl.current = gsap.timeline({})
      }, []);
    return (
        <>
            <div className="flex justify-center">
                <div className="w-100" onMouseEnter={hamburgerHoverEvent} onClick={hamburgerClickEvent}>
                    <svg className='hamburger' xmlns="http://ww3.org/200/svg" viewBox='0 0 100 100'> 
                        <line className='line-one line-items' x1="25" y1="42" x2="75" y2="42" fill='none' stroke='#000' strokeMiterlimit={10} strokeWidth={2}/>
                        <line className='line-two line-items' x1="25" y1="48" x2="75" y2="48" fill='none' stroke='#000' strokeMiterlimit={10} strokeWidth={2}/>
                        <line className='line-three line-items' x1="25" y1="54" x2="75" y2="54" fill='none' stroke='#000' strokeMiterlimit={10} strokeWidth={2}/>
                    </svg>
                </div>
            </div>
        </>
    )
}
export default AnimationSVG

// install gsap
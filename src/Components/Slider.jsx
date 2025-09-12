import styled from "../assets/css/Slider.module.css"
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useRef, useState } from 'react';
// import { addJs } from '../utils';

function Slider() {
    const carouselRef = useRef(null);
    const thumbnailRef = useRef(null);
    const listRef = useRef(null);
    const listItemRef = useRef([]);
    const thumbnailItemRef = useRef([]);
    const carouselDomItem = [1, 2, 3, 4, 5, 6, 7];
    let timer;
    let timer2;
    let duration = 7000;
    let duration2 = 3000;

    const handleClick = (dir) => {
        const carousel = carouselRef.current;
        const list = listRef.current;
        const thumb = thumbnailRef.current;
        const items = listItemRef.current;
        const thumbs = thumbnailItemRef.current;

        if (!carousel || !list || !thumb || items.length === 0 || thumbs.length === 0) return;

        if (dir === 'next') {
            const firstItem = items.shift();
            const firstThumb = thumbs.shift();

            list.appendChild(firstItem);
            thumb.appendChild(firstThumb);

            items.push(firstItem);
            thumbs.push(firstThumb);

            carousel.classList.add(styled.next, styled.carousel);
        } else {
            const lastItem = items.pop();
            const lastThumb = thumbs.pop();

            list.prepend(lastItem);
            thumb.prepend(lastThumb);

            items.unshift(lastItem);
            thumbs.unshift(lastThumb);

            carousel.classList.add(styled.prev, styled.carousel);
        }

        clearTimeout(timer);
        timer = setTimeout(() => {
            carousel.classList.remove(styled.next, styled.prev);
        }, duration2);

        clearTimeout(timer2);
        timer2 = setTimeout(() => {
            handleClick('next');
        }, duration);
    }
    useEffect(() => {
        //    addJs();
        setTimeout(() => {
            handleClick('next');
        }, duration);
    }, []);

    return (
        <>
            <div className={`${styled.carousel}`} ref={carouselRef}>
                <div className={styled.list} ref={listRef}>
                    {carouselDomItem.map((item, index) => (
                        <div className={styled.item} key={index} ref={(el) => listItemRef.current[index] = el}>
                            <img src={`./images/logo${item}.jpg`} alt="Logo"/>
                            <div className={styled.content}>
                                <div className={styled.author}>Asif</div>
                                <div className={styled.title}>Web Design {item}</div>
                                <div className={styled.topic}>Scroller</div>
                                <div className={styled.des}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui mollitia tenetur ullam alias, enim quibusdam provident suscipit optio vero minus dignissimos nesciunt excepturi esse, unde voluptatibus obcaecati magnam corporis quasi!
                                </div>
                                <div className={styled.buttons}>
                                    <button>See More</button>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* thumbnail */}
                <div className={styled.thumbnail} ref={thumbnailRef}>
                    {carouselDomItem.map((item, index) => (
                        <div className={styled.item} key={index} ref={(el) => thumbnailItemRef.current[index] = el}>
                            <img src={`./images/logo${item}.jpg`} alt="Logo"/>
                            <div className={styled.content}>
                                <div className={styled.title}>
                                    Name Slider
                                </div>
                                <div className={styled.des}>
                                    description title
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* arrows */}
                <div className={styled.arrows}>
                    <button className={styled['arrow-button'] +' '+ styled.prev} onClick={()=>handleClick('prev')}><ArrowBackIosNew /></button>
                    <button className={styled['arrow-button'] +' '+ styled.next} onClick={()=>handleClick('next')}><ArrowForwardIos /></button>
                </div>
                <div className={styled.time}></div>
            </div>
        </>
    )
}

export default Slider
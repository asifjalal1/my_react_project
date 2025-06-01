import styled from "../assets/css/Slider.module.css"
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from 'react';
import { add } from '../utils';

function Slider() {
    useEffect(() => {
        add(4,5)
    }, []);

    return (
        <>
            <div className={`${styled.carousel} ${styled.prev}`}>
                <div className={styled.list}>
                    <div className={styled.item}>
                        <img src="./images/logo1.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.author}>Asif</div>
                            <div className={styled.title}>Web Design 1</div>
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
                    <div className={styled.item}>
                        <img src="./images/logo2.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.author}>Asif</div>
                            <div className={styled.title}>Web Design 2</div>
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
                    <div className={styled.item}>
                        <img src="./images/logo3.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.author}>Asif</div>
                            <div className={styled.title}>Web Design 3</div>
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
                    <div className={styled.item}>
                        <img src="./images/logo4.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.author}>Asif</div>
                            <div className={styled.title}>Web Design 4</div>
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
                    <div className={styled.item}>
                        <img src="./images/logo5.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.author}>Asif</div>
                            <div className={styled.title}>Web Design 5</div>
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
                    <div className={styled.item}>
                        <img src="./images/logo6.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.author}>Asif</div>
                            <div className={styled.title}>Web Design 6</div>
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
                    <div className={styled.item}>
                        <img src="./images/logo7.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.author}>Asif</div>
                            <div className={styled.title}>Web Design 7</div>
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
                </div>
                {/* thumbnail */}
                <div className={styled.thumbnail}>
                    <div className={styled.item}>
                        <img src="./images/logo1.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.title}>
                                Name Slider
                            </div>
                            <div className={styled.des}>
                                description title
                            </div>
                        </div>
                    </div>
                    <div className={styled.item}>
                        <img src="./images/logo2.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.title}>
                                Name Slider
                            </div>
                            <div className={styled.des}>
                                description title
                            </div>
                        </div>
                    </div>
                    <div className={styled.item}>
                        <img src="./images/logo3.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.title}>
                                Name Slider
                            </div>
                            <div className={styled.des}>
                                description title
                            </div>
                        </div>
                    </div>
                    <div className={styled.item}>
                        <img src="./images/logo4.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.title}>
                                Name Slider
                            </div>
                            <div className={styled.des}>
                                description title
                            </div>
                        </div>
                    </div>
                    <div className={styled.item}>
                        <img src="./images/logo5.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.title}>
                                Name Slider
                            </div>
                            <div className={styled.des}>
                                description title
                            </div>
                        </div>
                    </div>
                    <div className={styled.item}>
                        <img src="./images/logo6.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.title}>
                                Name Slider
                            </div>
                            <div className={styled.des}>
                                description title
                            </div>
                        </div>
                    </div>
                    <div className={styled.item}>
                        <img src="./images/logo7.jpg"/>
                        <div className={styled.content}>
                            <div className={styled.title}>
                                Name Slider
                            </div>
                            <div className={styled.des}>
                                description title
                            </div>
                        </div>
                    </div>
                </div>

                {/* arrows */}
                <div className={styled.arrows}>
                    <button id={styled.pre}><ArrowBackIosNew /></button>
                    <button id={styled.next}><ArrowForwardIos /></button>
                </div>
                <div className={styled.time}></div>
            </div>
        </>
    )
}

export default Slider
import React from 'react';
import Header from '../../common-components/header/Header';
import './Hero.css';
import hero_image from '../../../assets/hero_image.png';
import hero_image_back from '../../../assets/hero_image_back.png';
import Heart from '../../../assets/heart.png';
import Calories from '../../../assets/calories.png';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? '178px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here We will help you to shape and build your
                            ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>
                            +
                            <CountUp start={0} end={140} duration={2}></CountUp>
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            +
                            <CountUp start={0} end={978} duration={2}></CountUp>
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            +<CountUp start={0} end={50} duration={2}></CountUp>
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="heart-rate"
                >
                    <motion.img
                        animate={{
                            scale: [1, 1.3, 1],
                        }}
                        transition={{ yoyo: Infinity }}
                        src={Heart}
                        alt=""
                    />
                    <span>Heart Rate</span>
                    <span>116 bmp</span>
                </motion.div>

                {/* hero images */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back}
                    alt=""
                    className="hero-image-back"
                />

                {/* Calories */}
                <motion.div
                    className="calories"
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

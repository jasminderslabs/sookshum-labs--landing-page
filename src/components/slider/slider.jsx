import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Pagination} from 'swiper/modules';

export default function Slider() {
    const cards = [
        {
            src: "industries/healthcare/0001.webp",
            title: "healthcare",
            content:
                "We develop apps & websites that streamline operations, elevate patient care, and empower healthcare.",
            list: [
                "Telemedicine Platform",
                "Patient Health Management System",
                "Virtual Health Coaching",
            ],
        },
        {
            src: "/industries/e-commerce/0001.webp",
            title: "eCommerce",
            content:
                "We craft user-friendly e-Commerce solutions that drive conversions and build customer loyalty.",
            list: ["Multi-Channel Retail Platforms", "B2B platforms", "B2C solutions"],
        },
        {
            src: "/industries/sports/0001.webp",
            title: "Sports",
            content:
                "We design and develop fan-centric sports platforms that drive engagement and connect communities.",
            list: [
                "Fitness Tracking Apps",
                "Personal Training & Coaching Solutions",
                "Activity and Performance Tracking solutions",
            ],
        },
        {
            src: "/industries/business-solutions/0001.webp",
            title: "business solutions",
            content:
                "We craft custom design & development solutions to streamline workflows, boost efficiency, and fuel growth.",
            list: ["CRM apps", "Project Management apps", "Custom Business solutions"],
        },
        {
            src: "/industries/on-demand-solutions/0001.webp",
            title: "on demand solutions",
            content:
                "Craft seamless on demand experiences with our design and development expertise. Get what you need.",
            list: ["Online Classes App", "E-Learning Portals ", "School Management"],
        },
    ];
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[]}
                className="mySwiper w-full border border-white"
            >
                <SwiperSlide className='text-white'>Slide 1</SwiperSlide>
                <SwiperSlide className='text-white'>Slide 2</SwiperSlide>
                <SwiperSlide className='text-white'>Slide 3</SwiperSlide>
                <SwiperSlide className='text-white'>Slide 4</SwiperSlide>
                <SwiperSlide className='text-white'>Slide 5</SwiperSlide>
                <SwiperSlide className='text-white'>Slide 6</SwiperSlide>
                <SwiperSlide className='text-white'>Slide 7</SwiperSlide>
                <SwiperSlide className='text-white'>Slide 8</SwiperSlide>
                <SwiperSlide className='text-white'>Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
}

import { HomeContainer } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import PaadImg from '../../images/Paad.png'
import Paad2Img from '../../images/paad2.jpeg'
import { useFetch } from "../../Hooks/useFetch";
import { NEWS_GET } from '../../api'


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Card } from "./components/card/Card";
import { useEffect } from "react";

export function Home(){

    const { data, loading, error, request } = useFetch()

    useEffect(() => {
        const {url, options } = NEWS_GET()
        request(url, options)
    },[])

    return (
        <HomeContainer className="container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper-container"
            >
                
                <SwiperSlide className="slide-item">
                    <img src={PaadImg} alt="" />
                </SwiperSlide>
                
                <SwiperSlide className="slide-item">
                    <img src={Paad2Img} alt="" />
                </SwiperSlide >

                <SwiperSlide className="slide-item">
                    <img src={PaadImg} alt="" />
                </SwiperSlide>
                
            </Swiper>

            <h2>Notícias</h2>

            <div className="card">
                { data && data.results.map( (item, key) => { 
                    if(key < 3){
                        return <Card key={item.id} title={item.title} description={item.description} image={item.image}/>
                    }   
                })}
            </div>
        </HomeContainer>
    )
}
'use client'
import styles from './page.module.css'
import Typed from 'typed.js';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { animated } from '@react-spring/web'
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Navigation, Pagination, Scrollbar, A11y, Zoom } from 'swiper/modules';

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css'
// import TextTransition from './TextTransition';
// import Links from './links';

export default function Home() {
  const [initialLoad, setInitialLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!initialLoad)
      var typed = new Typed('#typed', {
        strings: ['Engineer. Designer. Creative.', 'Student. Mentor. Leader.', ' Husband. Brother. Friend.'],
        typeSpeed: 90
      });

      setInitialLoad(true);
  }, [setInitialLoad, initialLoad]);
  const images = [

    {src: '/auctions.png'},
    {src: '/wallet.png'},
    {src: '/wallet_add-card.png'},
    {src: '/onboarding.png'},
    {src: '/FAQ.png'},
    {src: '/our-process.png'},
    {src: '/our-process_mobile.png'},
    {src: '/asset-statistics.png'},
    {src: '/recent-trades-desktop.png'},
    {src: '/recent-trades-mobile.png'},
    {src: '/asset_cardx2.png'},
    {src: '/regular-shares_trade-form_wireframe.png'},
    {src: '/order-summary.png'},
    
    {src: '/buy:sell-regular-shares.png'},
    {src: '/confirm_bid_order.png'},
    {src: '/ask-order_wireframe.png'},
    {src: '/advanced-setting_wireframe.png'},
    {src: '/IPO_purchase-form.png'},
    {src: '/IPO_purchase-form_error.png'},
    {src: '/incomplete-profile-prompt.png'},
    {src: '/heropage-statistics_wireframe.png'},
    {src: '/blog-card.png'},
    {src: '/blog-card_horizontal.png'},
    {src: '/more-articles.png'},
    {src: '/more-articles_mobile.png'},

    {src: '/blog-footer.png'},
    
    {src: '/6.png'},
    {src: '/9.png'},
    {src: '/5.png'},
    {src: '/10.png'},
    {src: '/11.png'},
    {src: '/3.png'},
    {src: '/8.png'},
    {src: '/4.png'},
    {src: '/1.png'},
    {src: '/2.png'},
    {src: '/7.png'},
    {src: '/12.png'},
    {src: '/13.png'},
    {src: '/14.png'},
    {src: '/15.png'},
    {src: '/16.png'},
    {src: '/17.png'},
    {src: '/18.png'},
    
    
  ];

  return (
    <>
    <div className={styles.typedContainer} style={{margin: 'auto', width: '100%', justifyContent: 'center', display: 'flex', marginTop: '3rem'}}>
      <span>
        <span id="typed" className={styles.typed} />
      </span>
    </div>
      <div className={styles.wrapper}>
        <div style={{margin: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem'}}>
          {/* <Image src="/profile-pic.png" sizes="(max-width: 2000px) 10vw, 10vw" alt="me" width={312} height={312} style={{borderRadius: '300px', marginBottom: '3rem'}}/> */}
          <a target='0' href="https://linkedin.com/in/haeven" style={{textDecoration: 'none', textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>LinkedIn</a><br></br>
          <a target='0' href="https://www.instagram.com/haeven.kd" style={{textDecoration: 'none', textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>Instagram</a><br></br>
          <a target='0' href="https://x.com/haaduuelias" style={{textDecoration: 'none', textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>Follow on 𝕏</a><br></br>

          <a target='0' href="https://github.com/Haeven/rares-ui-library/blob/main/src/lib/components/" style={{textDecoration: 'none', textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>View frontend code</a><br></br>
          <a target='0' href="https://github.com/Haeven/advent-of-code/blob/main/2023/day%2001/solution-1.py" style={{textDecoration: 'none', textAlign: 'center', color: '#9E9E9E', cursor: 'pointer'}}>View other code</a><br></br>
        <p className={styles['hover-txt']} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer',marginLeft: 'auto', marginRight: 'auto', }}>{isOpen ? 'Hide most recent work' : 'View most recent work'}</p>
        {/* <Link href="">
        <p className={styles['hover-txt']} style={{ cursor: 'pointer',marginLeft: 'auto', marginRight: 'auto', }}>view project code</p>
        </Link> */}
        </div>

                {/* {loopArray.map((i, indx)=> 
                <div style={{ 'backgroundImage': `url(/${indx}.png)`, minHeight: '100%', backgroundRepeat: 'no-repeat' }}></div>
                )} */}
                        {/* <ReactImageCarouselViewer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          images={images}
          startIndex={index}
        /> */}
        
      </div>
      {isOpen &&
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Zoom]}
      spaceBetween={50}
      style={{marginTop: '10rem'}}
      slidesPerView={1}
      navigation
      zoom={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    {images.map(i => 
      <SwiperSlide style={{textAlign: 'center'}} zoom={true}>
        <img style={{maxHeight: '45rem', width: 'auto', maxWidth:'80%'}} key={i.src} src={i.src} />
        {/* <ModalImage
  small={urlToTinyImageFile}

  alt="Hello World!"
/>; */}
        </SwiperSlide>
    ) }
    </Swiper>  }
      {/* {isOpen && <Carousel showArrows={true} useKeyboardArrows={true}>
          
          {images.map(i => 
          <div className="slide">
            <img style={{maxHeight: '45rem', width: 'auto', maxWidth:'80%'}} key={i.src} src={i.src} />
          </div>
          ) }
  
    </Carousel>} */}
    </>
  )
}

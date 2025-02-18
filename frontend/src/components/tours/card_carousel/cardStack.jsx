import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Card } from '../../common'

const CardStack = ({ data }) => {
  return (
    <Swiper modules={[FreeMode, Pagination, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} freeMode={true} spaceBetween={50} auto slidesPerView={4} pagination={{ clickable: true }} className="h-full">
      {data &&
        data.map((tour) => (
          <SwiperSlide>
            <Card tour={tour} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default CardStack

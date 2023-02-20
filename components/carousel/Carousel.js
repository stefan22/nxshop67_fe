import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Items from './Items.js'
import CarouselContainer from './Carousel.styles'

const Carousel = () => {
  const { carouselItems } = Items
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(carouselItems)
  }, [carouselItems])

  return (
    <CarouselContainer>
      {items?.map(item => (
        <div key={item.id} className="item">
          <Image
            layout="intrinsic"
            objectFit="cover"
            responsive="responsive"
            loading="lazy"
            width={1400}
            height={670}
            src={item.imageUrl}
            alt={item.title}
          />

          <div className="caption">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </CarouselContainer>
  )
}

export default Carousel

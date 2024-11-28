import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import React, { useState } from "react";
import "../../index.css";
import { Swiper as SwiperCore } from "swiper";
import { CartItem } from "../../context/CartContext.tsx";

interface Props {
  product: CartItem;
  setProduct: React.Dispatch<React.SetStateAction<CartItem>>;
}

export const Carousel = ({ product, setProduct }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const handleClick = (image: string) => {
    setProduct((prevProduct) => {
      return { ...prevProduct, imageSelected: image };
    });
  };
  return (
    <>
      <Swiper
        modules={[Navigation, Thumbs]}
        spaceBetween={1}
        navigation
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        watchSlidesProgress
      >
        {product.images?.map((image, index) => (
          <SwiperSlide key={index} onClick={() => handleClick(image)}>
            <img
              className="lg:rounded-2xl"
              src={image}
              alt={`Thumbnail ${index + 1} `}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:block mt-10">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={20}
          slidesPerView={4}
          watchSlidesProgress
        >
          {product.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="hover:scale-105 transition-transform">
                <img
                  className="rounded-2xl cursor-pointer "
                  src={image}
                  alt={`Thumbnail ${index + 1} `}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

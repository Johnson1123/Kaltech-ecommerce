import { EffectFade } from "swiper/modules";
import Swiper, { SwiperSlide } from "../../components/swiper";
import sliderData from "../../data/hero-sliders/hero-slider-fifteen.json";
import HeroSliderFifteenSingle from "../../components/hero-slider/HeroSliderFifteenSingle";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoHeight: false,
};

const HeroSlider = () => {
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        {sliderData && (
          <Swiper options={params}>
            {sliderData.map((single, key) => (
              <SwiperSlide key={key}>
                <HeroSliderFifteenSingle data={single} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSlider;

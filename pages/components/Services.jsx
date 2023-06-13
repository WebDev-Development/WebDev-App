import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'
import { useState } from 'react';

export default function Services() {
  const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      name: t.webDevelopment,
      icon1: 'https://i.ibb.co/x7GR8th/quality.png',
      title1: t.webDevelopmentTitle1,
      text1: t.webDevelopmentText1,
      icon2: 'https://i.ibb.co/x7GR8th/quality.png',
      title2: t.webDevelopmentTitle2,
      text2: t.webDevelopmentText2,
      icon3: 'https://i.ibb.co/C8JQJWQ/innovation.png',
      title3: t.webDevelopmentTitle3,
      text3: t.webDevelopmentText3,
    },
    {
      id: 2,
      name: t.ideation,
      icon1: 'https://i.ibb.co/C8JQJWQ/innovation.png',
      title1: t.ideationTitle1,
      text1: t.ideationText1,
      icon2: 'https://i.ibb.co/DGS0tXS/trust.png',
      title2: t.ideationTitle2,
      text2: t.ideationText2,
      icon3: 'https://i.ibb.co/x7GR8th/quality.png',
      title3: t.ideationTitle3,
      text3: t.ideationText3,
    },
    {
      id: 3,
      name: t.supportAndManagement,
      icon1: 'https://i.ibb.co/DGS0tXS/trust.png',
      title1: t.supportAndManagementTitle1,
      text1: t.supportAndManagementText1,
      icon2: 'https://i.ibb.co/C8JQJWQ/innovation.png',
      title2: t.supportAndManagementTitle2,
      text2: t.supportAndManagementText2,
      icon3: 'https://i.ibb.co/DGS0tXS/trust.png',
      title3: t.supportAndManagementTitle3,
      text3: t.supportAndManagementText3,
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="flex items-center justify-center xs:h-screen md:h-96 text-white bg-black">
      <div className="relative w-full xs:h-full md:h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
            <div>
              <h3 className="py-2 pr-4 text-color text-3xl text-center">{slide.name}</h3>
              <div className="text-center flex justify-center pt-3 pb-4 xs:flex-col sm:flex-col md:flex-row">
                <div className="flex flex-col items-center p-3 rounded-lg m-3 flex-1">
                  <img src={slide.icon1} className="w-20 h-28 pt-5 pb-5" alt={slide.title1} />
                  <p className="p-2 text-lg">{slide.title1}</p>
                  <p className="text-sm p-2 xs:mx-8 sm:mx-4 md:mx-0">{slide.text1}</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg m-3 flex-1">
                  <img src={slide.icon2} className="w-20 h-28 pt-5 pb-5" alt={slide.title2} />
                  <p className="p-2 text-lg">{slide.title2}</p>
                  <p className="text-sm p-2 xs:mx-8 sm:mx-4 md:mx-0">{slide.text2}</p>
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg m-3 flex-1">
                  <img src={slide.icon3} className="w-20 h-28 pt-5 pb-5" alt={slide.title3} />
                  <p className="p-2 text-lg">{slide.title3}</p>
                  <p className="text-sm p-2 xs:mx-8 sm:mx-4 md:mx-0">{slide.text3}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        ))}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded"
          onClick={handlePrevSlide}
        >
          ←
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded"
          onClick={handleNextSlide}
        >
          →
        </button>
      </div>
    </div>
  );
}
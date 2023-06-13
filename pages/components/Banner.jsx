import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function Banner() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div id="section-banner" className="flex flex-col bg-black">
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `url('https://i.ibb.co/b54JMWt/img-3.png')`,
          }}
        ></div>
        <div className="flex text-center flex-col text-white relative p-24 mt-36 mb-20">
          <p className="text-4xl p-1">
            <span>{t.home}</span>
          </p>
          <p className="text-4xl p-1">
            <span>{t.home1}</span>{" "}
            <span className="text-color">{t.home2}</span>
          </p>
          <span className="m-6">{t.homeText}</span>
        </div>
      </div>
    </div>
  ) 
}
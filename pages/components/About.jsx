import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function About() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div id="section-about" className="flex flex-col text-left bg-black text-white">
      <h3 className="py-2 pl-3 pr-4 text-color text-center text-xl">{t.values}</h3>
      <div className="text-center flex justify-center pt-3 pb-4 xs:flex-col sm:flex-col md:flex-row">
        <div className="flex flex-col items-center bg-color bg-opacity-5 p-3 border border-color rounded-lg m-3 flex-1">
          <img src="https://i.ibb.co/C8JQJWQ/innovation.png" className="w-20 h-28 pt-5 pb-5" alt={t.valuesText7} />
          <p className="text-color p-2 text-lg underline">{t.valuesText1}</p>
          <p className="text-sm p-2 xs:mx-8 sm:mx-4 md:mx-0">{t.valuesText2}</p>
        </div>
        <div className="flex flex-col items-center bg-color bg-opacity-5 p-3 border border-color rounded-lg m-3 flex-1">
          <img src="https://i.ibb.co/x7GR8th/quality.png" className="w-20 h-28 pt-5 pb-5" alt={t.valuesText7} />
          <p className="text-color p-2 text-lg underline">{t.valuesText3}</p>
          <p className="text-sm p-2 xs:mx-8 sm:mx-4 md:mx-0">{t.valuesText4}</p>
        </div>
        <div className="flex flex-col items-center bg-color bg-opacity-5 p-3 border border-color rounded-lg m-3 flex-1">
          <img src="https://i.ibb.co/DGS0tXS/trust.png" className="w-20 h-28 pt-5 pb-5" alt={t.valuesText7} />
          <p className="text-color p-2 text-lg underline">{t.valuesText5}</p>
          <p className="text-sm p-2 xs:mx-8 sm:mx-4 md:mx-0">{t.valuesText6}</p>
        </div>
        <div className="flex flex-col items-center bg-color bg-opacity-5 p-3 border border-color rounded-lg m-3 flex-1">
          <img src="https://i.ibb.co/5Y0hVnL/exclusivity.png" className="w-20 h-28 pt-5 pb-5" alt={t.valuesText7} />
          <p className="text-color p-2 text-lg underline">{t.valuesText7}</p>
          <p className="text-sm p-2 xs:mx-8 sm:mx-4 md:mx-0">{t.valuesText8}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="py-2 pl-2 pr-4 text-color text-xl">{t.story}</h3>
        <p className="p-2">{t.storyText1}</p>
        <p className="p-2">{t.storyText2}</p>
        <p className="p-2">{t.storyText3}</p>
      </div>

      

      {/* <h3 className="py-2 pl-3 pr-4 text-color text-center text-xl">{t.team}</h3>
      <p>{t.teamText1}</p> */}
    </div>
  ) 
}
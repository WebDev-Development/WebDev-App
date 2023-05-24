import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function About() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div id="section-about" className="flex flex-col text-left">
      
      <h3 class="py-2 pl-3 pr-4 text-color">{t.values}</h3>
      <p class="text-color">{t.valuesText1}</p>
      <p>{t.valuesText2}</p>
      <p class="text-color">{t.valuesText3}</p>
      <p>{t.valuesText4}</p>
      <p class="text-color">{t.valuesText5}</p>
      <p>{t.valuesText6}</p>
      <p class="text-color">{t.valuesText7}</p>
      <p>{t.valuesText8}</p>

      <h3 class="py-2 pl-3 pr-4 text-color">{t.story}</h3>
      <p>{t.storyText1}</p>
      <p>{t.storyText2}</p>
      <p>{t.storyText3}</p>

      <h3 class="py-2 pl-3 pr-4 text-color">{t.team}</h3>
      <p>{t.teamText1}</p>

      <h3 class="py-2 pl-3 pr-4 text-color">{t.howWeWork}</h3>
      <p>{t.howWeWorkText1}</p>
      <p>{t.howWeWorkText2}</p>
      <p>{t.howWeWorkText3}</p>
    </div>
  ) 
}
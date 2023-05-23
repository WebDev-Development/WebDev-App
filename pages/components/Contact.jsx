import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function Contact() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div id="section-contact" className="flex flex-col text-left">
      <h3 class="py-2 pl-3 pr-4 text-color">{t.contactText}</h3>
      <p>{t.contactText1}</p>
      <p>{t.contactText2}</p>
      <p>{t.contactText3}</p>
    </div>
  ) 
}
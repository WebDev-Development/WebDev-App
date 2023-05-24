import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function Services() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div id="section-services" className="flex flex-col text-left mt-20">
      <h3 class="py-2 pl-3 pr-4 text-color">{t.services}</h3>
      <p class="text-color">{t.webDevelopment}</p>
      <p>{t.webDevelopmentText1}</p>
      <p class="text-color">{t.ideation}</p>
      <p>{t.ideationText1}</p>
      <p class="text-color">{t.supportAndManagement}</p>
      <p>{t.supportAndManagementText1}</p>
      <p class="text-color">{t.productDesign}</p>
      <p>{t.productDesignText1}</p>
    </div>
  ) 
}
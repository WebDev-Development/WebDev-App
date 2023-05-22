import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function About() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div className="flex flex-col text-left">
      <span class="text-black">{t.about}</span>
    </div>
  ) 
}
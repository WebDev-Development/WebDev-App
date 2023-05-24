import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function Footer() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div className="bg-black text-white">
      <div className="flex justify-center text-white pt-3 pb-4 xs:flex-col sm:flex-col md:flex-row xs:gap-4 sm:gap-4 md:gap-16 lg:gap-32">
        <div className="flex flex-col text-left">
          <label className="text-xl underline">{t.phone}</label>
          <span>+54 (011) 5454-5454</span>
        </div>
        <div className="flex flex-col text-left"> 
          <label className="text-xl underline">{t.mailing}</label>
          <span>123 Anywhere St. Any City, ST 12345</span>
        </div>
        <div className="flex flex-col text-left">
          <label className="text-xl underline">{t.email}</label>
          <span>hello@webdev.com</span>
        </div>  
        
      </div>
      <div className="flex justify-end pt-1 pb-1">
        <label className="mr-3 mb-2">{t.develop}</label>
      </div>
    </div>
  ) 
}
import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'
import ContactForm from './ContactForm';

export default function Contact() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div id="section-contact" className="bg-black">
      <div className="relative">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `url('https://i.ibb.co/b54JMWt/img-3.png')`,
          }}
        ></div>
        <div className="flex flex-row text-white text-left relative p-2 xs:flex-col sm:flex-col md:flex-row">
          <div className="flex-col flex-1 xs:mx-6 md:mx-4">
            <h3 className="py-2 pl-1 pr-4 text-color text-xl xs:text-center md:text-left">{t.howWeWork}</h3>
            <p className="p-2">{t.howWeWorkText1}</p>
            <p className="p-2">{t.howWeWorkText2}</p>
            <p className="p-2">{t.howWeWorkText3}</p>
            <h3 className="py-2 mt-1 pl-1 pr-4 text-color text-xl xs:text-center md:text-left">{t.contactText}</h3>
            <p className="p-2">{t.contactText1}</p>
            <p className="p-2">{t.contactText2}</p>
          </div>
          <div className="flex flex-1 items-center justify-center pt-14 pb-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
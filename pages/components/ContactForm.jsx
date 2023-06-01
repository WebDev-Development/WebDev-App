import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'

export default function ContactForm() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <div id="form" className="flex flex-col text-left">
      <form class="max-w-xs mx-auto bg-black bg-opacity-30 text-black border border-color rounded-lg p-4 m-3">
        <h3 className="py-2 mb-3 text-lg text-white text-center">{t.form}</h3>
        <input class="mb-4 border rounded w-full py-2 px-3 leading-tight focus:outline-none" id="name" type="text" placeholder={t.form1}/>
        <input class="mb-4 border rounded w-full py-2 px-3 leading-tight focus:outline-none" id="email" type="email" placeholder={t.form2}/>
        <select class="mb-4 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none cursor-pointer" id="projectType" name="projectType">
          <option value="" disabled selected>{t.form3}</option>
          <option value="web">{t.form3a}</option>
          <option value="web-mobile">{t.form3b}</option>
          <option value="p-management">{t.form3c}</option>
          <option value="p-design">{t.form3d}</option>
        </select>
        <input class="mb-4 border rounded w-full py-2 px-3 leading-tight focus:outline-none" id="3q" type="text" placeholder={t.form4}/>
        <textarea class="mb-4 border rounded w-full py-2 px-3 leading-tight focus:outline-none" id="message" rows="4" placeholder={t.form5}></textarea>
      <div class="flex justify-center">
        <button class="mb-4 bg-color bg-opacity-60 hover:bg-opacity-80 text-white py-2 px-4 rounded focus:outline-none" type="submit">{t.submit}</button>
      </div>
    </form>
  </div>
  ) 
}
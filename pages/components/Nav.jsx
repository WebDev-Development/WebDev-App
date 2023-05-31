import { useRouter } from 'next/router'
import en from '../../public/locale/en'
import es from '../../public/locale/es'
import Toggle from '../components/Toggle'

export default function Nav() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <nav class="bg-black text-white w-full z-20 top-0 left-0 border-b border-gray-200 fixed">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <img src="https://i.ibb.co/C68MwT3/WebDev.png" class="h-10 mr-3" alt="WebDev Logo"/>
          <div className="flex flex-col text-left">
            <span class="text-xl whitespace-nowrap ">WebDev</span>
            <span class="text-xs whitespace-nowrap ">Developers Collective</span>
          </div>
        </a>
      <div class="flex md:order-2 ">
        <Toggle/>
        <button type="button" class="font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-color bg-opacity-60 hover:bg-opacity-80">{t.getStarted}</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm rounded-lg md:hidden hover:bg-color hover:bg-opacity-80" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns=""><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <a href="#section-about" class="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-color">{t.about}</a>
          </li>
          <li>
            <a href="#section-services" class="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-color">{t.services}</a>
          </li>
          <li>
            <a href="#section-contact" class="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-color">{t.contact}</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  ) 
}
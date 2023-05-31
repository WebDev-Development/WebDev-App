import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
	const router = useRouter();
	const { locale } = router;

  return (
    <button className="border border-white w-10 h-10 mr-4 px-4 rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-10">
      {locale === 'es' ? (
        <Link className="text-xs" href="/" locale='en'>
          EN
        </Link>
      ) : (
        <Link className="text-xs" href="/" locale='es'>
          ES
        </Link>
      )}
    </button>
  ) 
}
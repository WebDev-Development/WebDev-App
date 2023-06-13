import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Toggle() {
	const router = useRouter();
	const { locale } = router;

  return (
    <button>
      {locale === 'es' ? (
        <Link className="text-xs" href="/" locale='en'>
          <p className="border border-white hover:border-color hover:bg-color hover:bg-opacity-10 w-10 h-10 mr-4 px-4 rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-10">
            EN
          </p>
        </Link>
      ) : (
        <Link className="text-xs" href="/" locale='es'>
          <p className="border border-white hover:border-color hover:bg-color hover:bg-opacity-10 w-10 h-10 mr-4 px-4 rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-10">
            ES
          </p>
        </Link>
      )}
    </button>
  ) 
}
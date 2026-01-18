import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white px-4 text-center">
      <h1 className="text-9xl font-bold text-[#d4af37]">404</h1>
      <h2 className="text-2xl mb-4">Страница не найдена</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Похоже, вы забрели не туда. Но не переживайте, в нашем барбершопе мы исправим любую ситуацию, кроме этой ссылки.
      </p>
      <Link 
        href="/"
        className="inline-block bg-[#d4af37] text-black px-8 py-3 rounded-full font-bold uppercase transition-transform hover:scale-105"
      >
        Вернуться на главную
      </Link>
    </div>
  )
}
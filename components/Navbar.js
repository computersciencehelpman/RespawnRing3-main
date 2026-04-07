import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-6">
      <Link href="/">
        <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold text-sm shadow-[0_0_10px_#d946ef,0_0_20px_#a855f7] hover:shadow-[0_0_20px_#d946ef,0_0_40px_#a855f7] transition duration-300 cursor-pointer">
          Home
        </div>
      </Link>

      <Link href="/products">
        <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold text-sm shadow-[0_0_10px_#d946ef,0_0_20px_#a855f7] hover:shadow-[0_0_20px_#d946ef,0_0_40px_#a855f7] transition duration-300 cursor-pointer">
          Our Products
        </div>
      </Link>

      <Link href="/roadmap">
        <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold text-sm shadow-[0_0_10px_#d946ef,0_0_20px_#a855f7] hover:shadow-[0_0_20px_#d946ef,0_0_40px_#a855f7] transition duration-300 cursor-pointer">
          Our Roadmap
        </div>
      </Link>

      <Link href="/whitepaper">
        <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold text-sm shadow-[0_0_10px_#d946ef,0_0_20px_#a855f7] hover:shadow-[0_0_20px_#d946ef,0_0_40px_#a855f7] transition duration-300 cursor-pointer">
          Our $Dough Whitepaper
        </div>
      </Link>

      <Link href="/leaderboard">
        <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-semibold text-sm shadow-[0_0_10px_#d946ef,0_0_20px_#a855f7] hover:shadow-[0_0_20px_#d946ef,0_0_40px_#a855f7] transition duration-300 cursor-pointer">
          Our $Dough Leaderboard
        </div>
      </Link>
    </nav>
  );
}
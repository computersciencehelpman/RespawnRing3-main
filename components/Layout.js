import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import DarkModeToggle from './DarkModeToggle';

export default function Layout({ children }) {
  const router = useRouter();
  const isLeaderboard = router.pathname === '/leaderboard';

  const backgroundStyle = isLeaderboard
    ? { backgroundColor: 'black' }
    : {
        backgroundImage: "url('/images/RR-Background-Image.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      };

  return (
    <div
      className="min-h-screen flex flex-col relative text-white"
      style={backgroundStyle}
    >
      <Navbar />
      <Sidebar />
      <Rightbar />
      <DarkModeToggle />

      <main className="pt-32 flex flex-col items-center justify-center flex-grow text-center relative z-10">
        {children}
      </main>

      {/* 🔻 TEAM FOOTER (GLOBAL) */}
      <footer className="w-full text-center text-sm text-white/80 py-6 relative z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <a
            href="https://twitter.com/ShilliBilli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            ShilliBilli (@ShilliBilli)
          </a>

          <span className="hidden sm:inline text-white/40">•</span>

          <a
            href="https://twitter.com/bsaurav796"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            Degen S | $DOUGH CZAR (@bsaurav796)
          </a>

          <span className="hidden sm:inline text-white/40">•</span>

          <a
            href="https://twitter.com/LoreKfw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            kfw (@LoreKfw)
          </a>
        </div>
      </footer>

      {/* ✅ Froth Key image - leaderboard only */}
      {isLeaderboard && (
        <div
          className="z-[1000]"
          style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
          }}
        >
          <Link href="/froth">
            <div
              className="bg-black/80 p-2 rounded-lg shadow-lg backdrop-blur-md cursor-pointer"
              style={{ width: '14rem', maxHeight: '200px' }}
            >
              <img
                src="/images/Froth.png"
                alt="Froth Key"
                className="w-full h-auto object-contain rounded opacity-90"
              />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

import Link from "next/link";

export default function Whitepaper() {
  return (
    <div className="pt-32 w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Whitepaper</h1>

      <div className="w-full flex justify-center px-4">
        <Link href="/froths">
          <img
            src="/images/Froth_resized.png"
            alt="Froth_resized"
            className="
              max-w-6xl w-full h-auto rounded-xl
              shadow-2xl
              cursor-pointer
              transform
              transition duration-300 ease-in-out
              hover:scale-105
              hover:shadow-[0_0_30px_rgba(168,85,247,0.9)]
            "
          />
        </Link>
      </div>
    </div>
  );
}

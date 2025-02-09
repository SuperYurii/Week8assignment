import Image from "next/image";
import placetobe from "@/app/public/assets/placetobe.webp";

export default function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 text-gray-800 px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 drop-shadow-md">
        WhisperBoard
      </h1>
      <p className="max-w-2xl text-lg text-center leading-relaxed text-gray-700">
        Welcome to{" "}
        <span className="font-semibold text-blue-800">WhisperBoard</span>, where
        thoughts take flight and words find their place. Create
        effortlessly—each post a spark, a whisper in the digital wind. Read and
        explore—a tapestry of voices, ideas intertwining in an endless stream.
        Every word a doorway, every thought a journey. And when the moment
        fades, delete with ease. Erase, release, and let go, leaving only echoes
        behind. Here, expression is free, fleeting, and limitless.
      </p>

      <div className="mt-10 w-full max-w-lg shadow-lg rounded-lg overflow-hidden">
        <Image
          src={placetobe}
          alt="Calm place"
          width={500}
          className="rounded-lg object-cover"
          priority
          placeholder="blur"
        />
      </div>
    </div>
  );
}

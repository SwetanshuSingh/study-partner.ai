import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full h-32 mb-4 flex flex-col gap-3 items-center">
      <h1 className="text-5xl font-semibold md:text-6xl lg:text-7xl">
        Study Faster with AI
      </h1>
      <div className="text-center h-full sm:text-2xl md:text-6xl lg:text-3xl md:mt-4">
        <h2>Generate AI-powered study sets, in seconds.</h2>
        <h2>From your own books, notes, videos & more.</h2>
      </div>
      <div className="my-4 max-w-4xl md:my-8">
        <div className="inline-flex w-96 max-w-full flex-nowrap overflow-hidden py-8 md:w-full">
          <ul className="flex animate-marquee items-center justify-start">
            <li className="mx-4 w-36 md:w-52">
              <div className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-800 md:gap-4 text-lg md:text-2xl">
                <button className="bg-yellow-200 text-yellow-600 ring-yellow-400 min-h-28 min-w-28 h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 p-6 md:p-8 flex items-center justify-center rounded-3xl transition-all duration-300 ease-in-out hover:ring-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="bg-yellow-200 text-yellow-600 ring-yellow-400 h-full w-full stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    ></path>
                  </svg>
                </button>
                <p className="text-center font-medium md:font-bold">Summary</p>
              </div>
            </li>
            <li className="mx-4 w-36 md:w-52">
              <div className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-800 md:gap-4 text-lg md:text-2xl">
                <button className="bg-sky-200 text-sky-500 ring-sky-400 min-h-28 min-w-28 h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 p-6 md:p-8 flex items-center justify-center rounded-3xl transition-all duration-300 ease-in-out hover:ring-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="bg-sky-200 text-sky-500 ring-sky-400 h-full w-full stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                    ></path>
                  </svg>
                </button>
                <p className="text-center font-medium md:font-bold">
                  Flash Cards
                </p>
              </div>
            </li>
            <li className="mx-4 w-36 md:w-52">
              <div className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-800 md:gap-4 text-lg md:text-2xl">
                <button className="bg-purple-200 text-purple-500 ring-purple-400 min-h-28 min-w-28 h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 p-6 md:p-8 flex items-center justify-center rounded-3xl transition-all duration-300 ease-in-out hover:ring-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="bg-purple-200 text-purple-500 ring-purple-400 h-full w-full stroke-2"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </button>
                <p className="text-center font-medium md:font-bold">
                  Multiple Choice
                </p>
              </div>
            </li>
            <li className="mx-4 w-36 md:w-52">
              <div className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-800 md:gap-4 text-lg md:text-2xl">
                <button className="bg-orange-200 text-orange-500 ring-orange-400 min-h-28 min-w-28 h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 p-6 md:p-8 flex items-center justify-center rounded-3xl transition-all duration-300 ease-in-out hover:ring-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="bg-orange-200 text-orange-500 ring-orange-400 h-full w-full stroke-2"
                  >
                    <path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"></path>
                    <path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"></path>
                    <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"></path>
                    <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"></path>
                    <path d="M9 7v10"></path>
                  </svg>
                </button>
                <p className="text-center font-medium md:font-bold">
                  Quiz
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-6 flex flex-col items-center gap-2">
        <span className="font-semibold text-stone-600">
          Join our Student Community
        </span>
        <div className="flex -space-x-4">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="aspect-square rounded-full border-2 border-white"
              width={500}
              height={300}
              alt="Researcher 1"
              src="/1.jpg"
            />
          </span>
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="aspect-square h-full w-full rounded-full border-2 border-white"
              width={500}
              height={300}
              alt="Researcher 2"
              src="/2.jpg"
            />
          </span>
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="aspect-square h-full w-full rounded-full border-2 border-white"
              width={500}
              height={300}
              alt="Researcher 3"
              src="/3.jpg"
            />
          </span>
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="aspect-square h-full w-full rounded-full border-2 border-white"
              width={500}
              height={300}
              alt="Researcher 4"
              src="/4.jpg"
            />
          </span>
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="aspect-square h-full w-full rounded-full border-2 border-white"
              width={500}
              height={300}
              alt="Researcher 5"
              src="/5.jpg"
            />
          </span>
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="aspect-square h-full w-full rounded-full border-2 border-white"
              width={500}
              height={300}
              alt="Researcher 6"
              src="/6.jpg"
            />
          </span>
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="aspect-square h-full w-full rounded-full border-2 border-white"
              width={500}
              height={300}
              alt="Researcher 7"
              src="/7.jpg"
            />
          </span>
        </div>
      </div>
      <Link href="/signup">
        <button className="flex-shrink rounded-xl bg-stone-800 p-4 px-8 text-center font-bold text-stone-50 hover:bg-stone-700 md:w-96 md:text-xl">
          Get Started{" "}
        </button>
      </Link>
    </section>
  );
};

export default Hero;

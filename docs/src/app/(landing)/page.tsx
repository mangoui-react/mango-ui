import Link from 'next/link';

export default function Home() {
  return (
    <main className="mb-40 space-y-40">
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px] dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
        </div>
        <div>
          <div className="relative ml-auto pt-36">
            <div className="mx-auto text-center lg:w-2/3">
              <h1 className="text-5xl font-bold text-gray-900 md:text-6xl xl:text-7xl dark:text-white">
                A library of open-source UI components{' '}
                <span className="text-primary dark:text-white">
                  for unstyled, accessible React web apps.
                </span>
              </h1>
              {/* <p className="mt-8 text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque
                sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam.
                Quidem harum omnis beatae ipsum soluta!
              </p> */}
              <div className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
                <Link
                  href="/overview/getting-started"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">Get started</span>
                </Link>
                {/* <a
                  href="#"
                  className="before:bg-primary/10 relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max dark:before:border-gray-700 dark:before:bg-gray-800"
                >
                  <span className="text-primary relative text-base font-semibold dark:text-white">
                    Learn more
                  </span>
                </a> */}
              </div>
              {/* <div className="mt-16 hidden justify-between border-y border-gray-100 py-8 sm:flex dark:border-gray-800">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The lowest price
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The fastest on the market
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    The most loved
                  </h6>
                  <p className="mt-2 text-gray-500">Some text here</p>
                </div>
              </div> */}
            </div>
            {/* <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/microsoft.svg"
                  className="mx-auto h-12 w-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/airbnb.svg"
                  className="mx-auto h-12 w-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="flex p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/google.svg"
                  className="m-auto h-9 w-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/ge.svg"
                  className="mx-auto h-12 w-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="flex p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/netflix.svg"
                  className="m-auto h-8 w-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img
                  src="./images/clients/google-cloud.svg"
                  className="mx-auto h-12 w-auto"
                  loading="lazy"
                  alt="client logo"
                  width=""
                  height=""
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

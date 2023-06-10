
const Showcase = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-accent sm:text-4xl sm:leading-none">
                Let us handle
                <br className="hidden md:block" />
                your next{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  destination
                </span>
              </h2>
              <p className="text-base text-accent/70 md:text-lg">
              No matter the level of experience, every level of the Reelify camp curriculum is organized around the three phases of the filmmaking creative process. All courses are taught by instructors with both industrial and educational experience to make the content as accessible and engaging for young filmmakers as possible.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-all duration-500 hover:underline underline-offset-4 hover:text-accent"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://i.ibb.co/5hLtjNc/long-lake-camp-halloween.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://i.ibb.co/r2x4qvs/23-home-photo-1-Small.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://i.ibb.co/4mxVmt0/temp-Image8-ASKz-B.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Showcase;

const Pricing = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
       
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-secondary sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Our</span>
          </span>{' '}
         Sessions
        </h2>
        <p className="text-base text-accent/80 md:text-lg">
        Offering both Overnight and Day Camp options, introduces kids to the techniques, language and process of filmmaking and acting. 
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-base-100 border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Overnight</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$24</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-accent/80">10 Sessions Month</div>
              <div className="text-accent/80">6 Trip</div>
              <div className="text-accent/80">40+ Classes</div>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Start Now!
            </a>
            <p className="max-w-xs mt-6 text-xs text-accent/70 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              From the idea pitch to the final cut, campers will get hands-on instruction.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-info/5 border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-accent uppercase rounded bg-neutral">
              Most Popular
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Campers</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$38</div>
              <div className="text-gray-700">/ mo</div>
            </div>
            <div className="mt-2 space-y-3">
            <div className="text-accent/80">15 Sessions Month</div>
              <div className="text-accent/80">8 Trip</div>
              <div className="text-accent/80">56+ Classes</div>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
            Start Now!
            </a>
            <p className="max-w-xs mt-6 text-xs text-accent/70 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            Advanced level classes focusing on Cinematography,  Editing, Visual Effects, Production Design, etc.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-base-100 border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Day Camp</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$18</div>
            </div>
            <div className="mt-2 space-y-3">
            <div className="text-accent/80">8 Sessions Month</div>
              <div className="text-accent/80">5 Trip</div>
              <div className="text-accent/80">30+ Classes</div>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
                  Start Now!
            </a>
            <p className="max-w-xs mt-6 text-xs text-accent/70 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            The campers will learn from industry experts how to market and distribute their own projects. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
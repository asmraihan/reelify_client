
const Test2 = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
            Our Curriculum 
          </p>
        </div>
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
            <span className="relative">Reelify Film Camp Curriculum Overview</span>
          </span>
          
        </h2>
        <p className="text-base text-accent/80 md:text-lg">
         We believe that filmmaking is one of the best ways to learn about the art of collaboration, and many of our students continue to make movies together well after the summer ends.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="duration-300 transform bg-secondary/20 border-l-4 border-secondary hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-base-100 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Core Elements</h6>
            <p className="text-sm text-accent/80">
            No matter the level of experience, every level of the Camp Flix curriculum is organized around the three phases of the filmmaking creative process.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-secondary/20 border-l-4 border-secondary hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-base-100 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Pre-Production</h6>
            <p className="text-sm text-accent/80">
            Pre-production planning will include developing a script, storyboarding, location scouting, set design and casting.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-secondary/20 border-l-4 border-secondary hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-base-100 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Production</h6>
            <p className="text-sm text-accent/80">
            Young filmmakers will work closely with seasoned professionals in specific crew positions, including Director, Cinematographer, Lighting and Sound Supervisor.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-secondary/20 border-l-4 border-secondary hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 border-base-100 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Post-Production</h6>
            <p className="text-sm text-accent/80">
            Young filmmakers will study and evaluate each shot and select the best takes based on camera work, composition, continuity, sound quality and other criteria. 
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Test2;
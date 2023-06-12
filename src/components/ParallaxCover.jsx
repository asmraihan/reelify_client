import { Parallax } from 'react-parallax';

const ParallaxCover = () => {
    return (
        <Parallax
        bgClassName='-mt-40'
        blur={{ min: -15, max: 15 }}
        bgImage='https://i.ibb.co/hmLqgqX/IMG-3797.jpg'
        bgImageAlt="the menu"
        strength={-400}
        
    >
        <div className="h-[300px] ">
            <div className="bg-black/50 object-cover h-full w-full flex flex-col justify-center">
                <div className="max-w-xl lg:ml-36 text-white p-5 lg:p-0">
                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold uppercase">Live for the day!</h1>
                    <p className="lg:mb-5">Specially crafted program designed for children and teenagers during their summer vacation holidays as they come together and have fun while learning lifelong lessons.</p>
                </div>
            </div>
        </div>
    </Parallax>
    );
};

export default ParallaxCover;
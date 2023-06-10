import { Parallax } from 'react-parallax';

const ParallaxCover = () => {
    return (
        <Parallax
        bgClassName='-mt-40'
        blur={{ min: -15, max: 15 }}
        bgImage='https://i.ibb.co/qJ30CY6/rendy-novantino-PEN0-Wz4-MA8-unsplash.jpg'
        bgImageAlt="the menu"
        strength={-400}
        
    >
        <div className="h-[300px] ">
            <div className="bg-black/50 object-cover h-full w-full flex flex-col justify-center">
                <div className="max-w-md ml-36 text-white">
                    <h1 className="mb-5 text-5xl font-bold uppercase">Something</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    </Parallax>
    );
};

export default ParallaxCover;
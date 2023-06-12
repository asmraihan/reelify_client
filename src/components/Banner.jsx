import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
//TODO: Add images to the slider

const Banner = () => {
    const sliderSettings = {
        pauseOnHover: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div data-aos="zoom-in" className="header overflow-hidden">
            <Slider {...sliderSettings}>
            


            <div className="relative">
                    <img className='w-full mx-auto object-cover h-[calc(50vh)] lg:h-auto' src='https://i.ibb.co/HT8X5Lw/banner11-Medium.jpg' alt="Car Toy 1" />
                    <div className="bg-black/60 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-center text-white flex flex-col justify-center items-start p-10 ">
                        <h1 className="text-2xl lg:text-6xl font-extrabold lg:mb-4 lg:ml-40">Welcome to Reelify!</h1>
                        <p className="lg:text-lg my-4 lg:ml-40">Discover the real you, while having fun</p>
                        <div className="lg:mt-8  flex justify-center gap-4">
                         
                        <Link
                                className="whitespace-nowrap rounded border border-success px-4 py-2  lg:px-12 lg:py-3 text-sm font-medium text-white hover:bg-success hover:text-black transition-all duration-300 focus:outline-none focus:ring sm:w-auto lg:ml-40"
                                href="/about"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            <div className="relative">
                    <img className='w-full mx-auto object-cover h-[calc(50vh)] lg:h-auto' src='https://i.ibb.co/crGGpbJ/banner33-Medium.jpg' alt="Car Toy 1" />
                    <div className="bg-black/60 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-center text-white flex flex-col justify-center items-start p-10 ">
                        <h1 className="text-2xl lg:text-6xl font-extrabold lg:mb-4 lg:ml-40">Learn with professionals!</h1>
                        <p className="lg:text-lg my-4 lg:ml-40">Discover the real you, while learning new things</p>
                        <div className="lg:mt-8  flex justify-center gap-4">
                         
                            <Link
                                className="whitespace-nowrap rounded border border-success px-4 py-2  lg:px-12 lg:py-3 text-sm font-medium text-white hover:bg-success hover:text-black transition-all duration-300 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto lg:ml-40"
                                href="/about"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            <div className="relative">
                    <img className='w-full mx-auto object-cover h-[calc(50vh)] lg:h-auto' src='https://i.ibb.co/F4GZVWX/banner22-Medium.jpg' alt="Car Toy 1" />
                    <div className="bg-black/60 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-center text-white flex flex-col justify-center items-start p-10 ">
                        <h1 className="text-2xl lg:text-6xl font-extrabold lg:mb-4 lg:ml-40">Summercamp awaits!</h1>
                        <p className="lg:text-lg my-4 lg:ml-40">Discover the real you, while making friends</p>
                        <div className="lg:mt-8  flex justify-center gap-4">
                         
                            <Link
                                className="whitespace-nowrap rounded border border-success px-4 py-2  lg:px-12 lg:py-3 text-sm font-medium text-white hover:bg-success hover:text-black transition-all duration-300 focus:outline-none focus:ring active:bg-orange-500 sm:w-auto lg:ml-40"
                                href="/about"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>


            </Slider>

        </div>
    );
};

export default Banner;
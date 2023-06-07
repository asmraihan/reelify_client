import React from 'react';
import { Link } from 'react-router-dom';

const ButtonOutlined = () => {
    return (
        <Link className="group relative inline-flex border border-red-600 focus:outline-none w-full sm:w-auto"
        href="" target="_blank">
        <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-red-600 text-center font-bold uppercase bg-white ring-1 ring-red-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">Watch Videos</span>
    </Link>
    );
};

export default ButtonOutlined;
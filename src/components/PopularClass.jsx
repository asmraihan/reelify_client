import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PopularClass = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-accent sm:text-4xl sm:leading-none md:mb-6 group">
            <span className="inline-block mb-1 sm:mb-4">
              There is no must in art
              <br className="hidden md:block" />
              because art is free.
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p className="text-accent/80 lg:text-sm lg:max-w-md">
            "Class is dead", says Foucault; however, according to Reicher, it is
            not so much class that is dead, but rather the absurdity, and some
            would say the paradigm, of class. However, the subject is interpolated
            into a postpatriarchialist dialectic theory that includes
            consciousness as a totality.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80")'
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Best website collections
          </h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
            Website
          </p>
        </div>
      </div>
      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")'
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Block of Ui kit collections
          </h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
            Ui kit
          </p>
        </div>
      </div>
      <div
        className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'
        }}
      >
        <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
          <h2 className="mt-4 text-xl font-semibold text-white capitalize">
            Ton’s of mobile mockup
          </h2>
          <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
            Mockups
          </p>
        </div>
      </div>
    </div>
        <div className="text-center mt-8">
        <Link className="group relative inline-flex border border-secondary focus:outline-none w-full sm:w-auto"
        href="" target="_blank">
        <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-secondary text-center font-bold uppercase  ring-1 ring-secondary  transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">See more <FaArrowRight></FaArrowRight></span>
    </Link>
        </div>
      </div>
    );
};

export default PopularClass;
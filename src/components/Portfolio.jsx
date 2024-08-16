import React from 'react';

import tindog from '../assets/portfolio/phone1.png';
import dice from '../assets/portfolio/dice.png';
import drum from '../assets/portfolio/drum.png';
import todo from '../assets/portfolio/todo.png';
import netflix from '../assets/portfolio/netflix.png';
import simon from '../assets/portfolio/simonGame.png';

const portfolios = [
  {
    id: 1,
    src: todo,
    title: 'Todo List',
  },
  {
    id: 2,
    src: netflix,
    title: 'Netflix Clone',
  },
  {
    id: 3,
    src: simon,
    title: 'Simon Game',
  },
  {
    id: 4,
    src: dice,
    title: 'Dice Game',
  },
  {
    id: 5,
    src: drum,
    title: 'Drum Kit',
  },
  {
    id: 6,
    src: tindog,
    title: 'Tindog',
  },
];

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className="font-bold text-4xl inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-10 mb-10">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center mx-auto">
                <p className="font-bold py-2">{title}</p>
              </div>
              <hr className="bg-white" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-1 m-1 duration-200 hover:scale-105 font-semibold">
                  Live
                </button>
                <button className="w-1/2 px-6 py-1 m-1 duration-200 hover:scale-105 font-semibold">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

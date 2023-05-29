import React from 'react';
import bgImg from 'assets/img/background-img.jpg';
import Header from 'components/Header';

const Netflix = () => {
  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
  };
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <div
        className="mx-12 my-4 min-h-[600px] rounded-[10px] bg-cover bg-center bg-no-repeat flex items-center"
        style={bgStyle}
      >
        <div className="text-white font-bold flex justify-center flex-col gap-[1.5rem] pl-[5%] pr-[5%] max-w-[1200px]">
          <h1 className="text-4xl md:text-[4rem] lg:text-[5.5rem] font-black">Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="flex">
            <input type="text" placeholder="Email address" />
            <button type="button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netflix;

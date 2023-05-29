import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import bgImg from 'assets/img/bg-lost-in-space.png';
import Header from 'components/Header';

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const errorCode = location.state?.errorCode || 'NSES-404';

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  return (
    <div
      className="flex flex-col bg-cover bg-center bg-no-repeat bg-fixed h-screen"
      style={bgStyle}
    >
      <Header />
      <div className="flex flex-col w-full justify-center items-center h-full gap-[2.5rem] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10" />

        <div className="flex flex-col w-full justify-center items-center h-full gap-[2.5rem] relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-[6rem] font-bold text-white mb-[2rem]">
            Lost your way?
          </h1>
          <p className="text-white text-xl md:text-3xl max-w-[900px] text-center">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.
          </p>
          <button
            className="text-xl md:text-2xl font-bold bg-white border-none py-3 px-8 rounded-md hover:bg-white/50 active:border-white active:border-2"
            type="button"
            onClick={() => navigate('/')}
          >
            Netflix Home
          </button>
          <p className="mt-[2rem] text-white text-2xl text-3xl">
            <span className="border-red-500 border-s-2 py-2 px-4 leading-[1]">
              Error Code
            </span>
            {errorCode}
          </p>
        </div>
        <p className="absolute bottom-[4rem] right-[4rem] text-[hsla(0,0%,90%,.77)]">
          FROM
          <strong> LOST IN SPACE</strong>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

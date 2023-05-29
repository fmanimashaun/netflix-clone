import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Logo from 'assets/img/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentRoute = location.pathname;
  const isLogin = currentRoute === '/login';
  const isShow = currentRoute === '/';

  return (
    <header
      className={`flex justify-between items-center py-4 px-12 ${
        isLogin ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="netflix"
          className=" w-[95px] h-auto cursor-pointer"
        />
      </Link>
      {isShow && (
        <button
          type="button"
          className="py-2 px-4 bg-red-600 border-none cursor-pointer text-white rounded-[0.2rem] font-bold text-[1.05rem]"
          onClick={() => navigate('/login')}
        >
          Log In
        </button>
      )}
    </header>
  );
};

export default Header;

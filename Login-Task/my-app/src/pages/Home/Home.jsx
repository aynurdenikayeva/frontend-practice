import React from 'react';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import img1 from '../../assets/google 1.png';
import img2 from '../../assets/facebook 1.png';
import img3 from '../../assets/Rectangle 4.png';
import img4 from '../../assets/women.png';
import img5 from '../../assets/Group 11.png';

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-12 p-6 bg-slate-50 dark:bg-neutral-900">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">Login</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            How do I get started lorem ipsum dolor at?
          </p>
        </div>

        <form className="space-y-4">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F0EDFFCC] dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 focus-within:ring-2 focus-within:ring-blue-600">
            <UserOutlined className="text-slate-400 text-lg" />
            <input 
              type="text" 
              placeholder="Username" 
              className="text-sm text-neutral-900 dark:text-white w-full bg-transparent outline-none" 
            />
          </div>

          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F0EDFFCC] dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 focus-within:ring-2 focus-within:ring-blue-600">
            <UnlockOutlined className="text-slate-400 text-lg" />
            <input 
              type="password" 
              placeholder="Password" 
              className="text-sm text-neutral-900 dark:text-white w-full bg-transparent outline-none" 
            />
          </div>

          <div className="flex justify-center pt-2">
            <button 
              type="submit" 
              className="w-44 py-3 text-white text-sm font-semibold rounded-full cursor-pointer bg-linear-to-r from-[#9181F4] to-[#5038ED] shadow-md hover:opacity-90 transition-opacity"
            >
              Login Now
            </button>
          </div>
        </form>

        <div className="flex items-center my-6 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex-1 border-t border-slate-200 dark:border-neutral-700"></div>
          <span className="px-3">
            <strong className="font-semibold text-neutral-700 dark:text-neutral-300">Login</strong> with Others
          </span>
          <div className="flex-1 border-t border-slate-200 dark:border-neutral-700"></div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <button 
            type="button" 
            className="flex items-center justify-center gap-3 px-4 py-2.5 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-full cursor-pointer bg-transparent hover:bg-slate-100 dark:hover:bg-neutral-800 border border-slate-200 dark:border-neutral-700 transition-colors"
          >
            <img src={img1} alt="Google logo" className="w-5 h-5 object-contain" />
            <span>Login with <strong className="font-semibold">Google</strong></span>
          </button>
          <button 
            type="button" 
            className="flex items-center justify-center gap-3 px-4 py-2.5 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-full cursor-pointer bg-transparent hover:bg-slate-100 dark:hover:bg-neutral-800 border border-slate-200 dark:border-neutral-700 transition-colors"
          >
            <img src={img2} alt="Facebook logo" className="w-5 h-5 object-contain" />
            <span>Login with <strong className="font-semibold">Facebook</strong></span>
          </button>
        </div>
      </div>

      <div className="relative hidden md:flex items-center justify-center w-full max-w-125 h-137.5 p-6">
        <img 
          src={img3} 
          alt="design background" 
          className="absolute inset-0 h-full w-full object-cover rounded-3xl" 
        />

        <div className="relative z-10 w-85 h-100 rounded-3xl border border-white/30 bg-white/20 p-8 text-white backdrop-blur-md flex flex-col justify-start">
          <div className="max-w-50">
            <h2 className="text-3xl font-bold leading-snug tracking-wide">
              Very good works are waiting for you Login Now!!!
            </h2>
          </div>

          <img 
            src={img4} 
            alt="woman using tablet" 
            className="absolute -right-20 -bottom-14 h-115 max-w-130 object-contain pointer-events-none drop-shadow-xl z-20" 
          />

          <div className="absolute -left-7 top-70 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white p-3 shadow-xl border border-slate-100 z-30">
            <img 
              src={img5} 
              alt="badge icon" 
              className="h-full w-full object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
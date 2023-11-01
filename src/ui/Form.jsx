import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';

export default function Form({ ...props }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 400); // 1초 후에 컴포넌트가 보이게 합니다.
  }, []);
  return (
    <div className="w-full h-full bg-cover bg-section">
      <section className="border-2 bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto border-2 md:h-screen lg:py-0 ">
          <img className="w-24 h-24" src="/favicon.ico" alt="logo" />
          <span className="mb-4 text-xl font-semibold">peerNow</span>

          <div
            className={`w-full transition-all ease-in-out bg-white rounded-lg shadow ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }  duration-2000 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {props.title}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <FormInput label1={props.label1} />
                <FormInput label1={props.label2} />
                {props.label3 && <FormInput label1={props.label3} />}
                {props.btnName === '로그인' && (
                  <div className="flex items-center justify-between text-red-400">
                    <Link to="/home/main">Forgot password?</Link>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full text-black bg-amber-400
              border-amber-400 border-4 
              focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800"
                >
                  <p className="text-lg font-bold text-white">
                    {props.btnName}
                  </p>
                </button>
                <div className="flex flex-row-reverse">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {props.btnName !== '계정생성' ? (
                      <Link to="/signup">회원가입</Link>
                    ) : (
                      <Link to="/">로그인</Link>
                    )}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

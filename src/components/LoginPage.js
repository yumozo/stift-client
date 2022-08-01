import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <span className="text-lg pb-4">Login</span>

      <div className="mt-2 w-3/5">
        <div className="grid text-sm">
          <div className="pt-4 grid grid-cols-2 place-items-start">
            <span className="">Name</span>
            <span className="text-gray-800">Jegor</span>
            {/* replace with form to be able to edit the name */}
          </div>
          <span className="mt-2 px-32 border-b border-gray-100"></span>

          <div className="pt-4 grid grid-cols-2 place-items-start">
            <span className="">Email</span>
            <Link
              className="text-indigo-500 font-light text-sm"
              to="/changepassword"
              title="change email"
            >
              {"blankinyermemory@outlook.com"}
            </Link>
          </div>
          <span className="mt-2 px-32 border-b border-gray-100"></span>

          <div className="pt-4 grid grid-cols-2 place-items-start">
            <span className="">Password</span>
            <Link
              className="text-indigo-500 font-light text-sm"
              to="/changepassword"
            >
              Change password
            </Link>
          </div>
          <span className="mt-2 px-32 border-b border-gray-100"></span>

          <div className="pt-4 grid grid-cols-2 place-items-start">
            <span className="">Records</span>
            <button className="block text-indigo-500 font-light text-sm focus:outline-none focus:bg-gray-100">
              Export records
            </button>
          </div>
          <span className="mt-2 px-32 border-b border-gray-100"></span>
        </div>
      </div>

      <div className="mt-8 py-2">
        <button className="block text-rose-300 text-sm focus:outline-none focus:bg-gray-100">
          Delete account
        </button>
      </div>
    </>
  )
}

export default LoginPage
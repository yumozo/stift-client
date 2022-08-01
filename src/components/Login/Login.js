import React, { useState } from 'react';
import PropTypes from 'prop-types'

async function loginUser(credentials) {
  return fetch('...RURLRLRL...', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({
      username,
      email,
      password
    })
    setToken(token)
  }

  return (
    <>
      <span className="text-lg pb-4">Login</span>

      <form onSubmit={handleSubmit}>
        <div className="mt-2 w-3/5">
          <div className="grid text-sm">

            <div className="pt-4 grid grid-cols-2 place-items-start">
              <span className="">Username</span>
              <input type='text' onChange={e => setUsername(e.target.value)} />
            </div>

            <span className="mt-2 px-32 border-b border-gray-100"></span>

            <div className="pt-4 grid grid-cols-2 place-items-start">
              <span className="">Email</span>
              <input type="text" onChange={e => setEmail(e.target.value)} />
            </div>

            <span className="mt-2 px-32 border-b border-gray-100"></span>

            <div className="pt-4 grid grid-cols-2 place-items-start">
              <span className="">Password</span>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </div>

            <span className="mt-2 px-32 border-b border-gray-100"></span>

          </div>
        </div>

        <div className="mt-8 py-2">
          <button type='submit' className="block text-sm focus:outline-none focus:bg-gray-100">
            Login
          </button>
        </div>

      </form>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
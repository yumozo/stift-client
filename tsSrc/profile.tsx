// import styles from '../styles/Home.module.css'
import { Route } from 'react-router'
import Navbar from './components/navbar'

const Home = () => {
  return (
    <div className={ {/* styles.container */} }>
      {/* <Head>
        <title>Stift</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className='flex flex-col items-center'>
        <Navbar />
        <main className='w-3/4 px-2 py-3'>
          <div className='flex flex-col items-center px-4'>
            <span className='text-lg pb-4'>
              Profile
            </span>

            <div className='mt-6'>
              <div className="grid w-3/5 text-sm">
                <div className="grid grid-rows-2 place-items-center">
                  <div className="pt-4">Name</div>
                  <div className="text-gray-800">Jegor</div> {/* replace with form to be able to edit the name */}
                </div>
                <div className="grid grid-rows-2 place-items-center">
                  <div className="pt-4">Email</div>
                  <div className="text-gray-800">blankinyermemory@outlook.com</div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <button
                className="mt-8 block text-indigo-600 text-sm focus:outline-none focus:bg-gray-100"
              >
                Export records
              </button>
            </div>
            <div className="mt-4 py-2">
              <div className="text-gray-500 font-light text-sm">
                <Route href='/changepassword'>
                  Change password
                </Route>
              </div>
            </div>
            <div className="py-2">
              <button
                className="mt-4 block text-rose-300 text-sm focus:outline-none focus:bg-gray-100"
              >
                Delete account
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default Home

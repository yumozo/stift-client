import { Fragment } from 'react'
import { Route } from 'react-router';
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
  return (
    <Menu as="div" className="h-7 relative inline-block text-left">
      <div className='h-5 my-1'>
        <Menu.Button className="inline-flex justify-center">
          <DotsVerticalIcon className="h-5 w-5" aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right w-24 absolute right-0 mt-2 bg-white ring-2 ring-gray-400/20 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Route href='/'>
                  <a
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Home
                  </a>
                </Route>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Route href='/profile'>
                  <a
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Profile
                  </a>
                </Route>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
import Link from 'next/link'
import { useState } from 'react'

import styled from 'styled-components'

type PropType = {
  visibility?: any
}

// Menu button element to show dropdown
export const StyledMenuButton = styled.button`
  padding: 8px;
  margin-left: 12px;
  height: 36px;
  width: 36px;
  display: inline-flex;
  justify-content: center;
  background-color: #0000004d;
  color: black;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.375rem;
  &:hover {
    background-color: #0000004d;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  svg {
    height: 1.25rem;
    width: 1.25rem;
    color: #e5e7eb;
  }
`

// Dropdown menu itself
export const StyledMenuItems = styled.div<PropType>`
  visibility: ${props => (props.visibility ? 'hidden' : 'visible')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  margin-top: 0.5rem;
  right: 1rem;
  border-radius: 0.375rem;
  background-color: var(--color-surface);
  div {
    padding: 0.95em;
    padding-right: 4em;
    padding-left: 1em;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  a:hover {
    background-color: #ffffff28;
  }
  
  a:first-child {
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }
  a:last-child {
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  }
`

function MenuLink({ children, href, target }: any) {
  return (
    <Link href={href}>
      <a target={target}>
        <div>{children}</div>
      </a>
    </Link>
  )
}

const NavWrapper = styled.div`
  position: relative;
  display: none;
`

export default function Dropdown(props: any) {
  const [state, setState] = useState(true)

  const handleToggle = () => {
    setState(!state)
  }

  return (
    <div>
      <StyledMenuButton>
        <svg
          onClick={handleToggle}
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </StyledMenuButton>
      <StyledMenuItems visibility={state} onClick={handleToggle}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/blog">Blog</MenuLink>
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink
          href="https://github.com/zyrjanow/my-homepage"
          target="_blank"
        >
          View Source
        </MenuLink>
      </StyledMenuItems>
    </div>
  )
}

{/* <Menu.Item>
              {({ active }) => (
                <Link href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/profile"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/text-edit"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  New
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full text-left px-4 py-2 text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
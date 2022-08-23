export default function ToggleThemeButton() {

  const changeTheme = () => {
    if (localStorage.theme === 'dark') {
      console.log('here');
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
    }
  }

  return (
    <button type='button' onClick={changeTheme}>
      change theme
    </button>
  )
}

//=== dark mode check ===
// if (localStorage.theme === 'dark' ||
//   (!('theme' in localStorage) &&
//     window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }
//=======================
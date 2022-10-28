import {FaCloudMoon} from 'react-icons/fa'
function Header({mode, onclick}) {
    return(
    <header className={ mode ? 'fixedHead dark': 'fixedHead light'}>
        <p>Where in the world?</p>
        <div className="mode" onClick={onclick}><FaCloudMoon/> Dark Mode</div>
      </header>
    )
}

export default Header
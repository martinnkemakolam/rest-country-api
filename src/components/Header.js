import {FaCloudMoon} from 'react-icons/fa'
function Header() {
    return(
    <header className="fixedHead">
        <p>Where in the world?</p>
        <div className="mode"><FaCloudMoon/> Dark Mode</div>
      </header>
    )
}

export default Header
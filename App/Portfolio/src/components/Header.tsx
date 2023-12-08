import '../styles/Header.css'
function Navbar(){
    const darktheme = () => {
        document.body.classList.toggle('dark_theme');
    };

    return(
        <nav>
            <h1 className='tittle_navbar' onClick={darktheme}>linkwithkillianangely</h1>
        </nav>
    )
}

export default Navbar;

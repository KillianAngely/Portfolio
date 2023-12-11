import '../styles/Header.css'
function Navbar(){
    const darktheme = () => {
        document.body.classList.toggle('dark_theme');
        document.body.querySelectorAll('.display_list').forEach((e) => {
            e.classList.toggle('dark_theme_list');
        }
        );
    }

    return(
        <nav>
            <h1 className='tittle_navbar' onClick={darktheme}>linkwithkillianangely</h1>
        </nav>
    )
}

export default Navbar;

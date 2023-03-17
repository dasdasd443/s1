import './Menu.css';

function Menu() {
    return (
        <nav id='home-menu'>
            <section id='home-menu-header'>
                <div>
                    <h1>Vittorio</h1>
                </div>
                <ul id='home-menu-nav'>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </section>
            <hr style={{width: '100%'}}/>
        </nav>
    );
}

export default Menu;
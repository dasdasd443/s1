import Introduction from "./Introduction";
import Menu from "./Menu";

function Header() {
    return (
        <>
        <div id='home-header'>
            <Menu />
            <Introduction />
        </div>
        </>
    );
}

export default Header;
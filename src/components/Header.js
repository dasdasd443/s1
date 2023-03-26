import Introduction from "./Introduction";
import Menu from "./Menu";

function Header({offset}) {
    return (
        <>
        <div id='home-header'>
            <Menu offset={offset} />
            <Introduction />
        </div>
        </>
    );
}

export default Header;
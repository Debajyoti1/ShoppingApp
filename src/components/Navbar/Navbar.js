import styles from "./Navbar.module.css";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
        <div className={styles.Navbar}>
            <div className={styles.Logo}>
                <img alt="logo" src="https://img.icons8.com/?size=1x&id=XrEFnp33pJYw&format=png" />
                ShoppingApp</div>
            <SearchBar />
            <Menu />
        </div>
        <Outlet />
        </>
    )
}

export default Navbar;
import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "../StateProvider";

const Header = () => {
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avtar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                ></Avatar>

                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Drupal" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    );
};

export default Header;

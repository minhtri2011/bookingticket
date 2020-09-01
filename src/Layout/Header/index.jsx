import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './style.scss';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    button_mid: {
        fontSize: '14px',
        color: '#000000',
        '&:hover': {
            backgroundColor: 'transparent',
            color: 'red',
        },
    },
    button_right: {
        color: '#9B9B9B',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    button_molbie: {
        fontSize: '16px',
        color: '#9B9B9B',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'Primary',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    menuMid: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    menuRight: {
        position: 'absolute',
        right: '2rem',
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    textlink: {
        textDecoration: 'none',
        color: '#9B9B9B',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
    }
}));
export default function Header(props) {

    const taiKhoan = useSelector((state) => state.userReducer.taiKhoan);
    const renderUserName = () => {
        if (taiKhoan !== "") {
            return <span>{taiKhoan}</span>
        }
        return <span>Đăng nhập</span>
    }
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton className={classes.button_molbie}>
                    <AccountCircle style={{ paddingRight: '5px' }} />
                    Đăng nhập
            </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton className={classes.button_molbie}>
                    Lịch chiếu
            </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton className={classes.button_molbie}>
                    Cụm rạp
            </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton className={classes.button_molbie}>
                    Tin tức
            </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton className={classes.button_molbie}>
                    Ứng dụng
            </IconButton>
            </MenuItem>
            {/* <MenuItem>
                <IconButton aria-label="show 11 new notifications" style={{ color: '#000000', fontSize: '14px' }}>
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem> */}
            {/* <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    style={{ color: '#000000', fontSize: '14px' }}
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem> */}
        </Menu>
    );
    return (
        <div className={classes.grow}>
            <AppBar position="static" className="appBar">
                <Toolbar className="toolBar">
                    <IconButton className="logo">
                        <img src="./img/web-logo.png" alt="weblogo" width="50px" />
                    </IconButton>
                    <div className={classes.sectionDesktop + ' ' + classes.menuMid} >
                        <IconButton disableRipple className={classes.button_mid}>
                            Lịch chiếu
                            </IconButton>
                        <IconButton disableRipple className={classes.button_mid}>
                            Cụm rạp
                            </IconButton>
                        <IconButton disableRipple className={classes.button_mid}>
                            Tin tức
                            </IconButton>
                        <IconButton disableRipple className={classes.button_mid}>
                            Ứng dụng
                            </IconButton>
                    </div>
                    <div className={classes.sectionDesktop + ' ' + classes.menuRight}>
                        <IconButton disableRipple
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            className={classes.button_right}
                        >
                            <Link className={classes.textlink} to="/login">
                                <span>
                                    <AccountCircle style={{ fontSize: '30px', paddingRight: '5px' }} />
                                </span>
                                {renderUserName()}
                            </Link>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

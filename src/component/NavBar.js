import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import '../css/navBar.css'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme'
import { Link, useNavigate } from 'react-router-dom'; // Update import statement
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Brush, Cabin, Celebration, ContactPage, LocalShippingSharp, StarHalf, StarSharp } from '@mui/icons-material';

// const pages = ['סדנאות', 'ערכות יצירה', 'הזמנת קייטנה', 'מי אנחנו', 'צור קשר'];
const pages = [
    { name: 'סדנאות ויצירה', route: '/CraftKits', icon: <Brush /> },
    { name: 'קייטנות', route: '/Camps', icon: <Cabin /> },
    { name: 'מפעילים', route: '/Vendors', icon: <Celebration /> },
    { name: 'מי אנחנו', route: '/AboutUs', icon: <StarSharp/> },
    { name: 'צור קשר', route: '/ContactUs', icon: <ContactPage /> },
]

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [value, setValue] = React.useState(-1);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" className='nav-bar'>
                <Toolbar disableGutters sx={{ direction: 'rtl' }}>
                    <Button onClick={()=>navigate("./")}><img className='logo' src='/images/logo2.png'></img></Button>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography
                                        textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            {pages.map((page) => (
                                <BottomNavigationAction
                                    key={page.name}
                                    onClick={() => navigate(page.route)}
                                    sx={{
                                        // paddingRight: '15px',
                                        //  paddingLeft: '15px',
                                        //   my: 2, display: 'block',
                                        color: '#68C3CA',
                                        width: "50px",
                                        padding: 0
                                    }}
                                    label={page.name}
                                    icon={page.icon} />
                                // <Button
                                //     key={page.name}
                                //     onClick={() => navigate(page.route)}
                                //     sx={{ paddingRight: '15px', paddingLeft: '15px', my: 2, display: 'block', color: '#68C3CA' }}
                                // >
                                //     {page.name} {/* Render the name property instead of the entire page object */}
                                // </Button>
                            ))}
                        </BottomNavigation>
                    </Box>
                    <Box>
                        <FontAwesomeIcon
                            onClick={() => navigate('Entrance')}
                            style={{color: '#68C3CA',
                                width: "20px",
                                padding: 0 }}
                            icon={faUser}
                        />
                        <FontAwesomeIcon
                            style={{ color: '#68C3CA',
                                width: "20px",
                                padding: 0  }}
                            icon={faBasketShopping} />

                        <FontAwesomeIcon icon={faMagnifyingGlass}
                            style={{ color: '#68C3CA',
                                width: "20px",
                                padding: 0  }} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
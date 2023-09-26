import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHomeNav = () =>{
    setAnchorElNav(null);
  }

  const handleServicesNav = () =>{
    setAnchorElNav(null);
  }

  const handleContactNav = () =>{
    setAnchorElNav(null);
  }

  const handleProjectsNav = () =>{
    setAnchorElNav(null);
  }

  return (
    <AppBar position="static" sx={{backgroundColor: '#E7F2F7', borderBottom: 'solid #d3d3d3 1px'}} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters className='flex justify-between'>
            <Link to="/" className="Logo">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  ml: 6,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  textDecoration: "none",
                  color: "black",
                  alignItems: "center",
                  ":hover": {
                    color: "black",
                  },
                }}
                component={Link}
                to={"/"}
              >
                <img src={Logo} alt='logo' className='logo'/>
                {/* <h3 className="logo-text dark:text-white">Christamelon Foundation</h3> */}
              </Typography>
            </Link>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 2,
                fontFamily: "monospace",
                fontWeight: 1000,
                color: "inherit",
                textDecoration: "none",
              }}
              className="dark:text-white"
            >
              Christamelon Foundation
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent:'flex-end' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{margin: '5px'}} className="dark:text-white"/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  flexDirection: "column",
                }}
                className="nav-menu"
              >
                <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      About us
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"What we do"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      What We Do
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"Media"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Media
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={"Contact"} onClick={handleCloseNavMenu}>
                  <Link to="/" className="navlink">
                    <Typography textAlign="center" className="navbar-menu-text">
                      Contact
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
                <div className="flex">
              <Link to="/" className="navlink">
                <Button
                  key="About"
                  onClick={handleHomeNav}
                  sx={{
                    my: 0,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 8px 0 8px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "10pt",
                  }}
                  className="navbar-menu-text"
                >
                  Home
                </Button>
              </Link>
              <Link to="/" className="navlink">
                <Button
                  key="About"
                  onClick={handleServicesNav}
                  sx={{
                    my: 0,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 8px 0 8px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "10pt",
                  }}
                  className="navbar-menu-text"
                >
                  About us
                </Button>
              </Link>
              <Link to="/" className="navlink">
                <Button
                  key="What we do"
                  onClick={handleContactNav}
                  sx={{
                    my: 0,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 8px 0 8px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "10pt",
                  }}
                  className="navbar-menu-text"
                >
                    What We Do
                </Button>
              </Link>
              <Link to="/" className="navlink">
                <Button
                  key="Media"
                  onClick={handleProjectsNav}
                  sx={{
                    my: 0,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 8px 0 8px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "10pt",
                  }}
                  className="navbar-menu-text"
                >
                  Media
                </Button>
              </Link>
              <Link to="/" className="navlink">
                <Button
                  key="contact"
                  onClick={handleProjectsNav}
                  sx={{
                    my: 0,
                    color: "#000000a6",
                    display: "block",
                    margin: "0 8px 0 8px",
                    fontWeight: "bolder",
                    textTransform: "capitalize",
                    "&:hover": { backgroundColor: "transparent" },
                    fontSize: "10pt",
                  }}
                  className="navbar-menu-text"
                >
                  Contact
                </Button>
              </Link>
              </div>
            </Box>
            <div className="flex mr-14">
            <Link to='/'>
                  <Button variant="contained" sx={{fontSize: '8pt', bgcolor: '#096A56'}}>Donate</Button>
            </Link>
            </div>
          </Toolbar>
        </Container>
    </AppBar>
  );
}
export default Navbar;

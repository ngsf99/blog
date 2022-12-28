import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Link,
} from "@mui/material";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const pages = [
  { name: "Home", link: "/" },
  { name: "Profile", link: "/profile" },
  { name: "Contact", link: "#" },
];
const settings = ["User Setting", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AppBar position="sticky" color="primary" sx={{ backgroundColor: "#000" }}>
      <Toolbar>
        <CardTravelIcon
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
        ></CardTravelIcon>
        <Typography
          noWrap
          variant="h6"
          component="span"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 900,
            letterSpacing: "0.1rem",
            textDecoration: "none",
          }}
        >
          NgSF
        </Typography>

        <Box
          className="hamburgerMenu"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <IconButton
            onClick={handleOpenNavMenu}
            size="large"
            color="inherit"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            keepMounted
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href={page.link} color="inherit" underline="none">
                  <Typography>{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Small Screen  */}
        <CardTravelIcon
          sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        ></CardTravelIcon>
        <Typography
          noWrap
          variant="h6"
          component="span"
          sx={{
            mr: 2,
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            fontFamily: "monospace",
            fontWeight: 900,
            color: "#FFF",
            letterSpacing: "0.1rem",
            textDecoration: "none",
          }}
        >
          NgSF
        </Typography>
        <Box
          className="navLinks"
          sx={{
            display: { xs: "none", md: "flex" },
            margin: "auto",
          }}
        >
          {pages.map((page) => (
            <Link href={page.link} color="inherit" underline="none">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#FFF", display: "flex" }}
              >
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>

        <Box className="userIcon" sx={{ flexGrow: 0 }}>
          <Tooltip title="Open Settings">
            <IconButton onClick={handleOpenUserMenu} size="large" sx={{ p: 0 }}>
              <AccountCircleIcon sx={{ color: "#FFF" }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            keepMounted
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

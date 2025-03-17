import { AppBar, Box, Button, Container, Divider, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, TextField, Toolbar, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
    // menu toggle start
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // menu toggle end
    return (
        <>
            <Box component={'nav'} position="static" bgcolor={'black'} color={'white'} variant="0" display={{ md: 'flex', xs: 'none' }} justifyContent={'space-between'} alignItems={'center'}>
                <Box display={'flex'} justifyContent={'center'} flexGrow={1}>
                    <Typography fontSize={14}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
                    <Typography fontSize={14} paddingLeft={'8px'} sx={{ textDecoration: 'underline' }}>ShopNow</Typography>
                </Box>
                <Button color="white" sx={{ textTransform: 'capitalize', fontSize: '14px' }} endIcon={<FaChevronDown />}>English</Button>
            </Box>

            <AppBar position="static" sx={{ backgroundColor: 'transparent' }} variant="0">
                <Container>
                    <Toolbar sx={{ color: 'black', justifyContent: 'space-between' }}>
                        <Typography fontSize={{md: 24, xs: 18}} fontWeight={700}>Exclusive</Typography>
                        <List sx={{ display: { md: 'flex', xs: 'none' } }} dense>
                            <ListItem>
                                <ListItemText primary={<NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Home</NavLink>} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={<NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/contact'}>Contact</NavLink>} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={<NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/about'}>About</NavLink>} />
                            </ListItem>
                            <ListItem sx={{ minWidth: 'fit-content' }}>
                                <ListItemText primary={<NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/signUp'}>Sign Up</NavLink>} />
                            </ListItem>
                        </List>
                        <List sx={{ display: 'flex' }} dense>
                            <ListItem sx={{ width: 'fit-content', display: { md: 'flex', xs: 'none' } }} disablePadding>
                                <TextField variant="filled" label="What are you looking for?" size="small"
                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton>
                                                        <CiSearch />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        },
                                    }} />
                            </ListItem>
                            <ListItem sx={{ width: 'fit-content' }} disablePadding>
                                <ListItemButton sx={{ width: 'fit-content' }}>
                                    <NavLink to={'/wishList'}>
                                        <FavoriteBorderIcon style={{ color: 'black' }} />
                                    </NavLink>
                                </ListItemButton>
                            </ListItem>
                            <ListItem sx={{ width: 'fit-content' }} disablePadding>
                                <ListItemButton sx={{ width: 'fit-content' }}>
                                    <NavLink to={'/cart'}>
                                        <IoCartOutline style={{ fontSize: '1.5rem', color: 'black' }} />
                                    </NavLink>
                                </ListItemButton>
                            </ListItem>

                            {/* toggle */}

                            <ListItem sx={{ display: { md: 'none', xs: 'flex' } }} disablePadding>
                                <IconButton
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <IoMenu style={{ color: 'black' }} />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Home</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/contact'}>Contact</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/about'}>About</NavLink>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to={'/signUp'}>Sign Up</NavLink>
                                    </MenuItem>
                                </Menu>
                            </ListItem>

                            {/* toggle */}

                        </List>
                    </Toolbar>
                </Container>
            </AppBar >
            <Divider />
        </>
    )
}

export default NavBar

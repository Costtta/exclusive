import { Box, Container, Grid2, IconButton, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import qrCode from '../assets/QrCode.webp'

const Footer = () => {
    return (
        <Box component={'footer'} bgcolor={'#000000'} color={'white'} paddingBlock={'3rem'}>
            <Container>
                <Grid2 container justifyContent={'space-between'}>
                    <Grid2 size={{ md: 3, xs: 12 }}>
                        <Typography fontSize={20} fontWeight={500}>Exclusive</Typography>
                        <Typography>Subscribe</Typography>
                        <Typography>Get 10% off your first order</Typography>
                        <TextField
                            placeholder="Enter your email"
                            sx={{
                                color: "white",
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                            }} />
                    </Grid2>
                    <Grid2 size={{ md: 2, xs: 6 }}>
                        <Typography fontSize={20} fontWeight={500}>Support</Typography>
                        <List>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='exclusive@gmail.com' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='+88015-88888-9999' />
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 size={{ md: 2, xs: 6 }}>
                        <Typography fontSize={20} fontWeight={500}>Account</Typography>
                        <List>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='My Account' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='Login / Register' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='Cart' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='Wishlist' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='Shop' />
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 size={{ md: 2, xs: 6 }}>
                        <Typography fontSize={20} fontWeight={500}>Quick Link</Typography>
                        <List>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='Privacy Policy' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='Terms Of Use' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='FAQ' />
                            </ListItem>
                            <ListItem sx={{ paddingLeft: 0, paddingRight: 0 }}>
                                <ListItemText primary='Contact' />
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 size={{ md: 2, xs: 6 }}>
                        <Typography fontSize={20} fontWeight={500}>Download App</Typography>
                        <Typography>Save $3 with App New User Only</Typography>
                        <Grid2 container>
                            <Grid2 size={6}>
                                <img src={qrCode} alt="Qr-code" width={'100%'} />
                            </Grid2>
                            <Grid2 size={6}></Grid2>
                        </Grid2>
                        <Box>
                            <IconButton sx={{ color: 'white' }}>
                                <RiFacebookLine />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }}>
                                <CiTwitter />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }}>
                                <FaInstagram />
                            </IconButton>
                            <IconButton sx={{ color: 'white' }}>
                                <RiLinkedinLine />
                            </IconButton>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Footer

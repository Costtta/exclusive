import { Box, Container, Grid2, List, ListItem, ListItemButton, ListItemText, Pagination, Typography } from "@mui/material"
import heroImg from '../assets/hero.webp'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
    return (
        <Box component={'section'}>
            <Container>
                <Grid2 container paddingBlock={'2.5rem'}>
                    <Grid2 size={{md: 3, xs: 12}}>
                        <List dense sx={{ borderRight: '1px solid #0000001F', display: {md: 'block', xs: 'none'} }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Woman’s Fashion' />
                                    <ArrowForwardIosIcon />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Men’s Fashion' />
                                    <ArrowForwardIosIcon />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Electronics' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Home & Lifestyle' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Medicine' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Sports & Outdoor' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Baby’s & Toys' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Groceries & Pets' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary='Health & Beauty' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid2>
                    <Grid2 size={{md: 9, xs: 12}} paddingLeft={'2.81rem'} paddingRight={'2.81rem'}>
                        <Grid2 container bgcolor={'#000000'} color={'white'} height={'100%'} alignItems={'center'}>
                            <Grid2 size={{md: 6, xs: 12}}>
                                <Container>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <FaApple style={{ fontSize: '3rem' }} />
                                        <Typography paddingLeft={'1.5rem'}>iPhone 14 Series</Typography>
                                    </Box>
                                    <Typography lineHeight={'60px'} paddingBlock={'20px'} fontSize={48} fontWeight={600}>Up to 10% off Voucher</Typography>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <Typography sx={{ textDecoration: 'underline' }} paddingRight={'0.5rem'}>Shop Now</Typography>
                                        <FaArrowRight />
                                    </Box>
                                </Container>
                            </Grid2>
                            <Grid2 size={{md: 6, xs: 12}}>
                                <img src={heroImg} alt="iphone" width={'100%'} />
                            </Grid2>
                            <Grid2 size={12} justifyContent={'center'} display={'flex'}>
                                <Pagination count={5} sx={{ color: 'white', backgroundColor: 'white' }} hideNextButton hidePrevButton variant="text" />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Hero

import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid2, IconButton, Typography } from "@mui/material"
import about from '../assets/about.webp'
import { TbTruckDelivery, TbHeadset } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";
import about1 from '../assets/about1.webp'
import about2 from '../assets/about2.webp'
import about3 from '../assets/about3.webp'
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { CiShop, CiDollar, CiTwitter } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import randomIcon from '../assets/random-icon.webp'
import FeaturedIcons from "../components/FeaturedIcons";

const About = () => {
    return (
        <>
            <NavBar />

            {/* about hero start*/}

            <Box component={'section'} marginTop={'80px'}>
                <Container>
                    <Typography fontSize={14}><span style={{ opacity: 0.5 }}>Home</span> / About</Typography>
                    <Grid2 container marginTop={'42px'}>
                        <Grid2 size={{ md: 6, xs: 12 }}>
                            <Typography variant="h2" fontSize={{ md: 54, xs: 25 }} fontWeight={600}>Our Story</Typography>
                            <Typography>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</Typography>
                            <br />
                            <Typography>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</Typography>
                        </Grid2>
                        <Grid2 size={6} display={{ md: 'block', xs: 'none' }}>
                            <img src={about} alt="girls" width={'100%'} height={'100%'} />
                        </Grid2>

                    </Grid2>
                </Container>
            </Box>

            {/* about hero end*/}

            {/* about icons start */}

            <Box component={'section'} marginBlock={'140px'}>
                <Container>
                    <Grid2 container>
                        <Grid2 size={3} textAlign={'center'}>
                            <CiShop style={{ fontSize: '2rem' }} />
                            <Typography fontSize={32} fontWeight={700}>10.5k </Typography>
                            <Typography>Sallers active our site</Typography>
                        </Grid2>
                        <Grid2 size={3} textAlign={'center'}>
                            <CiDollar style={{ fontSize: '2rem' }} />
                            <Typography fontSize={32} fontWeight={700}>33k</Typography>
                            <Typography>Mopnthly Produduct Sale</Typography>
                        </Grid2>
                        <Grid2 size={3} textAlign={'center'}>
                            <FaSackDollar style={{ fontSize: '2rem' }} />
                            <Typography fontSize={32} fontWeight={700}>45.5k</Typography>
                            <Typography>Customer active in our site</Typography>
                        </Grid2>
                        <Grid2 size={3} textAlign={'center'}>
                            <img src={randomIcon} alt="" style={{ backgroundColor: 'black' }} />
                            <Typography fontSize={32} fontWeight={700}>25k</Typography>
                            <Typography>Anual gross sale in our site</Typography>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>

            {/* about icons end */}

            {/* employees start */}

            <Box>
                <Container>
                    <Grid2 container spacing={4}>
                        <Grid2 size={{ md: 4, xs: 12 }}>
                            <Card variant="0">
                                <CardMedia component={'img'} image={about1} title="man-in-suit" width={'100%'} sx={{ backgroundColor: '#F5F5F5' }} height={'500px'} />
                                <CardContent>
                                    <Typography fontSize={32} fontWeight={500}>Tom Cruise</Typography>
                                    <Typography>Founder & Chairman</Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton>
                                        <CiTwitter />
                                    </IconButton>
                                    <IconButton>
                                        <FaInstagram />
                                    </IconButton>
                                    <IconButton>
                                        <RiLinkedinLine />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid2>
                        <Grid2 size={{ md: 4, xs: 12 }}>
                            <Card variant="0">
                                <CardMedia component={'img'} image={about2} title="man-in-suit" width={'100%'} sx={{ backgroundColor: '#F5F5F5' }} height={'500px'} />
                                <CardContent>
                                    <Typography fontSize={32} fontWeight={500}>Emma Watson</Typography>
                                    <Typography>Managing Director</Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton>
                                        <CiTwitter />
                                    </IconButton>
                                    <IconButton>
                                        <FaInstagram />
                                    </IconButton>
                                    <IconButton>
                                        <RiLinkedinLine />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid2>
                        <Grid2 size={{ md: 4, xs: 12 }}>
                            <Card variant="0">
                                <CardMedia component={'img'} image={about3} title="man-in-suit" width={'100%'} sx={{ backgroundColor: '#F5F5F5' }} height={'500px'} />
                                <CardContent>
                                    <Typography fontSize={32} fontWeight={500}>Will Smith</Typography>
                                    <Typography>Product Designer</Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton>
                                        <CiTwitter />
                                    </IconButton>
                                    <IconButton>
                                        <FaInstagram />
                                    </IconButton>
                                    <IconButton>
                                        <RiLinkedinLine />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid2>
                    </Grid2>

                    {/* employees end */}

                    {/* features icons start */}

                    <FeaturedIcons />

                    {/* features icon end */}

                </Container>
            </Box>


            <Footer />
        </>
    )
}

export default About

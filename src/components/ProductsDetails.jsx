import { Box, Button, ButtonGroup, Container, Divider, Grid2, IconButton, Typography, useTheme } from "@mui/material";
import Footer from "./Footer";
import NavBar from "./NavBar"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSales } from "../redux/salesSlice";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { TbTruckDelivery } from 'react-icons/tb'
import { TfiReload } from "react-icons/tfi";
import { ColorCircle } from "../mui/theme";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import Sales from "./Sales";

const ProductsDetails = () => {
    const theme = useTheme();
    const sales = useSelector(state => state.sales);
    const dispatch = useDispatch();
    const { homeId } = useParams();
    const product = sales.data.find((index) => index.id == homeId)
    useEffect(() => {
        dispatch(fetchSales())

    }, [])

    if (sales.isLoading) {
        return (
            <>
                <NavBar />
                <Box component={'section'}>
                    <Container>
                        <Typography variant="h2">Loading...</Typography>
                    </Container>
                </Box>
                <Footer />
            </>
        );
    }

    if (product == undefined) {
        return (
            <>
                <NavBar />
                <Box component={'section'}>
                    <Container>
                        <Typography variant="h2">Product not found</Typography>
                    </Container>
                </Box>
                {/* <Sales /> */}
                <Footer />
            </>
        );
    }

    const { title, image, rating, price, description } = product;

    return (
        <>
            <NavBar />
            <Box component={'section'}>
                <Container>
                    <Typography paddingBlock={'80px'}>
                        <span style={{ opacity: 0.5 }}>Account / Gaming / </span>
                        {title}
                    </Typography>
                    <Grid2 container spacing={4}>
                        <Grid2 display={'flex'} alignItems={'center'} size={{ md: 6, xs: 12 }} sx={{ backgroundColor: '#F5F5F5' }} paddingLeft={'50px'} paddingRight={'50px'}>
                            <Box display={'flex'} textAlign={'center'}>
                                <img src={image} alt={title} width={'100%'} />
                            </Box>
                        </Grid2>
                        <Grid2 size={{ md: 6, xs: 12 }}>
                            <Typography variant="h2" fontSize={24} fontWeight={600}>{title}</Typography>
                            <Typography paddingBlock={'1rem'}>
                                {
                                    rating.rate === 5 ? <>
                                        <FaStar color="#FFAD33" />
                                        <FaStar color="#FFAD33" />
                                        <FaStar color="#FFAD33" />
                                        <FaStar color="#FFAD33" />
                                        <FaStar color="#FFAD33" />
                                    </>
                                        :
                                        <>
                                            <FaStar color="#FFAD33" />
                                            <FaStar color="#FFAD33" />
                                            <FaStar color="#FFAD33" />
                                            <FaStar color="#FFAD33" />
                                            <FaStar style={{ opacity: 0.5 }} />
                                        </>
                                }</Typography>
                            <Typography paddingBottom={'24px'} fontSize={24}>${price}</Typography>
                            <Typography>{description}</Typography>
                            <Divider sx={{ marginBlock: '24px' }} />

                            {/* colors */}

                            <Box display={'flex'} alignItems={'center'}>
                                <Typography fontSize={20} paddingRight={'24px'}>Colorous:</Typography>
                                <Box>
                                    <ColorCircle style={{ backgroundColor: '#A0BCE0' }}></ColorCircle>
                                    <ColorCircle style={{ backgroundColor: '#E07575' }}></ColorCircle>
                                </Box>
                            </Box>

                            {/* size */}

                            <Box display={{ md: 'flex', xs: 'block' }} alignItems={'center'} paddingBlock={'24px'}>
                                <Typography fontSize={20} paddingRight={'24px'}>Size:</Typography>
                                <Box display={'flex'} justifyContent={'space-evenly'} flexGrow={1}>
                                    <Button variant="outlined" color="'black">XS</Button>
                                    <Button variant="outlined" color="'black">S</Button>
                                    <Button variant="contained" color="error">M</Button>
                                    <Button variant="outlined" color="'black">L</Button>
                                    <Button variant="outlined" color="'black">XL</Button>
                                </Box>
                            </Box>

                            {/* quantatity */}

                            <Box paddingBottom={'40px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={{ md: 'row', xs: 'column' }}>
                                <ButtonGroup sx={{ alignItems: 'center' }} color="black" >
                                    <Button sx={{ fontSize: '20px', display: 'flex', alignItems: 'center' }}>
                                        —
                                    </Button>
                                    <Button sx={{ fontSize: '20px' }} flexGrow={1}>2</Button>
                                    <Button sx={{ fontSize: '20px' }} variant="contained" color="error">
                                        +
                                    </Button>
                                </ButtonGroup>
                                <Button sx={{ textTransform: 'capitalize', padding: '10px 3rem', marginBlock: { md: 0, xs: '1rem' } }} color="error" variant="contained">Buy Now</Button>
                                <IconButton sx={{ border: '1px solid', borderRadius: '4px' }}>
                                    <MdFavoriteBorder style={{ color: 'black' }} />
                                </IconButton>
                            </Box>

                            <Box border={'1px solid'} borderRadius={'4px'}>
                                <Box padding={'24px 1rem'} display={'flex'} alignItems={'center'}>
                                    <TbTruckDelivery style={{ fontSize: '2rem' }} />
                                    <Box paddingLeft={'1rem'}>
                                        <Typography>Free Delivery</Typography>
                                        <Typography fontWeight={500} sx={{ textDecoration: 'underline' }} fontSize={12}>Enter your postal code for Delivery Availability</Typography>
                                    </Box>
                                </Box>
                                <Divider />
                                <Box padding={'24px 1rem'} display={'flex'} alignItems={'center'}>
                                    <TfiReload style={{ fontSize: '1.5rem' }} />
                                    <Box paddingLeft={'1rem'}>
                                        <Typography>Return Delivery</Typography>
                                        <Typography fontSize={12}>Free 30 Days Delivery Returns. <span style={{ textDecoration: 'underline' }}>Details</span></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
            {/* <Sales /> */}
            <Footer />
        </>
    );
};

export default ProductsDetails;

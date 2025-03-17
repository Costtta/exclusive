import { Box, Button, Container, Divider, Grid2, IconButton, Typography } from "@mui/material"
import { StyledAddToCart, StyledAddToWishList, StyledHeader, StyledHeaderBox } from "../mui/theme"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchSales } from "../redux/salesSlice";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { IoEyeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router";

const Sales = () => {
    const sales = useSelector(state => state.sales);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(sales);
    useEffect(() => {
        dispatch(fetchSales())
    }, [dispatch])



    return (
        <Box component={'section'} marginTop={'4rem'}>
            <Container>
                <StyledHeaderBox>
                    <StyledHeader>
                        Today’s
                    </StyledHeader>
                </StyledHeaderBox>
                <Box paddingBlock={'2rem'} display={'flex'} alignItems={'center'} justifyContent={{ md: 'space-between', xs: 'center' }}>
                    <Box display={'flex'}>
                        <Typography fontSize={{ md: 36, xs: 20 }} fontWeight={600}>Flash Sales</Typography>
                        <Box display={{ md: 'flex', xs: 'none' }} alignItems={'center'} paddingLeft={'2rem'}>
                            <Box>
                                <Typography fontSize={12} fontWeight={500}>Days</Typography>
                                <Typography fontSize={32} fontWeight={700}>03</Typography>
                            </Box>
                            <Typography>:</Typography>
                            <Box>
                                <Typography fontSize={12} fontWeight={500}>Hours</Typography>
                                <Typography fontSize={32} fontWeight={700}>23</Typography>
                            </Box>
                            <Typography>:</Typography>
                            <Box>
                                <Typography fontSize={12} fontWeight={500}>Minutes</Typography>
                                <Typography fontSize={32} fontWeight={700}>19</Typography>
                            </Box>
                            <Typography>:</Typography>
                            <Box>
                                <Typography fontSize={12} fontWeight={500}>Seconds</Typography>
                                <Typography fontSize={32} fontWeight={700}>56</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={{ md: 'block', xs: 'none' }}>
                        <IconButton sx={{ backgroundColor: '#F5F5F5', color: 'black' }}>
                            <IoArrowBack />
                        </IconButton>
                        <IconButton sx={{ backgroundColor: '#F5F5F5', color: 'black' }}>
                            <IoArrowForward />
                        </IconButton>
                    </Box>
                </Box>
                <Grid2 container spacing={3}>
                    {sales.isLoading ? <Typography variant="h1">Loading</Typography> : sales.data.map((index) => {
                        return (
                            <Grid2 size={{ md: 3, sm: 6, xs: 12 }} key={index.id}>
                                <Box position={'relative'} overflow={'hidden'} padding={'2rem'} sx={{
                                    backgroundColor: '#F5F5F5', '&:hover': {
                                        '& button': {
                                            bottom: '4px'
                                        }
                                    }
                                }}>
                                    <StyledAddToCart onClick={() => dispatch(addToCart(index))} variant="contained"> Add to cart</StyledAddToCart>
                                    <img src={index.image} alt={index.title} width={'100%'} height={'226px'} style={{ cursor: 'pointer' }} onClick={() => navigate(`${index.id}`)} />
                                    <StyledAddToWishList>
                                        <IconButton sx={{ backgroundColor: 'white', color: 'black' }}>
                                            <IoEyeOutline />
                                        </IconButton>
                                        <IconButton sx={{ backgroundColor: 'white', color: 'black', marginTop: '8px' }}>
                                            <MdFavoriteBorder />
                                        </IconButton>
                                    </StyledAddToWishList>
                                </Box>
                                <Typography variant="h3" paddingTop={'1rem'} fontSize={16} fontWeight={500}>{index.title}</Typography>
                                <Box display={'flex'}>
                                    <Typography color="error" fontWeight={500}>${index.discount}</Typography>
                                    <Typography paddingLeft={'12px'} fontWeight={500}>${index.price}</Typography>
                                </Box>
                                <Box display={'flex'}>
                                    <Typography>
                                        {
                                            index.rating.rate == 5 ? <>
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
                                    <Typography paddingLeft={'8px'}>({index.sold})</Typography>
                                </Box>
                            </Grid2>
                        )
                    })}
                </Grid2>
                <Box display={{ md: 'block', xs: 'none' }} textAlign={'center'} marginBlock={'3.75rem'}>
                    <Button sx={{ padding: '1rem 3rem' }} variant="contained" color="error">View All Products</Button>
                </Box>
                <Divider />
            </Container>
        </Box>
    )
}

export default Sales

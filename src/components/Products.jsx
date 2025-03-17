import { Box, Container, Grid2, IconButton, Typography } from "@mui/material"
import { StyledHeader, StyledHeaderBox } from "../mui/theme"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productsSlice";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Products = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <Box component={'section'} marginBlock={'5rem'}>
            <Container>
                <StyledHeaderBox>
                    <StyledHeader>Our Products</StyledHeader>
                </StyledHeaderBox>
                <Box display={'flex'} justifyContent={{ md: 'space-between', xs: 'center' }} paddingTop={'20px'}>
                    <Typography fontSize={{ md: 36, xs: 20 }} variant="h2">Explore Our Products</Typography>
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
                    {products.data.map((index) => {
                        return (
                            <Grid2 size={{ md: 3, sm: 6, xs: 12 }} key={index.id}>
                                <Box>
                                    <img src={index.image} alt={index.title} width={'100%'} height={'133px'} style={{ backgroundColor: '#F5F5F5'}} />
                                </Box>
                                <Typography variant="body1" component={'h3'}>{index.title}</Typography>
                                <Box display={'flex'}>
                                    <Typography>{index.price}</Typography>
                                    <Typography>{index.rating.rate}</Typography>
                                    <Typography>({index.sold})</Typography>
                                </Box>
                            </Grid2>
                        )
                    })
                    }
                </Grid2>
            </Container>
        </Box>
    )
}

export default Products

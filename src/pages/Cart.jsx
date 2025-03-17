import { Box, Button, Card, CardHeader, Container, Divider, Grid2, TextField, Typography } from "@mui/material"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import test from '../assets/about1.webp'

const Cart = () => {
    return (
        <>
            <NavBar />
            <Box component={'section'} marginTop={'80px'} marginBottom={'140px'}>
                <Container>
                    <Typography paddingBottom={'80px'}><span style={{ opacity: 0.5 }}>Home</span> / Cart</Typography>
                    <Card sx={{ display: 'flex', justifyContent: 'space-between', padding: '24px 40px' }}>
                        <Typography>Product</Typography>
                        <Typography>Price</Typography>
                        <Typography>Quantity</Typography>
                        <Typography>Subtotal</Typography>
                    </Card>
                    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlock: '40px', padding: '24px 40px' }}>
                        <Typography display={'flex'} alignItems={'center'}>
                            <img src={test} alt="test" width={'45px'} height={'45px'} />
                        </Typography>
                        <Typography>price</Typography>
                        <Typography>quantatiy</Typography>
                        <Typography>total price</Typography>
                    </Card>
                    <Box display={'flex'} justifyContent={'space-between'} marginBottom={'80px'}>
                        <Button variant="outlined" color="black" >Return To Shop</Button>
                        <Button variant="outlined" color="black" >Update Cart</Button>
                    </Box>
                    <Grid2 container spacing={4}>
                        <Grid2 size={6} display={'flex'} alignItems={'start'}>
                            <TextField label="Coupon Code" sx={{flexGrow: 1}} />
                            <Button sx={{padding: '1rem 3rem', textTransform: 'capitalize'}} variant="contained" color="error">Apply Coupon</Button>
                        </Grid2>
                        <Grid2 size={6}>
                            <Typography>Cart Total</Typography>
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Typography>Subtotal:</Typography>
                                <Typography>price</Typography>
                            </Box>
                            <Divider />
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Typography>Shipping:</Typography>
                                <Typography>Free</Typography>
                            </Box>
                            <Divider />
                            <Box display={'flex'} justifyContent={'space-between'}>
                                <Typography>Total:</Typography>
                                <Typography>price</Typography>
                            </Box>
                            <Box textAlign={'center'}>
                                <Button sx={{padding: '1rem 3rem', textTransform: 'capitalize'}} variant="contained" color="error">Procees to checkout</Button>
                            </Box>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Cart

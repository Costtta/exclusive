import { Box, Button, Container, Typography } from "@mui/material"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { useSelector } from "react-redux"


const WishList = () => {
    const wishList = useSelector(state => state.wishList);
    console.log(wishList);
    
    return (
        <>
        <NavBar />
        <Box component={'section'} paddingTop={'80px'}>
            <Container>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography>Wishlist ({wishList.length})</Typography>
                    <Button variant="outlined" color="black" sx={{textTransform: 'capitalize', padding: '1rem 3rem'}}>Move All To Bag</Button>
                </Box>
            </Container>
        </Box>
        <Footer />
        </>
    )
}

export default WishList

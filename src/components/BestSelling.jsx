import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { StyledHeader, StyledHeaderBox } from "../mui/theme";
import bestSelling1 from '../assets/bestSelling1.webp'
import bestSelling2 from '../assets/bestSelling2.webp'
import bestSelling3 from '../assets/bestSelling3.webp'
import bestSelling4 from '../assets/bestSelling4.webp'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const BestSelling = () => {
    return (
        <Box component={'section'} paddingTop={'70px'} paddingBottom={'140px'}>
            <Container>
                <StyledHeaderBox>
                    <StyledHeader>This Month</StyledHeader>
                </StyledHeaderBox>
                <Box display={'flex'} justifyContent={{md: 'space-between', xs: 'center'}} alignItems={'center'} paddingTop={'20px'} paddingBottom={'60px'}>
                    <Typography variant="h2" fontSize={{md: 36, xs: 20}} fontWeight={600}>Best Selling Products</Typography>
                    <Button sx={{ padding: '1rem 3rem', textTransform: 'capitalize', display: {md: 'flex', xs: 'none'} }} color="error" variant="contained">View All</Button>
                </Box>
                <Grid2 container spacing={3}>
                    <Grid2 size={{md: 3,sm: 6, xs: 12}}>
                        <Box>
                            <img src={bestSelling1} alt="" width={'100%'} style={{ backgroundColor: '#F5F5F5', borderRadius: '4px' }} />
                        </Box>
                        <Typography paddingTop={'1rem'} fontWeight={500}>The north coat</Typography>
                        <Box display={'flex'} paddingBlock={'8px'}>
                            <Typography color="error" fontWeight={500}>$260</Typography>
                            <Typography paddingLeft={'12px'} fontWeight={500}>$360</Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Box>
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                            </Box>
                            <Typography paddingLeft={'8px'}>(65)</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={{md: 3,sm: 6, xs: 12}}>
                        <Box>
                            <img src={bestSelling2} alt="" width={'100%'} style={{ backgroundColor: '#F5F5F5', borderRadius: '4px' }} />
                        </Box>
                        <Typography paddingTop={'1rem'} fontWeight={500}>Gucci duffle bag</Typography>
                        <Box display={'flex'} paddingBlock={'8px'}>
                            <Typography color="error" fontWeight={500}>$960</Typography>
                            <Typography paddingLeft={'12px'} fontWeight={500}>$1160</Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Box>
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStarHalfAlt color="#FFAD33" />
                            </Box>
                            <Typography paddingLeft={'8px'}>(65)</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={{md: 3,sm: 6, xs: 12}}>
                        <Box>
                            <img src={bestSelling3} alt="" width={'100%'} style={{ backgroundColor: '#F5F5F5', borderRadius: '4px' }} />
                        </Box>
                        <Typography paddingTop={'1rem'} fontWeight={500}>RGB liquid CPU Cooler</Typography>
                        <Box display={'flex'} paddingBlock={'8px'}>
                            <Typography color="error" fontWeight={500}>$160</Typography>
                            <Typography paddingLeft={'12px'} fontWeight={500}>$170</Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Box >
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStarHalfAlt color="#FFAD33" />
                            </Box>
                            <Typography paddingLeft={'8px'}>(65)</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={{md: 3,sm: 6, xs: 12}}>
                        <Box>
                            <img src={bestSelling4} alt="" width={'100%'} style={{ backgroundColor: '#F5F5F5', borderRadius: '4px' }} height={'270px'} />
                        </Box>
                        <Typography paddingTop={'1rem'} fontWeight={500}>Small BookSelf</Typography>
                        <Typography paddingBlock={'8px'} color="error" fontWeight={500}>$360</Typography>
                        <Box display={'flex'} alignItems={'center'}>
                            <Box>
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                                <FaStar color="#FFAD33" />
                            </Box>
                            <Typography paddingLeft={'8px'}>(65)</Typography>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default BestSelling;

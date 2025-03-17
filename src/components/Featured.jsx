import { Box, Container, Grid2, Typography } from "@mui/material"
import { StyledHeaderBox, StyledHeader, StyledBoxImage } from '../mui/theme'
import playstation from '../assets/playstation.webp'
import women from '../assets/women.webp'
import speakers from '../assets/speakers.webp'
import perfume from '../assets/perfume.webp'

const Featured = () => {
    return (
        <Box component={'section'} marginBlock={'8.75rem'}>
            <Container>
                <StyledHeaderBox>
                    <StyledHeader>Featured</StyledHeader>
                </StyledHeaderBox>
                <Typography ffontSize={{md: 36, xs: 20}} fontWeight={600} paddingTop={'20px'} paddingBottom={'60px'}>New Arrival</Typography>
                <Grid2 container spacing={3}>
                    <Grid2 size={{md: 6, xs: 12}} bgcolor={'black'} alignItems={'end'} display={'flex'}>
                        <StyledBoxImage>
                            <Typography fontSize={24} fontWeight={600}>PlayStation 5</Typography>
                            <Typography fontSize={14} paddingBlock={'1rem'}>Black and White version of the PS5 <br /> coming out on sale.</Typography>
                            <Typography fontWeight={500}>Shop Now</Typography>
                        </StyledBoxImage>
                        <img src={playstation} alt="playstation" width='100%' />
                    </Grid2>
                    <Grid2 size={{md: 6, xs: 12}} alignItems={'end'} display={'flex'}>
                        <Grid2 container spacing={3}>
                            <Grid2 size={12} alignItems={'end'} display={'flex'} >
                                <StyledBoxImage>
                                    <Typography variant="h3" fontSize={24} fontWeight={600}>Women’s Collections</Typography>
                                    <Typography fontSize={14}>Featured woman collections that give you another vibe.</Typography>
                                    <Typography fontWeight={500}>Shop Now</Typography>
                                </StyledBoxImage>
                                <img src={women} alt="women" width='100%' style={{transform: 'scaleX(-1'}} />
                            </Grid2>
                            <Grid2 size={6} alignItems={'end'} display={'flex'}>
                                <StyledBoxImage>
                                    <Typography fontSize={24} fontWeight={600}>Speakers</Typography>
                                    <Typography fontSize={14}>Amazon wireless speakers</Typography>
                                </StyledBoxImage>
                                <img src={speakers} alt="speakers" width='100%' style={{ backgroundColor: 'black' }} height={'100%'} />
                            </Grid2>
                            <Grid2 size={6} alignItems={'end'} display={'flex'}>
                                <StyledBoxImage>
                                    <Typography fontSize={24} fontWeight={600}>Perfume</Typography>
                                    <Typography fontSize={14}>GUCCI INTENSE OUD EDP</Typography>
                                </StyledBoxImage>
                                <img src={perfume} alt="perfume" width='100%' style={{ backgroundColor: 'black' }} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Featured

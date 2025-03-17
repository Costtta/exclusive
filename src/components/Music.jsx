import { Box, Button, Container, Grid2, Typography } from "@mui/material"
import jbl from '../assets/jbl.webp'

const Music = () => {
    return (
        <Box component={'section'} bgcolor={'black'} color={'white'}>
            <Container>
                <Grid2 container paddingBlock={'4rem'}>
                    <Grid2 size={{ md: 6, xs: 12 }}>
                        <Typography fontWeight={600} color="#00FF66">Categories</Typography>
                        <Typography fontSize={{md: '3rem', xs: '1.5rem'}} paddingBlock={'2rem'} variant="h2">Enhance Your Music Experience</Typography>
                        <Box display={'flex'}>
                            <Box bgcolor={'#FFFFFF'} borderRadius={'60px'} width={'62px'} height={'62px'} color={'black'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Typography fontWeight={600}>23</Typography>
                                <Typography fontSize={11}>Hours</Typography>
                            </Box>
                            <Box bgcolor={'#FFFFFF'} borderRadius={'60px'} width={'62px'} height={'62px'} color={'black'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Typography fontWeight={600}>05</Typography>
                                <Typography fontSize={11}>Days</Typography>
                            </Box>
                            <Box bgcolor={'#FFFFFF'} borderRadius={'60px'} width={'62px'} height={'62px'} color={'black'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Typography fontWeight={600}>59</Typography>
                                <Typography fontSize={11}>Minutes</Typography>
                            </Box>
                            <Box bgcolor={'#FFFFFF'} borderRadius={'60px'} width={'62px'} height={'62px'} color={'black'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Typography fontWeight={600}>35</Typography>
                                <Typography fontSize={11}>Seconds</Typography>
                            </Box>
                        </Box>
                        <Button sx={{ marginTop: '2.5rem', textTransform: 'capitalize', backgroundColor: '#00FF66', padding: {md: '1rem 3rem', xs: '0.5rem 1.5rem'} }} variant="contained">Buy Now!</Button>
                    </Grid2>
                    <Grid2 size={6} display={{md: 'block', xs: 'none'}}>
                        <img src={jbl} alt="jbl" width={'100%'} style={{ transform: 'scaleX(-1)' }} />
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default Music

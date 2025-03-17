import { Box, Container, Grid2, Typography } from '@mui/material'
import React from 'react'
import { RiShieldCheckLine } from 'react-icons/ri'
import { TbHeadset, TbTruckDelivery } from 'react-icons/tb'

const FeaturedIcons = () => {
    return (
        <Box component={'section'} marginBlock={'8.75rem'}>
            <Container>
                <Grid2 container textAlign={'center'} marginTop={'8.75rem'}>
                    <Grid2 size={{ md: 4, xs: 12 }} marginBottom={{md: 0, xs: '1.5rem'}}>
                        <TbTruckDelivery style={{ fontSize: '2rem', color: 'white', backgroundColor: 'black', borderRadius: '58px', padding: '0.5rem' }} />
                        <Typography fontWeight={600} fontSize={{ md: 20, xs: 16 }}>FREE AND FAST DELIVERY</Typography>
                        <Typography fontSize={{ md: 14, xs: 10 }}>Free delivery for all orders over $140</Typography>
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }} marginBottom={'1.5rem'}>
                        <TbHeadset style={{ fontSize: '2rem', color: 'white', backgroundColor: 'black', borderRadius: '58px', padding: '0.5rem' }} />
                        <Typography fontWeight={600} fontSize={{ md: 20, xs: 16 }}>24/7 CUSTOMER SERVICE</Typography>
                        <Typography fontSize={{ md: 14, xs: 10 }}>Friendly 24/7 customer support</Typography>
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                        <RiShieldCheckLine style={{ fontSize: '2rem', color: 'white', backgroundColor: 'black', borderRadius: '58px', padding: '0.5rem' }} />
                        <Typography fontWeight={600} fontSize={{ md: 20, xs: 16 }}>MONEY BACK GUARANTEE</Typography>
                        <Typography fontSize={{ md: 14, xs: 10 }}>We reurn money within 30 days</Typography>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}

export default FeaturedIcons

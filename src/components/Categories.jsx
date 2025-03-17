import { Box, Container, Divider, Grid2, IconButton, Typography } from "@mui/material"
import { StyledHeader, StyledHeaderBox } from "../mui/theme"
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { RiGamepadLine } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
const Categories = () => {
    return (
        <>
            <Box component={'section'} marginBlock={'5rem'}>
                <Container>
                    <StyledHeaderBox>
                        <StyledHeader>Categories</StyledHeader>
                    </StyledHeaderBox>
                    <Box paddingBlock={'2rem'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography fontSize={{md: 36, xs: 20}} fontWeight={600}>Browse By Category</Typography>
                        <Box display={{md: 'block', xs: 'none'}}>
                            <IconButton sx={{backgroundColor: '#F5F5F5', color: 'black'}}>
                                <IoArrowBack />
                            </IconButton>
                            <IconButton sx={{backgroundColor: '#F5F5F5', color: 'black'}}>
                                <IoArrowForward />
                            </IconButton>
                        </Box>
                    </Box>
                    <Grid2 container spacing={3}>
                        <Grid2 size={{md: 2, sm: 4, xs: 6}} textAlign={'center'} border={'1px solid #0000004D'} paddingBlock={'1rem'}>
                            <GiSmartphone style={{ fontSize: '2.5rem' }} />
                            <Typography paddingTop={'1rem'}>Phones</Typography>
                        </Grid2>
                        <Grid2 size={{md: 2, sm: 4, xs: 6}} textAlign={'center'} border={'1px solid #0000004D'} paddingBlock={'1rem'}>
                            <HiOutlineComputerDesktop style={{ fontSize: '2.5rem' }} />
                            <Typography paddingTop={'1rem'}>Computers</Typography>
                        </Grid2>
                        <Grid2 size={{md: 2, sm: 4, xs: 6}} textAlign={'center'} border={'1px solid #0000004D'} paddingBlock={'1rem'}>
                            <IoWatchOutline style={{ fontSize: '2.5rem' }} />
                            <Typography paddingTop={'1rem'}>SmartWatch</Typography>
                        </Grid2>
                        <Grid2 size={{md: 2, sm: 4, xs: 6}} textAlign={'center'} border={'1px solid #0000004D'} paddingBlock={'1rem'} bgcolor={'#DB4444'} color={'white'}>
                            <CiCamera style={{ fontSize: '2.5rem' }} />
                            <Typography paddingTop={'1rem'}>Camera</Typography>
                        </Grid2>
                        <Grid2 size={{md: 2, sm: 4, xs: 6}} textAlign={'center'} border={'1px solid #0000004D'} paddingBlock={'1rem'}>
                            <CiHeadphones style={{ fontSize: '2.5rem' }} />
                            <Typography paddingTop={'1rem'}>HeadPhones</Typography>
                        </Grid2>
                        <Grid2 size={{md: 2, sm: 4, xs: 6}} textAlign={'center'} border={'1px solid #0000004D'} paddingBlock={'1rem'}>
                            <RiGamepadLine style={{ fontSize: '2.5rem' }} />
                            <Typography paddingTop={'1rem'}>Gaming</Typography>
                        </Grid2>
                    </Grid2>
                </Container>
            </Box>
            <Divider />
        </>
    )
}

export default Categories

import { Box, Button, Container, Grid2, Input, Typography } from "@mui/material"
import Footer from '../components/Footer'
import registerImg from '../assets/register.webp'
import NavBar from "../components/NavBar"
import { useState } from "react"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <NavBar />
            <Box>
                <Grid2 container paddingTop={'60px'} paddingBottom={'140px'}>
                    <Grid2 size={8} display={{md: 'block', xs: 'none'}} >
                        <img src={registerImg} alt="" width={'100%'} />
                    </Grid2>
                    <Grid2 size={{md: 4, xs: 12}} display={'flex'} alignItems={'center'}>
                        <Container maxWidth={'xs'}>
                            <Typography fontSize={36} fontWeight={500}>Log in to Exclusive</Typography>
                            <Typography paddingTop={'24px'} paddingBottom={'3rem'}>Enter your details below</Typography>
                            <form action="" onSubmit={handleSubmit}>
                                <Input placeholder="Email or Phone Number" value={email} onChange={(e) => setEmail(e.target.value)} sx={{width: '100%'}} required />
                                <br />
                                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{width: '100%', marginBlock: '40px'}} required />
                                <Box display={'flex'} justifyContent={'space-between'}>
                                    <Button variant="contained" color="error" sx={{textTransform: 'capitalize'}}>Log In</Button>
                                    <Button sx={{textTransform: 'capitalize'}} color="error">Forget Password?</Button>
                                </Box>
                            </form>
                        </Container>
                    </Grid2>
                </Grid2>
            </Box>
            <Footer />
        </>
    )
}

export default SignIn

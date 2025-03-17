import { Box, Button, Container, Grid2, Input, Typography } from "@mui/material"
import registerImg from '../assets/register.webp'
import Footer from "../components/Footer"
import { useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <NavBar />
            <Box>
                <Grid2 container paddingTop={'60px'} paddingBottom={'140px'}>
                    <Grid2 size={8} display={{md: 'block', xs: 'none'}}>
                        <img src={registerImg} alt="" width={'100%'} />
                    </Grid2>
                    <Grid2 size={{md: 4, xs: 12}} display={'flex'} alignItems={'center'}>
                        <Container maxWidth={'xs'}>
                            <Typography fontSize={36} fontWeight={500}>Create an account</Typography>
                            <Typography paddingTop={'24px'} paddingBottom={'3rem'}>Enter your details below</Typography>
                            <form action="" onSubmit={handleSubmit}>
                                <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} sx={{ width: '100%', marginBottom: '40px' }} required />
                                <br />
                                <Input placeholder="Email or Phone Number" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ width: '100%' }} required />
                                <br />
                                <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ width: '100%', marginBlock: '40px' }} required />
                                <Button variant="contained" color="error" sx={{ textTransform: 'capitalize', width: '100%', paddingBlock: '1rem' }}>Create Account</Button>
                                <Button variant="outlined" sx={{ textTransform: 'capitalize', width: '100%', marginTop: '1rem', marginBottom: '2rem', paddingBlock: '1rem' }} color="black" startIcon={<FcGoogle />}>Sign up with Google</Button>
                                <Box display={'flex'} justifyContent={'center'}>
                                    <Typography>Already have account?</Typography>
                                    <Link to={'/signIn'} style={{color: 'black', fontWeight: '500', paddingLeft: '1rem'}} >Log in</Link>
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

export default SignUp

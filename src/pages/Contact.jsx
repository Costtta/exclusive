import { Box, Button, Card, Container, Divider, Grid2, TextField, Typography, useTheme } from "@mui/material"
import { TbPhone } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Contact = () => {
  const theme = useTheme()
  return (
    <>
      <NavBar />
      <Box component={'section'} marginTop={'80px'} marginBottom={'140px'}>
        <Container>
          <Typography><span style={{ opacity: 0.5 }}>Home</span> / Cantact</Typography>
          <Grid2 container spacing={3} marginTop={'80px'}>
            <Grid2 size={{ md: 4, xs: 12 }}>
              <Card sx={{padding: '30px 30px'}}>
                <Box display={'flex'} alignItems={'center'}>
                  <TbPhone style={{fontSize: '1.5rem', backgroundColor: theme.palette.error.main, color: "white", padding: '10px', borderRadius: '31px'}} />
                  <Typography paddingLeft={'1rem'} fontWeight={500}>Call To Us</Typography>
                </Box>
                <Typography fontSize={14} paddingTop={'24px'} paddingBottom={'1rem'}>We are available 24/7, 7 days a week.</Typography>
                <Typography fontSize={14} >Phone: +8801611112222</Typography>

                <Divider sx={{marginBlock: '2rem'}} />

                <Box display={'flex'} alignItems={'center'}>
                  <AiOutlineMail style={{fontSize: '1.5rem', backgroundColor: theme.palette.error.main, color: "white", padding: '10px', borderRadius: '31px'}} />
                  <Typography paddingLeft={'1rem'}>Write To US</Typography>
                </Box>
                <Typography fontSize={14} paddingTop={'24px'}>Fill out our form and we will contact you within 24 hours.</Typography>
                <Typography fontSize={14} paddingBlock={'1rem'}>Emails: customer@exclusive.com</Typography>
                <Typography fontSize={14}>Emails: support@exclusive.com</Typography>

              </Card>
            </Grid2>

            {/* large content */}

            <Grid2 size={{ md: 8, xs: 12 }}>
              <Card sx={{padding: '40px 2rem'}}>
                <form action="">
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                      <TextField label="Your Name" variant="filled" sx={{width: '100%'}} required />
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                      <TextField label="Your Email" variant="filled" sx={{width: '100%'}} required />
                    </Grid2>
                    <Grid2 size={{ md: 4, xs: 12 }}>
                      <TextField label="Your Phone" variant="filled" sx={{width: '100%'}} required />
                    </Grid2>
                    <Grid2 size={12}>
                      <TextField multiline rows={5} fullWidth label="Your Message" variant="filled" />
                    </Grid2>
                    <Box display={'flex'} justifyContent={{md: 'end', xs: 'center'}} width={'100%'} marginTop={'2rem'}>
                      <Button sx={{padding: '1rem 3rem'}} variant="contained" color="error">Send Massage</Button>
                    </Box>
                  </Grid2>
                </form>
              </Card>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default Contact

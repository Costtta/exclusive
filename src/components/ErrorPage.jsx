import { Box, Button, Container, Typography } from "@mui/material"
import Footer from "./Footer"


const ErrorPage = () => {
    return (
        <>
            <Box>
                <Container>
                    <Box>
                        <Typography variant="">Home</Typography>
                        <Typography variant="">404 Error</Typography>
                    </Box>
                    <Box>
                        <Typography>404 Not Found</Typography>
                        <Typography>Your visited page not found. You may go home page.</Typography>
                    </Box>
                    <Button>Back to home page</Button>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default ErrorPage;

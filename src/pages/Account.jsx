import { Box, Button, Card, Container, Grid2, InputLabel, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Account = () => {
    return (
        <>
            <NavBar />
            <Box>
                <Container>
                    <Typography>Home / My Account</Typography>
                    <Grid2 container>
                        <Grid2 size={4}>
                            <Typography>Manage My Account</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary='My Profile' />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary='Address Book' />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary='My Payment Options' />
                                </ListItem>
                            </List>
                            <Typography>My Orders</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary='My Returns' />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary='My Cancellations' />
                                </ListItem>
                            </List>
                            <Typography>My WishList</Typography>
                        </Grid2>
                        <Grid2 size={8}>
                            <Card>
                                <Typography>Edit Your Profile</Typography>
                                <form action="">
                                    <Grid2 container spacing={4}>
                                        <Grid2 size={6}>
                                            <InputLabel>First Name</InputLabel>
                                            <TextField placeholder="Md" fullWidth variant="filled" />
                                        </Grid2>
                                        <Grid2 size={6}>
                                            <InputLabel>Last Name</InputLabel>
                                            <TextField placeholder="Rimel" fullWidth variant="filled"  />
                                        </Grid2>
                                        <Grid2 size={6}>
                                            <InputLabel>Email</InputLabel>
                                            <TextField placeholder="rimel1111@gmail.com" fullWidth variant="filled"  />
                                        </Grid2>
                                        <Grid2 size={6}>
                                            <InputLabel>Address</InputLabel>
                                            <TextField placeholder="Kingston, 5236, United State" fullWidth variant="filled"  />
                                        </Grid2>
                                        <Grid2 size={12}>
                                            <InputLabel>Address</InputLabel>
                                            <TextField placeholder="Current Passwod" fullWidth variant="filled"  />
                                            <TextField placeholder="New Passwod" fullWidth variant="filled"  />
                                            <TextField placeholder="Confirm New Passwod" fullWidth variant="filled"  />
                                        </Grid2>
                                        <Grid2 size={12} textAlign={'end'}>
                                            <Button>Cancel</Button>
                                            <Button variant="contained" color="error">Save Changes</Button>
                                        </Grid2>
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

export default Account;

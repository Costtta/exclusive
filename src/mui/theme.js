import { Box, Button, createTheme, styled, Typography } from "@mui/material";

export const theme = createTheme({
    palette: {
        error: {
            main: '#DB4444'
        }
    }
})

export const StyledHeader = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
    fontSize: '16px',
    LineHeight: '20px',
    color: '#DB4444',
    paddingLeft: '2.25rem',
}))

export const StyledHeaderBox = styled(Box)(({theme}) => ({
    position: 'relative',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
        position: 'absolute',
        content: '""',
        width: '20px',
        height: '40px',
        backgroundColor: '#DB4444',
        top: 0,
        left: 0,
        borderRadius: '4px'
    }
}))


export  const StyledAddToCart = styled(Button)(({theme}) =>({
    position: 'absolute',
    backgroundColor: 'black',
    bottom: '-38px',
    left: '50%',
    textTransform: 'capitalize',
    transform: 'translateX(-50%)',
    width: '100%',
    transition: '0.3s',
}))

export const StyledBoxImage = styled(Box)(({theme}) => ({
    position: 'absolute',
    color: 'white',
    paddingLeft: '2rem',
    paddingBottom: '2rem',
    zIndex: 1
}))

export const StyledAddToWishList = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: 0,
    right: '12px',
    display: 'flex',
    flexDirection: 'column',
}))

export const ColorCircle = styled('span')(({theme}) => ({
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '20px',
    backgroundColor: 'black',
    marginRight: '8px',
    marginTop: '7px'

}))

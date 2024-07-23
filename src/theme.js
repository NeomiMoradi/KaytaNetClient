import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    // color: 'red',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '& .MuiTypography-root': {
                        // color: 'red',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    // backgroundColor: 'red', 
                    color: 'black'
                },
            },
        },
    },
});
import React from 'react';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Snackbar, Alert, Slide, Card, IconButton } from "@mui/material";
// import { borderBottom, margin } from '@mui/system';
import { styled } from '@mui/system';

// To use default theme
// const theme = createTheme();

// Create Own theme:

// Palette: Defines the color scheme for the application.
// Typography: Specifies font sizes for different heading levels.
// Shape: Defines border radii for different UI elements.
// Breakpoints: Sets the values for responsive design breakpoints.
// Spacing: Establishes a spacing factor used throughout the application, based on a 4px scale.
// Shadows: Customizes shadow values for different elevation levels.
// Z-Index: Manages stacking order of UI elements.
// Transitions: Controls the default duration, easing, and other aspects of transitions.
// Components Overrides: Customize default styles for specific components.
// Mixins: Provides reusable CSS mixins.

const theme = responsiveFontSizes(createTheme({
    palette: {
        primary: {
            main: '#7258BC',
        },
        secondary: {
            main: '#00B29A',
        },
        third: {
            main: '#527C88',
            alt: '#10217D',
            default: '#1BA9B5',
        },
        success: {
            main: "#00ff00",
        },
        error: {
            main: "#ff0000",
        },
        warning: {
            main: "#ffff00",
        },
        info: {
            main: "#00ffff",
        },
        background: {
            main: '#dedae8',
            alt: '#1A2035',
            default: '#ffffff',
        },
        text: {
            main: '#000',
            secondary: '#ffffff',
            default: '#',
        },
        divider: '#DBDDE0',
    },
    
    typography: {
        
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontSize: '2.5rem',
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h2: {
            fontSize: '2.25rem',
        },
        h3: {
            fontSize: '2rem',
        },
        h4: {
            fontSize: '1.75rem',
        },
        h5: {
            fontSize: '1.5rem',
        },
        h6: {
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '400',
            fontSize: '1.25rem',
        },
        
        body1: {
            fontSize: '1rem',
            '@media (max-width:600px)': {
                fontSize: '0.875rem',
            },
        },
        body2: {
            fontSize: '0.875rem',
        },
        
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 'bold',
        },
        caption: {
            fontSize: '0.65rem',
        },
        caption2: {
            fontSize: '0.75rem',
        },
    },

    components: {
        MuiGrid: {
            defaultProps: {
                // all grids under this theme will apply
                // negative margin on the top and left sides.
                // disableEqualOverflow: true,
            },
        },
        MenuProps: {
            disableRipple: true,
            disableScrollLock: true,
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: '16px', // Default for larger screens
                '@media (max-width: 600px)': {
                    padding: '8px', // Reduced padding for smaller screens
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '400',
                    fontSize: '1rem',
                    borderRadius: 1,
                    textTransform: "none",
                    '@media (max-width:600px)': {
                        padding: '8px 12px',
                        fontSize: '0.875rem',
                    },
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '400',
                    // fontSize: '0.875rem',
                    textTransform: "none",
                },
            },
        },
    },
    
    // shape: {
    //     borderRadius: 8,
    //     borderRadiusSmall: 1,
    //     borderRadiusLarge: 20,
    // },

    // Note : Material UI is a mobile-first component library. Write code for mobile devices first, and then scale up the components.
    breakpoints: {
        values: {
            xs: 0,    // "xs":: Mobile 0px and up, Extra small screen (usually for very small devices like phones).
            sm: 600,  // "sm":: Mobile style below 600px, Small screen (for small devices, typically tablets or smaller laptops).
            md: 960,  // "md":: Tablet style below 960px and up, Medium screen (for larger tablets or medium-sized laptops).
            lg: 1280, // "lg":: 1280px and up, Large screen (for desktop-sized screens).
            xl: 1920, // "xl":: 1920px and up, Extra large screen (for very large displays, like high-resolution monitors or large screens).
        },
        // down: {
        //     xs: "(max-width:600px)", // Media query for mobile screens
        //     sm: "(max-width:960px)", // Media query for tablet screens
        //     md: "(max-width:1280px)", // Media query for desktop screens
        //     lg: "(max-width:1920px)", // Media query for large desktop screens
        //     xl: "(max-width:2560px)", // Media query for extra large desktop screens
        // },
        // up: {
        //     xs: "(min-width:600px)", // Media query for mobile screens
        //     sm: "(min-width:960px)", // Media query for tablet screens
        //     md: "(min-width:1280px)", // Media query for desktop screens
        //     lg: "(min-width:1920px)", // Media query for large desktop screens
        //     xl: "(min-width:2560px)", // Media query for extra large desktop screens
        // },
    },
    spacing: factor => `${0.25 * factor}rem`, // default 8px scaling factor

    // shadows: Array(25).fill('none').map((_, index) => index === 1 ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none'),

    zIndex: {
        appBar: 1100,
        drawer: 1200,
    },

    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
    },
    
    easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    }
    },

    mixins: {
    toolbar: {
        maxHeight: 485,
        '@media (min-width: 600px)': {
            maxHeight: 56,
        },
    },
    },

    // Add more theme options as needed...
    // Other theme options can be added here...

}));

export default theme;


// Define our Custom Toast (Snackbar, Toastify):
const SlideTransition = (props) => {
    return <Slide {...props} direction="down" />;
};
// Define severity styles
const severityStyles = {
    success: {
        backgroundColor: "#388e3c",
        color: "#fff",
        '& .MuiAlert-icon': {
            color: "#fff",
        },
    },
    error: {
        backgroundColor: "#0f2336",
        color: "#fff",
        '& .MuiAlert-icon': {
            color: "#d32f2f",
        },
    },
    warning: {
        backgroundColor: "#091c2e",
        color: "#fff",
        '& .MuiAlert-icon': {
            color: "#d32f2f",
        },
    },
    info: {
        backgroundColor: "#0288d1",
        color: "#fff",
        '& .MuiAlert-icon': {
            color: "#fff",
        },
    },
};

export const Toast = ({ open, handleClose, message, severity = "error", autoHideDuration = 5000 }) => {
    return (
        <Snackbar open={open} TransitionComponent={SlideTransition} autoHideDuration={autoHideDuration} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
            <Alert onClose={handleClose} severity={severity}
                sx={{
                    ...severityStyles[severity],
                    fontWeight: "bold",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                    borderRadius: "8px",
                    minWidth: "320px",
                    textAlign: "center",
                    '@media (max-width:600px)': {
                        minWidth: "90%",
                    },
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export const Cards = styled(Card)(({ theme }) => ({
    height: "100%",
    // boxShadow: "5px 5px 10px 5px rgba(114, 88, 188, 0.5)",
    "&:hover": {
        // transform: "scale(1.02)",
        transition: "transform 0.3s ease-in-out",
    },
    "@media (max-width:600px)": {
        padding: "16px",
        "&:hover": {
            // padding: "8px",
            // transform: "scale(1.01)", // Smaller scale for mobile devices
        },
    },
}));


export const ExpandMore = React.memo(
    styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        color: theme.palette.primary.main,
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        "&:hover": {
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.main,
        },
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    }))
);

// Active Link Styling
// export const navLinkStyle = ({ isActive }) =>{
//     return {
//         display: 'inline-block',
//         fontFamily: 'Poppins, sans-serif',
//         fontWeight: '400',
//         textDecoration: 'none',
//         position: 'relative',
//         borderBottom: isActive ? '4px solid #1BA9B5' : 'none',
//     }
// };

// navLinkStyle.js for Active Link Styling
export const navLinkStyle = {
    borderBottom: 'none',
    textTransform: 'none',
    mx: 3,
    color: theme.palette.text.main,
    willChange: 'all',
    // willChange: 'transform',
    position: 'relative', // Ensure position for pseudo-element
    '&.active': {
        '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50px', // Shorter length of the border
        height: '4px', // Border thickness
        backgroundColor: '#1BA9B5',
        },
    },
    // Media query for mobile screens 
    // '@media (max-width: 600px)': { 
    //     mx: 0,
    //     '&.active': {
    //         '&::after': {
    //             left: '10', // Align with the left edge of the text
    //             transform: 'translateX(0)',
    //             width: '50px', // I don't wnat Full width
    //         },
    //     },
    // },
};

// NavLink Style for mobile
// export const navLinkMobile = {
//     borderBottom: 'none',
//     textTransform: 'none',
    // mx: 3,
    // color: theme.palette.text.main,
    // willChange: 'all',
    // willChange: 'transform',
    // position: 'relative',
    // '&.active': {
    //     '&::after': {
    //     content: '""',
    //     position: 'absolute',
    //     bottom: 0, 
    //     left: '10', 
    //     transform: 'translateX(0)',
    //     width: '50px',
    //     height: '4px',
    //     backgroundColor: '#1BA9B5',
    //     },
    // },
// };
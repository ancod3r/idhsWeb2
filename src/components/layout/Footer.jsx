import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import theme from '../../theme';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (
        <Box component="footer" sx={{ backgroundColor: 'background.default', color: 'text.main', mb: 5, mt: 15,
            [theme.breakpoints.down("sm")]: {
            // flexDirection: "column",
            marginLeft: "20px",
            // marginTop: "-20px",
            // margin: "0px 0px 0px 20px",
        }
        }}>
            <Container maxWidth={"lg"}>
                <Grid container spacing={3} alignItems={'flex-start'}>
                {/* <Grid container spacing={3} justifyContent="space-between" wrap='nowrap'> */}
                    <Grid item xs={12} sm={6} md={4.5} ml={'auto'} mr={'auto'} p={15}>
                        <Typography variant="h5" color="text" sx={{ fontWeight: "bold", fontFamily: "Manrope" }} marginBottom={2}>
                            IDHS
                        </Typography>
                        <Typography color="text" sx={{ fontWeight: "300", fontFamily: "Manrope",
                                [theme.breakpoints.down("sm")]: {
                                    // flexDirection: "column",
                                    // marginBottom: "-20px",
                                    // marginRight: "-20px",
                                }, }}>
                        Health care refers to the efforts that medical professionals make to restore our physical and mental well-being. The term also includes the provision of services to maintain emotional well-being. We call people and organizations that provide these services health-care providers.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} ml={'auto'} sx={{ [theme.breakpoints.down("sm")]: {marginTop: "-40px"} }}>
                        <Typography variant="h6" color="third" marginBottom={2} fontWeight={"bold"} fontFamily={"Manrope"}>
                            Overview
                        </Typography>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="/launching-soon">Medicines</NavLink></span>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="https://account.idhs.in" target="_blank" rel="noreferrer noopener">Healthcare Devices</NavLink></span>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="https://account.idhs.in/hospital/login" target="_blank">Health Progress</NavLink></span>
                        {/* <NavLink style={navLinkStyle} to="/launching-soon">Doctor App</NavLink> */}
                    </Grid>
                    <Grid item xs={6} sm={6} md={1.5} sx={{ [theme.breakpoints.down("sm")]: {marginTop: "-40px"} }}>
                        <Typography variant="h6" color="third" marginBottom={2} fontWeight={"bold"} fontFamily={"Manrope"}>
                            Company
                        </Typography>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="/">Home</NavLink></span>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="/about">About Us</NavLink></span>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="/refund-policy">Services</NavLink></span>
                    </Grid>
                    <Grid item xs={6} sm={6} md={1.5}>
                        <Typography variant="h6" color="third" marginBottom={2} fontWeight={"bold"} fontFamily={"Manrope"}>
                            Explore
                        </Typography>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="/terms-conditions">Blogs & Feeds</NavLink></span>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="/privacy-policy">Privacy Policy</NavLink></span>
                        <span style={{ display: 'block', width:'auto' }}><NavLink className="footer-link" to="/CustomerGrievanceRedressalPolicy">Cookies</NavLink></span>
                    </Grid>
                    <Grid item sm={6} md={1.5} sx={{display: { xs: 'none', sm: 'block', md: 'none'} }}></Grid>
                    <Grid item xs={6} sm={6} md={1.5} mr={'auto'}>
                        <Typography variant="h6" color="third" marginBottom={2} fontWeight={"bold"} fontFamily={"Manrope"}>
                            Social Media
                        </Typography>
                            <IconButton sx={{ ml: -2 }} href="https://www.facebook.com/IDHSV1" aria-label="Facebook" color="text" target="_blank"><FacebookIcon /></IconButton>
                            <IconButton href="https://www.instagram.com/idhs.in/" aria-label="Instagram" target="_blank" color="text"><InstagramIcon /></IconButton>
                            <IconButton href="#" aria-label="Twitter" color="text" target="_blank"><TwitterIcon /></IconButton>
                            {/* <IconButton href="https://www.linkedin.com/company/99288687/admin/feed/posts/" aria-label="LinkedIn" target="_blank" color="text"><LinkedInIcon /></IconButton> */}
                    </Grid>
                    {/* <Grid item xs={12} sm={6} md={2} sx={{ mb: 2 }}>
                        <Typography variant="h6">
                            <Divider sx={{ borderWidth: '1px', width: '20%' }}></Divider>Legal<Divider sx={{ borderWidth: '1px', width: '20%' }}></Divider>
                        </Typography>
                        <NavLink style={navLinkStyle} to="/terms-conditions">Terms & Conditions</NavLink>
                        <NavLink style={navLinkStyle} to="/refund-policy">Refund Policy</NavLink>
                        <NavLink style={navLinkStyle} to="/CustomerGrievanceRedressalPolicy">Grievance Redressal Policy</NavLink>
                    </Grid> */}
                    {/* <Grid item xs={12} sm={6} md={2} sx={{ mb: 2 }}>
                        <Typography variant="h6">
                            <Divider sx={{ borderWidth: '1px', width: '70%' }}></Divider>Social Media<Divider sx={{ borderWidth: '1px', width: '70%' }}></Divider>
                        </Typography>
                        <Box>
                            <IconButton
                                href="https://play.google.com/store/apps/details?id=com.idhs.patient"
                                aria-label='Google Play'
                                target="_blank" >
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Play Store" style={{ height: '30px' }} />
                            </IconButton>
                            <IconButton
                                href="https://apps.apple.com/in/app/idhs-health-wellness/id6544813148"
                                aria-label='Apple Store'
                                target="_blank"
                                sx={{ mx: 4 }} >
                                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="Apple Store" style={{ height: '30px' }} />
                            </IconButton>
                        </Box>
                    </Grid> */}
                </Grid>
                <Typography variant="body2" color="text" align="center"
                        sx={{ my: 2, mt: 1, [theme.breakpoints.down("sm")]: {
                                        marginTop: "20px",
                                        marginRight: "10px",
                                        // marginLeft: "10px",
                                        },
                                        [theme.breakpoints.down("md")]: { marginTop: "20px", },
                                }} fontFamily={"Manrope"}>
                    {'Copyright \u00A9 '}
                    {new Date().getFullYear()}
                    {' \u2022 '}
                    <Link sx={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Manrope' }} href="https://idhs.in/">
                        Kailash Upchar (OPC) Private Limited
                    </Link>{' \u2022 '}
                    {'All rights reserved.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
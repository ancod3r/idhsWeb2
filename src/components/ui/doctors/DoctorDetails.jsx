import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, Container, Box, Typography, Button, CardMedia, Divider } from '@mui/material';
import { Loading } from '../../layout/Layout';
import { LocationOn, Star } from '@mui/icons-material';
import theme from '../../../theme';
import Wellness from '../wellness/Wellness';
import HealthcareProgram from '../healthcare-program/HealthcareProgram';
import OurBlogs from '../our-blogs/OurBlogs';
import OurVideos from '../our-videos/OurVideos';
import Testimonial from '../testimonial/Testimonial';
import TopDoctors from './TopDoctors';
import { useNavigate } from 'react-router-dom';

const DoctorDetails = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // Sample data for doctor cards
    const doctorCardData = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        image: `/doctors.png`,
        name: `Dr Sukhram Bishnoi ${index + 1} Doctor Name Dr Sukhram Dr Sukhram.. ${index + 1}`,
        speciality: "Speciality",
        speciality1: "Cardiologist Surgeons",
        speciality2: "heart Surgeons",
        rating: 4.8,
        experience: "10 Years",
        location: "Location",
    }));
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top on page load
    }, []);
    useEffect(() => {
        const selectedDoctor = doctorCardData.find(d => d.id.toString() === id.toString());
        if (selectedDoctor) {
            setDoctor(selectedDoctor);
        } else {
            console.error('No Doctor found with the provided ID');
        }
        setLoading(false);
    }, [id]);
    if (loading || !doctor) {
        return <Loading />;
    }

    const handleOpen = () => {
        navigate(`/time-slot-booking/`);
        console.log('Opening chat with doctor');
    };


    return (
        <>
        <Box maxWidth="xl" sx={{ backgroundColor: '#7158BC', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '-40px auto',}}>
        <Grid container maxWidth="lg" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // width: { xs: '85%', sm: '91%', md: '79%' },
            // [theme.breakpoints.up("xs")]: { paddingY: "50px", paddingX: "10px", width: '95%' },
            // [theme.breakpoints.down("sm")]: { paddingY: "50px", paddingX: "10px", width: '99%' },
            // [theme.breakpoints.down("md")]: { paddingY: "40px", paddingX: "10px", width: '85%' },
        }}>
        {/* Breadcrumb Section */}
        <Box
            sx={{
                display: 'flex',
                padding: '30px 0 0 30px',
                gap: '10px',
                fontSize: '16px',
                width: '100%',
                }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
                <Typography color='#fff'>{'>'}</Typography>
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Top Doctors</Link>
                <Typography color='#fff'>{'>'}</Typography>
                <Typography sx={{ color: '#fff' }}>Doctor{id}</Typography>
        </Box>
        </Grid>
        </Box>
        <Box
            sx={{
                margin: '0 auto',
                backgroundColor: '#7158BC',
                // padding: '20px',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                // gap: '10px',
                alignItems: 'center',
                }}>
            <Box sx={{ display: 'flex', width: { xs: '50%', md: '50%' }, marginLeft: {xs: '0', md: '120px'}, marginTop: { xs: '50px', md: '20px' } }}>
                <CardMedia
                component="img"
                height="400"
                image={doctor.image}
                alt={`${doctor.name}`}
                sx={{ borderRadius: '8px', objectFit: 'contain', width: { xs: '100%', md: '100%' } }}/>
            </Box>
                <Box
                    sx={{
                        // backgroundColor: '#000fff',
                        display: 'flex',
                        width: { xs: '100%', md: '100%' },
                        flexDirection: 'column',
                        gap: '10px',
                        padding: '50px',
                        marginTop: { xs: '0', md: '0' },
                        }}>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold', fontFamily: 'PoppinsBold' }}>{doctor.name}</Typography>
                                <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold' }}>General Surgeon</Typography>
                                <Box display="flex" alignItems="center">
                                    <LocationOn style={{ color: '#00B29A' }} />
                                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>Baktawar Singh Gurgaon Sector 38, Gurgaon</Typography>
                                </Box>
                                <Typography variant="body1" mb={3} sx={{ marginLeft: '20px', marginTop: '-10px', color: '#262626' }}>Distance 5KM</Typography>
                                <Typography variant="body2" color="#fff">Timing</Typography>
                                <Typography variant="body2" fontWeight={"600"} color='#fff'>10 AM - 8 PM</Typography>
                                <Box mb={2} display="flex" alignItems="center" justifyContent="flex-start">
                                    <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                                        <Typography variant="body1" sx={{ color: '#fff' }}>Year of Experience</Typography>
                                        <Typography variant="body1" fontWeight={600} sx={{ color: '#fff' }}>{doctor.experience}</Typography>
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{ borderLeft: '1px solid #fff', mx: 5 }} />
                                    <Box gutterBottom marginX={{ xs: 2, md: 0 }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                        <Typography variant="body1" sx={{ color: '#fff', marginTop: '10px' }}>Rating & Reviews</Typography>
                                        <Box display="flex" alignItems="center" justifyContent="center" >
                                            <Box display="flex" alignItems="center" backgroundColor="#E1F2EF" border="1px solid #00B29A" borderRadius="5px" p={1}>
                                                <Typography variant="caption2" fontWeight={600} mx={1}>4.8</Typography>
                                                <Star style={{ color: "#00B29A", fontSize: "16px" }} />
                                            </Box>
                                            <Typography variant="caption2" fontWeight={600} mx={1}>60 Reviews</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography variant="body1" sx={{ color: '#fff' }}>Consultancy Fees</Typography>
                                <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold' }}><span>&#x20B9;</span>{' '}1500</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'center'}, gap: '10px', flexDirection: { xs: 'column', md: 'row'} }}>
                                    <Button
                                        onClick={handleOpen}
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            alignItems: 'center',
                                            // width: '30%',
                                            width: { xs: '60%', md: '30%' },
                                            backgroundColor: '#00B29A',
                                            padding: { xs: '10px', md: '15px' },
                                            fontSize: { xs: '12px', md: '12px' },
                                            borderRadius: '8px'
                                        }}
                                    >
                                        Make a Appointment
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            width: { xs: '60%', md: '30%' },
                                            border: '1px solid #fff',
                                            padding: { xs: '10px', md: '15px' },
                                            fontSize: { xs: '12px', md: '12px' },
                                            borderRadius: '8px'
                                        }}
                                    >
                                        Consultation
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                padding: { xs: '10px', md: '20px' },
                                // margin: '0 auto',
                                marginRight: {xs: '10px', md: '100px'},
                                marginLeft: {xs: '10px', md: '130px'},
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography variant="h3" sx={{ fontWeight: 'bold', fontFamily: 'PoppinsBold' }}>Speciality</Typography>
                            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetuer adipiscing Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. elit, sed diam nonummy nibh.</Typography>

                            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} flexDirection={{ xs: 'row', md: 'row' }}>
                                <Typography variant="caption2"
                                    sx={{
                                        border: '1px solid #00B29A',
                                        borderColor: '#00B29A',
                                        backgroundColor: 'rgba(0, 178, 154, 0.2)',
                                        color: '#000',
                                        padding: '8px 20px',
                                        borderRadius: '50px',
                                        display: 'inline-block',
                                        fontWeight: '100',
                                        textAlign: 'center',
                                        margin: '5px',
                                    }}
                                >{doctor.speciality1}
                                </Typography>
                                <Typography variant="caption2"
                                    sx={{
                                        border: '1px solid #00B29A',
                                        borderColor: '#00B29A',
                                        backgroundColor: 'rgba(0, 178, 154, 0.2)',
                                        color: '#000',
                                        padding: '8px 20px',
                                        borderRadius: '50px',
                                        display: 'inline-block',
                                        fontWeight: '100',
                                        textAlign: 'center',
                                        margin: '5px',
                                    }}
                                >{doctor.speciality2}
                                </Typography>
                            </Box>
                        </Box>
<HealthcareProgram />
<Testimonial />
<OurBlogs />
<OurVideos />
</>
    );
};

export default DoctorDetails;

import React, { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography, Button, IconButton, Container } from '@mui/material';
import VideoCard from './VideoCard';  // Import the VideoCard component
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { YOUTUBE_API_KEY } from '../../../utils/Constants';

// Utility function to fetch YouTube video title
// const getYouTubeVideoTitle = async (videoUrl) => {
//   const apiKey = 'YOUTUBE_API_KEY';
//   try {
//     const videoId = videoUrl.split('v=')[1].split('&')[0]; // Extracting after 'v='
//     const apiKey = 'YOUTUBE_API_KEY'; // Replace with your YouTube API key
//     const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;
    
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.items && data.items.length > 0) {
//       return data.items[0].snippet.title;
//     } else {
//       throw new Error('Video not found');
//     }
//   } catch (error) {
//     console.error('Error fetching YouTube video title:', error);
//     return 'Untitled Video'; // Fallback title
//   }
// };

const OurVideos = () => {

    const [showAllTopRatedDoctors, setShowAllTopRatedDoctors] = useState(false);
    const scrollContainerRef = useRef(null);
    // const [videos, setVideos] = useState([]);

    const videos = [
        { imgsrc: '/youtube.png', videoUrl: 'https://www.youtube.com/watch?v=gu0bydw', title: 'React Tutorial', channel: 'Abhinav Mahajan', },
        { imgsrc: '/youtube.png', videoUrl: 'https://www.youtube.com/watch?v=hdIbqOjy3c', title: 'JavaScript Basics', channel: 'How To - life', },
        { imgsrc: '/youtube.png', videoUrl: 'https://www.youtube.com/watch?v=TSWbxs_bE', title: 'CSS Tutorial', channel: 'Health Visor', },
        { imgsrc: '/youtube.png', videoUrl: 'https://www.youtube.com/watch?v=YLttw', title: 'Get Image Data Location', channel: 'Abhinav Mahajan', },
    ];
    // useEffect(() => {
    //   // Function to fetch video details and update the state
    //   const fetchVideoTitles = async () => {
    //     const videoData = [
    //       { imgsrc: '/youtube.png', videoUrl: 'https://www.youtube.com/watch?v=gu0byZydw', title: 'React Tutorial' },
    //       { imgsrc: '/youtube.png', videoUrl: 'https://www.youtube.com/watch?v=hbqOjy3c', title: 'JavaScript Basics' },
    //       { imgsrc: '/youtube.png', videoUrl: 'https://www.youtube.com/watch?v=6HjKDm3s', title: 'CSS Tutorial' },
    //       { imgsrc: '/youtube.png', videoUrl: 'https://www.youtube.com/watch?v=YCKDttw', title: 'Get Image Data Location (Exif)' },
    //     ];
  
    //     const videosWithTitles = await Promise.all(videoData.map(async (video) => {
    //       const title = await getYouTubeVideoTitle(video.videoUrl);
    //       return { ...video, title };
    //     }));
  
    //     setVideos(videosWithTitles);
    //   };
  
    //   fetchVideoTitles();
    // }, []); // Empty dependency array to run this once on mount

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        container.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    };

    const viewAll = () => {
        const container = scrollContainerRef.current;
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    };

    return (
        <Container>
            <Box maxWidth="lg" sx={{ marginX: { xs: 5, sm: 5, md: 5, lg: 5 }, margin: "-70px auto" }}>
                <Grid container sx={{
                    // backgroundColor: '#F9FBFC',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Grid item xs={6} sm={6} md={6}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    // marginX: { xs: 1, sm: 1, md: 1, lg: 1 },
                                    // fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                }}
                            >
                                <span style={{ color: '#10217D', fontFamily: 'PoppinsBold' }}>Our</span>{' '}
                                <span style={{ color: '#527C88', fontFamily: 'PoppinsBold' }}>Videos</span>{' '}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Scrollable Images Box Section */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 5,
                        position: 'relative',
                        width: '100%',
                    }}>
                        {/* Left Arrow Icon */}
                        <IconButton
                            onClick={() => scroll('left')}
                            sx={{
                                position: 'absolute',
                                left: 20,
                                zIndex: 10,
                                opacity: 0.5,
                                ':hover': { opacity: 1, backgroundColor: '#f0f0f0' },
                                display: { xs: 'none', sm: 'none', md: 'flex' },
                            }}
                        >
                            <KeyboardBackspaceIcon />
                        </IconButton>

                        {/* Scrollable Images */}
                        <Box
                            ref={scrollContainerRef}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 5,
                                overflowX: 'auto',
                                paddingX: 0,
                                scrollBehavior: 'smooth',
                                '::-webkit-scrollbar': { display: 'none' },
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            }}
                        >
                            {videos.map((video, index) => (
                            <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-between',
                                        minWidth: 300,
                                        minHeight: 325,
                                        // minHeight: 300,
                                        textAlign: 'left',
                                        border: '1px solid #DBDDE0',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        backgroundColor: '#fff',
                                    }}>
                                    {/* Displaying YouTube video using iframe */}
                                    <iframe
                                        width="100%"
                                        height="180px"
                                        src={`https://www.youtube.com/embed/${video.videoUrl.split('v=')[1]}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{ borderRadius: '8px', marginBottom: '10px', }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            // mt: 3,
                                            textAlign: 'left',
                                            color: '#000',
                                            fontFamily: 'PoppinsBold',
                                            width: '100%',
                                            // marginLeft: '5%',

                                        }}>
                                        {video.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ mt:3, fontFamily: 'PoppinsRegular', }}>
                                        <img src={'/youtube.png'} alt={video.title} style={{ width: '30px', height: '20px', marginRight: '10px', verticalAlign: 'middle' }} />
                                        {video.channel}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Right Arrow Icon */}
                        <IconButton
                            onClick={() => scroll('right')}
                            sx={{
                                position: 'absolute',
                                right: 20,
                                zIndex: 10,
                                opacity: 0.5,
                                transform: 'rotate(180deg)',
                                ':hover': { opacity: 1, backgroundColor: '#f0f0f0' },
                                display: { xs: 'none', sm: 'none', md: 'flex' },
                            }}
                        >
                            <KeyboardBackspaceIcon />
                        </IconButton>
                    </Box>

                    {/* View All Button */}
                    <Box my={4} sx={{ width: '100%', textAlign: 'right' }}>
                        <Button
                            variant="text"
                            onClick={viewAll}
                            sx={{
                                fontSize: '1rem',
                                textDecoration: 'underline',
                                color: '#527C88',
                                // display: 'inline-block',
                                ':hover': { backgroundColor: '#F9FBFC' }
                            }}>
                            {showAllTopRatedDoctors ? 'Show Less' : 'View All'}
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </Container>
    );
};

export default OurVideos;
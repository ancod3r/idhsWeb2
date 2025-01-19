import React, { useEffect,useState } from 'react';
import { Box, Grid, Typography, Select, MenuItem, FormControl, InputLabel, TextField, Stack, Divider } from '@mui/material';
import theme from '../../../theme';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ImageWithTextColumns = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [open, setOpen] = useState(false);
  // Handle the change event of the dropdown
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    // setSelectedOption(option);
  };
  useEffect(() => {
    const closeOnScroll = () => setOpen(false);
    if (open) window.addEventListener('scroll', closeOnScroll, true);
    return () => window.removeEventListener('scroll', closeOnScroll, true);
  }, [open]);
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(/background-image.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: -10
        }}
      >
        <Box
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: 2,
            minHeight: '30vh',
            width: { xs: '90%', sm: '70%' },
            display: 'flex',
            flexDirection: 'column',
            padding: 3,
            justifyContent: 'flex-start',
            [theme.breakpoints.down("sm")]: {
                  minHeight: "54vh",
                  // padding: "0 8px",
                  // margin: "100px auto",
            },
          }}
        >
        <Grid container sx={{ maxWidth: 1200, width: '100%' }}>
            {['Call Doctor', 'Book Appointment', 'Quick Health Checkup'].map((option, index) => (
              <Grid item xs={12} sm={12} md={4} key={index}>
                <Typography
                  variant="h6"
                  // onClick={() => handleSelectChange(option)}
                  onClick={() => { setSelectedOption(option);}}
                  sx={{
                    cursor: 'pointer',
                    // color: selectedOption === option ? '#0288d1' : '#10217D',
                    borderBottom: selectedOption === option ? '4px solid #1BA9B5' : '#10217D',
                    fontFamily: 'PoppinsBold',
                    backgroundColor: '#ffffff',
                    color: '#10217D',
                    padding: 2,
                    borderRadius: 'none',
                    marginBottom: 5,
                    '&:hover': {
                      // backgroundColor: theme.palette.third.alt,
                      // color: '#fff',
                    }
                  }}
                >
                  {option}
                  <Typography variant="body2" color={selectedOption === option ? '#10217D' : '#10217D'} sx={{ opacity: "0.6" }}>
                    {option === 'Call Doctor' && 'Quick Consult via Call'}
                    {option === 'Book Appointment' && 'Long established fact that'}
                    {option === 'Quick Health Checkup' && 'Contrary to popular belief'}
                  </Typography>
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ display: { xs: 'none', sm: 'none', md: 'block' }, borderWidth: '1px', width: '100%', marginTop: -5, marginBottom: 4, borderColor: theme.palette.divider }} />
          {/* Inline Dropdown and TextField */}
          <Box sx={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '10vh',
                width: '100%',
                marginTop: 5
                }}>
            <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row' }}  alignItems="center" justifyContent="center" spacing={{ xs: 2, sm: 2, md: 0 }}>
              {/* Displaying the selected option inline */}
              <TextField
                sx={{
                  minWidth: { xs: '100%', sm: theme.spacing(5), md: theme.spacing(5) },
                  // minWidth: theme.spacing(1),
                  // backgroundColor: 'white',
                  textAlign: 'center',
                  '& .MuiOutlinedInput-root': {
                    textAlign: 'center', // Center text
                    borderColor: "#fff !important",
                  '&:hover': {
                    borderColor: "#10217D", // Change border color on hover
                  },
                  '& fieldset': {
                    // borderColor: "#DBDDE0", // Initial border color
                  },
                  '&:hover fieldset': {
                    // borderColor: "#DBDDE0", // Border color on focus
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: "#6cc0fe", // Border color on hover
                  },
                  },
                  '& input': {
                    textAlign: 'center',
                    '&::placeholder': {
                      color: '#000000',
                        opacity: 1,
                      },
                  },}}
                // InputLabelProps={{ style: { color: theme.palette.text.main }, textAlign: 'center', shrink: false }}
                // label="I need to call for"
                placeholder="I need to call for"
                value={selectedOption}
                onChange={() => {}}
                fullWidth
                InputProps={{
                  readOnly: true, // Make the text field read-only
                  style: {
                    color: "#000000",
                    textAlign: 'center',
                  },
                }}
              />
              <FormControl sx={{ minWidth: theme.spacing(60), width: '100%',
                                '& .Mui-focused .MuiOutlinedInput-notchedOutline': { 
                                      borderColor: 'none !important', 
                                      border: "none !important",
                                  },}}>
                <InputLabel shrink={false}
                sx={{ textAlign: 'center', width: '80%', color: '#fff', '&.Mui-focused': { borderColor: theme.palette.third.default, border: "none", color: theme.palette.background.default,
                  },}}></InputLabel>
                <Select
                  value={selectedOption || ''}
                  onChange={handleSelectChange}
                  displayEmpty
                  // open={open}
                  // onOpen={() => setOpen(true)}
                  // onClose={() => setOpen(false)}
                  open={open}
                  onOpen={() => setOpen(true)}
                  onClose={() => setOpen(false)}
                  MenuProps={{
                        disableScrollLock: true, // Prevents body scroll locking
                        }}
                  // renderValue={() => 'Select the Reason'}
                  renderValue={(selected) => ( <span style={{ color: '#fff' }}>Select the Reason</span>)}
                  sx={{ backgroundColor: theme.palette.third.default, textAlign: 'center', display: 'flex', justifyContent: 'center' }}
                  IconComponent={(props) => ( <KeyboardArrowDownIcon {...props} sx={{ fill: '#fff', marginRight: 5, fontSize: '2rem' }} /> )}>
                  {/* Options */}
                  <MenuItem value="Call Doctor">Quick Consult via Call</MenuItem>
                  <MenuItem value="Book Appointment">Long established fact that</MenuItem>
                  <MenuItem value="Quick Health Checkup">Contrary to popular belief</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ImageWithTextColumns;

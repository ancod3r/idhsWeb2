import React, { useState } from 'react';
import { Container, Grid, Button, Typography, Box, MenuItem, Select, InputLabel, FormControl, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { format } from 'date-fns';
import theme from '../../../theme';

const CustomCalendarHeaderRoot = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 16px',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '2rem',
    alignItems: 'center',
});

function CustomCalendarHeader(props) {
    const { currentMonth, onMonthChange } = props;

    const selectNextMonth = () => onMonthChange(currentMonth.add(1, 'month'), 'left');
    const selectNextYear = () => onMonthChange(currentMonth.add(1, 'year'), 'left');
    const selectPreviousMonth = () =>
        onMonthChange(currentMonth.subtract(1, 'month'), 'right');
    const selectPreviousYear = () =>
        onMonthChange(currentMonth.subtract(1, 'year'), 'right');

return (
    <CustomCalendarHeaderRoot>
    <Stack spacing={1} direction="row">
        <IconButton onClick={selectPreviousYear} title="Previous year">
            <KeyboardDoubleArrowLeftIcon />
        </IconButton>
        <IconButton onClick={selectPreviousMonth} title="Previous month">
            <ChevronLeft />
        </IconButton>
    </Stack>
        <Typography variant="body2">{currentMonth.format('MMMM YYYY')}</Typography>
        <Stack spacing={1} direction="row">
        <IconButton onClick={selectNextMonth} title="Next month">
            <ChevronRight />
        </IconButton>
        <IconButton onClick={selectNextYear} title="Next year">
            <KeyboardDoubleArrowRightIcon />
        </IconButton>
        </Stack>
    </CustomCalendarHeaderRoot>
);
}

const TimeSlotBooking = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    ];

    const handleDateChange = (date) => {
    setSelectedDate(date);
    };

    const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
    };

    const handleSubmit = () => {
    if (!selectedDate || !selectedTimeSlot) {
        alert('Please select a date and a time slot!');
    } else {
        alert(`Appointment confirmed for ${format(selectedDate, 'MMMM dd, yyyy')} at ${selectedTimeSlot}`);
    }
    };

return (
    <Container maxWidth="sm">
        <Box sx={{ marginTop: 0 }}>
        <Typography variant="h6" sx={{ float: 'right', marginTop: -5 }}>
            Select a Date and Time Slot
          {/* Slot/Appointment Booking */}
        </Typography>

        {/* Custom Calendar */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
            sx={{ fontSize: '30px', float: 'right' }}
            value={selectedDate}
            onChange={handleDateChange}
            slots={{ calendarHeader: CustomCalendarHeader }}
            />
        </LocalizationProvider>

        <Grid container spacing={3} sx={{ marginTop: 0 }}>
          {/* Time Slot Selection */}
            <Grid item xs={12}>
            <FormControl sx={{ marginTop: -5, width: '50%', float: 'right' }}>
                <InputLabel
                InputLabelProps={{ style: { color: '#1BA9B5' } }}
                sx={{ textAlign: 'center', width: '50%', color: '#1BA9B5', '&.Mui-focused': { borderColor: theme.palette.third.default, border: "none", color: theme.palette.background.default,
                    },}}>Time Slot</InputLabel>
                <Select
                value={selectedTimeSlot}
                onChange={handleTimeSlotChange}
                label="Time Slot"
                >
                {timeSlots.map((slot, index) => (
                    <MenuItem key={index} value={slot}>
                    {slot}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            </Grid>
        </Grid>

        {/* Submit Button */}
        <Box sx={{ marginTop: 3 }}>
            <Button variant="contained" color="secondary" sx={{ color: 'white', width: '50%', float: 'right' }} fullWidth onClick={handleSubmit}>
            Book Appointment
            </Button>
        </Box>
        </Box>
    </Container>
);
};

export default TimeSlotBooking;

// import React, { useState } from "react";
// import { Container, Grid, Button, Typography, Box, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { addDays, format } from "date-fns";

// const TimeSlotBooking = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

//   const timeSlots = [
//     "9:00 AM - 10:00 AM",
//     "10:00 AM - 11:00 AM",
//     "11:00 AM - 12:00 PM",
//     "12:00 PM - 1:00 PM",
//     "2:00 PM - 3:00 PM",
//     "3:00 PM - 4:00 PM",
//   ];

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTimeSlotChange = (event) => {
//     setSelectedTimeSlot(event.target.value);
//   };

//   const handleSubmit = () => {
//     if (!selectedDate || !selectedTimeSlot) {
//       alert("Please select a date and a time slot!");
//     } else {
//       alert(`Appointment confirmed for ${format(selectedDate, "MMMM dd, yyyy")} at ${selectedTimeSlot}`);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ marginTop: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           Slot/Appointment Booking
//         </Typography>

//         {/* Calendar */}
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           inline
//           minDate={new Date()}
//           dateFormat="MMMM dd, yyyy"
//         />

//         <Grid container spacing={3} sx={{ marginTop: 3 }}>
//           {/* Time Slot Selection */}
//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <InputLabel>Time Slot</InputLabel>
//               <Select
//                 value={selectedTimeSlot}
//                 onChange={handleTimeSlotChange}
//                 label="Time Slot"
//               >
//                 {timeSlots.map((slot, index) => (
//                   <MenuItem key={index} value={slot}>
//                     {slot}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>

//         {/* Submit Button */}
//         <Box sx={{ marginTop: 3 }}>
//           <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
//             Book Appointment
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default TimeSlotBooking;

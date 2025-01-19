import React, { useState, useCallback } from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import theme from "../../../theme";
// import PropTypes from "prop-types";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState(""); // State to store the input value

    // Debounce hook to limit the rate of API calls
    const debounce = (func, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
      };
    };
  

    // Function to fetch data from API and filter based on input value
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  const fetchData = useCallback(
    debounce((value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          // Using optional chaining to safely access user.name
          return value && user?.name?.toLowerCase().includes(value.toLowerCase());
        });
        setResults(results); // Update the results state in the parent component
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Optionally, you could set an error state here
      });
  }, 500), // Debounce delay
    [setResults] // Dependencies for useCallback
  );
  
  // Function to handle input changes
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value); // Update the input state
    fetchData(value); // Fetch and filter data based on the new input value
  };


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(5),
        margin: "0 auto",
        width: "100%",
        maxWidth: "600px",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search by hospital..."
        value={input}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: theme.palette.primary.main }} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: theme.shape.borderRadiusSmall,
            boxShadow: "0 0 10px #7258BC",
            // boxShadow: {
            //   xs: 'none', // Remove boxShadow for small screens
            //   sm: '0 0 10px #7258BC', // Apply boxShadow for larger screens
            // },
            backgroundColor: "white",
            "& fieldset": {
              borderColor: "transparent",
            },
          },
          "& .MuiOutlinedInput-input": {
            padding: theme.spacing(2.5),
          },
        }}
      />
    </Box>
  );
};

// Prop validation
// SearchBar.propTypes = {
//   setResults: PropTypes.func.isRequired,
// };

export default SearchBar;


// import React, { useEffect } from "react";
// import { Box } from "@mui/material";
// import theme from "../../../theme";

// const SearchBar = () => {
//   useEffect(() => {
//     // Inject the Google CSE script
//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://cse.google.com/cse.js?cx=9515e8dd8c35c4a23";
//     document.body.appendChild(script);

//     // Clean up the script when the component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: theme.spacing(2),
//         margin: "0 auto",
//         width: "100%",
//         maxWidth: "600px",
//       }}
//     >
//       {/* Google CSE Search Element */}
//       <div className="gcse-search"></div>
//     </Box>
//   );
// };

// export default SearchBar;




// EXAMPLE
// import React, { useState, useEffect } from 'react';

// // Sample data array with users' names and emails
// const data = [
//   { "name": "Rstuv", "email": "rstuv@gmail.com" },
//   { "name": "Vxlam", "email": "vxlam@gmail.com" }
// ];

// const SearchBar = () => {
//   // State for the search term entered by the user
//   const [searchTerm, setSearchTerm] = useState('');
  
//   // State for the filtered results that will be displayed
//   const [filteredResults, setFilteredResults] = useState(data);  // Initially show all data

//   // State to hold the debounce timeout ID
//   const [debounceTimeout, setDebounceTimeout] = useState(null);

//   // State to track if the alert has been shown
//   const [alertShown, setAlertShown] = useState(false);

//   // useEffect hook to run when `searchTerm` changes
//   useEffect(() => {
//     // If the search term is empty, reset to original data
//     if (searchTerm === '') {
//       setFilteredResults(data);  // Reset to full list when no search term
//       setAlertShown(false);  // Reset alert state
//       return;
//     }

//     // Clear the previous timeout if there's any (debounce)
//     if (debounceTimeout) {
//       clearTimeout(debounceTimeout);
//     }

//     // Set a new timeout to delay the search action by 500ms
//     const timeout = setTimeout(() => {
//       // Filter the data based on name or email matching the search term
//       const results = data.filter(
//         (user) =>
//           user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           user.email.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//       // If no results found and alert hasn't been shown yet, show alert
//       if (results.length === 0 && !alertShown) {
//         alert('Keyword not found!');
//         setAlertShown(true);  // Mark alert as shown
//       } else {
//         setAlertShown(false);  // Reset the alert state if results are found
//       }

//       // Set the filtered results in the state
//       setFilteredResults(results);
//     }, 500);  // Debounce delay (500ms)

//     // Update the state with the new timeout ID
//     setDebounceTimeout(timeout);

//     // Cleanup the timeout when the component unmounts or the searchTerm changes
//     return () => {
//       if (debounceTimeout) {
//         clearTimeout(debounceTimeout);
//       }
//     };
//   }, [searchTerm]);  // Effect only depends on `searchTerm` to avoid infinite loops

//   // Handle the input change event, updating searchTerm state
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);  // Update search term with user input
//   };

//   return (
//     <div>
//       {/* Input field for user to enter their search query */}
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearch}  // Trigger the handleSearch function on every input change
//         placeholder="Search by Name or Email"
//       />
      
//       {/* Displaying the filtered results */}
//       <ul>
//         {filteredResults.length > 0 ? (
//           // Map through the filtered results and display each user's name and email
//           filteredResults.map((user, index) => (
//             <li key={index}>
//               {user.name} - {user.email}
//             </li>
//           ))
//         ) : (
//           // If no results are found, display a message
//           <li>No results found</li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;

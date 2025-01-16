function updateAttendance(data) {
    // Get the Bearer token from localStorage
    const token = localStorage.getItem('token');
    
    if (!token) {
      console.log('Error: No token found in localStorage');
      return;
    }
  
    // Define the URL for the API endpoint
    //const url = 'http://localhost:8000/api/update-attendance';
    const apiUrl = import.meta.env.VITE_API_URL;
  
    // Prepare the request options
    const requestOptions = {
      method: 'POST', // HTTP method
      headers: {
        'Content-Type': 'application/json', // Send data in JSON format
        'Authorization': `Bearer ${token}` // Include the Bearer token
      },
      body: JSON.stringify(data) // Convert the data object to JSON
    };
  
    // Make the API request using the Fetch API
    fetch(`${apiUrl}/update-attendance`, requestOptions)
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        if (data.success) {
          console.log('Attendance updated successfully:', data);
        } else {
          console.error('Error updating attendance:', data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error); // Catch any errors
      });
  }
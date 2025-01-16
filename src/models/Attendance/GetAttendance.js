export const getAttendanceList = async () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
  
      if (!token) {
        throw new Error('Authentication token not found.');
      }
  
      // API endpoint
      //const apiUrl = "http://localhost:8000/api/attendance-list";
      const apiUrl = import.meta.env.VITE_API_URL;
  
      // API call
      const response = await fetch(`${apiUrl}/attendance-list`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });
  
      // Check if the response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response JSON
      const data = await response.json();
  
      // Ensure the data structure contains the expected properties
      if (data && data.success) {
        //console.log('Attendance List:', data.data);
        return data.data; // Return the attendance data directly
      } else {
        throw new Error(data.message || 'Failed to fetch attendance records.');
      }
    } catch (error) {
      // Handle errors
      console.error('Error fetching attendance records:', error.message);
      return null;
    }
  };
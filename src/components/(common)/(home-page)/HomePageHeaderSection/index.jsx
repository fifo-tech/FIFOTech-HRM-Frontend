import { useState, useEffect } from 'react';

const HomePageHeaderSection = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const stats = [
    { label: "Total Employees", value: totalEmployees, bgColor: "bg-indigo-400" },
    { label: "Present", value: 95, bgColor: "bg-blue-400" },
    { label: "Absent", value: 25, bgColor: "bg-indigo-400" },
  ];

  useEffect(() => {
    // Fetch total employees count from API
    const fetchTotalEmployees = async () => {
      try {
        // Assuming you have a method to get the token, replace `yourBearerTokenHere`
        const token = localStorage.getItem('token'); 

        const response = await fetch('http://localhost:8000/api/total-employee', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data.success) {
          setTotalEmployees(data.data.count); // Assuming the response structure has data.count
        } else {
          console.error('Failed to fetch total employees');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTotalEmployees();
  }, []); // Empty dependency array to run once on component mount

  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center rounded-lg p-5 text-white shadow-lg ${stat.bgColor}`}
        >
          <h3 className="text-xl font-semibold">{stat.label}</h3>
          <p className="mt-2 text-4xl font-bold">{stat.value}</p>
          
        </div>
        
      ))}
    </div>
  );
};

export default HomePageHeaderSection;

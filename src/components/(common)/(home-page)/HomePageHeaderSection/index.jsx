const HomePageHeaderSection = () => {
  const stats = [
    { label: "Total Employees", value: 120, bgColor: "bg-indigo-400" },
    { label: "Present", value: 95, bgColor: "bg-blue-400" },
    { label: "Absent", value: 25, bgColor: "bg-indigo-400" },
  ];

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

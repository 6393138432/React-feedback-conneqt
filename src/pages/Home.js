
const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <h1 className="text-2xl font-bold">Welcome, {user?.name || "Guest"}!</h1>
     
    </div>
  );
};

export default Home;

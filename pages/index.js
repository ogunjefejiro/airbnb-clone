import { FilterBar, Meta, Navbar } from "../components";

const Home = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <FilterBar />
      <div className="text-primary text-5xl max-w-[90%] lg:max-w-[90%] mx-auto">hello</div>
    </>
  );
};

export default Home;

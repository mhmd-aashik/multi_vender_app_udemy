import ThemeToggle from "@/components/shared/ThemeToggle";

const HomePage = () => {
  return (
    <div className="p-5">
      <div className="w-100 flex gap-x-5 justify-end">
        <ThemeToggle />
      </div>
      <h1 className=" text-blue-500 font-barlow">Welcome to the HomePage</h1>
    </div>
  );
};

export default HomePage;

import CompanyDetails from "./_components/CompanyDetails";

const SetupOrganisation = () => {
  return (
    <main
      className=" min-h-screen pt-20 px-6 mx-auto flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          'url("https://framerusercontent.com/images/hqWg4zLiKlfr6XakOIYRtdVEQXk.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CompanyDetails />
    </main>
  );
};

export default SetupOrganisation;

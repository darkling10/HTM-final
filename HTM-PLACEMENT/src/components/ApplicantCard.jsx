import companyIcon from "../components/assets/icons/microsoft.svg";
const ApplicantCard = () => {
  return (
    <>
      <div className="flex flex-row justify-between  items-center">
        <div className="flex flex-row text-start gap-5 items-center">
          <div>
            <img className={companyIcon} alt="" />
          </div>
          <div>
            <p className="text-2xl ">Kokum Serbet</p>
            <p className="text-lg">serbet.kokum@gmail.com</p>
          </div>
        </div>
        <div className="bg-blue-600 rounded px-10 py-2 text-white">
          View Profile
        </div>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-xl font-semibold ">
          Why Should You be Hired For This Role?{" "}
        </p>
        <p className="text-slate-400">Answer</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-xl font-semibold text-start">
          Do you have any prior experience in web designing?
          Do you have any prior experience in web designing? If yes, please
          share samples/design portfolio.{" "}
        </p>
        <p className="text-slate-400">Answer</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-xl font-semibold "> </p>
        <p className="text-slate-400">Answer</p>
      </div>
    </>
  );
};

export default ApplicantCard;

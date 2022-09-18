import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/CompanyHeader";
import JobCard from "../components/DashBoard/JobCard";
import { Paragraph, Title, SubTitle } from "../components/Typography";
import icon from "../components/DashBoard/icons8-microsoft-96.png";
import { PrimaryButton } from "../components/Buttons";

const UnderReviewButton = ()=>{
    return <p className={"mt-3 w-full bg-yellow-50 text-amber-500 py-2 text-xl rounded-lg"}>Under Review</p>
}
const AccepetedButton = ()=>{
    return <p className={"mt-3 w-full bg-green-50 text-green-700 py-2 text-xl rounded-lg"}>Accepeted</p>
}
const RejectedButton = ()=>{
    return <p className={"mt-3 w-full bg-red-50 text-pink-500 py-2 text-xl rounded-lg"}>Rejected</p>
}


const MyApplications = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(sessionStorage.getItem("userType"));
    if (sessionStorage.getItem("userType") !== "student") {
      navigate("/dashboard");
    }
  }, [navigate]);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="flex flex-col items-center  ">
      <div className="min-h-[10vh]">
        <Header />
      </div>
      <div className="grid gap-4 my-10 grid-cols-2 lg:grid-cols-3 w-3/4 min-h-[90vh]  ">
        {arr.map((ele) => {
          return (
            <div className="w-full flex justify-start items-start flex-col bg-white p-5 rounded-lg">
              <div className="flex mb-2 w-full items-center justify-start">
                <img src={icon} className="w-8 mr-5" alt="profile" />
                <Title>Java Developer</Title>
              </div>
              <SubTitle>Microsoft</SubTitle>
              <Paragraph className="text-left my-2">
                Lorem, ipsum dolor sit amet andrew si istma consectetur
                adipisicing elit. Ipsam, suscipit?
              </Paragraph>
              <p className="w-full text-left text-black font-medium">
                Salary ~ 10,000 - 15,000
              </p>
              <AccepetedButton/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyApplications;

import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Internships",
      location: "Find the best internships to kickstart your career.",
      icon: <IoBookSharp />,
    },
    {
      id: 2,
      title: "Jobs",
      location: "Explore full-time opportunities that suit your skills and interests.",
      
      icon: <BsFillPeopleFill />,
    },
    {
      id: 3,
      title: "Career Guidance",
      location: "Get expert advice to make informed career decisions.",
      
      icon: <GiTeacher />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>Our Features</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { MdFindInPage } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobNest Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Sign up on JobNest by creating a new account. Provide your basic information and set up your profile to get started.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Browse through job listings to find opportunities that match your skills and preferences. Employers can post job openings to find suitable candidates.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply for jobs that interest you with a click of a button. Recruiters can review applications and reach out to potential candidates for interviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
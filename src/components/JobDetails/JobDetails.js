import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobDetailsById } from "../../apis/job";
import styles from "./jobDetails.module.css";
const JobDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [jobDetails, setjobdetails] = useState({});
  const [isLoggedin] = useState(!!localStorage.getItem("token"));
  const [isEditable, setisEditable] = useState(false);
  const isLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  console.log(jobDetails);
  useEffect(() => {
    fetchJobDetails();
  }, []);
  const fetchJobDetails = async () => {
    if (!id) return;
    const result = await getJobDetailsById(id);
    setjobdetails(result.jobDetails);
    setisEditable(result.isEditable);
  };
  return (
    <>
      {jobDetails ? (
        <div className={styles.body}>
          <div className={styles.nav}>
            <p className={styles.navText}>Jobfinder</p>
            <div className={styles.btnGrp}>
              {isLoggedin ? (
                <button onClick={isLogout} className={styles.register}>
                  logout
                </button>
              ) : (
                <>
                  {" "}
                  <button className={styles.login}>Login</button>
                  <button className={styles.register}>Register</button>
                </>
              )}
            </div>
          </div>
          <div className={styles.container}>
            <p className={styles.containerText}>{jobDetails?.companyName}</p>
          </div>
          <div className={styles.containerBottom}>
            <div className={styles.preHeading}>
              <p className={styles.lightText}>{jobDetails.jobType}</p>
            </div>
            <div className={styles.heading}>
              <div>
                <p className={styles.boldText}>{jobDetails.title}</p>
                <p className={styles.locationText}>{jobDetails.location}</p>
              </div>
            </div>
            <div>
              {isLoggedin && isEditable && (
                <button
                  onClick={() => {
                    navigate("/job-post", {
                      state: {
                        jobDetails: jobDetails,
                        edit: true,
                      },
                    });
                  }}
                  className={styles.edit}
                >
                  Edit Job
                </button>
              )}
            </div>
            <div className={styles.perks}>
              <div>
                <p className={styles.lightText}>Stipend</p>
                <p className={styles.lightText}>{jobDetails.salary}</p>
              </div>
              <div>
                <p className={styles.lightText}>Duration</p>
                <p className={styles.lightText}>6 Months</p>
              </div>
            </div>
            <div className={styles.info}>
              <h2>About Company</h2>
              <p className={styles.lightText}>{jobDetails.about}</p>
            </div>
            <div className={styles.info}>
              <h2>Skill(s) Required</h2>
              {jobDetails?.skills?.map((skill) => {
                return (
                  <p className={styles.skill} key={skill}>
                    {skill}
                  </p>
                );
              })}
            </div>
            <div className={styles.info}>
              <h2>About the job/internship</h2>
              <p className={styles.lightText}>{jobDetails.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default JobDetails;

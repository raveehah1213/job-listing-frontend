import React from "react";
import JobPost from "../../components/JobPost/JobPost";
import JobImage from "../../assets/images/job.png";

export default function JobDetailsPage() {
  return (
    <div style={{ display: "flex" }}>
      <JobPost />
      <img
        style={{ maxHeight: "100vh", width: "50vw" }}
        src={JobImage}
        alt=""
      />
    </div>
  );
}

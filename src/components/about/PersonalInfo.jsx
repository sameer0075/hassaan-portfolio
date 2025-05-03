import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Hassaan" },
  { meta: "last name", metaInfo: "Arshad" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Pakistani" },
  // { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "United Kingdom" },
  { meta: "phone", metaInfo: "+44(0)7572782833" },
  { meta: "Email", metaInfo: "hassaanwain123@gmail.com" },
  { meta: "Language", metaInfo: "English, Urdu" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;

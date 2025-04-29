import React from "react";

const educationContent = [{
    year: "September 2023 - Present",
    degree: "MS Computer Science for Games",
    institute: "University of Hull, Hull",
    details: []
},{
    year: "2020",
    degree: "Bachelors in Computer Sciences",
    institute: "FAST NUCES Lahore",
    details: ["- Object-Oriented Programming", "- Object-Oriented Analysis and Designing", "- Data Structures", "- Design and Analysis of Algorithms", "- Database Systems", "- Computer Vision", "- Information Retrieval"]
},];

const Education = () => {
    return (<ul>
        {educationContent.map((val, i) => (<li key={i}>
            <div className="icon">
                <i className="fa fa-briefcase"></i>
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
                {val.degree}
                <span className="place open-sans-font">{val.institute}</span>
            </h5>
            {val.details.map(value => <p className="open-sans-font">{value}</p>)}
        </li>))}
    </ul>);
};

export default Education;

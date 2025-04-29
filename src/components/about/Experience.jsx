import React from "react";

const experienceContent = [{
    year: "   November 2020 - Present",
    position: " Game Developer",
    companyName: "Tintash",
    details: ["– Design and development of hyper casual mobile games and metaverse PC games.", "– Working on bug-fixes and improvements of multiple games", "– Interviewing candidates for Games Team", "– Complex 3D game mechanics using Unity Physics engine and vecor maths", "– Writing clean, efficient, and maintainable code", "– Finding bugs, inspecting, and fixing them", "– Code Refactoring", "– IAPs integration for mile games","- Third party plugins Integration", "- Organizing inhouse events with the engagements committee."]

},
{
    year: "   September 2019 - June 2020",
    position: "Teaching Assistant",
    companyName: "FAST NUCES",
    details: ["– I worked as a teaching assistant for 2 courses, Programming Fundamentals and Computer Organization and Assembly Language."]

}];

const Experience = () => {
    return (<ul>
        {experienceContent.map((val, i) => (<li key={i}>
            <div className="icon">
                <i className="fa fa-briefcase"></i>
            </div>
            <span className="time open-sans-font text-uppercase">{val.year}</span>
            <h5 className="poppins-font text-uppercase">
                {val.position}
                <span className="place open-sans-font">{val.companyName}</span>
            </h5>
            {val.details.map(value => <p className="open-sans-font">{value}</p>)}
        </li>))}
    </ul>);
};

export default Experience;

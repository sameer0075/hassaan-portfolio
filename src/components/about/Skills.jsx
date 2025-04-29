import React from "react";
import {DiFirebase, DiJavascript, DiMongodb, DiNodejs, DiReact, DiUnitySmall} from 'react-icons/di';
import {FaAws} from 'react-icons/fa';
import {AiOutlineConsoleSql} from 'react-icons/ai';
import {SiCsharp} from 'react-icons/si';
import {FiCode, FiFileText, FiCoffee} from 'react-icons/fi';
import {IoGameControllerOutline, IoLogoDesignernews} from 'react-icons/io5';

const skillsContent = [{
    skillClass: "p100", skillPercent: "90", skillName: "Unity 2D/3D", icon: <DiUnitySmall/>}, {
    skillClass: "p100", skillPercent: "90", skillName: "C#", icon: <SiCsharp/>
}, {skillClass: "p100", skillPercent: "90", skillName: "IAP integrations", icon: <FiCode/>},
{
    skillClass: "p100", skillPercent: "90", skillName: "Animations", icon: <IoGameControllerOutline/>
},
{
    skillClass: "p100", skillPercent: "90", skillName: "Textures", icon: <IoGameControllerOutline/>
},
{
    skillClass: "p100", skillPercent: "90", skillName: "Materials", icon: <IoGameControllerOutline/>
},
{
    skillClass: "p100", skillPercent: "100", skillName: "Unity UI", icon: <IoGameControllerOutline/>
},
{
    skillClass: "p100", skillPercent: "90", skillName: "C++", icon: <FiCode/>
},
{
    skillClass: "p100", skillPercent: "90", skillName: "Phaser", icon: <DiFirebase/>
},
{
    skillClass: "p100", skillPercent: "90", skillName: "Analytics", icon: <FiCode/>
},
{
    skillClass: "p100", skillPercent: "90", skillName: "HTML", icon: <IoGameControllerOutline/>
},
,
    ,{skillClass: "p100", skillPercent: "70", skillName: "CSS", icon: <FiFileText/>}, {
        skillClass: "p100", skillPercent: "90", skillName: "JS", icon: <FiCoffee/>
    },{
        skillClass: "p100", skillPercent: "90", skillName: "Game Design", icon: <IoLogoDesignernews/>
    },

];

const Skills = () => {
    return (<>
        {skillsContent.map((val, i) => (<div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
            <div className={`c100 ${val.skillClass}`}>

                <span className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                    <h1 className="text-danger mt-xl-2 mt-xl-0">
                        <b>{val.icon} </b>
                    </h1>
                </span>
                {/*<div className="slice">*/}
                {/*    <div className="bar"></div>*/}
                {/*    <div className="fill"></div>*/}
                {/*</div>*/}
            </div>


            <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                {val.skillName}
            </h6>
        </div>))}
    </>);
};

export default Skills;

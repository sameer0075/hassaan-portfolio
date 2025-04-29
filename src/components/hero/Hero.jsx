import React, {useState} from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/dark.jpg";
import heroImg1 from "../../assets/img/hero/hassan-img.jpeg";
import heroImgMobile from "../../assets/img/hero/hassan-img.jpeg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
    heroImage: heroImg1,
    heroMobileImage: heroImgMobile,
    heroTitleName: "Hassaan Arshad",
    heroDesignation: "Game Developer",
    heroDescriptions: `I am a Game Developer who is passionate about playing
and developing games and likes to solve problems. I have 3 years of
experience with projects in Unity and Phaser.io.
   `,
    heroBtn: "carrer statistics"
    // portfoliobtn:"my portfolio"
};
// I’m passionate about the impact my skills will bring in the practical world,
//     and firmly believe that I can create innovative solutions to business processes and problems which 
//     will ultimately lead to a better user experience. 
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="row home-details-container align-items-center">
                <div
                    className="col-lg-4 bg position-fixed d-none d-lg-block"
                    style={{
                        backgroundImage: `url(${
                            process.env.PUBLIC_URL + heroContent.heroImage
                        })`,
                    }}
                ></div>
                <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
                    <div>
                        <img
                            src={heroContent.heroMobileImage}
                            className="img-fluid main-img-mobile d-sm-block d-lg-none"
                            alt="hero man"
                        />
                        <h1 className="text-uppercase poppins-font">
                            {heroContent.heroTitleName}.
                            <span>{heroContent.heroDesignation}</span>
                        </h1>
                        <p className="open-sans-font">{heroContent.heroDescriptions}</p>
                        <button className="button" onClick={toggleModalOne}>
                            <span className="button-text">{heroContent.heroBtn}</span>
                            <span className="button-icon fa fa-arrow-right"></span>
                        </button>


                        {/* <button className="button" >
                            <span className="button-text">{heroContent.portfoliobtn}</span>
                            <span className="button-icon fa fa-arrow-right"></span>
                        </button> */}
                    </div>
                </div>
            </div>
            {/* End home-details-container */}

            {/* Start PortfolioModal for About More */}
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark hero"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
            >
                <div>
                    <button className="close-modal" onClick={toggleModalOne}>
                        <img src={cancelImg} alt="close icon"/>
                    </button>
                    {/* End close icon */}

                    <div className="box_inner about">
                        <div data-aos="fade-up" data-aos-duration="1200">
                            <div className="title-section text-left text-sm-center">
                                <h1>
                                    ABOUT <span>ME</span>
                                </h1>
                                <span className="title-bg">Resume</span>
                            </div>
                            {/* End title */}
                            <Index/>
                        </div>
                    </div>
                </div>
                {/* End modal box news */}
            </Modal>
            {/* End  PortfolioModal for About More */}
        </>
    );
};

export default Hero;

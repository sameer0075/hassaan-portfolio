import React, {useState} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import PortfolioData from "./portfolioData";
import PortfolioModal from "./modal/PortfolioModal";

const Portfolio = () => {
    const [getModal, setGetModal] = useState(false);
    const [modalId, setModalId] = useState(1);

    const handleModal = (id) => {
        setGetModal(true);
        setModalId(id);
    };

    const GenericTabPanel = (include_all_item, item_type) => {

        switch (include_all_item) {
            case true:
                return (<TabPanel>
                    <div className="tab-container">
                        {PortfolioData.map((item) => {
                            const {id, type, image, delayAnimation} = item;

                            return (<div
                                key={id}
                                data-aos="fade-right"
                                data-aos-delay={delayAnimation}
                            >
                                <div
                                    className="tab-content"
                                    onClick={() => handleModal(id)}
                                >
                                    <img src={image} alt="image is loading"/>
                                    <h3>
                                        <span className="conent-title">{type}</span>
                                    </h3>
                                </div>
                            </div>);
                        })}
                    </div>
                </TabPanel>)
            case false:
                return (<TabPanel>
                    <div className="tab-container">
                        {PortfolioData.filter((item) => item.tag.includes(item_type)).map((item) => {
                            const {id, type, image, delayAnimation} = item;
                            return (<div
                                key={id}
                                data-aos="fade-right"
                                data-aos-delay={delayAnimation}
                            >
                                <div
                                    className="tab-content"
                                    onClick={() => handleModal(id)}
                                >
                                    <img src={image} alt="image is loading"/>
                                    <h3>
                                        <span className="conent-title">{type}</span>
                                    </h3>
                                </div>
                            </div>);
                        })}
                    </div>
                </TabPanel>)
        }


    }

    return (<>
        <div className="portfolio-main">
            <Tabs>
                <TabList className="portfolio-tab-list" data-aos="fade-up">
                    {/* <Tab>ALL</Tab>
                    <Tab>Unity 2D</Tab>
                    <Tab>Unity 3D</Tab> */}
                    {/* <Tab>VIDEO</Tab> */}
                    {/* <Tab>GRAPHIC DESIGN</Tab> */}
                    {/* <Tab>MOCKUP</Tab> */}
                </TabList>

                <div className="container">

                    {GenericTabPanel(true, null)}
                    {GenericTabPanel(false, "application")}
                    {GenericTabPanel(false, "logo")}
                    {/* {GenericTabPanel(false, "video")}
                    {GenericTabPanel(false, "graphic design")}
                    {GenericTabPanel(false, "mockup")} */}

                </div>
            </Tabs>
        </div>
        {getModal && <PortfolioModal modalId={modalId} setGetModal={setGetModal}/>}{" "}
    </>);
};

export default Portfolio;

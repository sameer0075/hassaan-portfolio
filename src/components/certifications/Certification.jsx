import React, {useState} from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import CertificationData from "./certificationData";
import CertificationModal from "./modal/CertificationModal";

const Certification = () => {
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
                        {CertificationData.map((item) => {
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
                        {CertificationData.filter((item) => item.tag.includes(item_type)).map((item) => {
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
                    <Tab>ALL</Tab>
                    <Tab>Software Engineering</Tab>
                    <Tab>Data Science</Tab>
                    <Tab>Management</Tab>
                    <Tab>Blockchain</Tab>
                    <Tab>Personal Development</Tab>
                </TabList>

                <div className="container">

                    {GenericTabPanel(true, null)}`
                    {GenericTabPanel(false, "software_engineering")}
                    {GenericTabPanel(false, "data_science")}
                    {GenericTabPanel(false, "management")}
                    {GenericTabPanel(false, "blockchain")}
                    {GenericTabPanel(false, "personal_development")}

                </div>
            </Tabs>
        </div>
        {getModal && <CertificationModal modalId={modalId} setGetModal={setGetModal}/>}{" "}
    </>);
};

export default Certification;

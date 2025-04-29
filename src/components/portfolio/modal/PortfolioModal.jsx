import React from "react";

import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FigureModel = ({figure_type, title, images, online_video, local_video_path}) => {

    switch (figure_type) {
        case 'images':
            const slider_settings = {
                dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, draggable: true,
            };
            return (<figure className="modal__img">
                <Slider {...slider_settings}>
                    {images.map((image) => {

                        return (<div>
                            <img src={image} alt={title}/>
                        </div>)
                    })}
                </Slider>
            </figure>)
        case "online_video":
            const {video_source, video_title} = online_video
            return (<figure className="modal__img videocontainer">
                <iframe
                    src={video_source}
                    title={video_title}
                    className="youtube-video"
                    allowFullScreen
                ></iframe>
            </figure>)
        case "local_video":
            return (<figure className="modal__img">

                <video
                    id="video"
                    className="responsive-video"
                    controls
                    poster={images[0]}
                >
                    <source src={local_video_path} type="video/mp4"/>
                </video>
            </figure>)
    }


}

const PortfolioModal = ({modalId, setGetModal}) => {

    return (<div className="modal_portfolio ">
        <div
            className="modal__outside"
            onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
            {PortfolioData.filter((item) => item.id === modalId).map((item) => {
                return (<div key={item.id} data-aos="fade">
                    <h2 className="heading mb-2">{item.type}</h2>
                    <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                            return (<div key={i} className="row open-sans-font">
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i>
                                    Project:{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.project}
                          </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i>
                                    Client :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.client}
                          </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i>
                                    Language :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.language}
                          </span>
                                </div>

                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i>
                                    Tech Tools :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.tech_tools}
                          </span>
                                </div>

                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i>
                                    Platform :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.platform}
                          </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i>
                                    Preview :{" "}
                                    <a
                                        className="preview-link"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        href={details.link}
                                    >
                                        {details.preview}
                                    </a>
                                </div>

                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i>
                                    Associated with :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.associated_with}
                          </span>
                                </div>

                            </div>);
                        })}
                    </div>

                    <div className="modal__scroll open-sans-font">

                        <div>
                            <i className="fa fa-file-text-o pr-2"></i>
                            Project Description:{" "}
                            <span>
                            {item.project_description}
                          </span>
                        </div>

                        <br/>
                        {item.figure_model && FigureModel(item.figure_model)}
                        <br/>

                        <div>


                            <h6><i className="fa fa-file-text-o pr-2"></i>Primary value : </h6>


                            <ul className="modal__my_work">
                                {item.primary_value.map(value => <li className="open-sans-font">{value}</li>)}
                            </ul>

                        </div>

                        <div>


                            <h6><i className="fa fa-file-text-o pr-2"></i>Overall Value I Have Provided : </h6>


                            <ul className="modal__my_work">
                                {item.work_description.map(value => <li className="open-sans-font">{value}</li>)}
                            </ul>

                        </div>


                    </div>

                    <button
                        className="close-modal"
                        onClick={() => setGetModal(false)}
                    >
                        <img src={CloseImg} alt="portfolio project demo"/>
                    </button>
                </div>);
            })}
        </div>
    </div>);

};

export default PortfolioModal;

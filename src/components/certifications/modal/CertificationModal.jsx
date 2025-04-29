import React from "react";

import CloseImg from "../../../assets/img/cancel.svg";
import CertificationData from "../certificationData";
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

const CertificationModal = ({modalId, setGetModal}) => {

    return (<div className="modal_portfolio ">
        <div
            className="modal__outside"
            onClick={() => setGetModal(false)}
        ></div>
        <div></div>
        <div className="modal__content">
            {CertificationData.filter((item) => item.id === modalId).map((item) => {
                return (<div key={item.id} data-aos="fade">
                    <h2 className="heading mb-2">{item.type}</h2>
                    <div className="modal__details">
                        {item.modalDetails.map((details, i) => {
                            return (<div key={i} className="row open-sans-font">
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-file-text-o pr-2"></i>
                                    Name:{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.certificate_name}
                          </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-user-o pr-2"></i>
                                    Issuing Organization :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.issuing_organization}
                          </span>
                                </div>
                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i>
                                    Type :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.certificate_type}
                          </span>
                                </div>

                                {details.tech_skills &&  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-cogs pr-2"></i>
                                    Tech Skills :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.tech_skills}
                          </span>
                                </div>
                                }

                                {details.soft_skills &&  <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-code pr-2"></i>
                                    Soft Skills :{" "}
                                    <span className="ft-wt-600 uppercase">
                            {details.soft_skills}
                          </span>
                                </div>
                                }

                                <div className="col-12 col-sm-6 mb-2">
                                    <i className="fa fa-external-link pr-2"></i>
                                    Link :{" "}
                                    <a
                                        className="preview-link"
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        href={details.link}
                                    >
                                        {details.preview}
                                    </a>
                                </div>


                            </div>);
                        })}
                    </div>

                    <div className="modal__scroll open-sans-font">


                        <br/>
                        {item.figure_model && FigureModel(item.figure_model)}
                        <br/>

                        <div>


                            <h6><i className="fa fa-file-text-o pr-2"></i>Value I Have Gained : </h6>


                            <ul className="modal__my_work">
                                {item.skills_gained.map(value => <li className="open-sans-font">{value}</li>)}
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

export default CertificationModal;

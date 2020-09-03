import React from 'react';
import Slider from 'react-slick';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, position: 'absolute', top: '50%', right: 0, display: "block", padding: '50px', background: "transparent" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, position: 'absolute', top: '50%', zIndex: 1, left: 0, display: "block", padding: '50px', background: "transparent" }}
            onClick={onClick}
        />
    );
}

const SimpleSlider = props => {

    const settings = {
        className: 'carousel__slider',
        dotsClass: 'slick-dots',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
        rows: 1,
        NextDotClassName: 'next',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        dots: true,
        appendDots: dots => (
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    padding: "10px",
                }}
            >
                <ul> {dots} </ul>
            </div>
        ),

    };
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState();
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Slider {...settings}>
                <div className="slickCarousel">
                    <div className="Box">
                        <PlayArrowIcon onClick={() => {
                            setOpen(true)
                            setState('https://www.youtube.com/embed/5IMIdd3iq6A')
                        }} className="playIcon" />
                    </div>
                    <img src="./img/car/bi-mat-thien-duong-15972163589211.jpg" alt="" />
                </div>
                <div className="slickCarousel">
                    <div className="Box">
                        <PlayArrowIcon onClick={() => {
                            setOpen(true)
                            setState('https://www.youtube.com/embed/JKNv2YfrM7Y')
                        }} className="playIcon" />
                    </div>
                    <img src="./img/car/ca-sau-15972253022491.png" alt="" />
                </div>
                <div className="slickCarousel">
                    <div className="Box">
                        <PlayArrowIcon onClick={() => {
                            setOpen(true)
                            setState('https://www.youtube.com/embed/dsOSmQl2yA8')
                        }} className="playIcon" />
                    </div>
                    <img src="./img/car/dinh-thu-oan-khuat-15967340117741.png" alt="" />
                </div>
                <div className="slickCarousel">
                    <div className="Box">
                        <PlayArrowIcon onClick={() => {
                            setOpen(true)
                            setState('https://www.youtube.com/embed/m8y4zigvplE')
                        }} className="playIcon" />
                    </div>
                    <img src="./img/car/du-lich-chet-choc-15961360123636.jpg" alt="" />
                </div>
                <div className="slickCarousel">
                    <div className="Box">
                        <PlayArrowIcon onClick={() => {
                            setOpen(true)
                            setState('https://www.youtube.com/embed/dKrVegVI0Us')
                        }} className="playIcon" />
                    </div>
                    <img src="./img/car/hon-ma-van-si-15967680643765.jpg" alt="" />
                </div>
            </Slider>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 200,
                }}>
                <Fade in={open}>
                    <iframe title="iframe" width="960" height="515" src={state} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Fade>
            </Modal>
        </>
    );
};

export default SimpleSlider;
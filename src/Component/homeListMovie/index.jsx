import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slider from 'react-slick';
import { movieServices } from './../../Services/movie';
import StarIcon from '@material-ui/icons/Star';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Moment from 'react-moment';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import './style.scss';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <NavigateBeforeIcon className={className}
            style={{ ...style, display: "block", fontSize: "100px", color: "grey" }}
            onClick={onClick} />
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <NavigateNextIcon className={className}
            style={{ ...style, display: "block", fontSize: "100px", color: "grey" }}
            onClick={onClick} />
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        // width: '70%',
        margin: '0 auto',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function HomeListMovie() {

    let [listMovie, setListMovie] = useState([]);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + 'T' + time;

    useEffect(() => {
        movieServices.getMovieList().then(res => {
            setListMovie(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const settings = {
        className: 'carousel',
        dotsClass: 'slick',
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        rows: 2,
        infinite: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        dots: false,

    };
    const renderDanhGia = (values) => {
        let content = [];
        if (values > 5) {
            for (let i = 0; i < 5; i++) {
                content.push(<StarIcon style={{ color: "yellow" }} />)
            }
        }
        else {
            for (let i = 0; i < values; i++) {
                content.push(<StarIcon style={{ color: "yellow" }} />)
            }
        }
        return content;
    }
    const renderListMovie = () => {
        return listMovie.map((movie, index) => {
            if (movie.ngayKhoiChieu < dateTime) {
                return (
                    <div key={index} className="card">
                        <div className="imgMovie">
                            <img src={movie.hinhAnh} alt={movie.hinhAnh} />
                            <div className="btn-play-bg">
                                <PlayArrowIcon className="btn-play" onClick={() => {
                                    setOpen(true)
                                    setState(movie.trailer)
                                }} />
                            </div>
                        </div>
                        <div className="hiddenButtonMovie">
                            <div className="nameMovie">
                                <span>{movie.tenPhim}</span>
                            </div>
                            <div className="flexDate">
                                <div className="lauchDate">
                                    <Moment format="YYYY">{movie.ngayKhoiChieu}</Moment>
                                </div>
                                <div className="rate">
                                    <span>{renderDanhGia(movie.danhGia)}</span>
                                </div>
                            </div>
                            <div className="btn-ticket">
                                <Link to={`/moviedetail/${movie.maPhim}`}><button>Mua vé</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    const renderListNewMovie = () => {
        return listMovie.map((movie, index) => {
            if (movie.ngayKhoiChieu > dateTime) {
                return (
                    <div key={index} className="card">
                        <div className="imgMovie">
                            <img src={movie.hinhAnh} alt={movie.hinhAnh} />
                            <div className="btn-play-bg">
                                <PlayArrowIcon className="btn-play" onClick={() => {
                                    setOpen(true)
                                    setState(movie.trailer)
                                }} />
                            </div>
                        </div>
                        <div className="nameMovie">
                            <span>{movie.tenPhim}</span>
                        </div>
                        <div className="lauchDate">
                            <span>
                                <Moment format="YYYY">{movie.ngayKhoiChieu}</Moment>
                            </span>
                        </div>
                        <div className="rate">
                            <span>{renderDanhGia(movie.danhGia)}</span>
                        </div>
                        <div className="btn-ticket">
                            <Link to={`/moviedetail/${movie.maPhim}`}><button>Mua vé</button></Link>
                        </div>
                    </div>
                )
            }
        })
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [state, setState] = useState();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.root}>
                <AppBar className="appBarTabs" position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="full width tabs example"
                    >
                        <Tab disableFocusRipple={true} disableTouchRipple={true} label="Đang chiếu" {...a11yProps(0)} />
                        <Tab disableFocusRipple={true} disableTouchRipple={true} label="Sắp chiếu" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Slider {...settings}>
                        {renderListMovie()}
                    </Slider>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {renderListNewMovie()}
                </TabPanel>

            </div>
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
                    <iframe width="960" height="515" src={state} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Fade>
            </Modal>
        </>
    );

}

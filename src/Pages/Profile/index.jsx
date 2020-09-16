/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import { useState } from 'react';
import { userServices } from '../../Services/user';
import { userLogin } from '../../Config/setting';
import Moment from 'react-moment';
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Fragment>{children}</Fragment>
                </Box>
            )}
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPopup: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '20px',
    }
}));

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Profile() {
    const [value, setValue] = React.useState(0);
    let [listChair, setListChair] = useState([]);
    let [user, setUser] = useState([]);
    let getUserFromLocal = JSON.parse(localStorage.getItem(userLogin)).taiKhoan;
    const nameUser = {
        taiKhoan: getUserFromLocal
    }
    // let maLoaiNguoiDung = JSON.parse(localStorage.getItem(userLogin)).maLoaiNguoiDung;
    // let maNhom = JSON.parse(localStorage.getItem(userLogin)).maNhom;
    useEffect(() => {
        userServices.getUserInfo(nameUser).then(res => {
            setUser(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [nameUser])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // modal
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openInfo, setOpenInfo] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseInfo = () => {
        setOpenInfo(false);
    };
    // const update = () => {
    //     let info = {
    //         "taiKhoan": user.taiKhoan,
    //         "matKhau": user.matKhau,
    //         "email": user.email,
    //         "soDt": user.soDT,
    //         "maNhom": maNhom,
    //         "maLoaiNguoiDung": maLoaiNguoiDung,
    //         "hoTen": user.hoTen
    //     }
    // }
    return (
        <div className="profileTabs">
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Thông tin cá nhân" {...a11yProps(0)} />
                    <Tab label="Lịch sử đặt vé" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="user_info">
                    <div className="info_left">
                        <p>Họ tên: {user.hoTen}</p>
                        <p>Email: {user.email}</p>
                        <p>Số điện thoại: {user.soDT}</p>
                    </div>
                    <div className="info_right">
                        <p>Tài khoản: {user.taiKhoan}</p>
                        <p>Mật khẩu: {user.matKhau}</p>
                        <button className="btn_update" onClick={() => {
                            setOpenInfo(true);
                            // update();
                        }}>Cập nhật</button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <td>Stt</td>
                            <td>Tên phim</td>
                            <td>Ngày đặt</td>
                            <td className="mid">Ghế đã đặt</td>
                            <td className="mid">Thời lượng phim</td>
                            <td>Giá vé</td>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {user.thongTinDatVe?.map((movie, index) => {
                            return <tr className="item" key={index}>
                                <td>{index + 1}</td>
                                <td>{movie.tenPhim}</td>
                                <td><Moment format="DD-MM-YYYY LT">{movie.ngayDat}</Moment></td>
                                <td>
                                    <button className="detail_btn" type="button" onClick={
                                        () => {
                                            setOpen(true);
                                            setListChair(movie.danhSachGhe);
                                        }
                                    }>
                                        Chi tiết
                                    </button>
                                </td>
                                <td className="mid">{movie.thoiLuongPhim} phút</td>
                                <td>{movie.giaVe}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </TabPanel>
            {/* modal history */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Grow in={open}>
                    <div className={classes.modalPopup}>
                        <table style={{ borderSpacing: '0 5px', width: '400px' }}>
                            <thead style={{ backgroundColor: 'rgb(255, 0, 55)' }}>
                                <tr>
                                    <td style={{ padding: '10px 10px' }}>Tên hệ thống rạp</td>
                                    <td style={{ padding: '10px 10px', textAlign: 'center' }}>Tên ghế</td>
                                    <td style={{ padding: '10px 10px', textAlign: 'center' }}>Tên rạp</td>
                                </tr>
                            </thead>
                            <tbody>
                                {listChair.map((chair, index) => {
                                    return <tr key={index}>
                                        <td>{chair.tenHeThongRap}</td>
                                        <td style={{ textAlign: 'center' }}>{chair.tenRap}</td>
                                        <td style={{ textAlign: 'center' }}>{chair.tenGhe}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </Grow>
            </Modal>
            {/* modal update info user */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openInfo}
                onClose={handleCloseInfo}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Slide direction="up" in={openInfo}>
                    <div className={classes.modalPopup}>
                        <form>
                            <h1>Cập nhật thông tin</h1>
                            <label>Họ tên:</label><br></br>
                            <input type="text" name="name" id="name" defaultValue={user.hoTen} /> <br></br>
                            <label>Email:</label><br></br>
                            <input type="email" name="email" id="email" defaultValue={user.email} /> <br></br>
                            <label>Số điện thoại:</label><br></br>
                            <input type="tel" name="sdt" id="sdt" defaultValue={user.soDT} /> <br></br>
                            <label>Tài khoản:</label><br></br>
                            <input type="text" name="user" id="user" defaultValue={user.taiKhoan} /> <br></br>
                            <label>Mật khẩu:</label><br></br>
                            <input type="password" name="password" id="password" defaultValue={user.matKhau} /> <br></br>
                        </form>
                        <button onClick={handleCloseInfo}>Huỷ</button>
                        <button>Cập nhật</button>
                    </div>
                </Slide>
            </Modal>
        </div >
    );
}

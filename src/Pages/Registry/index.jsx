import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { userServices } from '../../Services/user';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'none !important',
        outline:'none',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius:'10px',
    },
    title:{
        textAlign:'center',
        padding:'10px',
    },
    description:{
        textAlign:'center',
    },
    button:{
        padding:'7px 20px',
        borderRadius:'10px',
        backgroundColor:'orangered',
        display:'inline-block',
        fontSize:'1rem',
        margin:' 10px auto 0 0',
        border:'none',
        outline:'none',
        color:'white',
    }
}));
export default function SignUp(props) {
    const handleSubmit = (values) => {
        userServices.signUp(values).then(res => {
            props.history.replace('/login');
        }).catch(err => {
            handleOpen(err.response.data)
        })
    }
    const signUpUserSchema = yup.object().shape({
        taiKhoan: yup.string().required("Không được bỏ trống!"),
        matKhau: yup.string().required("Không được bỏ trống!"),
        hoTen: yup.string().required("Không được bỏ trống!"),
        email: yup.string().required("Không được bỏ trống!").email("emal không hợp lệ!"),
        soDt: yup.string()
            .required("Không được bỏ trống!")
            .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ")
            .max(12, "vui lòng nhập bé hơn 12 số")
            .min(8, "vui lòng nhập lớn hơn 8 số"),
    })
    // custom modal
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [err, setErr] = React.useState([]);
    const handleOpen = (data) => {
        setOpen(true);
        setErr(data);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="bodyRegis">
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                    email: "",
                    soDt: "",
                    maNhom: "GP09",
                    maLoaiNguoiDung: "KhachHang",
                    hoTen: "",
                }}
                validationSchema={signUpUserSchema}
                onSubmit={handleSubmit}>
                {(formikProps) => (
                    <Form className="form">
                        <h1>Đăng ký</h1>
                        <div className="input_box">
                            <Field onChange={formikProps.handleChange} placeholder="Nhập tài khoản" type="text" name="taiKhoan" id="taiKKhoan" />
                            <label htmlFor='taiKKhoan'>Tài khoản</label>
                        </div>
                        <ErrorMessage name="taiKhoan" render={(msg) => <div className="errText">{msg}</div>} />
                        <div className="input_box">
                            <Field onChange={formikProps.handleChange} placeholder="Nhập mật khẩu" type="password" name="matKhau" id="matKKhau" />
                            <label htmlFor="matKKhau">Mật khẩu</label>
                        </div>
                        <ErrorMessage name="matKhau" render={(msg) => <div className="errText">{msg}</div>} />
                        <div className="input_box">
                            <Field onChange={formikProps.handleChange} placeholder="Nhập họ tên" type="text" name="hoTen" id="hoTen" />
                            <label htmlFor="hoTen">Họ tên</label>
                        </div>
                        <ErrorMessage name="hoTen" render={(msg) => <div className="errText">{msg}</div>} />
                        <div className="input_box">
                            <Field onChange={formikProps.handleChange} placeholder="Nhập email" type="email" name="email" id="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <ErrorMessage name="email" render={(msg) => <div className="errText">{msg}</div>} />
                        <div className="input_box">
                            <Field onChange={formikProps.handleChange} placeholder="Nhập số điện thoại" type="tel" name="soDt" id="soDt" />
                            <label htmlFor="soDt">Số điện thoại</label>
                        </div>
                        <ErrorMessage name="soDt" render={(msg) => <div className="errText">{msg}</div>} />

                        <button type="submit">Đăng ký</button>
                        <p><Link className="text_link" to="/login">Đăng nhập</Link> nếu bạn đã có tài khoản</p>
                    </Form>
                )}
            </Formik>
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
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h3 className={classes.title} id="transition-modal-title">Thông báo</h3>
                        <p className={classes.description} id="transition-modal-description">{err}</p>
                        <button className={classes.button} onClick={handleClose}>Nhập lại</button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { token, userLogin } from '../../Config/setting';
import { userServices } from '../../Services/user';
import {LoginAction} from '../../redux/action/user';
export default function Login(props) {

    const dispatch= useDispatch();
    let [state, setState] = useState({
        values: {
            taiKhoan: '',
            matKhau: ''
        },
        errors: {
            taiKhoan: '',
            matKhau: ''
        }
    });
    const handleChangeInput = (event) => {
        let { value, name } = event.target;
        let newValue = {
            ...state.values,
            [name]: value
        }
        let newErr = {
            ...state.errors,
            [name]: value === '' ? 'Không được bỏ trống' : ''
        }
        setState({ values:newValue, errors:newErr})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        userServices.signIn(state.values).then(res=>{
            localStorage.setItem(userLogin,JSON.stringify(res.data));
            localStorage.setItem(token,res.data.accessToken);
            dispatch(LoginAction(res.data.taiKhoan));
            props.history.replace('/');
        }).catch(err=>{
            console.log(err);
            alert('Sai tài khoản hoặc mật khẩu');
        })
    }

    return (
        <div className="bodyLogin">
            <form className="form">
                <h1>Đăng ký</h1>
                <div className="input_box">
                    <input onChange={handleChangeInput} placeholder="Nhập tài khoản" type="text" name="taiKhoan" id="taikhoan" />
                    <label htmlFor='taikhoan'>Tên đăng nhập</label>
                </div>
                <span></span>
                <div className="input_box">
                    <input onChange={handleChangeInput} placeholder="Nhập mật khẩu" type="password" name="matKhau" id="matkhau" />
                    <label htmlFor="matkhau">Mật khẩu</label>
                </div>
                <span></span>
                <button onClick={handleSubmit} >Đăng nhập</button>
                <p><a href="@">Đăng kí</a> nếu chưa có tài khoản</p>
            </form>
        </div>
    )
}

import React from 'react'
import style from './style.module.scss';

export default function index() {
    return (
        <div>
            <form className={style.form} target="submit" >
                <h1>Đăng nhập</h1>
                <div className={style.input_box}>
                    <input placeholder="Nhập tài khoản" type="text" name="taikhoan" id="taikhoan" />
                    <label htmlFor="taikhoan">Tên đăng nhập</label>
                </div>
                <div className={style.input_box}>
                    <input placeholder="Nhập mật khẩu" type="password" name="matkhau" id="matkhau" />
                    <label htmlFor="matkhau">Mật khẩu</label>
                </div>
                <button type="submit">Đăng nhập</button>
                <p><a href="@">Đăng kí</a> nếu chưa có tài khoản</p>
            </form>
        </div>
    )
}

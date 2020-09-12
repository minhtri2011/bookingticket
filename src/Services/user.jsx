import axios from 'axios';
import { domain, token } from '../Config/setting';

export class Services {
    signIn = (user) => {
        return axios({
            url: `${domain}/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: user
        })
    }
    signUp = (user) => {
        return axios({
            url: `${domain}/QuanLyNguoiDung/DangKy`,
            method: 'POST',
            data: user
        })
    }
    buyTicket = (info) => {
        return axios({
            url: `${domain}/QuanLyDatVe/DatVe`,
            method: 'POST',
            data: info,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(token),
            }
        })
    }
    getUserInfo = (account) => {
        return axios({
            url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: 'POST',
            data: account
        })
    }
    updateUser = (user) => {
        return axios({
            url: `${domain}//QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: 'PUT',
            data: user,
            header: {
                'Authorization': 'Bearer ' + localStorage.getItem(token),
            }
        })
    }
}
export const userServices = new Services();
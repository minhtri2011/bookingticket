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
            url: `${domain}//QuanLyNguoiDung/ThongTinTaiKhoan
            `,
            method: 'POST',
            data: account
        })
    }
}
export const userServices = new Services();
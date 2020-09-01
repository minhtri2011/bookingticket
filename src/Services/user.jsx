import axios from 'axios';
import {domain, token,userLogin,groupID} from '../Config/setting';

export class Services{
    signIn=(user)=>{
        return axios({
            url:`${domain}/QuanLyNguoiDung/DangNhap`,
            method:'POST',
            data:user
        })
    }
}
export const userServices = new Services();
import axios from 'axios';
import { domain, groupID } from './../Config/setting'

export class Movie {
    getMovieList = () => {
        return axios({
            method: 'GET',
            url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`
        })
    }
    getCinemaInfo=()=>{
        return axios({
            method:'GET',
            url:`${domain}/QuanLyRap/LayThongTinHeThongRap`
        })
    }
    getCinemaBranch=(id)=>{
        return axios({
            method:'GET',
            url:`${domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
        })
    }
    getMovieDetail=(id)=>{
        return axios({
            method:'GET',
            url:`${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
        })
    }
    getMovieSchedule=()=>{
        return axios({
            method:'GET',
            url:`${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`
        })
    }
}
export const movieServices= new Movie ();
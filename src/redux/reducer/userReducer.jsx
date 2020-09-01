import { DANG_NHAP } from './../types/types';
let taiKhoan = '';
if (localStorage.getItem('userLogin')) {
    taiKhoan = JSON.parse(localStorage.getItem('userLogin')).taiKhoan;
    // console.log("taiKhoan");
}
const initialState = {
    taiKhoan: [taiKhoan]
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_NHAP:
            state.taiKhoan = action.taiKhoan;
            return { ...state }

        default:
            return state
    }
}

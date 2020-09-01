export function Auth() {
    const isLoginPage = window.location.pathname === "/login"
    var isLogin = localStorage.getItem('userLogin');

    if (isLogin) {
        if (isLoginPage) {
            window.location.assign("/");
            // props.history.replace('/');
        }

    }
}
Auth();

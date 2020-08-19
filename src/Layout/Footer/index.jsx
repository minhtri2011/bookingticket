import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#222222',
    },
    text_title: {
        color: '#ffffff',
        fontSize: '12px',
    },
    text_content: {
        color: '#949494',
        fontSize: '12px',
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth='md'>
                <div className="footer">
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <span className={classes.text_title}>TIX</span>
                            <a href="@"><span>FAQ</span></a> <br></br>
                            <a href="@">Brand Guidelines</a>
                        </Grid>
                        <Grid item xs={2}>
                            <a href="@">Thoả thuận sử dụng</a>
                            <a href="@">Chính sách bảo mật</a>
                        </Grid>
                        <Grid item xs={4}>
                            <span className={classes.text_title}>ĐỐI TÁC</span>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.cgv.vn/">
                                    <img src="./img/footer/cgv.png" alt="CGV" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.bhdstar.vn/">
                                    <img src="./img/footer/bhd.png" alt="BHD" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.galaxycine.vn/">
                                    <img src="./img/footer/galaxycine.png" alt="GALAXY" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://cinestar.com.vn/">
                                    <img src="./img/footer/cinestar.png" alt="CINESTAR" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://lottecinemavn.com/LCHS/index.aspx">
                                    <img src="./img/footer/lotte.png" alt="LOTTE" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.megagscinemas.vn/">
                                    <img src="./img/footer/megags.png" alt="MEGAS" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.betacineplex.vn/home.htm">
                                    <img src="./img/footer/bt.jpg" alt="bt" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="http://ddcinema.vn/">
                                    <img src="./img/footer/dongdacinema.png" alt="ddc" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://touchcinema.com/">
                                    <img src="./img/footer/TOUCH.png" alt="TOUCH" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://cinemaxvn.com/">
                                    <img src="./img/footer/cnx.jpg" alt="CNX" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://starlight.vn/">
                                    <img src="./img/footer/STARLIGHT.png" alt="STARLIGHT" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.dcine.vn/">
                                    <img src="./img/footer/dcine.png" alt="DCINE" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://zalopay.vn/">
                                    <img src="./img/footer/zalopay_icon.png" alt="ZALO" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.payoo.vn/">
                                    <img src="./img/footer/payoo.jpg" alt="PAYOO" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.vietcombank.com.vn/">
                                    <img src="./img/footer/VCB.png" alt="VCB" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.agribank.com.vn/">
                                    <img src="./img/footer/AGRIBANK.png" alt="AGRIBANK" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.vietinbank.vn/">
                                    <img src="./img/footer/VIETTINBANK.png" alt="VIETTINBANK" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.indovinabank.com.vn/">
                                    <img src="./img/footer/IVB.png" alt="IVB" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://webv3.123go.vn/">
                                    <img src="./img/footer/123go.png" alt="123go" />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://laban.vn/">
                                    <img src="./img/footer/laban.png" alt="LABAN" />
                                </a>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <span className={classes.text_title}>MOBILE APP</span>
                        </Grid>
                        <Grid item xs={2}>
                            <span className={classes.text_title}>SOCIAL</span>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

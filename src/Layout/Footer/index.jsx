import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth='md'>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <span className={classes.text_title}>TIX</span>
                            <a href="">FAQ</a> <br></br>
                            <a href="">Brand Guidelines</a>
                        </Grid>
                        <Grid item xs={2}>
                            <a href="">Thoả thuận sử dụng</a>
                            <a href="">Chính sách bảo mật</a>
                        </Grid>
                        <Grid item xs={4}>
                        <span className={classes.text_title}>ĐỐI TÁC</span>
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

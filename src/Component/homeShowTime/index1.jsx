import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { movieServices } from '../../Services/movie';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    index2: PropTypes.any.isRequired,
    value2: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
function a11yProps2(index2) {
    return {
        id: `vertical-tab-${index2}`,
        'aria-controls': `vertical-tabpanel-${index2}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        // display: 'flex',
        // height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // setValue2(newValue);
    };
    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };

    let [movie, setMovie] = useState([]);
    useEffect(() => {
        movieServices.getMovieSchedule().then(res => {
            console.log(res.data);
            setMovie(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        {movie.map((cinema, index) => {
                            return <Tab label={cinema.tenHeThongRap} {...a11yProps(index)} />
                        })}
                    </Tabs>
                </Grid>
                <Grid item xs={5}>
                    {movie.map((cinema, index) => {
                        return (
                            <TabPanel value={value} index={index}>
                                <div key={index}>
                                    <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value2}
                                        onChange={handleChange2}
                                        aria-label="Vertical tabs 2 example"
                                        className={classes.tabs}
                                    >
                                        {cinema.lstCumRap.map((branch, index) => {
                                            return <Tab label={branch.tenCumRap} {...a11yProps(index)} />
                                        })}
                                    </Tabs>
                                </div>
                            </TabPanel>
                        )
                    })}
                </Grid>
                <Grid item xs={4}>
                    {movie.map((cinema, index) => {
                        return cinema.lstCumRap.map((branch, index) => {
                            return <TabPanel key={index} value={value2} index={index}>
                                {branch.danhSachPhim.map((listMovie, index) => {
                                    return <div>{listMovie.tenPhim}</div>
                                })}
                            </TabPanel>
                        })
                    })}
                </Grid>
            </Grid>
        </div>
    );
}

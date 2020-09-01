import React, { useEffect, useState } from 'react';
import { movieServices } from '../../Services/movie';
import Grid from '@material-ui/core/Grid';
import './style.scss';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';


export default function HomeShowTime() {
    let [movie, setMovie] = useState([]);
    let [idCinema, setIdCinema] = useState();
    useEffect(() => {
        movieServices.getMovieSchedule().then(res => {
            console.log(res.data);
            setMovie(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className="showTime">
            <Tabs
                defaultTab="BHDStar"
                onChange={(tabId) => { }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <TabList>
                            {movie.map((cinema, index) => {
                                return <Tab tabFor={cinema.maHeThongRap} >{cinema.maHeThongRap}</Tab>
                            })}
                        </TabList>
                    </Grid>
                    <Grid item xs={11}>
                        {movie.map((cinema, index) => {
                            return (
                                <TabPanel tabId={cinema.maHeThongRap}>
                                    <Tabs
                                        onChange={(tabId) => { }}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <TabList>
                                                    {cinema.lstCumRap.map((branch, index) => {
                                                        return <Tab key={index} tabFor={branch.maCumRap}>{branch.tenCumRap}</Tab>
                                                    })}
                                                </TabList>
                                            </Grid>
                                            <Grid item xs={6}>
                                                {cinema.lstCumRap.map((branch, index) => {
                                                    return <TabPanel key={index} tabId={branch.maCumRap}>
                                                        {branch.danhSachPhim.map((listMovie, index) => {
                                                            return <div>{listMovie.tenPhim}</div>
                                                        })}
                                                    </TabPanel>
                                                })}
                                            </Grid>
                                        </Grid>
                                    </Tabs>
                                </TabPanel>
                            )
                        })}
                    </Grid>
                </Grid>
            </Tabs>
        </div>
    )
};
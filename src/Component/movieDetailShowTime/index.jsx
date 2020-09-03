import React from 'react'
import { memo } from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';
import './style.scss';

const MovieDetailShowTime = (props) => {
    let { movie } = props;
    return (
        <div className="movieShowTime">
            <Tabs
                onChange={(tabId) => { }}>
                <Grid container spacing={0}>
                    <Grid className="miniLeft" item xs={4}>
                        <TabList>
                            {movie.heThongRapChieu?.map((cinema, index) => {
                                return <Tab key={index} tabFor={cinema.maHeThongRap}>
                                    <div className="btnMovie">
                                        <img className="cumRap__img" src={cinema.logo} />
                                        <p>{cinema.tenHeThongRap}</p>
                                    </div>
                                </Tab>
                            })}
                        </TabList>
                    </Grid>
                    <Grid className="miniRight" item xs={8}>
                        {movie.heThongRapChieu?.map((cinema, index) => {
                            return <TabPanel key={index} tabId={cinema.maHeThongRap}>
                                {cinema.cumRapChieu.map((branch, index) => {
                                    return <div key={index}>
                                        <p>{branch.tenCumRap}</p>
                                        {branch.lichChieuPhim.map((movieInfo, index) => {
                                            return <button className="time"><Link className="timeItem" key={index} to="/"><Moment format="DD/MM-hh:mm A">{movieInfo.ngayChieuGioChieu}</Moment></Link></button>
                                        })}
                                    </div>
                                })}
                            </TabPanel>
                        })}
                    </Grid>
                </Grid>
            </Tabs>
        </div>
    )
}
export default memo(MovieDetailShowTime)
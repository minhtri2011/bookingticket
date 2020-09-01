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
                defaultTab="one"
                onChange={(tabId) => { console.log(tabId) }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TabList>
                            <Tab tabFor="one">Tab 1</Tab>
                            <Tab tabFor="2">Tab 2</Tab>
                            <Tab tabFor="three">Tab 3</Tab>
                        </TabList>
                    </Grid>
                    <Grid item xs={6}>
                        <TabPanel tabId="2">
                            <p>Tab 1 content</p>
                        </TabPanel>
                        <TabPanel tabId="2">
                            <p>Tab 2 content</p>
                        </TabPanel>
                        <TabPanel tabId="three">
                            <p>Tab 3 content</p>
                        </TabPanel>
                    </Grid>
                </Grid>
            </Tabs>
        </div>
    )
};
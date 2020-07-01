import React from 'react';
import { Typography, Grid, Box, Container } from '@material-ui/core';

import styles from './Radar.module.css';
import { Radar } from 'react-chartjs-2';

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Radars = ({ continentData }) => {

    if (!continentData.data) {
        return 'Loading...';
    }
    console.log(continentData);
    console.log(continentData.data);
    console.log(continentData.data[0]);

    // const supObj = Object.keys(continentData.data);
    // const subObj = Object.keys(continentData.data);
    // let continentNames = [[]];
    // subObj.forEach(element => {
    //     continentNames.push(element);
    //     // console.log(element)
    // });

    // console.log(continentNames)

    const bigData = {
        labels: [continentData.data[0].continent, continentData.data[1].continent, continentData.data[2].continent, continentData.data[3].continent, continentData.data[4].continent, continentData.data[5].continent],
        datasets: [
            {
                label: 'Cases',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [continentData.data[0].cases, continentData.data[1].cases, continentData.data[2].cases, continentData.data[3].cases, continentData.data[4].cases, continentData.data[5].cases]
            }, {
                label: 'Recovered',
                backgroundColor: 'rgba(0,181,198,0.2)',
                borderColor: 'rgba(0,181,198,1)',
                pointBackgroundColor: 'rgba(0,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,181,198,1)',
                data: [continentData.data[0].recovered, continentData.data[1].recovered, continentData.data[2].recovered, continentData.data[3].recovered, continentData.data[4].recovered, continentData.data[5].recovered]
            }, {
                label: 'Deaths',
                backgroundColor: 'rgba(179,0,198,0.2)',
                borderColor: 'rgba(179,0,198,1)',
                pointBackgroundColor: 'rgba(179,0,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,0,198,1)',
                data: [continentData.data[0].deaths, continentData.data[1].deaths, continentData.data[2].deaths, continentData.data[3].deaths, continentData.data[4].deaths, continentData.data[5].deaths]
            },
        ]
    };
    const smallData = {
        labels: [continentData.data[0].continent, continentData.data[1].continent, continentData.data[2].continent, continentData.data[3].continent, continentData.data[4].continent, continentData.data[5].continent],
        datasets: [
            {
                label: 'Active',
                backgroundColor: 'rgba(0,0,198,0.2)',
                borderColor: 'rgba(0,0,198,1)',
                pointBackgroundColor: 'rgba(0,0,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,0,198,1)',
                data: [continentData.data[0].active, continentData.data[1].active, continentData.data[2].active, continentData.data[3].active, continentData.data[4].active, continentData.data[5].active]
            }, {
                label: 'Critical',
                backgroundColor: 'rgba(225,0,198,0.2)',
                borderColor: 'rgba(225,0,198,1)',
                pointBackgroundColor: 'rgba(225,0,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(225,0,198,1)',
                data: [continentData.data[0].critical, continentData.data[1].critical, continentData.data[2].critical, continentData.data[3].critical, continentData.data[4].critical, continentData.data[5].critical]
            }, {
                label: 'Tests',
                backgroundColor: 'rgba(225,0,0,0.2)',
                borderColor: 'rgba(225,0,0,1)',
                pointBackgroundColor: 'rgba(225,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(225,0,0,1)',
                data: [continentData.data[0].tests, continentData.data[1].tests, continentData.data[2].tests, continentData.data[3].tests, continentData.data[4].tests, continentData.data[5].tests]
            },
        ]
    };

    return (
        <div className={styles.container}>
            <Typography className={styles.titleContinentStats}>Continent Wise Stats [Updated: {new Date(continentData.data[1].updated).toDateString()}]</Typography>
            <Grid container>
                <Grid item xs={6} className={styles.gridStyling}>
                    <Radar data={bigData} />
                </Grid>
                <Grid item xs={6} className={styles.gridStyling}>
                    <Radar data={smallData} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Radars;
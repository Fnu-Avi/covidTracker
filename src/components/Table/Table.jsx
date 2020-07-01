import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabular from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import CountUp from 'react-countup';
import cx from 'classnames';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Table.module.css';

const Table = ({ countryData }) => {
    console.log(countryData)

    if (!countryData.data) {
        return 'Loading...';
    }
    // console.log(countryData.data.length)
    // console.log(countryData.data[0])
    let ele = countryData.data;
    let array = countryData.data;

    const header = [];
    let obj = Object.keys(array[0]);
    console.log(obj)
    obj.forEach(el => {
        console.log(el)
        if(el != 'updated'){
        header.push(<TableCell className={styles.tableHead}>{el.toUpperCase()}</TableCell>)
        }
    })
    return (
        <div className={styles.container}>
            <Typography className={styles.titleUSStateStats}>US State Stats [Updated: {new Date(ele[0].updated).toDateString()}]</Typography>
            <TableContainer component={Paper}>
                <Tabular borderColor="grey.500" borderRadius={5} stickyHeader size="small" aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {header}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ele.map((row) => (
                            <TableRow key={row}>
                                <TableCell component="th" scope="row">
                                    {row.state}
                                </TableCell>
                                <TableCell align="right" separator="," >{row.cases.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.todayCases.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.deaths.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.todayDeaths.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.active.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.casesPerOneMillion.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.deathsPerOneMillion.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.tests.toLocaleString()}</TableCell>
                                <TableCell align="right">{row.testsPerOneMillion.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Tabular>
            </TableContainer>
        </div >
    )
}

export default Table;
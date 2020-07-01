import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

import Divider from '@material-ui/core/Divider';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }, detailedData: { active, activePerOneMillion, affectedCountries, casesPerOneMillion, critical, criticalPerOneMillion, deathsPerOneMillion, population, recoveredPerOneMillion, tests, testsPerOneMillion, todayCases, todayDeaths, todayRecovered } }) => {


    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Typography className={styles.titleCards}>Highlights [Updated: {new Date(lastUpdate).toDateString()}]</Typography>   
            <div className={styles.cardsSpacing}>
                <Grid className={styles.container} container spacing={4} justify="center">
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected <CountUp start={0} end={casesPerOneMillion} duration={2.5} decimals={2} separator="," prefix="[" suffix="/Million]" /></Typography>
                            <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of cases</Typography>

                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered <CountUp start={0} end={recoveredPerOneMillion} duration={2.5} decimals={2} separator="," prefix="[" suffix="/Million]" /></Typography>
                            <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2.5} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of recoveries</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths <CountUp start={0} end={deathsPerOneMillion} duration={2.5} decimals={2} separator="," prefix="[" suffix="/Million]" /></Typography>
                            <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2.5} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of deaths</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.today)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Today <CountUp start={0} end={((todayCases + todayDeaths + todayRecovered) / population) * 1000000} duration={2.5} decimals={2} separator="," prefix="[" suffix="/Million]" /></Typography>
                            <Typography variant="body2">Cases: <CountUp start={0} end={todayCases} duration={2.5} separator="," /></Typography>
                            <Typography variant="body2">Deaths: <CountUp start={0} end={todayDeaths} duration={2.5} separator="," /></Typography>
                            <Typography variant="body2">Recovered: <CountUp start={0} end={todayRecovered} duration={2.5} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Stats for today</Typography>

                        </CardContent>
                    </Grid>
                </Grid>
            </div>
            <div className={styles.cardsSpacing}>
                <Grid className={styles.container} container spacing={5} justify="center">
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.affected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Active <CountUp start={0} end={activePerOneMillion} duration={2.5} decimals={2} separator="," prefix="[" suffix="/Million]" /></Typography>
                            <Typography variant="h5"><CountUp start={0} end={active} duration={2.5} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of active cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.tests)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Tests <CountUp start={0} end={testsPerOneMillion} duration={2.5} decimals={2} separator="," prefix="[" suffix="/Million]" /></Typography>
                            <Typography variant="h5"><CountUp start={0} end={tests} duration={2.5} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of tests performed</Typography>

                        </CardContent>
                    </Grid>

                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.critical)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Critical <CountUp start={0} end={criticalPerOneMillion} duration={2.5} decimals={2} separator="," prefix="[" suffix="/Million]" /></Typography>
                            <Typography variant="h5"><CountUp start={0} end={critical} duration={2.5} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of critical cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.otherStats)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Other Stats</Typography>
                            <Typography variant="body2">Population: <CountUp start={0} end={population} duration={2.5} separator="," /></Typography>
                            <Typography variant="body2">Countries Afftected: <CountUp start={0} end={affectedCountries} duration={2.5} separator="," /></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>

                        </CardContent>
                    </Grid>
                </Grid>

            </div>
            <Divider className={styles.dividerTag} orientation="vertical" />
        </div>
    )
}

export default Cards;
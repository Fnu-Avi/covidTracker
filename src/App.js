import React from 'react';

import { Cards, Chart, CountryPicker, Table, Maps } from './components';
import styles from './App.module.css';
import { fetchData, fetchDetailedData, fetchCountryData, fetchContinentData } from './api';

import coronaImage from './images/iconCorona.png';

import Particles from 'react-particles-js';
import { Typography } from '@material-ui/core';

import Divider from '@material-ui/core/Divider';

class App extends React.Component{

    state = {
        data: {},
        detailedData: {},
        countryData: {},
        continentData: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        const fetchedDetailedData = await fetchDetailedData()
        const fetchedCountryData = await fetchCountryData()
        const fetchedContinentData = await fetchContinentData()
        // console.log(fetchedContinentData)
        // console.log(fetchedCountryData)

        this.setState({
            data: fetchedData,
            detailedData: fetchedDetailedData,
            countryData: fetchedCountryData,
            continentData: fetchedContinentData,
        })
    }

    handleCountryChange =  async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({ data: fetchedData, country: country });

    }

    render(){
        const { data, detailedData, countryData, continentData, country } = this.state;

        return(
            <div>
                <Particles
                    style={{ position: `fixed`, pointerEvents: `all` }}
                    params={{
                        "particles": {
                            "number": {
                                "value": 30,
                                "density": {
                                    "enable": true,
                                    "value_area": 500
                                  }
                            },
                            "size": {
                                "value": 10
                            },
                            "line_linked": {
                                "color": "#D3D3D3"
                            },
                            "color": {
                                "value": "#00FF00"
                            },
                            "shape": {
                                "type": "image",
                                "image": {
                                    "src": "https://img.icons8.com/bubbles/50/000000/coronavirus.png",
                                    "width": 100,
                                    "height": 100
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />
                {<div className={styles.container}>
                    <Typography className={styles.titleCOVIDTacker} variant="h2">C<img className={styles.image} src={coronaImage} alt="COVID-19" />VID Tracker </Typography>
                    <Divider className={styles.dividerTag}/>
                    <Cards data={data} detailedData={detailedData} />
                    <Maps continentData={continentData} />
                    <Table countryData={countryData} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                </div>}
            </div>
        )
    }
}

export default App;
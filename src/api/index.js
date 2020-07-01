import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const detailedUrl = 'https://disease.sh/v2';


// Fetched data from John Hopkins COVID-19 API with the variable named url

export const fetchData = async (country) => {
    let changableUrl = url;
    
    if(country){
        changableUrl = `${url}/countries/${country}`
    }


    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changableUrl);

        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries }} = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}

// Fetched data from NovelCovid/API COVID-19 API with the variable named detailedUrl

export const fetchDetailedData = async () => {
    try {
        const { data: {active, activePerOneMillion, affectedCountries, casesPerOneMillion, critical, criticalPerOneMillion, deathsPerOneMillion, population, recoveredPerOneMillion, tests, testsPerOneMillion, todayCases, todayDeaths, todayRecovered,} } = await axios.get(`${detailedUrl}/all`);

        return {active, activePerOneMillion, affectedCountries, casesPerOneMillion, critical, criticalPerOneMillion, deathsPerOneMillion, population, recoveredPerOneMillion, tests, testsPerOneMillion, todayCases, todayDeaths, todayRecovered};
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountryData = async () => {
    try {
        const { data } = await axios.get(`${detailedUrl}/states`);

        return { data };
    } catch (error) {
        console.log(error);
    }
}
import axios from "axios"

export const getStations = async () => {
    return await axios.get('https://environment.data.gov.uk/flood-monitoring/id/measures?stationType=TideGauge&_limit=100');
}

export const getStationDetailsById = async (id) => {
    return await axios.get(`https://environment.data.gov.uk/flood-monitoring/id/stations/${id}/readings?today`);
}
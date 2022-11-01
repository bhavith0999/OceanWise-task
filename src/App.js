import React, { useEffect, useState } from 'react'
import DisplayLineChart from './Components/DisplayLineChart';
import Header from './Components/Header'
import { getStationDetailsById, getStations } from './Services/User.service';
import moment from 'moment';

const App = () => {

  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState('');
  const [stationData, setStationData] = useState([]);

  const getStationsData = async () => {
    try {
      const res = await getStations();
      console.log(res)
      setStations(res?.data?.items ?? []);
    } catch (error) {
      console.log(`Error :::: ${error}`)
    }
  }

  const getSelectedStationData = async (id) => {
    try {
      const res = await getStationDetailsById(id);
      setSelectedStation(id);
      setStationData(res?.data?.items?.map(m => ({ name: moment(m?.dateTime).format('hh:mm a'), FL: m?.value })) ?? []);
    } catch (error) {
      console.log(`Error :::: ${error}`)
    }
  }

  // Get stations list on mounting of a component
  useEffect(() => {
    getStationsData();
  }, []);

  return (
    <div className='my-3'>
      <Header />
      <main className='container'>
        <section class="p-5 my-4 bg-light rounded-3 ">
          <div class="container-fluid py-5">
            <h5 class="display-6 fw-bold">All measures from across all the stations (includes
              latest reading).</h5>
            <p class="col-md-8 fs-6">Please select a station to visualize last 24 hours data</p>
            <div className="form-group">
              <select
                className="form-control"
                name="stations"
                value={selectedStation}
                onChange={(e) => getSelectedStationData(e?.target?.value)}
              >
                <option value={''}>Select station</option>
                {stations.map((item, index) => (
                  <option key={index} value={item.stationReference}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>
        <div className='d-flex justify-content-center my-4'>
        {stationData.length > 0 && (
          <DisplayLineChart data={stationData} />
        )}
        </div>


      </main>

    </div>
  )
}

export default App
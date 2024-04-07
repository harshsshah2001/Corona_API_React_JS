import React, { useEffect, useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './component/stateWiseData/stateWise.css'
import '/src/component/stateWiseData/stateWise.css';

const StateWise = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(actualData.statewise);
        setData(actualData.statewise);
    };

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <React.Fragment>
            <div className='container-fluid mt-5'>
                <div className='main-heading'>
                    <h1 className='mb-5 text-center'><span className='font-weight-bold text-primary'>INDIA</span> COVID-19 Dashboard</h1>
                </div>
                <div className="table-responsive">
                    <table className='table table-hover'>
                        <thead className='thread-dark'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((currElem, ind) => {
                                return (
                                    <tr key={ind}>
                                        <th>{currElem.state}</th>
                                        <td>{currElem.confirmed}</td>
                                        <td>{currElem.recovered}</td>
                                        <td  className='deth'>{currElem.deaths}</td>
                                        <td>{currElem.active}</td>
                                        <td>{currElem.lastupdatedtime}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
};

export default StateWise;

import React, { useState } from 'react';
import useGet from '../hooks/useGet';
import '../components/style.css'
import Display from './Display';

function Mainscreen() {


    const [optionValue, setOptionValue] = useState("ASTON MARTIN");
    const [modelData, setModalData] = useState([]);


    const { data } = useGet();
    console.log(data);
    const getAllData = async () => {
        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${optionValue}?format=json`
        const response = await fetch(url);
        console.log(process.env.REACT_APP_API)
        const resJson = await response.json();
        setModalData(resJson.Results);
    }

    // Set Dropdown
    const handleChange = (e) => {
        e.preventDefault();
        setOptionValue(e.target.value);
    }

    return (
        <div className="maincont">
            <div className="selectcont">
                <div className="form_layout">
                    <form >
                        <label className="label">Select Car Makes: </label>
                        <select className="selectbox" onChange={handleChange}>

                            {data.map((name) => {
                                return (
                                    <option className="fonts" value={name.Make_Name}>{name.Make_Name}</option>
                                );
                            })}
                        </select>
                    </form>

                    <button className="button" onClick={getAllData}>Get Models</button>

                </div>

            </div>
            <div>

                {modelData.map((makeName) => {
                    return (
                       <Display modelData={modelData} />
                    );
                })}
            </div>
        </div>
    )
}

export default Mainscreen
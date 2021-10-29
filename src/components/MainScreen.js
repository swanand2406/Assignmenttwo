import React, { useState } from 'react';
import useGet from '../hooks/useGet';
import '../components/style.css'

function Mainscreen() {


    const [optionValue, setOptionValue] = useState("");
    const [modelData, setModalData] = useState([]);


    const { data } = useGet();
    console.log(data);
    const getAllData = async () => {
        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${optionValue}?format=json`
        const response = await fetch(url);
        console.log(response);
        const resJson = await response.json();
        console.log("JSON", resJson.Results);
        console.log("Response in JSON:" + JSON.stringify(resJson));
        setModalData(resJson.Results);
    }

    // Set Dropdown
    const handleChange = (e) => {
        e.preventDefault();

        console.log(e.target.value);
        setOptionValue(e.target.value);
    }

    return (
        <div className="maincont">
            <div className="selectcont">
                <div className="form_layout">
                    <form >
                        <label className="fonts">Select Car Makes: </label>
                        <select onChange={handleChange}>

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
                {/* {modelData.map((makeName) => {
                    return (
                        <div className="model">
                            <p>{makeName.Make_Name}</p>
                        </div>
                    )
                })} */}
                {modelData.map((makeName) => {
                    return (
                        <div>

                            <ul>
                                <li className="w3-panel w3-card">
                                    <h6 > <b>ID:</b> {makeName.Make_ID}</h6>
                                    <h6> <b>Make Name:</b> {makeName.Make_Name}</h6>
                                    <h6> <b>Model Name:</b> {makeName.Model_Name}</h6>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Mainscreen
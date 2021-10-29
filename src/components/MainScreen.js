import React, { useState } from 'react';
import useGet from '../hooks/useGet';

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
        <div>

            <form>
                <label>Select Car Makes: </label>
                <select onChange={handleChange}>

                    {data.map((name) => {
                        return (
                            <option value={name.Make_Name}>{name.Make_Name}</option>
                        );
                    })}
                </select>
            </form>

            <button onClick={getAllData}>GetData</button>

            <div>
                {modelData.map((makeName) => {
                    return (
                        <ul>
                            <li>
                                <h3> ID: {makeName.Make_ID}</h3>
                                <h3> Make Name: {makeName.Make_Name}</h3>
                                <h3> Model Name: {makeName.Model_Name}</h3>
                            </li>
                        </ul>
                    );
                })}
            </div>
        </div>
    )
}

export default Mainscreen

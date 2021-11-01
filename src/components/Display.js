import React, { useState } from 'react';
import useGet from '../hooks/useGet';

function Display({modelData}){

    return(
        <div>
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
    );
}

export default Display;
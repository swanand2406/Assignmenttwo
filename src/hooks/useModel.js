import { useEffect, useState } from "react";
import Axios from 'axios';

function useModel(optionValue) {

    const [modelData, setModalData] = useState([]);     //state for storing makes modesl

    useEffect(() => {

        const getAllData = async () => {
            const response = await Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${optionValue}?format=json`)     //APi endpoint for make models


            
            setModalData(response.Results);     //setting response in state
            


        }
        getAllData();
    }, [])
    return { modelData };
}

export default useModel

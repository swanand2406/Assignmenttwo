import { useEffect, useState } from "react";
import Axios from 'axios';

function useModel(optionValue) {

    const [modelData, setModalData] = useState([]);

    useEffect(() => {

        const getAllData = async () => {
            const response = await Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${optionValue}?format=json`)


            console.log(response);
            setModalData(response.Results);
            //return data;


        }
        getAllData();
    }, [])
    return { modelData };
}

export default useModel

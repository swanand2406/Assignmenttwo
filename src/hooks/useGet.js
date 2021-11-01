import { useEffect, useState } from "react";
import Axios from 'axios';

function useGet() {
    const [data, setData] = useState([]);   //state for storing response

    useEffect(() => {

        const fetchdata = async () => {
            const response = await Axios.get(process.env.REACT_APP_API)  //API endpoint for getting makes of car

            console.log(process.env.REACT_APP_API)
            setData(response.data.Results);     //setting response in state

        }
        fetchdata();
    }, [])
    return { data };
}

export default useGet

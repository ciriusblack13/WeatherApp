import axios, { AxiosResponse } from "axios";

const getData = async (url: string): Promise<any> => {
    try {
        const response: AxiosResponse = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default getData;

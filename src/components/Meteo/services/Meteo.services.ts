import getData from "../../../Network/Network";
import axios from "axios";

const APIkey = 'c3486edb9d20def1ba489f6a737a069f';

export const getWeatherData = async (city: string): Promise<any> => {
  try {
    const response = await getData(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=it&exclude=hourly,daily&appid=${APIkey}`);
  return response;
  } catch (error) {
    console.error('Impossibile recuperare i dati a seguito di un errore:', error);
    throw error;
  }
};

export const getBackgroundImage = async (city: string) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=3&query=${city}&client_id=w6pE6NWbmsohh9w4pvA4hKevkGRJ77k3l-xwIZaEDY0`);
    return response.data.results[0].urls.regular;
  } catch (error) {
    console.error('Errore nel recupero dello sfondo:', error);
    throw error;
  }
};
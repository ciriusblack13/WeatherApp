import { WeatherProps } from "./Meteo.d";


const WEEK_DAY: { [key: number]: string } = {
    1: 'Lun',
    2: 'Mar',
    3: 'Mer',
    4: 'Gio',
    5: 'Ven',
    6: 'Sab',
    0: 'Dom',
};

export const getDtWeather = (list: any[], cityName: string) => {
    const dts = list.map((timestamp) => {
        const { main, weather, dt } = timestamp;
        const currentDate = new Date(dt * 1000);
        const gg = currentDate.getDate() + '/';
        const mm = currentDate.getMonth() + 1 + '/';
        const aaaa = currentDate.getFullYear();
        const dayName = WEEK_DAY[currentDate.getDay()] + ' ';
        const tempMedia = Math.floor((main.temp_max + main.temp_min) / 2);
        const previsioneMeteo: WeatherProps = {
            dt: dt,
            giorno: dayName,
            data: gg + mm + aaaa,
            ora: `${currentDate.getHours()}:00`,
            ilMeteo: weather[0].description,
            temp_Media: tempMedia,
            main: weather[0].main,
            visibility: false,
            open: false,
            name: cityName,
        };
        return previsioneMeteo;
    });
    return dts;
};

export const closeOtherCards = (indexFilteredWeather: number, filteredWeather: WeatherProps[]) => {
    const updatedWeatherList = filteredWeather.map((weather, i) => {
        if (i === indexFilteredWeather) {
            return { ...weather, open: !weather.open };
        } else {
            return { ...weather, open: false };
        }
    });
    return updatedWeatherList;
};

export const changeVisibility = (indexFilteredWeather: number, visibility: number) => {
    if (indexFilteredWeather !== visibility) {
      return indexFilteredWeather;
    } else {
      return visibility;
    }
  };

export const isWeatherListVisible = (indexFilteredWeather: number | undefined) => {
    if(indexFilteredWeather === undefined) return false;
    return true;
};

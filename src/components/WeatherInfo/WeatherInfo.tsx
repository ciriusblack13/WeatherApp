import { InfoCard } from './styledComponent';

interface WeatherInfoProps {
  weather: {
    ora: string;
    ilMeteo: string;
    temp_Media: number;
  };
}

function WeatherInfo({ weather }: WeatherInfoProps) {
  return (
    <InfoCard>
      <p>Ora: {weather.ora}</p>
      <p>Meteo: {weather.ilMeteo}</p>
      <p>Temperatura media: {weather.temp_Media}°</p>
    </InfoCard>
  );
}

export default WeatherInfo;

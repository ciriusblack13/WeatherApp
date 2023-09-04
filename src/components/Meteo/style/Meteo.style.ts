import styled, { css } from "styled-components";

// Meteo
interface BackgroundProps {
  city?: string;
}

// Conteiners 
export const Background = styled.div<BackgroundProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  max-height: auto;
  width: 100%;

  ${(props) =>
    props.city &&
    css`
      background-image: url(${props.city});
    `}
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 720px) {
    flex-direction: column;
  }
`;

export const MeteoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.8);

  @media (min-width:720px) {
    min-width: 700px;
  }
`;

export const SmallContainer = styled.div`
width: 100%;
display: flex;
flex: 2;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 30px;
`;




// Others
export const Allert = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;
`;

export const SearchBar = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  text-align: center;

  @media (min-width: 720px) {
    width: 500px;
    height: 25px;
  }
`;

export const SearchButton = styled.button<{ evidenziato?: boolean }>`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightgray;
  margin: 10px;
  background-color: #004670;
  color: white;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 720px) {
    width: 150px;
    height: 40px;
    font-size: 1.2rem
  }

  ${(props) =>
    props.evidenziato &&
    css`
      background-color: #001c27;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
    `}
`;
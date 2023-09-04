import styled from "styled-components";

export const Widget = styled.div`
display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 20px;
  background: rgba(299, 299, 299, 0.2);
  border: 1px solid #94979c;

  @media (min-width: 720px) {
    width: 550px;
    height: 250px;
  }
`
export const LeftSide = styled.div`
display: flex;
  flex-direction: column;
  align-item: center;
  margin-right: 20px;

  @media (min-width: 720px) {
    justify-content: center;
    margin-right: 0;
  }
`
export const RightSide = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding: 10px;
  margin-left: 20px;

  @media(min-width: 720px) {
    margin: 0 60px 0 0;
  }
`

export const Icon = styled.div`
display: flex;
  justify-content: center;

  svg {
    width: 75px !important;
    height: 100px !important;
    color: white;
    margin: 0 !important;
  }

  @media (min-width: 720px) {
    svg {
      width: 300px !important;
      margin-top: 30px !important;
    }
  }
`
export const City = styled.h5`
font-size: 2em;
  text-align: center;
  margin: 0;
  color: #809abe;
  text-shadow: 1px #707070;

  @media (min-width: 720px) {
    font-size: 2.5em;
  }
`
export const Temperature = styled.h5`
font-size: 3em;
  font-weight: bold;
  text-align: center;
  margin: 0;
  text-shadow: 1px 1px 5px #707070;

  @media (min-width: 720px) {
    font-size: 3.5em;
  }
`
export const Day = styled.h5`
font-size: 2em;
  text-align: center;
  margin: 0;
  color: #809abe;
  text-shadow: 1px black;

  @media (min-width: 720px) {
    font-size: 2.5em;
  }
`
export const Status = styled.h5`
color: #e5e5e5;
  text-align: center;
  margin-top: 0;
  text-shadow: 1px black;

  @media (min-width: 720px) {
    font-size: 1.5em;
    margin-top: 10px;
  }
`

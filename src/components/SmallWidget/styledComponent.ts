import styled from "styled-components";

export const MiniCard = styled.div`
  background: rgba(299, 299, 299, 0.2);
  border: 1px solid #94979c;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 15px;
`
export const Icon = styled.div`
svg {
  width: 40px !important;
  height: 40px !important;
  color: white;
  margin: 0 !important;
}

@media (min-width: 720px) {
  svg {
    width: 100px !important;
  height: 60px !important;
  }
}
`
export const Temperature = styled.h5`
font-size: 1.2em;
  color: #fff;
  margin: 0;

  @media (min-width: 720px) {
    font-size: 1.5em;
  }
`
export const Day = styled.h5`
margin: 0;
  color: #809abe;

  @media (min-width: 720px) {
    font-size: 1.5em;
  }
`

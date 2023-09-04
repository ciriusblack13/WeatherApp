import styled from "styled-components";

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 10px;
  font-weight: bold;
  background: rgba(299, 299, 299, 0.9);
  color: #00343b;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (min-width: 720px) {
    flex-direction: column;
    width: 700px;
    padding: 10px;
  }
`;
import styled from 'styled-components';

export const GlobalWrapper  = styled.div`
  display: flex;
  padding: 20px 70px 10px 20px;
`

export const FilterWrapper = styled.div`
  display: flex;
  flex: 10;
`

export const FilterSelector = styled.select`
  margin-right: 40px;
  padding: 6px 6px;
  border-radius: 5px;
  border: solid #c4c4c4 1px;
`

export const LabelText = styled.h4`
  font-weight: 500;
  margin: 0 30px;
  align-self: center;
`

export const ApplyButton = styled.button`
  padding: 10px 12px;
  background-color: #c0ffa0;
  flex: 1;
  border: solid #137700 1px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 300;

  &:hover {
    box-shadow: 0 0 10px #85ff50;
  }
`

export const HorLine = styled.hr`
  margin-top: 0;
`
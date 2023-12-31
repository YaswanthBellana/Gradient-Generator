import styled from 'styled-components/macro'

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
`

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`

export const Para = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`

export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const Button = styled.button`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 15px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 28px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`

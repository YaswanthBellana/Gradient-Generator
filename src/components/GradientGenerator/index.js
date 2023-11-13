import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  Container1,
  Container2,
  Heading,
  Para,
  GradientDirectionList,
  ColorContainer,
  ColorValue,
  CustomInput,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: ' #8ae323',
    color2: ' #014f7b ',
    activeDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  generateGradient = () => {
    const {color1, color2, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection},${color1},${color2}`,
    })
  }

  onChangeFromColor = event => {
    this.setState({color1: event.target.value})
  }

  onColorInput = event => {
    this.setState({color2: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeDirection: direction})
  }

  render() {
    const {color1, color2, gradientValue, activeDirection} = this.state
    return (
      <Container1 gradientValue={gradientValue} data-testid="gradientGenerator">
        <Container2>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                gradientDirectionDetails={eachItem}
                key={eachItem.directionId}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeDirection === eachItem.value}
              />
            ))}
          </GradientDirectionList>
          <Para>Pick the Colors</Para>
          <ColorContainer>
            <customInputContainer>
              <ColorValue>{color1}</ColorValue>
              <CustomInput
                type="color"
                value={color1}
                onChange={this.onChangeFromColor}
              />
            </customInputContainer>
            <customInputContainer>
              <ColorValue>{color2}</ColorValue>
              <CustomInput
                type="color"
                value={color2}
                onChange={this.onColorInput}
              />
            </customInputContainer>
          </ColorContainer>
          <Button type="button" onClick={this.generateGradient}>
            Generate
          </Button>
        </Container2>
      </Container1>
    )
  }
}

export default GradientGenerator

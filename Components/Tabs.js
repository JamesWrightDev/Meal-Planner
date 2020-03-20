import React, {Component} from "react";
import styled from "styled-components/native";
import { View } from "react-native";

class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0
    };
  }

  handleChangeTab(i) {
    this.setState({
      activeTab: i
    });
  }

  render() {
    const { activeTab } = this.state;
    const { content, labels } = this.props;

    return (
      <View>
        <TabControls>
          {labels.map((item, i) => (
            <TabButton
              active={activeTab === i}
              key={item}
              onPress={() => this.handleChangeTab(i)}
            >
              <TabText active={activeTab === i}>{item}</TabText>
            </TabButton>
          ))}
        </TabControls>
        {content.map((item, i) => {
          return (
            i === activeTab && <TabContainer key={item}>{item()}</TabContainer>
          );
        })}
      </View>
    );
  }
}

const TabControls = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: ${props => props.theme.spacing.cat};
`;

const TabContainer = styled.View``;

const TabButton = styled.TouchableOpacity`
  text-align: center;
  padding: ${props => props.theme.spacing.mouse}
    ${props => props.theme.spacing.cat};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin: 0 ${props => props.theme.spacing.mouse};
  background-color: ${props => (props.active ? "#02C39A" : "transparent")};
`;

const TabText = styled.Text`
  color: ${props => (props.active ? "white" : "#02C39A")};
`;

export default Tabs
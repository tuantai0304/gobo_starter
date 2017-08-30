/**
 * Recipe View Screen
 *  - The individual recipe screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

// Consts and Libs
import { AppStyles } from '@theme/';

// Components
import { Card, Text } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    top: -45,
    right: 0,
  },
});

/* Component ==================================================================== */
class UserCard extends Component {
  static componentName = 'UserCard';

  static propTypes = {
    // image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    onPress: null,

  }

  render = () => {
    const { name } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Card>
          <View style={[AppStyles.paddingBottomSml]}>
            <Text h3>{name}</Text>

          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

/* Export Component ==================================================================== */
export default UserCard;

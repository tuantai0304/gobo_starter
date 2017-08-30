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
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Card, Spacer, Text } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  featuredImage: {
    left: 0,
    right: 0,
    height: AppSizes.screen.height * 0.2,
    resizeMode: 'cover',
  },
});

/* Component ==================================================================== */
class UserListView extends Component {
  static componentName = 'RecipeView';

  static propTypes = {
    recipe: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      image: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.string),
      method: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  }

  render = () => {
    // const { title, body, image, ingredients, method } = this.props.recipe;

    return (
      <ScrollView style={[AppStyles.container]}>

        <Card>
          <Text h2> List View user</Text>
          {/*
            Display user list here
          */}

        </Card>

        <Spacer size={20} />
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default UserListView;

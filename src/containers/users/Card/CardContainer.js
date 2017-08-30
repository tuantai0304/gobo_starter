/**
 * Individual Recipe Card Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Actions
import * as RecipeActions from '@redux/recipes/actions';

// Components
import UserCardRender from './CardView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  // replaceFavourites: RecipeActions.replaceFavourites,
};

/* Component ==================================================================== */
class UserCard extends Component {
  static componentName = 'UserCard';

  static propTypes = {
    user: PropTypes.shape({
      // id: PropTypes.number,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,

  }

  static defaultProps = {
    user: null,
  }

  constructor(props) {
    super(props);
    this.state = { user: props.user };
  }

  componentWillReceiveProps(props) {
    if (props.user) {
      this.setState({ user: props.user });
    }
  }

  /**
    * On Press of Card
    */
  onPressCard = () => {
    // Actions.userView({
    //   name: this.props.user.firstName,
    // });
  }

  render = () => {
    const { user } = this.props;

    return (
      <UserCardRender
        name={user.firstName}
        onPress={this.onPressCard}
      />
    );
  }
}

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(UserCard);

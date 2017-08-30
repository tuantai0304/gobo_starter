/**
 * List of Recipes for a Meal Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as RecipeActions from '@redux/recipes/actions';

// Components
import Loading from '@components/general/Loading';
import UserListingRender from './ListingView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  // users: state.user.users || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getUsers: UserActions.getUsers,
};

/* Component ==================================================================== */
class UserListingContainer extends Component {
  static componentName = 'UserListingContainer';

  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    getUsers: PropTypes.func.isRequired,
  }

  static defaultProps = {
    users: [{
      "q8Pd0LGYjVhooN6tqblse2vIEZ63" : {
        "firstName" : "taik",
        "lastLoggedIn" : 1502241873490,
        "lastName" : "tuan",
        "signedUp" : 1501996469723
      }},
      {"xdElEONGXFaOzbJg7hxRqCwIpaB2" : {
        "firstName" : "tai tuan",
        "lastLoggedIn" : 1501926794549,
        "lastName" : "le",
        "signedUp" : 1501926633195
      }
    }],
  }

  state = {
    loading: false,
    users: [{
      "q8Pd0LGYjVhooN6tqblse2vIEZ63" : {
        "firstName" : "taik",
        "lastLoggedIn" : 1502241873490,
        "lastName" : "tuan",
        "signedUp" : 1501996469723
      }},
      {"xdElEONGXFaOzbJg7hxRqCwIpaB2" : {
        "firstName" : "tai tuan",
        "lastLoggedIn" : 1501926794549,
        "lastName" : "le",
        "signedUp" : 1501926633195
      }
      }],
  }

  componentDidMount = () => this.getUsers(this.props.users);
  // componentWillReceiveProps = props => this.getUsers(props.users);

  /**
    * Pick out recipes that are in the current meal
    * And hide loading state
    */
  getUsers = (allUsers) => {
    // if (allUsers.length > 0) {
    //   const users = allUsers.filter(user =>
    //     user
    //   );
    //
    const users = [{
      "q8Pd0LGYjVhooN6tqblse2vIEZ63" : {
        "firstName" : "taik",
        "lastLoggedIn" : 1502241873490,
        "lastName" : "tuan",
        "signedUp" : 1501996469723
      }},
      {"xdElEONGXFaOzbJg7hxRqCwIpaB2" : {
        "firstName" : "tai tuan",
        "lastLoggedIn" : 1501926794549,
        "lastName" : "le",
        "signedUp" : 1501926633195
      }
    }];

    console.log(users);

    this.setState({
      users,
      loading: false,
    });
    // }
  }

  /**
    * Fetch Data from API
    */
  fetchUsers = () => this.props.getUsers()
    .then(() => this.setState({ error: null, loading: false }))
    .catch(err => this.setState({ error: err.message, loading: false }))

  render = () => {
    if (this.state.loading) return <Loading />;

    return (
      <UserListingRender
        users={this.state.users}
        reFetch={this.fetchUsers}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListingContainer);

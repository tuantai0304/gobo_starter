/**
 * Recipe Listing Screen
 *  - Shows a list of receipes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ListView,
  RefreshControl,
Text
} from 'react-native';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';
import { ErrorMessages } from '@constants/';

// Containers
import UserCard from '@containers/users/Card/CardContainer';

// Components
import Error from '@components/general/Error';

/* Component ==================================================================== */
class UserListing extends Component {
  static componentName = 'UserListing';

  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    reFetch: PropTypes.func,
  };

  static defaultProps = {
    reFetch: null,
  };

  constructor() {
    super();

    this.state = {
      isRefreshing: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    console.log(this.props.users);
  }

  componentWillReceiveProps(props) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(props.users),
      isRefreshing: false,
    });
  }

  /**
    * Refetch Data (Pull to Refresh)
    */
  reFetch = () => {
    if (this.props.reFetch) {
      this.setState({ isRefreshing: true });

      this.props.reFetch()
        .then(() => {
          this.setState({ isRefreshing: false });
        });
    }
  };

  render = () => {
    // const { users } = this.props;
    const { isRefreshing, dataSource } = this.state;

    if (!isRefreshing && (!users || users.length < 1)) {
      return <Error text={ErrorMessages.user404} />;
    }

    return (
      <View style={[AppStyles.container]}>
        <ListView
          initialListSize={5}
          renderRow={user => <UserCard user={user} />}
          dataSource={dataSource}
          automaticallyAdjustContentInsets={false}
          refreshControl={
            this.props.reFetch ?
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={this.reFetch}
                tintColor={AppColors.brand.primary}
              />
            : null
          }
        />
        <Text h2>User list view</Text>
      </View>
    );
  }
}

/* Export Component ==================================================================== */
export default UserListing;

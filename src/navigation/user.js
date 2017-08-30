/**
 * User Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import UserListView from '@containers/users/Listing/ListingView';


/* Routes ==================================================================== */
const scenes = (
  <Scene key={'users'}>
    <Scene
      hideNavBar
      key={'user_list_view'}
      component={ UserListView }
      type={ActionConst.RESET}
      analyticsDesc={'UserListView'}
    />
  </Scene>
);

export default scenes;

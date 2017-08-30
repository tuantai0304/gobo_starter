/**
 * Requests Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import SubmitRequestView from '@containers/requests/SubmitRequestView';


/* Routes ==================================================================== */
const scenes = (
  <Scene key={'requests'} >
    <Scene {...AppConfig.navbarProps} renderLeftButton={() => <NavbarMenuButton />}
      key={'submitRequest'}
      component={SubmitRequestView}
      type={ActionConst.RESET}
      analyticsDesc={'Submit Request'}
    />
  </Scene>
);

export default scenes;

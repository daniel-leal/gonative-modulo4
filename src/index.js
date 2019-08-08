import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CodePush from 'react-native-code-push';
import OneSignal from 'react-native-onesignal';

import Routes from '~/routes';
import store from '~/store';

import Player from '~/components/Player';

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init('f1b75847-edc8-41b9-bb67-1125daf9a18c');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillMount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived = (data) => {};

  onOpened = (notification) => {};

  onIds = (id) => {};

  render() {
    return (
      <Provider store={store}>
        <Routes />
        <Player />
      </Provider>
    );
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);

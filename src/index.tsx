import 'react-native-gesture-handler';
import {StatusBar, SafeAreaView} from 'react-native';
import React, {useEffect, useRef, createContext} from 'react';
import {Settings} from 'react-native-fbsdk-next';

import AppNavigator from './navigation';
import {styles} from './themes';
import Loader from './components/Loader/Loader';
import NoInternet from './components/common/CommonComponent/NoInternet';
import SomethingWrong from './components/common/CommonComponent/SomethingWrong';

interface AppProviderProps {
  children: React.ReactNode;
}

interface LoaderRef {
  start: () => void;
  stop: () => void;
  isLoading: () => boolean;
}

interface InternetRef {
  isConnected: () => void;
  isNotConnected: () => void;
}

interface WrongRef {
  isWrongSomthing: () => void;
  isNotWrongSomthing: () => void;
}

const AppContext = createContext({});

const AppProvider = ({children}: AppProviderProps) => {
  const loader = useRef<LoaderRef>();
  const internet = useRef<InternetRef>();
  const wrong = useRef<WrongRef>();

  useEffect(() => {
    Settings.setAdvertiserTrackingEnabled(true);
  }, []);

  const globalFunc = {
    startLoader: () => loader.current?.start(),
    stopLoader: () => loader.current?.stop(),
    isLoading: () => loader.current?.isLoading(),
    isConnected: () => internet.current?.isConnected(),
    isNotConnected: () => internet.current?.isNotConnected(),
    isWrongSomthing: () => wrong.current?.isWrongSomthing(),
    isNotWrongSomthing: () => wrong.current?.isNotWrongSomthing(),
  };

  return (
    <AppContext.Provider value={{loaderRef: {...globalFunc}}}>
      {children}
      <Loader ref={loader} />
      <NoInternet ref={internet} />
      <SomethingWrong ref={wrong} />
    </AppContext.Provider>
  );
};

export default function App(props: AppProviderProps) {
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar barStyle={'light-content'} />
      <AppProvider {...props}>
        <AppContext.Consumer>
          {({loaderRef}) => {
            global.props = {...loaderRef};
            return <AppNavigator {...loaderRef} />;
          }}
        </AppContext.Consumer>
      </AppProvider>
    </SafeAreaView>
  );
}

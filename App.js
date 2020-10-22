import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import ethers from 'ethers';

const txs = () => {
  return ethers.Wallet.createRandom();
};

const App = () => {
  const [keys, setKeys] = React.useState({});
  React.useEffect(() => {
    setKeys(txs());
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>React</Text>
        <Text>Address: {keys.address}</Text>
        <Text>Private Key {keys.privateKey}</Text>
      </SafeAreaView>
    </>
  );
};

export default App;

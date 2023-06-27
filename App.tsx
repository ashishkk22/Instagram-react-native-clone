import React from 'react';
import {Text, View} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/font';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{color: colors.primary, fontSize: font.size.xxlg}}>
        Hello world
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  );
};

export default App;

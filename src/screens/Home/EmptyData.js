import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from 'constants/Colors';

const EmptyData = () => {
  return (
    <View style={{marginTop: 20}}>
      <ActivityIndicator size="large" color={Colors.primaryColor} />
    </View>
  );
};

export default EmptyData;

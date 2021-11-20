import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors} from 'constants/Colors';

const EmptyData = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={Colors.primaryColor} />
    </View>
  );
};

export default EmptyData;

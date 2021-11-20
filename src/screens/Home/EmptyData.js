import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Center, DefaultText} from 'styles/globalStyledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'constants/Colors';

const EmptyData = () => {
  return (
    <View>
      <ActivityIndicator size="large" color={Colors.primaryColor} />
    </View>
  );
};

export default EmptyData;

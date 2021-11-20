import React from 'react';
import {ScrollView, View} from 'react-native';

const Screen = ({children, position, isScrollable = false}) => {
  const getPosition = () => {
    switch (position) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
      default:
        'flex-start';
    }
  };

  return (
    <>
      {isScrollable ? (
        <ScrollView>
          <View
            style={{
              flex: 1,
              marginHorizontal: '5%',
              justifyContent: getPosition(),
            }}>
            {children}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            marginHorizontal: '5%',
            justifyContent: getPosition(),
          }}>
          {children}
        </View>
      )}
    </>
  );
};

export default Screen;

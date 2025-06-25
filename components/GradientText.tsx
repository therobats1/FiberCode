import React from 'react';
import { Text,View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

export default function GradientText({ text, style }) {
  return (
    <MaskedView
      maskElement={
        <View>
          <Text style={[style, { backgroundColor: 'transparent' }]}>
            {text}
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={['#FFA500', '#FF4500', '#FF0000']} //orange, orange-red, red
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* invisible text to size the gradient */}
        <Text style={[style, { opacity: 0 }]}>
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

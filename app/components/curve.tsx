import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const StackingBezierCurve = ({ 
  width = 300, 
  height = 200, 
  topColor = '#4169E1', 
  bottomColor = '#87CEEB',
  style = {} 
}) => {
  // Calculate curve paths
  const topCurve = `M 0,0 
                    C ${width * 0.3},0 ${width * 0.4},${height * 0.3} ${width * 0.6},${height * 0.4}
                    C ${width * 0.8},${height * 0.5} ${width * 0.9},${height * 0.6} ${width},${height * 0.7}
                    L ${width},0 Z`;

  const bottomCurve = `M ${width} 0 L ${width / 2} 0 A ${width / 2} ${height} 90 0 0 ${width + 1} ${height * 0.45} Z`;

  return (
    <View style={{ width: width, height:height, position: "absolute", right:0 }}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
         <Path
          d={topCurve}
          fill={topColor}
          opacity={0.9}
        />
         <Path
          d={bottomCurve}
          fill={bottomColor}
          opacity={0.8}
        />
      </Svg>
    </View>
  );
};



export default StackingBezierCurve;
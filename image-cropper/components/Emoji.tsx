import { Image, ImageSourcePropType, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue, withSpring,useAnimatedStyle } from 'react-native-reanimated';

type Props={
  source:ImageSourcePropType;
  size:number;
};

export default function Emoji({source,size}:Props){
  const scaled=useSharedValue(size);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap=Gesture.Tap().numberOfTaps(2).onStart(()=>{
    console.log(13);
    if(scaled.value!==size*2)scaled.value*=2;
  });

  const drag=Gesture.Pan().onChange(event=>{
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const imageStyle=useAnimatedStyle(()=>{
    return{
      width:withSpring(scaled.value),
      height:withSpring(scaled.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });
  

  return(
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle,{top:-350}]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image source={source} resizeMode='contain' style={[imageStyle,{width:size,height:size}]} />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}

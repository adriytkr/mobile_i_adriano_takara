import { Image, ImageSourcePropType, View } from "react-native";

type Props={
  source:ImageSourcePropType;
  size:number;
};

export default function Emoji({source,size}:Props){
  return(
    <View style={{top:-350}}>
      <Image source={source} resizeMode='contain' style={{width:size,height:size}} />
    </View>
  );
}

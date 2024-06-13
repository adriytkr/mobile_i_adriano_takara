import {Image, ImageSourcePropType, StyleSheet} from 'react-native';

type Props={
  placeholderImage:ImageSourcePropType,
  pickedImage:string|null,
};

export default function ImageViewer({placeholderImage,pickedImage}:Props){
  return(
    <Image
      source={pickedImage?{uri:pickedImage}:placeholderImage}
      style={styles.image}
    />
  );
}

const styles=StyleSheet.create({
  image:{
    width:320,
    height:440,
    borderRadius:16
  },
});

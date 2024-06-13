import { FlatList, Image, ImageSourcePropType, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props={
  isVisible:boolean;
  onClose:()=>void;
  selectEmoji:(emoji:ImageSourcePropType)=>void;
};

export default function EmojiPicker({isVisible,onClose,selectEmoji}:Props){
  const emojis=[
    require('../assets/assets/images/emoji1.png'),
    require('../assets/assets/images/emoji2.png'),
    require('../assets/assets/images/emoji3.png'),
    require('../assets/assets/images/emoji4.png'),
    require('../assets/assets/images/emoji5.png'),
    require('../assets/assets/images/emoji6.png'),
  ];

  return(
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <FlatList
          data={emojis}
          horizontal
          renderItem={({item,index})=>{
            return(
              <Pressable key={index} onPress={()=>{onClose();selectEmoji(item)}}>
                <Image source={item} style={styles.emoji}/>
              </Pressable>
            );
          }}
        />
      </View>
    </Modal>
  );
}

const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:'25%',
    backgroundColor:'#25292e',
    bottom:0,
    position:'absolute',
  },
  title:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  emoji:{
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

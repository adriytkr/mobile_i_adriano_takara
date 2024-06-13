import { Text, View, StyleSheet, ImageSourcePropType,Platform } from 'react-native';
import {useState,useRef} from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '@/components/ImageViewer';
import EmojiPicker from '@/components/EmojiPicker';
import Emoji from '@/components/Emoji';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

export default function Index() {
  const [pickedImage,setPickedImage]=useState<string|null>(null);
  const [showOptions,setShowOptions]=useState(false);
  const [isModalVisible,setIsModalVisible]=useState(false);
  const [pickedEmoji,setPickedEmoji]=useState<ImageSourcePropType|null>(null);
  const [permission,requestPermission]=MediaLibrary.usePermissions();
  const imageRef=useRef();

  if(!permission)requestPermission();

  const placeholderImage=require('@/assets/assets/images/background-image.png')

  const pickImage=async()=>{
    const result=await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
    });

    if(result.canceled){
      console.log('AAA');
    }else{
      setPickedImage(result.assets[0].uri);
      setShowOptions(true);
    }
  };

  function reset():void{
    setShowOptions(false);
  }

  function addSticker():void{
    setIsModalVisible(true);
  }

  async function saveImage(){
    if(Platform.OS!=='web'){
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
  
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      }
    }else{
      try{
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  }

  function selectEmoji(emoji:ImageSourcePropType):void{
    setPickedEmoji(emoji);
  }

  return (
    <GestureHandlerRootView style={styles.main}>
      <View ref={imageRef} collapsable={false}>
        <ImageViewer
          placeholderImage={placeholderImage}
          pickedImage={pickedImage}
        />
        {pickedEmoji && <Emoji source={pickedEmoji} size={50} />}
      </View>
      {
        showOptions
        ?
          <View style={styles.options}>
            <Button theme='secondary' onPress={reset}>
              <MaterialIcons name='refresh' color='#fff'/>
              <Text>Reset</Text>
            </Button>
            <Button theme='primary' onPress={addSticker}>
              <MaterialIcons name='add'/>
            </Button>
            <Button theme='secondary' onPress={saveImage}>
              <MaterialIcons name='save-alt' color='#fff'/>
              <Text>save</Text>
            </Button>
          </View>
        :
          <View style={styles.footer}>
            <Button theme='primary' onPress={pickImage}>
              <FontAwesome name='picture-o' size={18} color='#000'/>
              <Text style={{marginLeft:8}}>Choose a photo</Text>
            </Button>
            <Button theme='secondary' onPress={()=>setShowOptions(true)}>Use this photo</Button>
          </View>
      }
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={()=>setIsModalVisible(false)}
        selectEmoji={selectEmoji}
      />
    </GestureHandlerRootView>
  );
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#25292e',
    paddingVertical:40
  },
  footer:{
    marginTop:16,
  },
  options:{
    marginTop:16,
    display:'flex',
    flexDirection:'row',
  },
});

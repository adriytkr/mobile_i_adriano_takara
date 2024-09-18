import {View,Image,Text, ImageRequireSource}from 'react-native';
import styles from './style';
import { IVideoProps } from '@/types';

export default function({title,profilePicture,thumbnail,channelName,duration,views,date}:IVideoProps){
  return(
    <View>
      <View>
        <Image style={styles.thumbnail} source={thumbnail}/>
        <Text style={styles.duration}>{duration}</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.profilePicture} source={profilePicture}/>
        <View style={styles.data}>
          <Text style={{color:'#fff',fontWeight:500}}>{title}</Text>
          <View style={styles.metadata}>
            <Text style={{color:'#8c8c8c',fontWeight:500}}>{channelName}</Text>
            <Text style={{color:'#8c8c8c',fontWeight:500}}>{views}</Text>
            <Text style={{color:'#8c8c8c',fontWeight:500}}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

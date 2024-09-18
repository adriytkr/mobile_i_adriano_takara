import { FlatList, Image, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function(){
  const navItems=['television','bell-o','search'];

  return(
    <View style={styles.header}>
      <Image style={styles.logo} source={require('@/assets/private/logo.png')}/>
      <View>
        <FlatList
          horizontal
          contentContainerStyle={{columnGap:20}}
          data={navItems}
          renderItem={({item})=>(
            <Icon name={item} size={24} color="#fff" />
          )}
        >
      </FlatList>
      </View>
    </View>
  );
};

import { FlatList, Text, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

type NavItem={
  label:string;
  icon:string;
};

export default function(){
  const navItems:NavItem[]=[
    {label:'Home',icon:'home'},
    {label:'Shorts',icon:'home'},
    {label:'Subscriptions',icon:'home'},
    {label:'You',icon:'home'},
  ];

  return(
    <View style={styles.footer}>
      {/* {
        navItems.map(navItem=>(
          <View style={styles.navItem}>
            <Icon name={navItem.icon} size={32} color="#fff" />
            <Text style={{color:'#fff'}}>{navItem.label}</Text>
          </View>
        ))
      } */}
      <FlatList
        style={styles.navItems}
        data={navItems}
        numColumns={4}
        renderItem={({item})=>(
          <View style={styles.navItem}>
            <Icon name={item.icon} size={32} color="#fff" />
            <Text style={{color:'#fff'}}>{item.label}</Text>
          </View>
        )}
      >
      </FlatList>
    </View>
  );
};

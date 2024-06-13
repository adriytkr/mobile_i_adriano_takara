import { Pressable, StyleSheet, View } from "react-native";

type Props={
  children:React.ReactNode;
  theme:'primary'|'secondary',
  onPress?:()=>void,
};

export default function Button({children,theme,onPress}:Props){
  if(theme=='primary')
    return(
      <View style={{...styles.container,borderColor:'#ffd33d',borderWidth:4,borderRadius: 18}}>
        <Pressable style={{...styles.pressable,backgroundColor:'#fff'}} onPress={onPress}>
          {children}
        </Pressable>
      </View>
    );

  return(
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={onPress}>
        {children}
      </Pressable>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow:1,
  },
  pressable:{
    paddingHorizontal:24,
    paddingVertical:12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color:'#fff',
  },
})

import { FlatList, ScrollView } from 'react-native';
import Video from '@/components/Video/';
import { IVideoProps } from '@/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Index(){
  const videos:IVideoProps[]=[
    {
      title:'TV Cultura divulga imagens inéditas da cadeirada de Datena em Marçal no debate',
      channelName:'O POVO',
      profilePicture:require('../assets/private/channel1.jpg'),
      thumbnail:require('../assets/private/thumbnail1.png'),
      duration:'1:59',
      views:'161k',
      date:'23 hours ago',
    },
    {
      title:'The "auto" keyword in C++',
      channelName:'The Cherno',
      profilePicture:require('../assets/private/channel2.jpg'),
      thumbnail:require('../assets/private/thumbnail2.png'),
      duration:'17:04',
      views:'203k',
      date:'6 years ago',
    },
    {
      title:'Gukesh D\'s Italian Game smashes Suleymanli',
      channelName:'ChessNetwork',
      profilePicture:require('../assets/private/channel3.jpg'),
      thumbnail:require('../assets/private/thumbnail3.png'),
      duration:'17:02',
      views:'7k',
      date:'17 hours ago',
    },
    {
      title:'100+ Javascript Concepts you Need to Know',
      channelName:'Fireship',
      profilePicture:require('../assets/private/channel4.jpg'),
      thumbnail:require('../assets/private/thumbnail4.png'),
      duration:'12:24',
      views:'2M',
      date:'1 year ago',
    },
  ];

  return (
    <>
      <Header/>
      <ScrollView style={{backgroundColor:'#000'}}>
        <FlatList
          contentContainerStyle={{rowGap:12}}
          data={videos}
          renderItem={({item:video})=>(
            <Video
              title={video.title}
              channelName={video.channelName}
              thumbnail={video.thumbnail}
              profilePicture={video.profilePicture}
              duration={video.duration}
              views={video.views}
              date={video.date}
            />
          )}
        />
      </ScrollView>
      <Footer/>
    </>
  );
}

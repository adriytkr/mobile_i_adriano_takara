import { ImageRequireSource } from 'react-native';

export interface IVideoProps{
  title:string;
  channelName:string;
  thumbnail:ImageRequireSource;
  profilePicture:ImageRequireSource;
  duration:string;
  views:string;
  date:string;
};

import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/Post';

const post1 = {
  id: 'p1',
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  user: {
    id: 'u1',
    username: 'daviddobrik from props',
    imageUri:
      'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA_400x400.jpg',
  },
  description: 'hahahah oh boy @borat',
  songName: 'NF - The search',
  songImage:
    'https://pbs.twimg.com/profile_images/1223706175910211584/tmu8d9fA_400x400.jpg',
  likes: 123,
  comments: 12,
  shares: 44,
};

const Home = () => {
  return (
    <View>
      <Post post={post2} />
    </View>
  );
};

export default Home;

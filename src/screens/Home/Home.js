import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import Header from 'components/Header/Header';
import Screen from 'components/Screen';
import Title from 'components/Title/Title';
import Card from 'components/Card/Card';
import Posts from './Posts';
import {Center, ContainerRow, DefaultText} from 'styles/globalStyledComponents';
import {
  TitleContainer,
  PostsContainer,
  MusicInfoContainer,
  RoundedIconContainer,
  AddMusicContainer,
} from './styledComponents';
import {Colors} from 'constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import api from 'services/api';

const Home = ({navigation}) => {
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const response = await api.get('getposts');
      console.log(response.data.post);
      setPost(response.data.post);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {post.length > 0 && (
        <>
          <Header hasTitle={false} />
          <Screen>
            <TitleContainer>
              <Center>
                <Title title="Olá Flamarion" />
              </Center>
            </TitleContainer>
            <PostsContainer>
              <FlatList
                data={post}
                keyExtractor={item => `${item.id}`}
                renderItem={item => <Posts post={item} />}
              />
            </PostsContainer>
            <AddMusicContainer>
              <RoundedIconContainer
                size={50}
                backgroundColor={Colors.primaryColor}
                onPress={() => {
                  navigation.navigate('SignupMusic');
                }}>
                <Icon name="plus" color="#fff" size={20} />
              </RoundedIconContainer>
            </AddMusicContainer>
          </Screen>
        </>
      )}
    </>
  );
};

export default Home;

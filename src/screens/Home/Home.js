import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Header from 'components/Header/Header';
import Title from 'components/Title/Title';
import Card from 'components/Card/Card';
import Posts from './Posts';
import {Center} from 'styles/globalStyledComponents';
import {
  TitleContainer,
  PostsContainer,
  RoundedIconContainer,
  AddMusicContainer,
} from './styledComponents';
import {Colors} from 'constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import api from 'services/api';
import ListSeparator from 'components/ListSeparator/ListSeparator';

const Home = ({route, navigation}) => {
  const [post, setPost] = useState([]);

  // const {user} = route.params;
  console.log(name);

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
          <>
            <TitleContainer>
              <Center>
                <Title title={`Olá, fff`} />
              </Center>
            </TitleContainer>
            <PostsContainer>
              <FlatList
                data={post}
                keyExtractor={item => `${item.id}`}
                renderItem={item => <Posts post={item} />}
                ItemSeparatorComponent={ListSeparator}
                ListFooterComponent={
                  <View style={{height: 0, marginBottom: 200}} />
                }
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
          </>
        </>
      )}
    </>
  );
};

export default Home;

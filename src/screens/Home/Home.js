import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Header from 'components/Header/Header';
import Title from 'components/Title/Title';
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
import EmptyData from './EmptyData';
import ListSeparator from 'components/ListSeparator/ListSeparator';
import {capitalize} from '@brazilian-utils/brazilian-utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = ({route, navigation}) => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {user} = route.params;

  const getPosts = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('getposts');
      console.log(response.data.post);
      setPost(response.data.post);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const onRefresh = () => {
    setIsLoading(true);
    getPosts();
  };

  return (
    <>
      <Header hasTitle={false} />
      <TitleContainer>
        <Center>
          <Title title={`Olá, ${capitalize(user.nome)}`} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Title title="Sair" color={Colors.primaryColor} />
          </TouchableOpacity>
        </Center>
      </TitleContainer>
      <PostsContainer>
        <FlatList
          data={post}
          keyExtractor={item => `${item.id}`}
          renderItem={item => <Posts post={item} />}
          refreshing={isLoading}
          onRefresh={onRefresh}
          ItemSeparatorComponent={ListSeparator}
          ListEmptyComponent={() => <EmptyData />}
          ListFooterComponent={<View style={{height: 0, marginBottom: 220}} />}
        />
      </PostsContainer>

      <AddMusicContainer>
        <RoundedIconContainer
          size={50}
          backgroundColor={Colors.primaryColor}
          onPress={() => {
            navigation.navigate('SignupMusic', {user: user});
          }}>
          <Icon name="plus" color="#fff" size={20} />
        </RoundedIconContainer>
      </AddMusicContainer>
    </>
  );
};

export default Home;

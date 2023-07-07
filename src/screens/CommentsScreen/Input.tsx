import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import font from '../../theme/font';

const Input = () => {
  const [newComment, setNewComment] = useState('hello');

  const onPost = () => {
    //sending the data to backend
    console.warn('Posting the comment');
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{uri: 'https://avatars.githubusercontent.com/u/83124264?v=4'}}
        style={styles.image}
      />
      <TextInput
        placeholder="Write your comment...."
        style={styles.input}
        value={newComment}
        onChangeText={setNewComment}
        multiline
      />
      <Text style={styles.button} onPress={onPost}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 17,
    fontSize: font.size.s,
    fontWeight: font.weight.full,
    color: colors.primary,
  },
});

export default Input;

import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import font from '../../theme/font';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment: FC<ICommentProps> = ({comment}) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username} </Text>
        {comment.comment}
      </Text>
      <AntDesign
        name={false ? 'heart' : 'hearto'}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: font.weight.bold,
  },
});

export default Comment;

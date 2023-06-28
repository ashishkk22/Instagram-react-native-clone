import React, {FC, ReactNode} from 'react';
import {Pressable} from 'react-native';

interface IDoublePressableProps {
  onDoublePress: () => void;
  children: ReactNode;
}

const DoublePressable: FC<IDoublePressableProps> = ({
  onDoublePress,
  children,
}) => {
  let lastTap = 0;
  const handleDoublePress = () => {
    //if time between two presses is less than 300ms then execute
    const now = Date.now(); //timestamp;
    if (now - lastTap < 300) {
      onDoublePress?.();
    }
    lastTap = now;
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePressable;

import React from 'react';
import { HeaderButton, HeaderItemProps } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';

type IProps = HeaderItemProps;

export const HeaderButtonApp: React.FunctionComponent<IProps> = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
    />
  );

};
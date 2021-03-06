import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 0 24px;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 116}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(42)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text};
    line-height: ${RFValue(24)}px;
    margin-top: 16px;
`;

export const Form = styled.View`
    margin: 54px 0px;
`;

export const Footer = styled.View``;

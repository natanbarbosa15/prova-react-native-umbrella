/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

export const List = styled.View`
  padding: 20px;
`;

export const InfoContainer = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999;
  margin-top: 5px;
  line-height: 24px;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  color: #999;
  margin-top: 5px;
  line-height: 24px;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #da552f;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #da552f;
  font-weight: bold;
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  border-bottom-color: ${(props) => (props.error ? '#ff7272' : '#000')};
  border-bottom-width: 2px;
`;

export const ErrorText = styled.Text`
  font-size: 14px;
  color: red;
`;

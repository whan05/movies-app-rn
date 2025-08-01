import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';

interface Props extends StackScreenProps<RootStackParams, "Details"> {}

export const DetailsScreen = ( { route }:Props ) => {

  const { movieId } = route.params

  const { movie} = useMovie( movieId )

  console.log(movie)

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};

import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, ScrollView } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;

  const { isLoading, cast = [], movie } = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      {/* Header */}
      <MovieHeader movie={movie!} />

      {/* Details */}
      <MovieDetails cast={cast} movie={movie!} />
    </ScrollView>
  );
};

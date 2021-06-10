import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTrending } from '../features/movie/movieSlice';
import { moviesContainer as Container, moviesContent as Content, moviesWrap as Wrap } from '../styles';

const Trending = () => {
  const movies = useSelector(selectTrending);
  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies && movies.map((movie, key) => (
          <Wrap key={key}>
            {movie.id}
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.cardImg} alt={movie.title}/>
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

export default Trending;

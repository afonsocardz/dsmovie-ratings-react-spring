import MovieScore from 'components/MovieScore'
import MovieStars from 'components/MovieStars'

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="row col-sm-6 col-lg-4 col-xl-3 mb-3">
            <div>
                <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
                <div className="dsmovie-card-bottom-container">
                    <h3>{movie.title}</h3>
                    <MovieScore />
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
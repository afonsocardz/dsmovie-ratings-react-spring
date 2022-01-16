import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';

function Listing() {
    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>

        </>
    );
}
export default Listing;
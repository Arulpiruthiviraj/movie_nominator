import React from "react";
import "./nominated-page.scss";
import { connect } from "react-redux";
import NominatedMovie from "../../components/nominated_movie/NominatedMovie";

function NominatedMoviePage({ movie }) {
  return (
    <div className="nominated-page">
      <h6>Nominations</h6>
      <div className="movies">
        {movie.nominations && movie.nominations.length !== 0
          ? movie.nominations.map((movie) => {
              return <NominatedMovie key={movie.imdbID} movie={movie} />;
            })
          : "You Didn't Nominate Any Movies"}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(NominatedMoviePage);

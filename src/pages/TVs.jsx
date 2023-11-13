import React from "react";
import Tv from "../components/Tv"; // Movie 컴포넌트를 import합니다.
import tvs from "../tvDummy";
import { MovieListContainer } from "./Movies.style";

export default function TVs() {
  return (
    <div>
      <MovieListContainer>
        {tvs.results.map((tv) => (
          <Tv
            key={tv.id}
            title={tv.name}
            poster={tv.poster_path}
            voteAverage={tv.vote_average}
          />
        ))}
      </MovieListContainer>
    </div>
  );
}

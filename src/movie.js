//TMDB setting
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTJlN2MxMjA1NThlYzFlZjk4YTgzYjE4ZjA0YTE1YiIsInN1YiI6IjY1OGUxYjg2ZDc1YmQ2MjIyNDcyOGM5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8T1FY_xAVBzlLeeTCdyAFRDUjg6efK13lnk2OZvapEE"
  }
};

//이미지 주소
const imgPath = "https://image.tmdb.org/t/p/w500";
const $movieBox = document.querySelector(".movie-box");

async function fetchMovie() {
  const movie = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options);

  const response = await movie.json();

  response.results.map((el, i) => {
    //영화 요소 생성
    let movieItem = document.createElement("li");
    let target = response.results[i];
    movieItem.className = "item";
    movieItem.innerHTML = `<div class="thumb-box">
        <img src="${imgPath + target.poster_path}"
        alt="${target.title} 포스터 이미지">
      </div>
      <input type="hidden" value="${target.id}" class="target-id">
      <span class="badge">${target.vote_average}</span>
      <p class="movie-title">${target.title}</p>
      <p class="overview">${target.overview}</p>
    `;

    $movieBox.append(movieItem);
  });
}

export { fetchMovie };

const $movieBox = document.querySelector(".movie-box");
const $title = document.querySelector(".title");

//검색어와 관련없는 목록 숨기기
export const showHideMovie = (searchKeyword) => {
  // const movieItem = document.querySelectorAll(".item");
  const movie = document.querySelectorAll(".movie-title");
  let keyword = searchKeyword.toLowerCase().split(" ").join("");
  let cnt = 0;
  movie.forEach(function (el) {
    let movieTitle = el.innerText.toLowerCase().split(" ").join("");
    let parent = el.parentElement;

    if (movieTitle.includes(keyword)) {
      parent.style.display = "block";
      cnt += 1;
    } else {
      parent.style.display = "none";
    }
  });

  //일치하는 영화 없으면 no-data 노출
  if (cnt > 0) {
    if (document.querySelector(".no-data")) {
      document.querySelector(".no-data").remove();
    }
  } else {
    if (!document.querySelector(".no-data")) {
      const noDataDiv = document.createElement("div");
      noDataDiv.className = "no-data";
      noDataDiv.innerText = "검색 결과가 없습니다.";
      $movieBox.append(noDataDiv);
    }
  }

  //타이틀 변경
  $title.innerText = "검색 결과 ✨";
};

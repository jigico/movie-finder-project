import { fetchMovie } from "./movie.js";
import { showHideMovie } from "./search.js";

fetchMovie();

const $movieList = document.querySelector("#movieList");
const $searchForm = document.querySelector("#searchForm");
const $keyword = document.querySelector("#keyword");
let searchKeyword = "";

$keyword.focus();
//검색 - keyup
$keyword.addEventListener("keyup", (event) => {
  //입력 할 때 마다 변수에 담기
  searchKeyword = event.currentTarget.value;
});

$searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!searchKeyword.trim()) {
    alert("검색어를 입력해주세요.");
    $keyword.focus();
    return;
  }
  showHideMovie(searchKeyword);
});

//이벤트 추가 - 영화 id
$movieList.addEventListener("click", (event) => {
  if (event.target.id === "movieList") return;

  let id = null;
  if (event.target.parentElement.className === "item") {
    id = event.target.parentElement.querySelector(".target-id").value;
  } else if (event.target.parentElement.parentElement.className === "item") {
    id = event.target.parentElement.parentElement.querySelector(".target-id").value;
  }
  alert(`영화 아이디는 ${id} 입니다.`);
});

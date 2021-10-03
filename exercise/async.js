let API_GITHUB = "https://api.github.com/users/yhidotobing";

function getDataPromise(API) {
  fetch(API)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      console.log(result.name);

      let getName = document.querySelector("#name");
      getName.innerText = result.name;
    });
}
getDataPromise(API_GITHUB);

const getAPI = async () => {
  const API = "https://api.github.com/users/yhidotobing";
  let response = await fetch(API);
  response = await response.json();

  console.log(response.name);
  let name = document.querySelector("#name");
  name.innerText = response.name;
};

getAPI();

let API_POST = "https://jsonplaceholder.typicode.com/posts";

const getPost = async (API) => {
  const response = await fetch(API);
  const result = await response.json();

  console.log(result); // [{},{},{}]

  const postList = document.querySelector("#post-list"); // Ul
  result.forEach((item) => {
    console.log(item);
    postList.innerHTML += `<li>${item.title}</li>`;
  });
};

getPost(API_POST);

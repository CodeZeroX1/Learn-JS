const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // xhr.sendHttpRequest('Content-Type', 'application');

  // xhr.open(method, url);

  // xhr.responseType = "json";
  // xhr.onload = function () {
  //   if (xhr.status >= 200 && xhr.status < 300) {
  //     resolve(xhr.response);
  //   } else {
  //     reject(new Error("Somethin went Wrong !"));
  //   }
  //   //   const listOfData = JSON.parse(xhr.response);
  // };

  // xhr.onerror = function () {
  //   reject(new Error("Failed Send Request"));
  // };
  // xhr.send(JSON.stringify(data));

  // });
  // return promise;
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((respone) => {
    if (respone.status >= 200 && respone.status < 300) {
      return respone.json();
    } else {
      return respone.json().then((errData) => {
        console.log(errData);
        throw new Error("Somethin went Wrong -  Server Side");
      });
    }
  });
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const listOfData = responseData;
    for (const post of listOfData) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  const fd = new FormData();
  // fd.append('title', title);
  // fd.append('body', content);
  fd.append("userId", userId);

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entiredTitle = event.currentTarget.querySelector("#title").value;
  const entiredContent = event.currentTarget.querySelector("#content").value;

  createPost(entiredTitle, entiredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});

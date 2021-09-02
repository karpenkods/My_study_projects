document.addEventListener("DOMContentLoaded", () => {

  let post = {};
  let queryPost = {};

  post.readParams = () => {
    location.search.substr(1).split("&").forEach((item) => queryPost[item.split("=")[0]] = item.split("=")[1]);
    return queryPost;
  };

  post.rootPost = document.getElementById("post");

  post.append = (parentPost, className, paramsPost, tagName = 'div') => {
    let newPost = document.createElement(tagName);
    newPost.setAttribute('class', className);
    paramsPost(newPost);
    parentPost.append(newPost);
  };

  post.fetchData = (apiUrl, additional) => fetch(`${apiUrl}${additional}`).then((response) => response.json());

  async function fetchJson(url) {
    const res = await fetch(url);
    return await res.json();
  };

  async function getComment(id) {
    const comment = await fetchJson(`https://gorest.co.in/public-api/comments?post_id=${id}`);
    console.log(comment.data);
    return comment.data;
  };

  let drawView = (resp) => {
    let { data } = resp;

    post.append(post.rootPost, "post", (postDone) => {
      post.append(postDone, "title", (titlePost) => {
        titlePost.textContent = data.title;
      });

      post.append(postDone, "body", (bodyPost) => {
        bodyPost.textContent = data.body;
      });

      getComment(id).then(value => {

        if (value.length > 0) {
          value.forEach(comment => {
            post.append(postDone, "comment name", (commentName) => {
              commentName.textContent = `Имя: ${comment.name}`
            });
            post.append(postDone, "comment comm", (commentPost) => {
              commentPost.textContent = `Комментарий: ${comment.body}`
            });
            post.append(postDone, "comment email", (commentPost) => {
              commentPost.textContent = `Почта: ${comment.email}`
            });
          });
        } else {
          post.append(postDone, "comment", (commentPost) => {
            commentPost.textContent = "Комментариев пока нет";
          });
        };
      });

      post.append(postDone, "more", (backPost) => {
        backPost.textContent = "вернуться к списку статей";
        backPost.setAttribute("href", `javascript:history.back();`);
      }, "a");
    });
  };

  let apiUrl = "https://gorest.co.in/public-api"
  let id = post.readParams().id || 1
  post.fetchData(apiUrl, `/posts/${id}`).then(drawView)
});

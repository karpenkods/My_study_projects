document.addEventListener("DOMContentLoaded", () => {

  let pages = {};
  let queryPage = {};

  pages.readParams = () => {
    location.search.substr(1).split("&").forEach(item => queryPage[item.split("=")[0]] = item.split("=")[1]);
    return queryPage;
  };

  pages.rootPage = document.getElementById("pages");

  pages.append = (parentPage, className, paramsPage, tagName = "div") => {
    let newPage = document.createElement(tagName);
    newPage.setAttribute("class", className);
    paramsPage(newPage);
    parentPage.append(newPage);
  };

  pages.fetchData = (apiUrl, addition) => fetch(`${apiUrl}${addition}`).then((response) => response.json());

  let drawPage = (resp) => {
    let { data, meta: { pagination } } = resp;

    pages.append(pages.rootPage, "tape", (tapePage) => {
      for (let post of data) {
        pages.append(tapePage, "post", (postPage) => {
          pages.append(postPage, "title", (titlePage) => {
            titlePage.textContent = post.title;
            titlePage.setAttribute("href", `post.html?id=${post.id}`);
          }, "a");
        });
      };
    });

    pages.append(pages.rootPage, "pagination", (paginationPage) => {
      for (let i = 0; i < pagination.pages; i++) {
        let pageNumber = i + 1;
        let pageUri = pageNumber === 1 ? "?" : `?page=${pageNumber}`;

        pages.append(paginationPage, "page", (pageNum) => {
          pageNum.textContent = pageNumber;
          pageNum.setAttribute("href", pageUri);
        }, "a");
      };
    });
  };

  let apiUrl = "https://gorest.co.in/public-api";
  let page = pages.readParams().page || 1;
  pages.fetchData(apiUrl, `/posts?page=${page}`).then(drawPage);
});

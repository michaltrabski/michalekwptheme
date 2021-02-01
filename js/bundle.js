const addPost = (endpoint, postTitle, postContent) => {
  if (endpoint && postTitle && postContent) {
    console.log(endpoint, postTitle, postContent);
    const form = new FormData();
    form.append("action", "michalekwptheme_add_post");
    form.append("post_title", postTitle);
    form.append("post_content", postContent);
    const params = new URLSearchParams(form);

    fetch(endpoint, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache",
      },
      body: params,
    })
      .then((res) => res.json())
      .then((data) => console.log("data => ", data))
      .catch((err) => console.log("err => ", err));
  }
};

addPost(
  "http://localhost/michalekwptheme/wp-admin/admin-ajax.php",
  "test1",
  "content1"
);

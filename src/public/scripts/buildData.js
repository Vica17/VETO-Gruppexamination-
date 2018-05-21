var buildData = ( function(){

  function like(data){
    let container = document.createElement("div");
      container.setAttribute("class", "like");

    let title = document.createElement("h4");
      title.innerHTML = data["title"];

    container.appendChild(title);
    return container;
  }

  function comment(data){
    let container = document.createElement("div");
      container.setAttribute("class", "comment");

    let content = document.createElement("p");
      let contentInput = data["content"];
      let contentText = document.createTextNode(contentInput);

    content.appendChild(contentText);
    container.appendChild(content);
    return container;
  }

  function entry(data){

    let newArticle = document.createElement("article");
      newArticle.setAttribute("class", "entry");

    //title
    let title = document.createElement("h2");
      title.setAttribute("class", "entry-title");
    let titleInput = data["title"];
    let titleText = document.createTextNode(titleInput);
    title.appendChild(titleText);
    newArticle.appendChild(title);

    //creator
    let creator = document.createElement("p");
      creator.setAttribute("class", "entry-creator");
    let creatorInput = "Skriven av: " + data["username"];
    let creatorText = document.createTextNode(creatorInput);
    creator.appendChild(creatorText);
    newArticle.appendChild(creator);

    //date
    let created = document.createElement("p");
      created.setAttribute("class", "entry-date");
    let createdInput = "Skapad: " + data["createdAt"];
    let createdText = document.createTextNode(createdInput);
    created.appendChild(createdText);
    newArticle.appendChild(created);

    //content
    let content = document.createElement("p");
      content.setAttribute("class", "entry-content");
    let contentInput = data["content"];
    let contentText = document.createTextNode(contentInput);
    content.appendChild(contentText);
    newArticle.appendChild(content);

    //Like button
    let likeForm = document.createElement("form");
      likeForm.setAttribute("action","/api/likes");
      likeForm.setAttribute("method","post");
      likeForm.setAttribute("class","like-btn-form");
    let likeHidden = document.createElement("input");
      likeHidden.setAttribute("type","hidden");
      likeHidden.setAttribute("name","entryID");
      likeHidden.setAttribute("value", data["entryID"]);
    let userHidden = document.createElement("input");
      userHidden.setAttribute("type","hidden");
      userHidden.setAttribute("name","userID");
      userHidden.setAttribute("value", data["userID"]);
    let likeInput = document.createElement("input");
      likeInput.setAttribute("type","submit");
      likeInput.setAttribute("value","Like");
      likeInput.setAttribute("name","likeButton");

    likeForm.addEventListener("submit", function(e){
      e.preventDefault(); likePost(e);
    });

    likeForm.appendChild(likeHidden);
    likeForm.appendChild(userHidden);
    likeForm.appendChild(likeInput);
    newArticle.appendChild(likeForm);

    //Get all comments button
    let commentButton = document.createElement("input");
      commentButton.setAttribute("type", "button");
      commentButton.setAttribute("value", "Show all comments");
      commentButton.setAttribute("onclick", "getComments(1)");
      commentButton.setAttribute("class","all-comment-btn-form");

    newArticle.appendChild(commentButton);

    //Comment button
    let commentForm = document.createElement("form");
      commentForm.setAttribute("action","/comments");
      commentForm.setAttribute("method","post");
      commentForm.setAttribute("class","new-comment-btn-form");
    let commentHidden = document.createElement("input");
      commentHidden.setAttribute("type","hidden");
      commentHidden.setAttribute("name","userID");
      commentHidden.setAttribute("value", data["userID"]);
    let commentHidden2 = document.createElement("input");
        commentHidden2.setAttribute("type","hidden");
        commentHidden2.setAttribute("name","entryID");
        commentHidden2.setAttribute("value", data["entryID"]);
    let commentInput = document.createElement("input");
      commentInput.setAttribute("type","input");
      commentInput.setAttribute("name","content");
    let commentInputButton = document.createElement("input");
      commentInputButton.setAttribute("type","submit");
      commentInputButton.setAttribute("value","Comment");
      commentInputButton.setAttribute("name","commentButton");

      commentForm.addEventListener("submit", function(e){
        e.preventDefault();
        postComment(e);
      });

    commentForm.appendChild(commentInput);
    commentForm.appendChild(commentHidden);
    commentForm.appendChild(commentHidden2);
    commentForm.appendChild(commentInputButton);
    newArticle.appendChild(commentForm);

    return newArticle;
  }

  return {
    like: like,
    comment: comment,
    entry: entry
  };

})();

let q = "";    
let getData = () => {
  let query = document.getElementById("query").value;
  q = query;
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyCpiqitsvoIFaRwKR667Ah8m94bm-7_kxg`;
  fetch(url)
    .then((res) => {
      let readData = res.json();
      return readData;
    })
    .then((res) => {
      let data = res.items;
      console.log(data);
      append(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

function append(data) {
  let results = document.getElementById("results");
  results.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "item");
    div.onclick = () => {
      details(el);
    };

    let img = document.createElement("img");
    img.src = el.snippet.thumbnails.high.url;

    let title = document.createElement("h4");
    title.innerText = el.snippet.title;

    let channelName = document.createElement("p");
    channelName.innerText = el.snippet.channelTitle;

    let des = document.createElement("p");
    // des.innerText = el.snippet.description;

    div.append(img, title, channelName, des);

    results.append(div);
  });
}

let details = (data) => {
  localStorage.setItem("item", JSON.stringify(data));
  window.location.href = "details.html";
};
let filter = async () => {
  let data = getData(q);
  data = data.filter((el) => {
    return el.snippet.publishTime === "2017-09-01T07:56:59Z";
  });
  append(data);
};

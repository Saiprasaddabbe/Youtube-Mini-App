let playVideo = () => {
  let dataLS = JSON.parse(localStorage.getItem("item"));

  let videoId = dataLS.id.videoId;

  let iframe = document.getElementById("video");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
};

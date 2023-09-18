const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  try {
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImagesAndText(res.data);
  } catch (e) {
    console.log("Error", e);
  }
});

const makeImagesAndText = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
      const text = document.createElement("P");
      text.innerText = result.show.summary;
      document.body.append(text);
    }
  }
};

const fetchPodcasts = async (query) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/Podcasts/v1/volumes?q=${query}`
    );

    const { items } = await response.json();
    return items;
  } catch (error) {
    return console.error(error);
  }
};

const paginatePodcasts = async (query, startIndex) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/Podcasts/v1/volumes?q=${query}&startIndex=${startIndex}`
    );

    const { items } = await response.json();
    return items;
  } catch (error) {
    return console.error(error);
  }
};


export default {
  fetchPodcasts,
  paginatePodcasts
};

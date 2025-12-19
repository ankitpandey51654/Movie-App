export const getMoviesData = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=batman&apikey=${import.meta.env.VITE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Sorry something went wrong in Api fetching");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};

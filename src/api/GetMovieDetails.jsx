export const getMoviesDetails = async ({ params }) => {
  const { movieID } = params; // ✅ SAME NAME AS ROUTE

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${movieID}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    console.log(response);

    if (!response.ok) {
      throw new Error("Sorry something went wrong in API fetching");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};

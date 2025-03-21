"use server";

export const getSearchResults = async (prompt, page = 1) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_ANIWATCH_URL}/api/v2/hianime/search?q=${prompt}&page=${page}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const data = await resp.json();
  return data.data;
};
export const getSearchSuggestions = async (prompt) => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_ANIWATCH_URL}/api/v2/hianime/search/suggestion?q=${prompt}`,
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
        signal,
      }
    );
    const data = await resp.json();
    return data.data;
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request aborted");
    } else {
      console.error("Error fetching data:", error);
    }
    return null;
  }
};

export const getGenreResults = async (prompt, page = 1) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_ANIWATCH_URL}/api/v2/hianime/genre/${prompt}?page=${page}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const data = await resp.json();
  return data.data;
};
export const getProducerResults = async (prompt, page = 1) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_ANIWATCH_URL}/api/v2/hianime/producer/${prompt}?page=${page}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const data = await resp.json();
  return data.data;
};
export const getAnimeAZ = async (sortOption, page) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_ANIWATCH_URL}/api/v2/hianime/azlist/${sortOption}?page=${page}`,
    {
      next: {
        revalidate: 60 * 60 * 1,
      },
    }
  );
  const data = await resp.json();
  return data.data;
};
export const getCategoryResults = async (prompt, page = 1) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_ANIWATCH_URL}/api/v2/hianime/category/${prompt}?page=${page}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const data = await resp.json();
  return data.data;
};

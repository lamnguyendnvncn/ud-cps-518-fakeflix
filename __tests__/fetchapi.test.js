global.fetch = jest.fn();
test("displays data when fetch is successful", async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: "/gsQJOfeW45KLiQeEIsom94QPQwb.jpg",
          genre_ids: [28, 53],
          id: 1125899,
          original_language: "en",
          original_title: "Cleaner",
          overview: "When a group of radical activists take over an energy company's annual gala, seizing 300 hostages, an ex-soldier turned window cleaner suspended 50 storeys up on the outside of the building must save those trapped inside, including her younger brother.",
          popularity: 572.5151,
          poster_path: "/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg",
          release_date: "2025-02-19",
          title: "Cleaner",
          video: false,
          vote_average: 6.5,
          vote_count: 97,
        },
      ],
      total_pages: 1,
      total_results: 1,
    }),
  });
});

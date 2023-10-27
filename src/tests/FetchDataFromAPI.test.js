import newsReducer from '../redux/newsSlice';

describe("testing homeReducer", () => {
  it("should set status to succeeded and contents to the fetched data when fetchCities.fulfilled is called", () => {
    const initialState = {
      data: [],
      status: "idle",
      error: null,
    };

    const Apidata = [
      {
        articles: [
          {
            title:
              "Qualcomm's Snapdragon X Elite aims to dethrone Intel and Apple in laptops",
          },
          {
            author: "Radek Zielinski",
          },
          {
            url: "https://readwrite.com/qualcomms-snapdragon-x-elite-aims-to-dethrone-intel-and-apple-in-laptops/",
          },
          {
            urlToImage:
              "https://readwrite.com/wp-content/uploads/2023/10/Qualcomm-Snapdragon-X-Elite-1.png",
          },
        ],
      },
    ];

    const action = { type: getNews.fulfilled.type, payload: Apidata };

    const expectedState = {
      data: Apidata,
      status: "succeeded",
      error: null,
    };
    expect(newsReducer(initialState, action)).toEqual(expectedState);
  });
});

/**
 * Folder and filename are important when mocking requests for testing
 * 
 * E.g.: If we want to mock the "axios.get(url)" request,
 *       filename should be "axios.js", exporting an object
 *       with the "get" key. See below.
 */
const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "John",
                    last: "Doe"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/41.jpg"
                },
                login: {
                    username: "silvermouse594"
                }
            },
            {
                name: {
                    first: "Millie",
                    last: "Clarke"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/52.jpg"
                },
                login: {
                    username: "crazywolf867"
                }
            }
        ]
    }
}

const mockedAxios = {
    get: jest.fn().mockResolvedValue(mockResponse)
}
export default mockedAxios;
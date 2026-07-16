import tmdbApi from "./axios";
import { getTrendindMovies } from "./tmdb";



jest.mock("./axios");
test("Retorna filmes em destaque corretamente", async () => {
    //AAA
    //Arrange
    const mockResults = [{ id: 1, title: "Matrix"}];
    (tmdbApi.get as jest.Mock).mockResolvedValue({
        data: { results: mockResults},

    });
    //Act
    const filmes = await getTrendindMovies();
    //Assert
    expect(filmes).toEqual(mockResults);    
    
})
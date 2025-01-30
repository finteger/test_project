const { fetchData } = require('../functions/api.js');



describe('fetchData', () =>{

        it('should give us data in json', async () =>{

            //1st step is mock the function
            const fetchData = jest.fn()

            //Arrange.  Mock the function's response
            fetchData.mockResolvedValue({id: 1, product: "A"});

            //Act by invoking the real function
            const data = await fetchData();

            //Assert
            expect(data).toEqual({id: 1, product: "A"})
            expect(fetchData).toHaveBeenCalled();
        });       
});

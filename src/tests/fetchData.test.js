const fetchData = require('../functions/fetchData');

//Mock the global fetch function
global.fetch = jest.fn();

//Test suite or test procedures
describe('fetchData', ()=>{
    beforeEach(() =>{
        //reset the mock object before each test
        fetch.mockClear();
    });

    it('fetches data from the API endpoint and returns it as JSON', async () => {
        //Mock the fetch response
        const mockResponse = { userId: 1, id: 1, title: 'Test Title', completed: false};
        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');

        expect(data).toEqual(mockResponse);

        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    });


    
    it('throws an error when the network response is not okay', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        await expect(fetchData('https://jsonplaceholder.typicode.com/todos/1')).rejects.toThrow('There was a network error');
    });


});

/*
 Response.json() was not awaited, 
 so the function returned a Promise instead of the resolved JSON object.
 This would cause the test for JSON equality 
 to fail (expect(data).toEqual(mockResponse)).  
 Also, be sure to match error methods.
 */
import { render, screen, act } from '@testing-library/react';
import axios from ' axios ';
import View from './components/GetSection/view'
jest.mock('Axios');
const testText = "hehe";
const errorText = " error ";
const mockResponse = {
    data: {
        fact: testText
    }
}
const mockError = {
    data: null,
    message: errorText
}
test('renders fact ', async () => {
    await act(async () => {
        await axios.get.mockImplementationOnce(() => Promise.resolve(mockResponse));
        render(<View />);
    });
    const textElement = await screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
});
test('handle error ', async () => {
    await act(async () => {
        await axios.get.mockImplementationOnce(() => Promise.reject(mockError));
        render(<View />);
    });
    const textElement = await screen.getByText(errorText);
    expect(textElement).toBeInTheDocument();

} ) ;
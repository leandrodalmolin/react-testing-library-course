import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
}

/**
 * Integration tests (involves more than one component)
 */
describe("Todo", () => {
    it('should render added item', () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).toBeInTheDocument();
    });

    it('should render multiple added items', () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping", "Pet my cat", "Wash my hands"]);
        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(3);
    });

    it('should not have completed class on task when initially rendered', () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('should have completed class on task when clicked', () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });
})
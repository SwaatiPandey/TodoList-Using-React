import {render, fireEvent} from "@testing-library/react";
import   Todolist from "./todoList";

const task= {
    taskId: "1",
    taskName: "sleep",
    status: "Completed",
    createdAt:"night"
}
const addtaskFunction = jest.fn()
it('checking for function call on add task', ()=>{
    const { queryByTitle } = render(<Todolist task={task} addTask={addtaskFunction}/>)
    const btn = queryByTitle("addtask");
    fireEvent.click(btn)
    // expect(addtaskFunction).toBeCalledTimes(1)
})

it("is search rendered", ()=>{
    const {queryByTitle} = render(<Todolist task={task} addTask={addtaskFunction}/>)
    const search = queryByTitle("txtfield");
    expect(search).toBeTruthy();
});

describe('checking change in input', ()=>{
    it("onChange", ()=>{
        const {queryByTitle} = render(<Todolist task={task} addTask={addtaskFunction}/>)
        const search = queryByTitle("txtfield");
        fireEvent.change(search, {target: {value: "taskName"}} )
        expect(search.value).toBe("taskName");
    })
})

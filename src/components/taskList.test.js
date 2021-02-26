import {render, fireEvent} from "@testing-library/react";
import Tasklist from "./taskList";

const task= {
    taskId: "1",
    taskName: "sleep",
    status: "Completed",
    createdAt:"night"
}
const deleteFunction = jest.fn()
const editFunction= jest.fn()
const updateFunction= jest.fn()
it('checking button', ()=>{
    const { queryByTitle } = render(<Tasklist task={task} deleteTask={deleteFunction} updateTask={editFunction}updateStatus={updateFunction}/>)
    const btn = queryByTitle("tasklist-component");
    expect(btn).toBeTruthy();
})
it("checking for function call on edit",()=>{
const { queryByTitle } = render(<Tasklist task={task} deleteTask={deleteFunction} updateTask={editFunction}updateStatus={updateFunction}/>)
const btn = queryByTitle("Edit");
fireEvent.click(btn)
expect(editFunction).toBeCalledTimes(1)
})
it("checking for function call on delete",()=>{
    const {queryByText} = render(<Tasklist task={task} deleteTask={deleteFunction} updateTask={editFunction}updateStatus={updateFunction}/>)
    const btn = queryByText("Delete");
    fireEvent.click(btn)
    expect(deleteFunction).toBeCalledTimes(1)
    })
 it("checking for function call on update",()=>{
        const {queryByTitle } = render(<Tasklist task={task} deleteTask={deleteFunction} updateTask={editFunction}updateStatus={updateFunction}/>)
        const btn = queryByTitle ("Completed");
        fireEvent.click(btn)
        expect(updateFunction).toBeCalledTimes(1)
        })
import React, { useState } from "react";
import { addPerson, savePerson } from "../store/features/personSlice";
import { useAppDispatch } from "../store/store";

const Add = () => {
    const [name, setName] = useState('')
    const dispatch = useAppDispatch();
    const AddPerson = () => {
        dispatch(savePerson(name))
        setName('')
    }
    return (
      <div className="border rounded-md p-2 shadow-md m-2">
        <label htmlFor="">Person Name:</label>
        <input
          className="border rounded-md p-2 mx-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => AddPerson()}
          className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
        >
          Add
        </button>
      </div>
    );
}

export default Add;
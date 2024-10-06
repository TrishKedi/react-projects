import {useRef} from 'react'
import Input from "./Input";
import Modal from './Modal';

export default function NewProject({onAdd, onCancel}){
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const date = useRef();

    function handleSave(){
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = date.current.value

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === ''){
            console.log("empty data")
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate
        })
    }

    return(
        <>
            <Modal ref={modal} buttonCaption='Close'>
                <h2 className='text-xl font-bold text-stonr-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Looks like you forgot to enetre= a value</p>
                <p className='text-stone-600 mb-4'>Please enter valid data</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-sone-950" onClick={onCancel}>Cancel</button></li>
                    <li>
                        <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                <Input type="text" ref={title} label='Title'/>
                <Input ref={description} label='Description' textarea/>
                <Input type="date" ref={date} label='Due Date'/>
                </div>
            </div>
        </>
   )
}
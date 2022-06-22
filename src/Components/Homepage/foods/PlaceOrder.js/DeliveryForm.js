import React, { useState } from 'react';
import swal from 'sweetalert';
import { useDelivery } from '../../../../Context/DeliveryProvider';
import TextField from '../../../Shared/Form/TextField';

const DeliveryForm = () => {

    const [change, setChange] = useState({
        country: '',
        roadNo: '',
        flatno: '',
        name: '',
    })
    const { setInput, setDisabled } = useDelivery();

    //handle Change 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setChange((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })

    }

    //handle Submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput({
            country: change.country,
            roadNo: change.roadNo,
            flatno: change.flatno,
            name: change.name
        })
        swal("Information Updated!", "Your shipping details updated successfully!", "success")
        setDisabled(false)
    }

    return (
        <div className="flex flex-col mt-20">
            <h1 className="text-2xl poppins pb-4 border-b border-gray-500 text-gray-700">Edit Delivery Details</h1>
            <form className="my-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">
                    <TextField
                        type="text"
                        placeholder="Country and District"
                        name="country"
                        value={change.country}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Road Name and Road No"
                        name="roadNo"
                        value={change.roadNo}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Flat, suite or floor"
                        name="flatno"
                        value={change.flatno}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        placeholder="Delivery to"
                        name="name"
                        value={change.name}
                        onChange={handleChange}
                        required
                    />
                    <button className="btn px-10 py-3 m-3 transform transition duration-300 hover:scale-105">Save & Continue</button>
                </div>
            </form>
        </div>
    )
}

export default DeliveryForm

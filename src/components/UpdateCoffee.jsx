import {useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee)

        // send data to the server
        fetch(`https://coffee-store-server-mu-ruddy.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })

    }

    return (
        <div className="bg-[#F4F3F0] p-24">

            <h2 className="text-3xl font-extrabold  mb-4">Update Coffee: {name}</h2>

            <form onSubmit={handleUpdateCoffee}>

                {/* form name and quantity row */}
                <div className="md:flex mb-4">

                    {/* Name */}
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <div className="join">
                            <div className=" w-full">

                                <input
                                    className="input input-bordered join-item w-full"
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Coffee Name"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <div className="join w-full">
                            <div className="w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    type="text"
                                    name="quantity"
                                    defaultValue={quantity}
                                    placeholder="Available Quantity"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* form supplier and test row */}
                <div className="md:flex  mb-4">

                    {/* Name */}
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <div className="join">

                            <div className=" w-full">

                                <input
                                    className="input input-bordered join-item w-full"
                                    type="text"
                                    name="supplier"
                                    defaultValue={supplier}
                                    placeholder="Supplier Name"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <div className="join w-full">
                            <div className="w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    type="text"
                                    name="taste"
                                    defaultValue={taste}
                                    placeholder="Taste"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* form category and details row */}
                <div className="md:flex mb-4">

                    {/* Name */}
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <div className="join">
                            <div className=" w-full">

                                <input
                                    className="input input-bordered join-item w-full"
                                    type="text"
                                    name="category"
                                    defaultValue={category}
                                    placeholder="Category"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <div className="join w-full">
                            <div className="w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    type="text"
                                    name="details"
                                    defaultValue={details}
                                    placeholder="Details"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* form photo url row */}
                <div className=" mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <div className="join">
                            <div className=" w-full">
                                <input
                                    className="input input-bordered join-item w-full"
                                    type="text"
                                    name="photo"
                                    defaultValue={photo}
                                    placeholder="Photo URL"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <input
                    type="submit"
                    value="Update Coffee"
                    className="btn btn-block bg-yellow-300"
                />


            </form>

        </div>
    );
};

export default UpdateCoffee;
import Swal from 'sweetalert2'
import {Link} from "react-router-dom";

const CoffeeCard = ({coffee, setCoffees, coffees}) => {

    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;


    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-mu-ruddy.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remaninig = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaninig)
                        }
                    })
            }
        });


    }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} className="max-h-44" alt="Movie"/>
            </figure>
            <div className="flex justify-between w-full p-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>


                <div className="card-actions justify-end">
                    <div className="join join-vertical border space-y-1 ">
                    <button className="btn join-item">View</button>

                            <button className="btn join-item"><Link to={`updateCoffee/${_id}`}> Edit </Link></button>

                        <button className="btn join-item" onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
import {useLoaderData} from "react-router-dom";
import {useState} from "react";
import Swal from "sweetalert2";


const Users = () => {

    let id = 1;
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


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

                fetch(`http://localhost:5000/user/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });

                            const remaninig = loadedUsers.filter(cof => cof._id !== _id);
                            setUsers(remaninig)
                        }
                    })
            }
        });


    }


    return (
        <div>
            <h2 className="text-center font-bold mb-4">Users: {loadedUsers.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Login</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}

                        {
                            users.map(user => <tr key={user._id} className="hover">
                                <th>{id++}</th>
                                <td>{user.email}</td>
                                <td>{user.createAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn ">X</button> </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;
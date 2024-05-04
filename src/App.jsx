
import './App.css'
import {Link, useLoaderData} from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard.jsx";
import {useState} from "react";

function App() {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)

    console.log(loadedCoffees)


  return (
      <div className="m-20">

          <h1 className="text-6xl my-12 text-center text-purple-600">Total Coffees: {coffees.length}</h1>

          <div className="join join-vertical lg:join-horizontal mb-4 w-full">

              <Link className="btn join-item w-1/2 bg-indigo-600 text-white m-0" to="/signup">Sign Up</Link>

              <Link className="btn join-item w-1/2 bg-cyan-600 text-white m-0" to="/signin"> Sign In</Link>
          </div>

          <Link to='/users'>
              <button className="btn btn-primary text-white w-full mb-8 bg-emerald-600">Users</button>
          </Link>

          <Link to='/addCoffee'>
              <button className="btn btn-primary text-white w-full mb-8 bg-purple-600">Want to add Coffee?</button>
          </Link>
          <div className="grid md:grid-cols-2 gap-4">
              {
                  coffees.map(coffee => <CoffeeCard
                      key={coffee._id}
                      coffee={coffee}
                      coffees={coffees}
                      setCoffees={setCoffees}
                  ></CoffeeCard>)
              }
          </div>


      </div>
  )
}

export default App

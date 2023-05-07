import react, {useState} from 'react'
import hogs from '../porkers_data'
import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers'
import HogCard from './HogCard'

function Porkers() {

    const [pigs, setPigs] = useState(hogs)
    console.log(pigs)

const handleSortName = () => {
    const sorted = [...pigs].sort((a,b) => a.name.localeCompare(b.name))
    setPigs(sorted)
}

const handleSortWeight = () => {
    const sorted = [...pigs].sort((a, b) => a.weight - b.weight)
    setPigs(sorted)
}

const handleFilter = () => {
    const filtered = hogs.filter(hog => hog.greased === true)
    setPigs(filtered)
}

return (
    <> 
        <div>    
            <button onClick={handleFilter}>VIEW GREASY PIGS</button>
            <button onClick={handleSortName}>SORT PIGS BY NAME</button>
            <button onClick={handleSortWeight}>SORT PIGS BY WEIGHT</button>
            <button onClick={() =>setPigs(hogs)}>VIEW ALL</button>
            <br></br><br></br>
            </div>
        <div className="ui three stackable cards">

              {pigs.map((hog)=> {
                return(
                        <HogCard    
                            key={hog.name}
                            hog= {hog}
                        />)
                    }
                )}

        </div>
    </>

)






}





export default Porkers




//pig card:

/*

<h1> { pig.name } </h1>
<img src = {pig.image} alt = "pig image"/>





*/

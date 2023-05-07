function HogDetails({hog}){
    console.log(hog)
    const medal = "highest medal achieved"
    return(
    
        <div>
          <b>Specialty:</b> {hog.specialty} <br></br>
          <b>Weight:</b>  {hog.weight}<br></br>
          <b>Greased:</b>  {hog.greased ? "yes" : "no"}<br></br>
          <b>Highest Medal Achieved:</b>  {hog["highest medal achieved"]}<br></br>
        </div>
    )

}

export default HogDetails
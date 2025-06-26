import React from 'react'
import '../Styles/Shortener.css';

const Shortener = () => {
  return (
    <div>
        <h1 className="h1">Welcome To URL Shortener</h1>

        <div className="url-container">
            <div className="url-box">

                <form>
                    <label htmlFor="urls">Url 1:</label> <br />
                    <input type="text" placeholder="Enter Url 1"/> <br />

                    <label htmlFor="urls">Url 2:</label>  <br />
                    <input type="text" placeholder="Enter Url 1"/> <br />

                    <label htmlFor="urls">Url 3:</label> <br /> 
                    <input type="text" placeholder="Enter Url 1"/> <br />

                    <label htmlFor="urls">Url 4:</label> <br /> 
                    <input type="text" placeholder="Enter Url 1"/> <br />

                    <label htmlFor="urls">Url 5:</label> <br /> 
                    <input type="text" placeholder="Enter Url 1"/> <br />

                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Shortener
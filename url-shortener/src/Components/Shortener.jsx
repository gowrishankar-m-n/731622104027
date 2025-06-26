import React from 'react'
import '../Styles/Shortener.css';

const Shortener = () => {
  return (
    <div>
        <h1 className="h1">Welcome To URL Shortener</h1>

        <div className="url-container">
            <div className="url-box">

                <form className="form">
                    <label htmlFor="urls">Enter Url 1:</label> 
                    <input type="text" placeholder="Enter Url 1"/> 
                    <button className="get-btn">Get Url</button> <br />

                    <label htmlFor="urls">Enter Url 2:</label> 
                    <input type="text" placeholder="Enter Url 1"/> 
                    <button className="get-btn">Get Url</button> <br />
                    
                    <label htmlFor="urls">Enter Url 3:</label> 
                    <input type="text" placeholder="Enter Url 1"/> 
                    <button className="get-btn">Get Url</button> <br />

                    <label htmlFor="urls">Enter Url 4:</label> 
                    <input type="text" placeholder="Enter Url 1"/> 
                    <button className="get-btn">Get Url</button> <br />
                    
                    <label htmlFor="urls">Enter Url 5:</label> 
                    <input type="text" placeholder="Enter Url 1"/> 
                    <button className="get-btn">Get Url</button> <br />

                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Shortener
import React from 'react'
import '../Styles/Shortener.css';

const Shortener = () => {
  return (
    <div>
        <h1 className="h1">Welcome To URL Shortener</h1>

        <div className="url-container">
            <div className="url-box">

                <div className="form">
                     <label htmlFor="urls">Enter Url 1:</label> 
                        <input type="text" placeholder="Enter Url 1" required/> 
                        <label htmlFor="urls">Enter Validity:</label> 
                        <input type="text" placeholder="Validity Of Link"/> 
                        <label htmlFor="urls">Custom Link:</label> 
                        <input type="number" placeholder="Enter Your Custom Link"/> 
                        <button className="get-btn">Get Url</button> <br />
                        <textarea ame="short-url" id="" rows="3" cols="25">

                        </textarea>
                </div>

                <div className="form">
                     <label htmlFor="urls">Enter Url 2:</label> 
                        <input type="text" placeholder="Enter Url 1" required/> 
                        <label htmlFor="urls">Enter Validity:</label> 
                        <input type="text" placeholder="Validity Of Link"/> 
                        <label htmlFor="urls">Custom Link:</label> 
                        <input type="number" placeholder="Enter Your Custom Link"/> 
                        <button className="get-btn">Get Url</button> <br />
                        <textarea name="short-url" id="" rows="3" cols="25">

                        </textarea>
                </div>
                <div className="form">
                     <label htmlFor="urls">Enter Url 3:</label> 
                        <input type="text" placeholder="Enter Url 1" required/> 
                        <label htmlFor="urls">Enter Validity:</label> 
                        <input type="text" placeholder="Validity Of Link"/> 
                        <label htmlFor="urls">Custom Link:</label> 
                        <input type="number" placeholder="Enter Your Custom Link"/> 
                        <button className="get-btn">Get Url</button> <br />
                        <textarea name="short-url" id="" rows="3" cols="25">

                        </textarea>
                </div>
                <div className="form">
                     <label htmlFor="urls">Enter Url 4:</label> 
                        <input type="text" placeholder="Enter Url 1" required/> 
                        <label htmlFor="urls">Enter Validity:</label> 
                        <input type="text" placeholder="Validity Of Link"/> 
                        <label htmlFor="urls">Custom Link:</label> 
                        <input type="number" placeholder="Enter Your Custom Link"/> 
                        <button className="get-btn">Get Url</button> <br />
                        <textarea name="short-url" id="" rows="3" cols="25">

                        </textarea>
                </div>
                <div className="form">
                     <label htmlFor="urls">Enter Url 5:</label> 
                        <input type="text" placeholder="Enter Url 1" required/> 
                        <label htmlFor="urls">Enter Validity:</label> 
                        <input type="text" placeholder="Validity Of Link"/> 
                        <label htmlFor="urls">Custom Link:</label> 
                        <input type="number" placeholder="Enter Your Custom Link"/> 
                        <button className="get-btn">Get Url</button> <br />
                        <textarea name="short-url" id="" rows="3" cols="25">

                        </textarea>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shortener
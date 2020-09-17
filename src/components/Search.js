import React from 'react'
import userData from '../components/userdata/userinfo'
function Search() {
    return (
        <div className="container mt-5">
            <div className="search d-flex justify-content-end">
                <div>
                <input type="text" class="form-control" placeholder="Search By Name"/>
                </div>
                <div>
                <select class="custom-select" id="inputGroupSelect02">
                 
                {
                    userData.map((user)=>(
                    <option value="0" selected>{user.district}</option>
                    ))
                }
                
                </select>
                </div>
            </div>
            
        </div>
    )
}

export default Search

import React from 'react'
import './SearchOption.css'
import axios from "axios"
function SearchOption(){

  async function biometricSearch(event){

    const formdata = new FormData()
    formdata.append("file",event.target.files[0])

    const res = await axios.post("http://localhost:5000/biometric",formdata)
    if(res){
      console.log(res)
    }

  }


  return (
    <div className='SearchOption'>
        <p className='search'>Search For Person</p>
        <div>
            <div className='searchBoxes'>
              <input onChange={(event)=>biometricSearch(event)} type="file" id='file' />
              <label>By Biometrics</label>
            </div>
            <div className='searchBoxes'>
              <input type="file" id='file'></input>
              <label>By Image</label>
            </div>
            <div className='searchBoxes'>
              <input type="file" id='file'></input>
              <label>By UID Number</label>
            </div>
        </div>
    </div>
  )
}

export default SearchOption;
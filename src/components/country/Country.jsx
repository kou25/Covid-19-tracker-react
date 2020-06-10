import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

const Country=({ handleCountryChange })=> {
    const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setCountries]);
    return (
        <FormControl className="card shadow" style={{display:"flex",flexDirection:"row",width:"25%",borderRadius:"10px",
         padding:"7px 15px", marginBottom:"30px"}}>
           <i className="fa fa-search" aria-hidden="true" style={{color:"chocolate",textShadow:"1px 1px 1px black", marginRight:"15px",marginLeft:"5px", marginTop:"7px"}}></i>
            <NativeSelect style={{width:"3",
            fontWeight:"bold",color:"chocolate",
             fontFamily:"cursive"}} defaultValue="" 
             onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.map((country, i) =>
            <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
      </FormControl>
  
    )
}

export default Country;
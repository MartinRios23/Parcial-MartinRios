import React, {useState} from 'react';
import NavBar from '../navBar/NavBar';
import Table from '../table/Table';
import CountryDetails from '../countryDetails/CountryDetails';

export default function Home() {
    const [region, setRegion] = useState();
    const [country, setCountry] = useState();

    function handleSubmit(e, codigo){
        e.preventDefault();
        fetch(`https://restcountries.eu/rest/v2/callingcode/${codigo}`)
        .then(res => res.json())
        .then(res => setCountry(res[0]));
    }

    function handleCombo(e){
        console.log(e.target.value);
        fetch(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
        .then(res => res.json())
        .then(res => setRegion(res))
    }

    return (
        <div>
            <NavBar handleCombo={handleCombo} handleSubmit={handleSubmit}/>
            <Table region={region}/>
            <CountryDetails country={country}/>
        </div>
    )
};



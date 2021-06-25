import React from 'react'

function CountryDetails({country}) {
    if(!country) return null
    else return (
        <div>
            {country.name}
        </div>
    )
}

export default CountryDetails

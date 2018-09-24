import React from 'react';
import ReactDOM from 'react-dom';

// DOM Element to Render our app
const rootElement = document.querySelector("#root");

const headers ={
    headers:{
        'Authorization': `Basic ${btoa('pkiar:Sent1ment21')}`
}
}


function OrganisationUnit({organisationunit}){
    return <div><a href={organisationunit.href}>{organisationunit.name}</a></div>;
}


function OrganisationUnitList({organisationunits}){
    return (
        <div>
            <h2>OrganisationUnits</h2>
            <div>{organisationunits.map((organisationunit) => <OrganisationUnit organisationunit={organisationunit} />)}</div>
        </div>
    );
}

// Pulling organisationUnits via API
fetch('http://197.136.81.99:8082/test/api/organisationUnits?paging=false&fields=id,name,code,shortName,description', headers
).then((fetchData) => fetchData.json()).then((jsonData)=>{
    ReactDOM.render(<OrganisationUnitList organisationunits={jsonData.organisationUnits}/>, rootElement);
}).catch((error)=>{console.log('Error', error)});

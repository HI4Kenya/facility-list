import React from 'react'
import Button from '@material-ui/core/Button'
import { Input } from '@material-ui/core';


export default class SearchBar extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
            <Button>
            Search Filters
          </Button>
      <Input title="Search Name or code"/>
          <Button>
            Search
          </Button>
          <Button>
            Map Icon
          </Button>
          </div>
        );
    }
}
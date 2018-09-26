runQuery(){
this.props.runQuery(this.state.query);



}
//inside NavBar
<FilterOptions runQuery={this.runQuery)/>
runQuery (query){
this.props.runQuery(query);
}

//Inside Results Page

<NavBar runQuery={this.runQuery}/>
runQuery (query){
this.props.runQuery(query);
}


//inside App

<ResultsPage runQuery={this.runQuery}/>



runQuery (query){

query(query).then (function vl(res){

this.state.results=res.results;
});

}













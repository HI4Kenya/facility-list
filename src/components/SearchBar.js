import React, { Component } from "react";
import { searchTerm } from "../utils/worker.js";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    var counties = JSON.parse(localStorage.getItem("mfl_counties")).map(
      county => {
        return county.name;
      }
    );

    this.state = { redirect: false, term: "", counties: counties, query: "" };
    this.searchHandler = this.searchHandler.bind(this);
    this.valueChanged = this.valueChanged.bind(this);
  }

  componentDidMount() {
    var inp = document.getElementById("query");
    var currentFocus;
    inp.addEventListener("input", function(e) {
      var a,
        b,
        i,
        val = this.value;
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      document.getElementById("suggestions").appendChild(a);
      searchTerm(val).then(res => {
        console.log(res);
        res.results.map(facility => {
          b = document.createElement("DIV");
          b.innerHTML =
            "<strong>" + facility.name.substr(0, val.length) + "</strong>";
          b.innerHTML += facility.name.substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + facility.name + "'>";
          b.addEventListener("click", function(e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          a.appendChild(b);
        });
      });
    });
    inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function(e) {
      closeAllLists(e.target);
    });
  }
  searchCounty(e) {
    e.preventDefault();
    var query = this.state.query;
    console.log(this.state.query);

    this.props.query(query);
  }

  searchHandler(e) {
    e.preventDefault();
    var queryterm = document.getElementById("query").value;
    console.log("SEARCHING TERM LIKE", queryterm);
    this.props.search(queryterm);
  }

  valueChanged(e) {
    var valuesofar = e.target.value;

    if (valuesofar.search(/[0-9]/i) === 0) {
      document.getElementById("smartbtn").style = "display:block;height:50px;";
      document.getElementById("smartbtn").innerHTML = valuesofar;
      document.getElementById("smartbtn").className = "btn btn-outline-primary";
      this.setState({
        redirect: this.state.redirect,
        query: "code=" + valuesofar,
        counties: this.state.counties,
        term: this.state.term
      });
    } else {
      document.getElementById("smartbtn").style = "display:none";
    }
    var counties = JSON.parse(localStorage.getItem("mfl_counties"));
    var countynames = JSON.parse(localStorage.getItem("mfl_counties")).map(
      county => {
        return county.name;
      }
    );
    var index = countynames.indexOf(valuesofar);
    var index2 = countynames.indexOf(valuesofar.toUpperCase());
    if (index > -1 || index2 > -1) {
      document.getElementById("smartbtn").style = "display:block;height:50px;";
      document.getElementById("smartbtn").innerHTML =
        "All in " + countynames[index > -1 ? index : index2];
      document.getElementById("smartbtn").className = "btn btn-outline-primary";
      this.setState({
        redirect: this.state.redirect,
        query: "county=" + counties[index > -1 ? index : index2].id,
        counties: this.state.counties,
        term: this.state.term
      });
      document.getElementById("smartbtn").onclick = this.searchCounty.bind(
        this
      );
    }
  }

  componentWillReceiveProps(nxt) {
    var valuesofar = nxt.term;
    this.setState({
      redirect: this.state.redirect,
      term: valuesofar,
      counties: nxt.counties
    });
  }
  render() {
    return (
      <div className={this.props.cname}>
        <form
          autoComplete="off"
          style={{}}
          onSubmit={this.searchHandler.bind(this)}
        >
          <div
            className="input-group mb-3 input-group-lg"
            style={{
              height: "50px",
              boxShadow: "1px 2px 3px  #ccc",
              border: "none",
              backgroundColor: "white",
              borderRadius: "30px"
            }}
            id="suggestions"
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text btn btn-primary filtersbtn "
                id="inputGroup-sizing-lg"
                data-toggle="collapse"
                data-target="#filters_options"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{
                  backgroundColor: "#fff",
                  height: "50px",
                  cursor: "pointer",
                  borderRadius: "30px",
                  border: "0"
                }}
              >
                <i
                  className="material-icons"
                  style={{ color: "rgb(1, 126, 199)" }}
                >
                  filter_list
                </i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              style={{
                height: "50px",
                lineHeight: "100px",
                boxShadow: "0px 0px 0px  #ccc",
                border: "none",
                borderRadius: "0"
              }}
              onChange={this.valueChanged.bind(this)}
              onSubmit={this.searchHandler.bind(this)}
              id="query"
              placeholder="Search Facility Name, MFL code or Location..."
              aria-label="Search Facility Name, MFL code or Location..."
              aria-describedby="button-addon4"
            />
            <div className="input-group-prepend" id="button-addon4">
              <button
                className="btn btn-outline-primary input-group-text"
                style={{ display: "none", height: "50px" }}
                id="smartbtn"
              >
                smart detect out
              </button>
              <span
                className="input-group-text"
                style={{
                  backgroundColor: "#ffffff",
                  height: "50px",
                  width: "10%",
                  lineHeight: "100px",
                  border: "none",
                  borderRadius: "0"
                }}
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                <i className="material-icons" style={{ color: "#0584ec" }}>
                  location_on
                </i>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

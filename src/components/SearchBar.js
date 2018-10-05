import React, { Component } from "react";
import { searchTerm } from "../utils/worker.js";
import filtericon from "./filter.png";

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
    this.changePlatform = this.changePlatform.bind(this);
  }

  changePlatform(e) {
    console.log(e.target.value);
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
        res.results.map(facility => {
          b = document.createElement("DIV");
          b.innerHTML =
            "<strong>" + facility.name.substr(0, val.length) + "</strong>";
          b.innerHTML += facility.name.substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + facility.name + "'>";
          b.addEventListener("click", function(e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            document.getElementById("smartbtn").style =
              "display:block;height:50px;border-radius:30px";
            document.getElementById("smartbtn").innerHTML = "search";
            document.getElementById("smartbtn").className =
              "btn btn-outline-primary";
            closeAllLists();
          });
          a.appendChild(b);
        });
      });
    });
    document.getElementById("smartbtn").onclick = this.searchHandler.bind(this);
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
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
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
    var mflcodes = JSON.parse(localStorage.getItem("mfl_codes")).map(code => {
      return code.code;
    });

    if (mflcodes.indexOf(parseInt(valuesofar)) > -1) {
      document.getElementById("smartbtn").style =
        "display:block;height:50px;border-radius:30px";
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
      document.getElementById("smartbtn").style =
        "display:block;height:50px;border-radius:30px";
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
        <div style={{ paddingLeft: "35%" }}>
          <label
            class="container"
            value="kmhfl"
            onClick={this.changePlatform.bind(this)}
          >
            KMHFL
            <input
              type="radio"
              checked="checked"
              name="radio"
              value="kmhfl"
              onClick={this.changePlatform.bind(this)}
            />
            <span class="checkmark" />
          </label>
          <label class="container">
            DHIS2
            <input
              type="radio"
              name="radio"
              value="dhis2"
              onClick={this.changePlatform.bind(this)}
            />
            <span class="checkmark" />
          </label>
        </div>
        <form
          autoComplete="off"
          style={{ border: "none" }}
          onSubmit={this.searchHandler.bind(this)}
        >
          <div
            className="input-group mb-3 input-group-lg"
            style={{
              height: "50px",
              border: "none",
              backgroundColor: "white",
              borderRadius: "30px"
            }}
            id="suggestions"
          >
            <div className="input-group-prepend filtersbtn">
              <img
                className="input-group-text "
                id="inputGroup-sizing-lg"
                data-toggle="collapse"
                data-target="#filters_options"
                aria-expanded="false"
                aria-controls="collapseExample"
                src={filtericon}
                style={{
                  backgroundColor: "transparent",
                  height: "50px",
                  cursor: "pointer",
                  borderRadius: "30px",
                  border: "none",
                  width: "50px"
                }}
              />
            </div>
            <input
              type="text"
              className="form-control"
              style={{
                height: "50px",
                lineHeight: "100px",
                boxShadow: "0px 0px 0px  #ccc",
                border: "none",
                borderRadius: "30px",
                fontSize: "1.5em"
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
                style={{
                  display: "none",
                  height: "50px",
                  borderRadius: "30px"
                }}
                id="smartbtn"
              >
                smart detect out
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

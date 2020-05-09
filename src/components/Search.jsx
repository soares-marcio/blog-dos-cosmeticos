import React from 'react';

const Search = () => (
  <div className="col-md-6 col-sm-12">
    <form className="search" autoComplete="off">
      <div className="form-group">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Type something here" />
          <div className="input-group-btn">
            <button className="btn btn-primary"><i className="ion-search"></i></button>
          </div>
        </div>
      </div>
      <div className="help-block">
        <div>Popular:</div>
        <ul>
          <li><a href="#HTML5">HTML5</a></li>
          <li><a href="#CSS3">CSS3</a></li>
          <li><a href="#Bootstrap3">Bootstrap 3</a></li>
          <li><a href="#jQuery">jQuery</a></li>
          <li><a href="#AnguarJS">AnguarJS</a></li>
        </ul>
      </div>
    </form>
  </div>
);

export default Search;
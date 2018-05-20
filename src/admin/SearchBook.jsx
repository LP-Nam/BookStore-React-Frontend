import  React, { Component } from 'react';

class SearchBook extends Component {
    render() {
        return (
                <form  className="navbar-form pull-right" id="searchBox">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Tên Sách"  ></input>
                    </div>
                    <button type="submit" className="btn"><span className="glyphicon glyphicon-search"></span></button>
                </form>
        );
    }
}

export default SearchBook;
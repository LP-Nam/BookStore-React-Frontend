import  React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
           <tr>
                <td>1asdfasdfasdf</td>
                <td>2asdfasdfasdf</td>
                <td>3asdfasdfasdf</td>
                <td>4asdfasdfasdfasdf</td>
                <td>5asdfasfads</td>
                <td>6asdfasdfasfasfd</td>
                <td>
                    <a>
                        <span className="glyphicon glyphicon-pencil"></span>
                    </a>
                </td>
                <td>
                    <a>
                        <span className="glyphicon glyphicon-ok"></span>
                    </a>
                </td>
        </tr>
        );
    }
}

export default Book;
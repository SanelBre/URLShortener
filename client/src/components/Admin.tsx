import React from 'react';
import axios from 'axios';

export const Admin = (): JSX.Element => {
    React.useEffect(() => {
        axios.get("/api/shortener")
    }, [])

    const renderContent = React.useCallback(() => {
        return (
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        )
      }, [])

    return (
        <div className="for-admin">
            <h2 className="title"><b>URLShortener</b> | <i>Admin Panel</i></h2>
            <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Original</th>
                <th scope="col">Shortened</th>
                <th scope="col">Clicks</th>
                </tr>
            </thead>
            {renderContent()}
            </table>
        </div>
    );
}

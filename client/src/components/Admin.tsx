import React from 'react';
import axios from 'axios';

export const Admin = (): JSX.Element => {
    const [items, setItems] = React.useState<{
            date: string,
            original: string;
            shortened: string;
            visits: number;
        }[]
    >();

    React.useEffect(() => {
        fetchItems()
    }, [])

    const fetchItems = async () => {
        const response = await axios.get("/api/shortener");
        
        setItems(response?.data?.items ?? [])
    }

    const renderContent = React.useCallback(() => {
        return (
            <tbody>
                {items?.map(item => (
                    <tr key={item.date}>
                        <th scope="row">{item.date}</th>
                        <td>{item.original}</td>
                        <td>
                            <a href={`/api/${item.shortened}`}>
                                {window.location.href.split("/admin")[0]}/api/{item.shortened}
                            </a>
                        </td>
                        <td>{item.visits}</td>
                    </tr>
                ))}
            </tbody>
        )
      }, [items])

    return (
        <div className="for-admin">
            <h2 className="title"><b>URLShortener</b> | <i>Admin Panel</i></h2>
            <table className="table table-striped table-striped">
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

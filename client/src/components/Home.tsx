import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = (): JSX.Element => {

    const [url, setURL] = React.useState("");
    const [urlShort, setURLShort] = React.useState("");
  
    const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
      setURL(e.currentTarget.value);
    }
  
    const submitInput = async (e: React.MouseEvent<HTMLElement>): Promise<void> => {
      e.preventDefault();
      const response = await axios.post("/api/shortener", {
        url
      });
      setURL("");
      setURLShort(response.data.shortened);
    }
  
    const removeResponse = (): void => setURLShort("");

    return (
        <div className="for-home">
            <Link to="/admin" className="font-weight-bold align-self-end">
                Admin Panel
            </Link>
            <h2 className="title"><b>URLShortener</b> | <i>Home</i></h2>
            <form className="input-group">
                <input
                    type="url"
                    onChange={handleInput}
                    value={url}
                    className="form-control"
                    placeholder="Enter URL"
                />
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitInput}
                >
                    Shorten
                </button>
            </form>
            {urlShort && (
            <span className="response">
                <p>Shortened URL:</p>
                <h5><i>{`${window.location.href.split("/home")[0]}/api/${urlShort}`}</i></h5>
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={removeResponse}
                ></button>
            </span>
            )}
        </div>
    )
}

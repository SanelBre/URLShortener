import React from 'react';
import axios from 'axios';

export const Home = (): JSX.Element => {

    const [url, setURL] = React.useState("");
    const [urlShort, setURLShort] = React.useState("");
  
    const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
      setURL(e.currentTarget.value);
    }
  
    const submitInput = async (): Promise<void> => {
      const response = await axios.post("/api/shortener", {
        url
      });
      setURL("");
      setURLShort(response.data.shortened);
    }
  
    const removeResponse = (): void => setURLShort("");

    return (
        <div className="for-home">
            <h2 className="title"><b>URLShortener</b> | <i>Home</i></h2>
            <div className="input-group">
            <input
                type="url"
                onChange={handleInput}
                value={url}
                className="form-control"
                placeholder="Enter URL"
            />
            <button
                type="button"
                className="btn btn-primary"
                onClick={submitInput}
            >
                Shorten
            </button>
            </div>
            {urlShort && (
            <span className="response">
                <p>Shortened URL:</p>
                <h5><i>{urlShort}</i></h5>
                <button onClick={removeResponse}>x</button>
            </span>
            )}
        </div>
    )
}

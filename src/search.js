import React from 'react';

export default function Search(){
    return (
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
            placeholder="i.e. Black Panther">
            </input>
            <button className="button" type="submit">Search</button>
        </form>
    );
}
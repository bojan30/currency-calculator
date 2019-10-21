import React from 'react';

const Dropdown = ({id, onSetOpenDropdown, isActive, currencies, onSetCurrency, currency}) => {
    const setCurrencyHandler = (e, id, index) => {
       onSetCurrency(id, currencies[index]);
       onSetOpenDropdown(null);
    }
    return (
        <div className="dropdown">
            {isActive && <div onClick = {() => onSetOpenDropdown(null)} className="close-dropdown-overlay"></div>}
            <div onClick = {() => onSetOpenDropdown(id)} className="dropdown-header">
                <div className = "currency">
                    <img className="flag" src={require(`../assets/${currency.flag}`)} alt = "flag" />
                    <span>{currency.string}</span>
                </div>
                <i className= {`fas fa-angle-down ${isActive ? "active" : ""}`}></i>
            </div>
            {isActive && 
            <ul className="dropdown-menu">
                {
                currencies.map((currency, index) => {
                    return(
                        <li onClick = {(e) => setCurrencyHandler(e, id, index)} key={currency.id}>
                            <img className = "flag" src = {require(`../assets/${currency.flag}`)} alt = "flag"/>{currency.string}
                        </li>
                    );
                })
                }
            </ul>}
        </div>
    );

}

export default Dropdown;
import React, {useState} from 'react';
import DisplayResult from './DisplayResult';
import Dropdown from './Dropdown';
import logo from '../assets/logo.png';
import loader from '../assets/loader.gif';
const Form = ({currencies,fromCurrency, toCurrency, onSetCurrency, onSetQuantity, onCalculateResult, result, quantity, loading}) => {
    const [openedDropdown, setOpenDropdown] = useState(null);
    const onSetOpenDropdown = (id) =>{
        setOpenDropdown(id);
    }
    const handleInputChange = (e) => {
        onSetQuantity(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculateResult();
    }
    return(
        <form className = "form" onSubmit = {handleSubmit}>
            <h3 className="title">
                <img className="logo-img" src={logo} alt="logo" />
                <span>Currency Calculator</span>
            </h3>
            <div className = "form-group">
                <h4>From currency:</h4>
                <Dropdown
                    id = {1} 
                    onSetOpenDropdown = {onSetOpenDropdown} 
                    isActive = {openedDropdown === 1} 
                    currencies = {currencies}
                    onSetCurrency = {onSetCurrency}
                    currency = {fromCurrency}
                />
            </div>
            <div className="form-group">
                <h4>To currency:</h4>
                <Dropdown 
                    id = {2} 
                    onSetOpenDropdown={onSetOpenDropdown} 
                    isActive = {openedDropdown === 2}
                    currencies = {currencies}
                    onSetCurrency = {onSetCurrency}
                    currency={toCurrency}
                />
            </div>
            <div className = "form-group">
                <h4>Quantity:</h4>
                <input 
                    type="text"  
                    placeholder = "Quantity" 
                    onChange = {handleInputChange} 
                    value = {quantity}
                    pattern="[0-9]*"
                    />
            </div>
            <div className = "form-group">
                <h4>Result:</h4>
                <DisplayResult result = {result}/>
            </div>
            <button className = "btn">
                <span>Convert</span>
                {loading && <img className = "loader" src = {loader} alt = "loader"/>}
            </button>
        </form>
    );
}

export default Form;
import React, {useState} from 'react';
import Form from './components/Form';
import {convert} from './utils/convert';
import {currencies} from './utils/currenciesList';
import './App.css';

const App = () => {

    const [fromCurrency, setFromCurrency] = useState(currencies[3]);
    const [toCurrency, setToCurrency] = useState(currencies[0]);
    const [quantity, setQuantity] = useState(0);
    const [result, setResult] = useState(0);
    const [loading, setLoading] = useState(false);

    const calculateResult = () => {
        if(quantity){
            setLoading(true);
            const endpoint = `live`;
            const api_key = `2fa8f85b372ad27c96f887303ee07380`;
            //fetch data on every convert request to keep data fresh
            fetch(`http://apilayer.net/api/${endpoint}?access_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    setResult(convert(data.quotes, fromCurrency.value, toCurrency.value, quantity).toFixed(2));
                    setLoading(false);
                })
                .catch(err => console.log(err));
        }
    }

    const onSetCurrency = (id, currency) => {
        //check id of the clicked dropdown
        (id === 1) ? setFromCurrency(currency) : setToCurrency(currency)
    }
    const onSetQuantity = (value) => {
        setQuantity(value);
    }
    return (
        <div className = "app">
            <Form 
                currencies = {currencies} 
                fromCurrency = {fromCurrency} 
                toCurrency = {toCurrency} 
                onSetCurrency = {onSetCurrency} 
                onSetQuantity = {onSetQuantity} 
                onCalculateResult = {calculateResult} 
                result = {result} 
                quantity = {quantity}
                loading={loading}
                />
        </div>
    );

}

export default App;
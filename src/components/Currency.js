import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currency})
            </button>
            <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
                <li><a className="dropdown-item" onClick={() => handleCurrencyChange('$')}>$ Dollar</a></li>
                <li><a className="dropdown-item" onClick={() => handleCurrencyChange('£')}>£ Pound</a></li>
                <li><a className="dropdown-item" onClick={() => handleCurrencyChange('€')}>€ Euro</a></li>
                <li><a className="dropdown-item" onClick={() => handleCurrencyChange('₹')}>₹ Rupee</a></li>
            </ul>
        </div>
    );
};

export default Currency;




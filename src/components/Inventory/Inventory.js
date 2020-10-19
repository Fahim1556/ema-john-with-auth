import React from 'react';


const Inventory = () => {
    const handleAddProduct = () => {
        const product ={};
        fetch('http://localhost:5000/addProduct',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringfy(product)
        })

    }
    return (
        <div>
            <from action="">
            <p><span>Name:</span><input type="text"/></p>
            <p><span>price</span><input type="text"/></p>
            <p><span>Quantity:</span><input type="text"/></p>
            <p><span>Product Image</span><input type="file"/></p>
             <button onClick={handleAddProduct}>AddProduct</button>
            </from>
        </div>
    );
};

export default Inventory;
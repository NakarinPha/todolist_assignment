import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Container from './components/Container';

const todoList = [
    {
        type: 'Fruit',
        name: 'Apple',
    },
    {
        type: 'Vegetable',
        name: 'Broccoli',
    },
    {
        type: 'Vegetable',
        name: 'Mushroom',
    },
    {
        type: 'Fruit',
        name: 'Banana',
    },
    {
        type: 'Vegetable',
        name: 'Tomato',
    },
    {
        type: 'Fruit',
        name: 'Orange',
    },
    {
        type: 'Fruit',
        name: 'Mango',
    },
    {
        type: 'Fruit',
        name: 'Pineapple',
    },
    {
        type: 'Vegetable',
        name: 'Cucumber',
    },
    {
        type: 'Fruit',
        name: 'Watermelon',
    },
    {
        type: 'Vegetable',
        name: 'Carrot',
    },
]


function App() {
    const [todos, setTodos] = useState(todoList);
    const [product, setProduct] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);

    const types = todoList.map(todo => todo.type)
    const headers = [...new Set(types)].sort()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hi');
        const getProduct = todos.find(({ name }) => name === product);
        if (getProduct) {
            setSelectedProducts([...selectedProducts, getProduct]);
            const removeProduct = todos.filter(({ name }) => name !== product);
            setTodos(removeProduct);
        }
    }

    useEffect(() => {
        let isMounted = true;
        const myAsyncFunction = async () => {
            if (selectedProducts.length > 0) {
                console.log('hello');
                await new Promise(resolve => setTimeout(resolve, 5000));
                if (isMounted) {
                    setTodos([...todos, selectedProducts[0]]);
                    setSelectedProducts(selectedProducts.slice(1));
                }

            }
        };
        myAsyncFunction();
        return () => {
            isMounted = false;
        };
    }, [handleSubmit]);



    return (
        <div className="app">
            <div className="col1">
                {
                    todos.map((todo, index) =>
                        <Card key={index} name={todo.name} />
                    )
                }
            </div>
            <div className="col2">

                <h3>Select Product</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
                    <button type="submit">Enter</button>
                </form>

                <div className="row">
                    {
                        headers.map((header, index) =>
                            <Container key={index} header={header}>
                                {
                                    selectedProducts.map((selectedProduct, index) =>
                                        selectedProduct.type === header && <Card key={index} name={selectedProduct.name} />

                                    )
                                }
                            </Container>
                        )
                    }
                </div>

            </div>
        </div>
    );
}
//asdfdf
export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, Map } from 'immutable';

const CounterHook = () => {
    const [index, setIndex] = useState(0);
    const [limit, setLimit] = useState(index + 5);
    const [data, setData] = useState(List([]));

    useEffect(() => {
        console.log('case => componentDidMount');
        getData();
        return () => {
            //unMount시에 Clean Up 시킬것들
            console.log('case componentWillUnmount');
        };
    }, []);
    // useEffect의 2번째 파라미터에 빈 배열을 넘겨서 최초에만 실행되도록(=componentDidMount)

    const getData = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts', {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((Response) => {
                for (let i = index; i < limit; i++) {
                    setData((data) => data.push(Map(Response.data[i])));
                }
                setLimit(limit + 5);
                setIndex(index + 5);
                console.log(data);
            });
        return data;
    };

    return (
        <div>
            <h1>index = {index}</h1>
            <h1>limit = {limit}</h1>
            <button onClick={getData}>fetch</button>
            {data.length !== 0 &&
                data.map((data, index) => {
                    return (
                        <div key={index}>
                            <div style={{ backgroundColor: 'yellowgreen', border: '1px solid black', lineHeight: '2.1rem' }}>{data.get('title')}</div>
                        </div>
                    );
                })}
        </div>
    );
};
export default CounterHook;

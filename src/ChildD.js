import ChildB from './ChildB';
import React, { useContext } from 'react';
import {data, data1} from './App';

export default function ChildD(){
    let name = useContext(data);
    let age = useContext(data1);
    return(
  <>
  <p>{name} and {age}</p>
  </>

    );
}
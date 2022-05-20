import React from 'react';
import IExampleObject from '../interfaces/ExampleObject';

interface IWithoutSpreadingProps {
    additionalObjects: ReadonlyArray<IExampleObject>;
}

/* 
* An example of concatenating two arrays, without the use of the spread operator. 
*/
const WithoutSpreading: React.FC<IWithoutSpreadingProps> = ({additionalObjects}) => {
    const exampleArray: ReadonlyArray<IExampleObject> = React.useMemo(() => {
        const concatExampleObjects: Array<IExampleObject> = [{title: 'first'}, {title: 'second'}];
        additionalObjects.forEach(x => {concatExampleObjects.push(x)})
        
        return concatExampleObjects;
    }, [additionalObjects])
    
    return (
        <div>{exampleArray.map(x => x.title)}</div>
    )
}

export default WithoutSpreading;
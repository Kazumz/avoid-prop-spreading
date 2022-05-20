import React from 'react';
import IExampleObject from '../interfaces/ExampleObject';

interface IWithoutSpreadingProps {
    additionalObjects: ReadonlyArray<IExampleObject>;
}

/* 
* An example of concatenating two arrays using the spread operator. 
*/
const Spreading: React.FC<IWithoutSpreadingProps> = ({additionalObjects}) => {
    const exampleArray: ReadonlyArray<IExampleObject> = React.useMemo(() => {
        return [{title: 'first'}, {title: 'second'}, ...additionalObjects];
    }, [additionalObjects])

    return (
        <div>{exampleArray.map(x => x.title)}</div>
    )
}

export default Spreading;
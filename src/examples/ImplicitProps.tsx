import React from 'react';

interface IImplicitProps {
    id: string;
    title: string;
    // notCaughtByLinter: boolean; // <-- uncomment me
}

/*
Uses spreading to pass down it's props to the child sub component implicitly. 
Any additional props implemented in the parent component will also be passed down to the child sub component.
 */
const ImplicitProps: React.FC<IImplicitProps> = (props) => {
    return (
        <SubComponent {...props} />
    )
}

interface ISubComponentProps {
    id: string;
    title: string;
}

const SubComponent: React.FC<ISubComponentProps> = ({id, title}) => {
    return (
        <span>{id} {title}</span>
    )
}

export default ImplicitProps;
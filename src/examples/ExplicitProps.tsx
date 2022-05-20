import React from 'react';

interface IExplicitProps {
    id: string;
    title: string;
}

/*
Explicitly passes down it's props to the child sub component. 
 */
const ExplicitProps: React.FC<IExplicitProps> = ({id, title}) => {
    return (
        <SubComponent id={id} title={title} />
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

export default ExplicitProps;
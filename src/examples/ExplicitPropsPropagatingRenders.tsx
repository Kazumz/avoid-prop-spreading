import React, { useEffect } from 'react';

interface IExplicitProps {
    id: string;
    title: string;
    notCaughtByLinter: boolean;
}

/*
Uses spreading to pass down it's props to the child sub component implicitly where one of those props changes frequently. 
Any additional props implemented in the parent component will also be passed down to the child sub component.
 */
const ExplicitPropsPropagatingRenders: React.FC<IExplicitProps> = (props) => {
    const [parsedProps, setParsedProps] = React.useState<IExplicitProps>(props);
    useEffect(() => {
        // Negate 'notCaughtByLinter' every 500ms
        const interval = setInterval(() => {
            setParsedProps(prevState => ({...prevState, notCaughtByLinter: !prevState.notCaughtByLinter}))
        }, 500)

        return function dispose() {
            clearInterval(interval);
        }
    }, [])
    
    console.log('ExplicitPropsPropagatingRenders.Render')
    return (
        <SubComponent id={parsedProps.id} title={parsedProps.title} />
    )
}

interface ISubComponentProps {
    id: string;
    title: string;
}

/*
Memoised wrapper to act like a PureComponent whereby the props will be shallow compared before deciding to render again.
This component does not render as we are not passing it extraneous props and not changing id or title in the parent component.
 */
const SubComponent: React.FC<ISubComponentProps> = React.memo(({id, title}) => {
    console.log('ExplicitPropsPropagatingRenders.SubComponent.Render')
    return (
        <span>{id} {title}</span>
    )
})

export default ExplicitPropsPropagatingRenders;
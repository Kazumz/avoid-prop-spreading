import React, { useEffect } from 'react';

interface IImplicitProps {
    id: string;
    title: string;
    notCaughtByLinter: boolean;
}

/*
Uses spreading to pass down it's props to the child sub component implicitly where one of those props changes frequently. 
Any additional props implemented in the parent component will also be passed down to the child sub component.
 */
const MemoImplicitPropsPropagatingRenders: React.FC<IImplicitProps> = (props) => {
    const [parsedProps, setParsedProps] = React.useState<IImplicitProps>(props);
    useEffect(() => {
        // Negate 'notCaughtByLinter' every 500ms
        const interval = setInterval(() => {
            setParsedProps(prevState => ({...prevState, notCaughtByLinter: !prevState.notCaughtByLinter}))
        }, 500)

        return function dispose() {
            clearInterval(interval);
        }
    }, [])

    console.log('MemoImplicitPropsPropagatingRenders.Render')
    return (
        <SubComponent {...parsedProps} />
    )
}

interface ISubComponentProps {
    id: string;
    title: string;
}

/*
Memoised wrapper to act like a PureComponent whereby the props will be shallow compared before deciding to render again.
Unfortunately, this component is passed 'notCaughtByLinter' so will re-render anyway.
 */
const SubComponent: React.FC<ISubComponentProps> = React.memo(({id, title}) => {
    console.log('MemoImplicitPropsPropagatingRenders.SubComponent.Render')
    return (
        <span>{id} {title}</span>
    )
})

export default MemoImplicitPropsPropagatingRenders;
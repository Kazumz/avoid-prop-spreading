import React from 'react';

import './App.scss';

import { ReactComponent as Logo } from './assets/logo.svg';
import Spreading from './examples/Spreading';
import Card from './components/Card';
import WithoutSpreading from './examples/WithoutSpreading';
import ExplicitProps from './examples/ExplicitProps';
import ImplicitProps from './examples/ImplicitProps';
import ImplicitPropsPropagatingRenders from './examples/ImplicitPropsPropagatingRenders';
import MemoImplicitPropsPropagatingRenders from './examples/MemoImplicitPropsPropagatingRenders';
import ExplicitPropsPropagatingRenders from './examples/ExplicitPropsPropagatingRenders';

/*
Comment out any examples you do not want to run concurrently.
 */
const App: React.FC = () => {
    return (
        <div className="app">
            <header className="app__header">
                <Logo className="app__header-logo"/>
            </header>

            <main className="app__main">
                <Card title='Without Spreading'>
                    <WithoutSpreading
                        additionalObjects={[{ title: 'first additional' }, { title: 'second additional' }]}/>
                </Card>
                <Card title='Spreading'>
                    <Spreading additionalObjects={[{ title: 'first additional' }, { title: 'second additional' }]}/>
                </Card>
                <Card title='Explicit Props'>
                    <ExplicitProps id='Id.1' title='Title.1'/>
                </Card>
                <Card title='Implicit Props'>
                    <ImplicitProps id='Id.2' title='Title.2'/>
                </Card>
                <Card title='Implicit Props (Propagating renders)'>
                    <ImplicitPropsPropagatingRenders id='Id.3' title='Title.3' notCaughtByLinter={false}/>
                </Card>
                <Card title='Memo Implicit Props (Propagating renders)'>
                    <MemoImplicitPropsPropagatingRenders id='Id.4' title='Title.4' notCaughtByLinter={false}/>
                </Card>
                <Card title='Explicit Props (Propagating renders)'>
                    <ExplicitPropsPropagatingRenders id='Id.5' title='Title.5' notCaughtByLinter={false}/>
                </Card>
            </main>
        </div>
    );
}

export default App;
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        characterId: null
    }

    onCharSelected = (id) => {
        this.setState({
            characterId: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <RandomChar/>
                    <div className="char__content">
                        <CharList onCharSelected={this.onCharSelected} />
                        <ErrorBoundary>
                            <CharInfo charId={this.state.characterId} />
                        </ErrorBoundary>
                    </div>
                </main>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default App;
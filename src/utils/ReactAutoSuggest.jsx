import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import '../styles/ReactAutoSuggest.css';
 

 
class ReactAutoSuggest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //value: '',
            documentName: '',
            suggestions: [],
            autoSuggestTitle : props.data.autoSuggestTitle,
            documentList: props.data.documentList
        };
    }

    clearAutoSearch = () => {
        this.setState({
            documentName: ''
        });
    };
 
    onChange = (event, { newValue }) => {
        this.setState({
            documentName: newValue
        });
    };
 
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };
 
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

   
    escapeRegexCharacters = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    getSuggestions = (value) => {
        const escapedValue = this.escapeRegexCharacters(value.trim());
    
        if (escapedValue === '') {
            return [];
        }
  
        const regex = new RegExp('\\b' + escapedValue, 'i');
    
        return this.state.documentList.filter(doc => regex.test(this.getSuggestionValue(doc)));
    }
 
    getSuggestionValue = suggestion => suggestion.name;

    renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    )
 
    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: this.state.autoSuggestTitle,
            value: this.state.documentName,
            onChange: this.onChange
        };
 
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default ReactAutoSuggest;
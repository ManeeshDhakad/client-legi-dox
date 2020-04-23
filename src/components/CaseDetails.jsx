
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {getIndianStateList, getDocumentList} from '../utils/Utils.jsx';
import  '../styles/CaseDetails.css';
import ReactAutoSuggest from '../Utils/ReactAutoSuggest.jsx';
import axios from 'axios';
const config = require('../config/config.jsx');

class CaseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fpName: '',
            fpContact: '',
            fpAddress: '',
            spName: '',
            spContact: '',
            spAddress: '',
            selectIndianState: 'select',
            indianStateList: getIndianStateList(),
            documentList: [],
            autoSuggestTitle: 'Type lease or agreement',
        }

        this.callJavaAPIAllDocs();
        //this.clearInputFields = this.clearInputFields.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
        event.preventDefault();
    }

    clearInputFields() {
        
        this.setState({
            fpName: '',
            fpContact: '',
            fpAddress: '',
            spName: '',
            spContact: '',
            spAddress: '',
            selectIndianState: 'select',
        });
    }

    callJavaAPIAllDocs() {
        try {
            axios.get(config.API_ALL_DOCS_URL)
            .then(res => {
                console.log(res)
                this.setState({
                    documentList : res.data,
                })
            }).catch(err => {
                console.log("Error" + err);
            });
        } catch (err) {
            console.error(err);
        }
    }

    clearAutoSearch() {
        this.reactAutoSearch.clearAutoSearch();
    }

    render() {
        return (
            <div className="container">
                <form>
                <div className="form-group row">
                    <div className="col-2"></div>
                    <div className="col-8"><br />
                        <div className="row">
                            <div className="col-3"><label>States</label></div>
                            <div className="col-5">
                                <select name="selectIndianState" className="form-control" value={this.state.selectIndianState} onChange={this.handleInputChange}>
                                    <option value="select">Select State</option>
                                    {this.state.indianStateList.map((indiaState, index) => 
                                        <option key={index} value={indiaState.key}>{indiaState.value}</option>
                                    )}
                                </select>
                            </div>
                        </div>
   
                        <div className="row">
                            <div className="col-3"><label>Document</label></div>
                            <div className="col-5">
                                <ReactAutoSuggest data={this.state} ref={reactAutoSearch => this.reactAutoSearch = reactAutoSearch} />
                            </div>
                        </div>
                        <br /> <br />
                        <div className="row">
                            <div className="col-6">
                                <label>First party details</label>
                                <div className="row">
                                    <div className="col-3"><label>Name</label></div>
                                     <div className="col-9">
                                        <input type="text" name="fpName" value={this.state.fpName} className="form-control" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><label>Contact</label></div>
                                    <div className="col-9">
                                        <input type="text" name="fpContact" value={this.state.fpContact} className="form-control" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><label>Address</label></div>
                                    <div className="col-9">
                                        <textarea name="fpAddress" value={this.state.fpAddress} className="form-control" onChange={this.handleInputChange}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <label>Second party details</label>
                                <div className="row">
                                    <div className="col-3"><label>Name</label></div>
                                    <div className="col-9">
                                        <input type="text" name="spName" value={this.state.spName} className="form-control" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><label>Contact</label></div>
                                    <div className="col-9">
                                        <input type="text" name="spContact" value={this.state.spContact} className="form-control" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3"><label>Address</label></div>
                                    <div className="col-9">
                                        <textarea name="spAddress" value={this.state.spAddress} className="form-control" onChange={this.handleInputChange} ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-4">       
                                <Link  to={{
                                        pathname: "/moneySuit",
                                        //data: this.state.caseFacts // your data array of objects
                                    }}><button type="button" className="btn btn-outline-primary btn-lg">Continue</button>
                                </Link>
                            </div>
                            <div className="col-6"><button type="button" onClick={()=>{ this.clearInputFields(); this.clearAutoSearch() }} className="btn btn-outline-dark btn-lg">Clear</button></div>
                        </div>
                       
                    </div>
                    <div className="col-2"></div>
                </div>
                </form>
                <br /><br />
            </div>
        );
    }
}

export default CaseDetails;
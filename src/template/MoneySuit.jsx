
import React, {Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../styles/MoneySuit.css';
const config = require('../config/config.jsx');
import axios from 'axios';

class MoneySuit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            factsTextBox: [],
            factsDropDown: [],
            finalDocument: '',
            // BorrowedAmount:  this.props.location.data.borrowedAmount,
            // DefendantName: this.props.location.data.defendantName,
        };

        this.callJavaAPIMap()
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

    // resolveAfter20Seconds() { 
        
    //       setTimeout(() => {
    //         resolve(x);
    //       }, 20000);

    //   }

    callJavaAPIMap() {
        let facts = {};
        try {
            axios.get(config.API_MAP_URL)
            .then(res => {
                let factsJSON = JSON.stringify(res.data);
                JSON.parse(factsJSON, (key, value) => {
                    if(key !== "" && value == "TextBox") {
                        this.state.factsTextBox.push({
                            name : key,
                            value : value
                        })
                        this.setState({ [key] : ''})
                    } else if(key !== "" && value == "Dropdown") {
                        this.state.factsDropDown.push({
                            name : key,
                            value : value
                        })
                        this.setState({ [key] : ''})
                    }
                });
        
                this.setState({
                    factsTextBox : this.state.factsTextBox,
                    factsDropDown : this.state.factsDropDown
                }) 
            }).catch(err => {
                console.log("Error" + err);
            });
    
            //this.resolveAfter2Seconds();         
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const factTableHTML = 
        <table className="table" border="2">
            <thead>
                <tr>
                    <th className="bg-primary" colSpan="2">Facts</th> 
                </tr>
            </thead>
            <tbody>
                {this.state.factsTextBox.map((fact, index) => 
                    <tr>
                        <td key={'textBoxLabel' + index} className="bg-primary">{fact.name}</td>
                        <td key={'textBox' + index}><input type="text" className="form-control" name={fact.name}  onChange={this.handleInputChange} /></td>
                    </tr>
                )}
                {this.state.factsDropDown.map((fact, index) => 
                    <tr>
                        <td key={'dropDownLabel' + index} className="bg-primary">{fact.name}</td>
                        <td key={'dropDown' + index}>
                            <select className="form-control">
                                <option value="volvo">Select {fact.name}</option>
                            </select>
                        </td>
                    </tr>
                )}
                
            </tbody>
        </table>
        
        return (
            <div className="container">
                <br />
                <div className="alert alert-dark" role="alert">
                    <h6>Money Suit Agreement</h6>
                </div>
                <div className="row">
                    
                    {/* <div className="col-1"></div> */}
                    <div className="col-8"><br />   
                    
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      
                        </form>
                        <br />

                        <CKEditor
                                editor={ ClassicEditor }
                                data={"<p> Suit for the recovery of Rs. <b> " + this.state.BorrowedAmount + "</b> along with cost and interest @ 24% pa" +
                                    "<br /><br /> Plaint under Order XXXVII of the Code of Civil Procedure 1908 as mentioned in the suit" + 
                                    "<br /><br />  Respectfully Sheweth : <br />" +
                                    "1. That present suit is filed under the specific provisions under Order XXXVII of the Code" + 
                                    "of Civil Procedure, 1908.<br /><br />" +
                                    "2. That no relief, which does not fall within the ambit of this rule, has been claimed" +
                                    "in the plaint.<br /><br />" +
                                    "3. The defendant <b> " + this.state.DefendantName + " </b> cement and sand etc. from the plaintiff.<br /><br />" +
                                    "4. That the defendant issued the Cheque bearing No. __ dated __  for the sum of Rs. <b><br />" +
                                    this.state.BorrowedAmount + "</b> drawn at bank __, to the plaintiff towards the consideration of <br />" + 
                                    "the above articles purchased from the plaintiff. <br /><br />" +
                                    "5. That the plaintiff presented the Cheque through his own bankers, ie:__, but the same<br />" +
                                    "was returned unpaid, on __ with the endorsement of insufficiency of funds in the account <br />" + 
                                    "the defendant as per the remarks of the banker of the defendent. <br /></p>"}
                                onInit={ editor => { 
                                    const data = editor.getData();
                                    this.setState({
                                        finalDocument : data
                                    });
                                    console.log(data);
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    this.setState({
                                        finalDocument : data
                                    })
                                    //console.log(data);
                                } }
                                onBlur={ ( event, editor ) => {} }
                                onFocus={ ( event, editor ) => {} }
                                
                                />
                            </div>
                            <div className="col-4">
                                <form>
                                <div className="form-group factsMargin">
                                    {factTableHTML}
                                </div>
                                </form>
                            </div>
                   
                    {/* <div className="col-1"></div> */}
                </div><br /><br />
            </div>
        );
    }
}

export default MoneySuit;
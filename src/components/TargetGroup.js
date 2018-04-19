import React, { Component } from 'react';
import Http from '../services/Http';
import Title from './Title';

class TargetGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criteria: []
        };
    }

    componentWillMount() {
        Http.GET('getCriteria')
        .then(response => {
            this.setState({
                criteria: [
                    ...this.state.criteria,
                    ...response.data
                ]
            });
            console.log('Success criteria: ', JSON.stringify(this.state.criteria, null, 2));
        })
        .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <Title value="Target Group"/>
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">TG Name</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       placeholder="TG Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="criteria">Criteria</label>
                                <select multiple className="form-control selectpicker" id="criteria">
                                    <optgroup label="Picnic">
                                    <option>1</option>
                                    <option>2</option>
                                    </optgroup>
                                    <optgroup label="Camping">
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </optgroup>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-8">
                        Lorem
                    </div>
                </div>
            </div>
        );
    }
}

export default TargetGroup;
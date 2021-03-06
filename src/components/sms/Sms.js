import React, { useState } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Scrollbars } from 'react-custom-scrollbars';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Checkbox = props => {
    const [checkbox, setCheckbox] = useState(false);

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={checkbox}
                onChange={() => setCheckbox(!checkbox)}
                id="defaultCheck1"
            />
            <label className="form-check-label" for="defaultCheck1">
                {props.text}
            </label>
        </div>
    );
};

const Sms = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = date => {
        setStartDate();
    };
    const selectRowProp = {
        mode: 'checkbox', // or checkbox
    };
    const products = [
        {
            id: 1,
            name: 'NeuroN szkolenia',
            acc: 'Main Account',
        },
        {
            id: 2,
            name: 'NeuroN szkolenia',
            acc: 'Main Account',
        },
        {
            id: 3,
            name: 'NeuroN szkolenia',
            acc: 'Main Account',
        },
        {
            id: 4,
            name: 'NeuroN szkolenia',
            acc: 'Main Account',
        },
        {
            id: 5,
            name: 'NeuroN szkolenia',
            acc: 'Main Account',
        },
        {
            id: 6,
            name: 'NeuroN szkolenia',
            acc: 'Main Account',
        },
        {
            id: 7,
            name: 'NeuroN szkolenia',
            acc: 'Main Account',
        },
    ];
    return (
        <div className="sms">
            <Scrollbars style={{ height: '90%' }}>
                <form id="contact-form" role="form">
                    {/* <div className="messages">dasdasdas</div> */}

                    <div className="controls">
                        <div className="container">
                            <div className="row"></div>
                            <div className="row mt-md-0 mt-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="form_message">Message *</label>
                                        <textarea
                                            id="form_message"
                                            name="message"
                                            className="form-control"
                                            rows="4"
                                            required="required"
                                            data-error="Please, leave us a message."
                                        ></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3>Termin realizacji</h3>

                                    <Checkbox text="Natychmiast" />
                                    <Checkbox text="W określonym czasie:" />
                                    <div className="message-time">
                                        <DatePicker selected={startDate} onChange={handleChange} />
                                        <Checkbox text="Powtarzaj wysyłkę:" />

                                        <div className="message-time-repeat">
                                            Wyślij łącznie
                                            <input type="text" className="sms-select" />
                                            wiadomości. Jedna wiadomość co
                                            <select
                                                id="form_need"
                                                name="need"
                                                className="form-control sms-select"
                                                data-error="Please specify your need."
                                            >
                                                <option value="1" selected>
                                                    1
                                                </option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                            <select
                                                id="form_need"
                                                name="need"
                                                className="form-control sms-select"
                                                data-error="Please specify your need."
                                            >
                                                <option value="dni">days</option>
                                                <option value="tygodni">weeks</option>
                                                <option value="miesięcy">months</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="submit"
                                        className="btn btn-success btn-send"
                                        value="Send message"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-8">
                            <BootstrapTable selectRow={selectRowProp} data={products} version="4">
                                <TableHeaderColumn isKey dataField="id">
                                    ID
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                                <TableHeaderColumn dataField="acc">Account</TableHeaderColumn>
                            </BootstrapTable>
                        </div>
                    </div>
                </div>
            </Scrollbars>
        </div>
    );
};

export default Sms;

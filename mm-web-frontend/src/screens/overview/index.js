import React from 'react';
import { Form, Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { Button } from '../../components';

const columnFlex = {
    display: "flex",
    flexDirection: "column",
}

const rowFlex = {
    display: "flex",
    flexDirection: "row",
}

class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={{
                ...columnFlex,
                flex: 1,
            }}>
                <div style={{
                    ...rowFlex,
                    flex: 1,
                    border: "1px solid #ccc",
                }}>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        fontWeight: "bolder",
                        fontSize: "xx-large",
                        color: "#9b9b9b",
                        marginLeft: "15px"
                    }}>OVERVIEW </div>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        alignItems: "center",
                        fontWeight: "bolder",
                        fontSize: "xx-large",
                        color: "#9b9b9b",
                        marginRight: "15px",
                        justifyContent: "flex-end",
                    }}>calendar </div>
                </div>
                <div style={{
                    ...rowFlex,
                    flex: 11,
                }}>
                    <div style={{
                        display: "flex",
                        flex: 1,
                        border: "1px solid #ccc",
                    }}>
                        <div style={{
                            width: "100%"
                        }}>
                            <Table>
                                <tr>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>Category</td>
                                    <td>Description</td>
                                    <td>Amount</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>Category</td>
                                    <td>Description</td>
                                    <td>Amount</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>Category</td>
                                    <td>Description</td>
                                    <td>Amount</td>
                                </tr>
                            </Table>
                        </div>
                    </div>
                    <div style={{
                        ...columnFlex,
                        flex: 1,
                    }}>
                        <div style={{
                            display: "flex",
                            flex: 1,
                            border: "1px solid #ccc",
                        }}>expense graphs </div>
                        <div style={{
                            display: "flex",
                            flex: 1,
                            border: "1px solid #ccc",
                        }}>
                            <Form style={{
                                width: "25%",
                                backgroundColor: "white",
                                borderRadius: "4pt",
                                padding: "10pt",
                                width: "100%"
                            }}>
                                <div style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flex: "1",
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                    <Form.Group style={{
                                        fontWeight: "bold",
                                        color: "#9b9b9b",
                                        width: "100%"
                                    }} controlId="formBasicEmail">
                                        <Form.Label>ADD EXPENSE</Form.Label>
                                    </Form.Group>

                                    <Form.Group style={{ width: "100%" }} controlId="formBasicEmail">
                                        <Form.Control placeholder="Select Date" type="text" name="expenseDate" onChange={(e) => {
                                            this.setState((prevState) => ({
                                                loginPayload: {
                                                    ...prevState.loginPayload,
                                                    expenseDate: e.target.value
                                                }
                                            }))
                                        }} required />
                                    </Form.Group>

                                    <Form.Group style={{ width: "100%" }} controlId="formBasicEmail">
                                        <Form.Control placeholder="Enter Amount" type="text" name="amount" onChange={(e) => {
                                            this.setState((prevState) => ({
                                                loginPayload: {
                                                    ...prevState.loginPayload,
                                                    amount: e.target.value
                                                }
                                            }))
                                        }} required />
                                    </Form.Group>

                                    <Form.Group style={{ width: "100%" }} controlId="formBasicPassword">
                                        <Form.Control placeholder="Select Category" type="password" name="category" onChange={(e) => {
                                            this.setState((prevState) => ({
                                                loginPayload: {
                                                    ...prevState.loginPayload,
                                                    category: e.target.value
                                                }
                                            }))
                                        }} required />
                                    </Form.Group>

                                    <Form.Group style={{ width: "100%" }} controlId="formBasicPassword">
                                        <Form.Control placeholder="Classification" type="password" name="classification" onChange={(e) => {
                                            this.setState((prevState) => ({
                                                loginPayload: {
                                                    ...prevState.loginPayload,
                                                    classification: e.target.value
                                                }
                                            }))
                                        }} required />
                                    </Form.Group>

                                    <Form.Group style={{ width: "100%" }} controlId="formBasicPassword">
                                        <Form.Control placeholder="Description" type="password" name="description" onChange={(e) => {
                                            this.setState((prevState) => ({
                                                loginPayload: {
                                                    ...prevState.loginPayload,
                                                    description: e.target.value
                                                }
                                            }))
                                        }} required />
                                    </Form.Group>
                                    <Button payload={this.state.loginPayload} />
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Overview);
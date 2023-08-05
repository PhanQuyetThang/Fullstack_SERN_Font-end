import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserManage.scss';
import { emitter } from '../../utils/emitter';


class UserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {   //Listen emitter from parent
            //Reset state
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })

    }

    componentDidMount() {
    }


    toggle = () => {
        this.props.toggleFromParent()
    }



    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value; //copyState[id] == copyState['email'] (id == 'email') == this.state.email
        this.setState({
            ...copyState
        })
    }

    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'email', 'password', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {  //E.g: i=0 ('email' in arrInput) => this.state[arrInput[i]] == this.state.email 
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidInput();
        if (isValid) {
            //Call API create modal
            this.props.createNewUser(this.state)
        }


    }
    render() {
        return (

            < Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }
                }
                className={'user-modal-container'}
                size="lg"
            >
                <ModalHeader className='modal-header' toggle={() => { this.toggle() }}></ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="form-row row">
                            <div className="col-12 mt-3"><h3>Create a new user</h3></div>
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={(event) => { this.handleOnChangeInput(event, "firstName") }}
                                    value={this.state.firstName}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={(event) => { this.handleOnChangeInput(event, "lastName") }}
                                    value={this.state.lastName}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email"
                                    onChange={(event) => { this.handleOnChangeInput(event, "email") }}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(event) => { this.handleOnChangeInput(event, "password") }}
                                    value={this.state.password}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="inputAddress">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    placeholder="1234 Main St"
                                    onChange={(event) => { this.handleOnChangeInput(event, "address") }}
                                    value={this.state.address}
                                />
                            </div>
                            {/* <div classname="form-group col-md-6">
                                <label for="inputCity">Phone Number</label>
                                <input
                                    type="text"
                                    classname="form-control"
                                    name="phonenumber"
                                    onChange={(event)=>{this.handleOnChangeInput(event, "phonenumber")}}
                                />
                            </div> */}

                            {/* <div classname="form-group col-md-6">
                                <label for="inputState">Sex</label>
                                <select name="gender" classname="form-control">
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            </div>
                            <div classname="form-group col-md-6">
                                <label for="inputZip">Role</label>
                                <select name="roleId" classname="form-control">
                                    <option value="1">Admin</option>
                                    <option value="2">Doctor</option>
                                    <option value="3">Patient</option>
                                </select>
                            </div> */}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className='user-modal-footer'>
                    <Button
                        className='btn-to-do'
                        color="primary"
                        onClick={() => { this.handleAddNewUser() }}
                    >
                        Add new
                    </Button>
                    <Button className='btn-cancel' color="secondary" onClick={() => { this.toggle() }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);




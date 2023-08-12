import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import UserModal from './UserModal';
import { emitter } from '../../utils/emitter';
import EditUserModal from './EditUserModal';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenUserModal: false,
            isOpenEditUserModal: false,
            userEdit: {},
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            }, () => {
                console.log('Check user: ', this.state.arrUsers)
            })
        }
        console.log('get user: ', response)
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenUserModal: true
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenUserModal: !this.state.isOpenUserModal
        })
    }
    toggleEditUserModal = () => {
        this.setState({
            isOpenEditUserModal: !this.state.isOpenEditUserModal,
        })
    }

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsersFromReact()
                this.setState({
                    isOpenUserModal: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')  //Fire emitter to listener
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleEditUser = async (user) => {
        this.setState({
            isOpenEditUserModal: true,
            userEdit: user,
        });

    }
    doEditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode == 0) {
                this.setState({
                    isOpenEditUserModal: false
                })
                this.getAllUsersFromReact();
            } else {
                alert(res.errMessage)
            }

        } catch (e) {
            console.log(e)

        }

    }

    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errCode === 0) {
                await this.getAllUsersFromReact()
            } else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }

    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <UserModal
                    isOpen={this.state.isOpenUserModal}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenEditUserModal &&
                    <EditUserModal
                        isOpen={this.state.isOpenEditUserModal}
                        toggleFromParent={this.toggleEditUserModal}
                        currentUser={this.state.userEdit} //Truyen Props sang cho child
                        editUser={this.doEditUser}
                    />
                }
                <div className='title text-center'>Manage users</div>
                <div className='mx-3'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => this.handleAddNewUser()}
                    >
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </div>
                <div className='users-table mt-3 mx-3'>

                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Adress</th>
                                <th>Actions</th>
                            </tr>

                            {arrUsers && arrUsers.map((item, incex) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button
                                                    className='btn-edit'
                                                    onClick={() => this.handleEditUser(item)}
                                                >
                                                    <i className="fas fa-edit">
                                                    </i></button>
                                                <button
                                                    className='btn-delete'
                                                    onClick={() => this.handleDeleteUser(item)}
                                                >
                                                    <i class="fas fa-trash">
                                                    </i></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div >
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {

        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <div className='header-logo-container'>
                                <i class="fas fa-bars"></i>
                                <div className='header-logo'></div>
                            </div>

                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                <div><FormattedMessage id="homeheader.searchdoctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='language-vi'>Vn</div>
                            <div className='language-en'>En</div>
                            <div className='support'>

                                <div className='support-content'>
                                    <span><i class="fas fa-question-circle"></i>
                                        <FormattedMessage id="homeheader.support" />
                                    </span>
                                    <a className='phone' href='tel: 0389415925'>038 941 5925</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1" /></div>
                        <div className='title2'><FormattedMessage id="banner.title2" /></div>
                        <div className='search'>
                            <i class="fas fa-search"></i>
                            <input type='text' placeholder='Tìm kiếm...' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-hospital-alt"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.specialized-examination" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-laptop"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.remote-examination" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-file-medical"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.general-examination" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-vial"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.medical-test" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-user-md"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.mental-health" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i class="fas fa-stethoscope"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="banner.dental-examination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

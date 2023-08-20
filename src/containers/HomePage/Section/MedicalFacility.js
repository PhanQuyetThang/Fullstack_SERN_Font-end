import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <img className="bg-image section-medical-facility" />
                                <h3>Bệnh viện Ung bướu Hưng Việt 1</h3>
                            </div>
                            <div className='section-customize'>
                                <img className="bg-image section-medical-facility" />
                                <h3>Bệnh viện Ung bướu Hưng Việt 2</h3>
                            </div>
                            <div className='section-customize'>
                                <img className="bg-image section-medical-facility" />
                                <h3>Bệnh viện Ung bướu Hưng Việt 3</h3>
                            </div>
                            <div className='section-customize'>
                                <img className="bg-image section-medical-facility" />
                                <h3>Bệnh viện Ung bướu Hưng Việt 4</h3>
                            </div>
                            <div className='section-customize'>
                                <img className="bg-image section-medical-facility" />
                                <h3>Bệnh viện Ung bướu Hưng Việt 5</h3>
                            </div>
                            <div className='section-customize'>
                                <img className="bg-image section-medical-facility" />
                                <h3>Bệnh viện Ung bướu Hưng Việt 6</h3>
                            </div>
                            <div className='section-customize'>
                                <img className="bg-image section-medical-facility" />
                                <h3>Bệnh viện Ung bướu Hưng Việt 7</h3>
                            </div>
                            <div className='section-customize'>
                                <img className="bg-image section-medical-facility" />
                                <h3>Bệnh viện Ung bướu Hưng Việt 8</h3>
                            </div>
                        </Slider>
                    </div>

                    <div style={{ height: '300px' }}></div>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);

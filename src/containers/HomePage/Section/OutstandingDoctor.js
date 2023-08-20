import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";

class OutstandingDoctor extends Component {

    render() {

        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa 1</div>
                                    <div>Cơ xương khớp</div>
                                </div>

                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa 2</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa 3</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa 4</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa 5</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa 6</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa 7</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <img className="bg-image section-outstanding-doctor" />
                                </div>
                                <div className='position text-center'>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên khoa 8</div>
                                    <div>Cơ xương khớp</div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);

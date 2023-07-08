import { Container } from "react-bootstrap";
import './header.css';
import { Fragment, useState } from "react";

const Header = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <div className="header position-relative">
            <Container>
                <div className="header-box" style={{height:"116px"}}>
                        <img src="/images/download 1.svg" alt="logo" className="logo-img position-relative z-3" />
                        {window.location.pathname === "/dashboard" 
                            ? (<Fragment>
                                    <div className={`${showNav ? "start-0" : "start-100"} nav-phone`} style={{width: "85%", height:"106px"}}>
                                        <div className="search position-relative" style={{width: "45%"}}>
                                                <input type="text" placeholder="ما الذي تبحث عنه" />
                                                <img src="/images/search.svg" alt="Search"/>
                                            </div>
                                            <div className="setting d-flex">
                                            <button className="nav-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#00000099'>
                                                    <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
                                                </svg>
                                            </button>
                                            <button className="nav-btn">AR</button>
                                        </div>
                                        <div className="user d-flex align-items-center gap-2">
                                            <img src="/images/Ellipse 1.svg" alt="user" />
                                            <div className="mb-1">
                                                <p className="user-text mb-1">فهد</p>
                                                <span>مدقق الشكاوي</span>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                            : (<div className="setting d-flex align-items-center float-start" style={{height:"106px"}}>
                                    <button className="nav-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#00000099'>
                                            <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
                                        </svg>
                                    </button>
                                    <button className="nav-btn">AR</button>
                                </div>
                            )
                        }
                        {window.location.pathname === "/dashboard"
                            ? (<Fragment>
                                    {showNav 
                                        ? (<div className="d-flex align-items-center float-start position-relative z-3" style={{height:"106px", cursor:"pointer"}} onClick={() => setShowNav(!showNav)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 0 384 512" className="d-lg-none" fill="#55565A">
                                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                                </svg>
                                            </div>
                                        )
                                        : (<div className="d-flex align-items-center float-start position-relative z-3" style={{height:"106px", cursor:"pointer"}} onClick={() => setShowNav(!showNav)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 448 512" className="d-lg-none" fill="#33835C">
                                                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                                                </svg>
                                            </div>
                                        )
                                    }
                                </Fragment>
                            )
                            : (null)
                        }
                </div>
            </Container>
        </div>
    );
};

export default Header;

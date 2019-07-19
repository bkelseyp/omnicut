import React from 'react';
import './style.css';


class HeroSection extends React.Component {
    render() {
        return (
            <>



                <div id='secBkgndImg3' className='pt-5'>
                    <div className='container pr-5 pl-5'>
                        <div className='row'>
                            <div className='col '>
                                <h4 className='Hero-header-text2 text-light text-center'>What is OmniCut?</h4>
                                <p className='About-body-text text-light text-center'>OmniCut was created for clients, freelancers and experienced barbers alike. It is a platform that helps to expedite the barber to client relationship by streamlining appointment processes and adding locational services. With OmniCut the client chooses the location and the barber visits them. </p>
                            </ div>
                        </div>
                          </div>
{/*                       <div className='container'>
                        <div className='row'>
                            < div className='col s12'>
                                <h4 className='Hero-header-text2 text-white mt-5'>If you are a Customer</h4>
                            </div>

                        <div className='row mb-5'>
                            <div className='col'>
                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="fas fa-sign-in-alt"></i>
                                </h4>
                                <h6 className='text-white'>Join OminiCut</h6>
                            </ div>
                            <div className='col'>
                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="fas fa-search"></i>
                                </h4>
                                <h6 className='text-white'>Search using OminiCut</h6>
                            </ div>
                            <div className='col'>
                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="far fa-check-circle"></i>
                                </h4>
                                <h6 className='text-white'>Book using OminiCut</h6>
                            </ div>
                        </div> 
                    </div>

                    </div>
*/}
                    
                </div>

                <div className='aboutBkgndColor pt-5 pb-5'>

                    <div className='container'>

                        <h4 className='Hero-header-text2 text-center'>OmniCut Developers</h4>
                        <div className="accordion mt-5 pb-5" id="accordionExample">

                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link devNameFont" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Alex Evers
                                    </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p className=' About-body-text pr-3'>Full Stack Web Developer</p>
                                        <p>Web developer with a background in content and multimedia development. Looking to continue growth in the tech field.</p>
                                        <h6>Github:  <a href='https://github.com/aevers3' target="_blank">https://github.com/aevers3 </a></h6>
                                        <h6>Portfolio:  <a href='https://aevers3.github.io/portfolio0619/' target="_blank">https://aevers3.github.io/portfolio0619/ </a></h6>
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed devNameFont" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Brianna Kelsey
        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Full Stack Web Developer</p>
                                        <p>Full Stack Web Developer with working experiences as a Graphic Designer and a life-long commitment to continuous growth. Effective at combining creativity and problem solving to develop strategic, innovative and user-friendly applications. Known among colleagues for strong front-end capabilities and attention to detail no matter the complexity of the project. <br />
                                        Looking forward to combining development and design by taking the next step in my career. Particularly, a role that allows for growth and embraces research, strategy, and usability. With this perspective in mind, I approach problems from a broader all-inclusive point of view. I welcome all challenges and encourage new experiences. </p>
                                        <h6>Github:  <a href='https://github.com/bkelseyp' target="_blank">https://github.com/bkelseyp </a></h6>
                                        <h6>Portfolio:  <a href='https://bkelseyp.github.io/portfolio-two/index.html' target="_blank">https://bkelseyp.github.io/portfolio-two/index.html </a></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed devNameFont" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Daniel Bauer
        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Full Stack Web Developer</p>
                                        <p>Full stack developer with knowledge in front and backend development, responsive frameworks and databases. Self motivated with strong analytical and communications skills.</p>
                                        <h6>Github:  <a href='https://github.com/DanMBau' target="_blank">https://github.com/DanMBau </a></h6>
                                        <h6>Portfolio:  <a href='https://danmbau.github.io/portfolio-b/' target="_blank">daniel-bauer.net</a></h6>
                                    </div>
                                </div>

                            </div>

                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed devNameFont" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Jason Poblador
        </button>
                                    </h2>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Full Stack Web Developer</p>
                                        <p>In 2018 I graduated from the University of Delaware with a BS in Finance. During my time at UD I studied a large range of business topics including Fixed Income Securities, Information Systems, Strategic Management, Business Intelligence and Analytics, Capital Markets, Financial Investments, and International Finance.
<br /> These classes gave me exposure to programs like MS SQL Server, JavaScript, Capsim, Powerpoint, Excel, Word, and Access. All this time spent on the computer sparked my interest in how programs run and the design process invovled when creating them. As result I used this past summer to teach myself how to code and decided this was a passion worth pursuing. Today I am currently enrolled at the Penn LPS Coding bootcamp in Philadelphia with the hopes of becoming a Fullstack Developer.</p>
                                        <h6>Github:  <a href='https://github.com/JasonPob' target="_blank">https://github.com/JasonPob </a></h6>
                                        <h6>Portfolio:  <a href='https://jasonpob.github.io/Developer-Portfolio/' target="_blank">https://jasonpob.github.io/Developer-Portfolio/ </a></h6>
                                    </div>
                                </div>

                            </div>

                            <div className="card">
                                <div className="card-header" id="headingFive">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link collapsed devNameFont" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Joseph Ricafort
        </button>
                                    </h2>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Full Stack Web Developer</p>
                                        <p>I am an aspiring Full Stack Web Developer with an IT background and experience</p>
                                        <h6>Github:  <a href='https://github.com/jrbricafort' target="_blank">https://github.com/jrbricafort </a></h6>
                                        <h6>Portfolio:  <a href='https://jrbricafort.github.io/Bootstrap-Portfolio/index.html' target="_blank">http://jricafort.com</a></h6>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default HeroSection;
import React from 'react';
import './style.css';


class HeroSection extends React.Component {
    render() {
        return (
            <>

          

                <div className='bkgndWrapper pt-5 pb-5'>
                    
                        <div className='row'>
                            <div className='col'>
                                <h4 className='Hero-header-text2 text-center'>OmniCut Developers</h4>

                                <p className='About-body-text text-center'>Etiam vestibulum maximus purus, sed fermentum leo maximus at. Curabitur ac neque at est dictum tristique. Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>
                            </ div>
                        </div>

                        <div className='container'>
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
                                            <p>Title Here</p>
                                            <p>Etiam vestibulum maximus purus, sed fermentum leo maximus at. In tellus enim, pellentesque id velit non, blandit accumsan sem. Sed tristique erat ipsumnnec congue enim rutrum ut.</p>
                                            <h6>Github:  <a href='https://github.com/DanMBau' target="_blank">https://github.com/DanMBau </a></h6>
                                            <h6>Portfolio:  <a href='https://github.com/DanMBau' target="_blank">https://github.com/DanMBau </a></h6>
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
                                            <p>Title Here</p>
                                            <p>Etiam vestibulum maximus purus, sed fermentum leo maximus at. In tellus enim, pellentesque id velit non, blandit accumsan sem. Sed tristique erat ipsumnnec congue enim rutrum ut.</p>
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
                                            <p>Title Here</p>
                                            <p>Etiam vestibulum maximus purus, sed fermentum leo maximus at. In tellus enim, pellentesque id velit non, blandit accumsan sem. Sed tristique erat ipsumnnec congue enim rutrum ut.</p>
                                            <h6>Github:  <a href='https://github.com/bkelseyp' target="_blank">https://github.com/bkelseyp </a></h6>
                                            <h6>Portfolio:  <a href='https://bkelseyp.github.io/portfolio-two/index.html' target="_blank">https://bkelseyp.github.io/portfolio-two/index.html </a></h6>
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
                                            <p>Title Here</p>
                                            <p>Etiam vestibulum maximus purus, sed fermentum leo maximus at. In tellus enim, pellentesque id velit non, blandit accumsan sem. Sed tristique erat ipsumnnec congue enim rutrum ut.</p>
                                            <h6>Github:  <a href='https://github.com/bkelseyp' target="_blank">https://github.com/bkelseyp </a></h6>
                                            <h6>Portfolio:  <a href='https://bkelseyp.github.io/portfolio-two/index.html' target="_blank">https://bkelseyp.github.io/portfolio-two/index.html </a></h6>
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
                                            <p>Title Here</p>
                                            <p>Etiam vestibulum maximus purus, sed fermentum leo maximus at. In tellus enim, pellentesque id velit non, blandit accumsan sem. Sed tristique erat ipsumnnec congue enim rutrum ut.</p>
                                            <h6>Github:  <a href='https://github.com/bkelseyp' target="_blank">https://github.com/bkelseyp </a></h6>
                                            <h6>Portfolio:  <a href='https://bkelseyp.github.io/portfolio-two/index.html target="_blank"'>https://bkelseyp.github.io/portfolio-two/index.html </a></h6>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='Hero-wrapper'>
                    <div className='container'>
                        <div className='row'>
                            < div className='col s12'>
                                <h4 className='Hero-header-text2 text-white mt-5'>How OmniCut works?</h4>
                                <h6 className='Hero-subHeader text-white'> If you're a customer?</h6>

                                <p className='About-body-text text-white'>Etiam vestibulum maximus purus, sed fermentum leo maximus at. Curabitur ac neque at est dictum tristique. Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>
                            </div>
                        </div>

                        <div className='row mb-5'>
                            <div className='col'>

                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="fas fa-sign-in-alt"></i>
                                </h4>
                                <h6 className='text-white'>Join OminiCut</h6>
                                <p className='About-body-text text-white'>Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>

                            </ div>
                            <div className='col'>

                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="fas fa-search"></i>
                                </h4>
                                <h6 className='text-white'>Search using OminiCut</h6>
                                <p className='About-body-text text-white'>Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>

                            </ div>
                            <div className='col'>

                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="far fa-check-circle"></i>
                                </h4>
                                <h6 className='text-white'>Book using OminiCut</h6>
                                <p className='About-body-text text-white'>Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>

                            </ div>
                        </div>
                    </div>
                </div>


                <div className='Hero-wrapper2'>
                    <div className='container'>
                        <div className='row'>
                            < div className='col s12'>
                                <h4 className='Hero-header-text2 text-white mt-5'>How OmniCut works?</h4>
                                <h6 className='Hero-subHeader text-white'> If you're a vendor (Barber)?</h6>

                                <p className='About-body-text text-white'>Etiam vestibulum maximus purus, sed fermentum leo maximus at. Curabitur ac neque at est dictum tristique. Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>
                            </div>
                        </div>

                        <div className='row mb-5'>
                            <div className='col'>

                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="fas fa-sign-in-alt"></i>
                                </h4>
                                <h6 className='text-white'>Join OminiCut</h6>
                                <p className='About-body-text text-white'>Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>

                            </ div>
                            <div className='col'>

                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="fas fa-search"></i>
                                </h4>
                                <h6 className='text-white'>Style using OminiCut</h6>
                                <p className='About-body-text text-white'>Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>

                            </ div>
                            <div className='col'>

                                <h4 className='Hero-header-text2 text-white'>
                                    <i className="far fa-check-circle"></i>
                                </h4>
                                <h6 className='text-white'>Review using OminiCut</h6>
                                <p className='About-body-text text-white'>Fusce sapien sem, tincidunt eu mauris quis, aliquam lobortis diam. Phasellus commodo porttitor justo at accumsan.</p>

                            </ div>
                        </div>
                    </div>
                </div>
            </>
                )
            }
        }
        
export default HeroSection;
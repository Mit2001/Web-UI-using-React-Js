import './Footer.css'
function Footer() {
    return (
        <div className=" black">
            <div className=' row'>
                <div className='col-md-3'>
                    <h5 className='desgy'>Desgy Solutions</h5>
                </div>
                <div className='col-md-2'>
                    <ul >
                        <li className='footer1'>Menu</li>
                        <li className='footer'>Home</li>
                        <li className='footer'>popular</li>
                        <li className='footer'>About</li>
                        <li className='footer2' >Contact</li>

                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul >
                        <li className='footer1'>Category</li>
                        <li className='footer'>Design</li>
                        <li className='footer'>Mock up</li>
                        <li className='footer'>View all</li>
                        <li className='footer2' >Login</li>

                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul >
                        <li className='footer1'>pages</li>
                        <li className='footer'>404</li>
                        <li className='footer'>Instructions</li>
                        <li className='footer'>License</li>
                        <br></br><li className='footer2'></li>

                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul >
                        <li className='footer1'>Others</li>
                        <li className='footer'>Styleguide</li>
                        <li className='footer'>Changelog</li>
                        <li className='footer'></li>
                        <br></br><br></br><li className='footer2'></li>
                    </ul>
                </div>
            </div>
            <div>
                <p id='p'>@2021.Desgy solutions.All rights reserved</p>
                <p className='float'>Privacy policy   |   Terms &Conditions</p>

            </div>

        </div>
    );
}
export default Footer;
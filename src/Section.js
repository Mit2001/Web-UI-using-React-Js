import './Section.css'

function Section() {
    return (
        <div className="container">
            <h2>Manage all your social media </h2>
            <h2>profiles from one place.</h2>
            <br></br><br></br><div className='row'>
            <div className="card " >
                <div className="card-body center">
                    <h5 className="card-title">Startup </h5>
                    <h2 className="card-subtitle mb-2 ">$14</h2>
                    <p className='card-text'>per user,per month</p>
                    <button type="button" className="btn btn-outline-primary bt2">Start Your 15 Day Trial</button>
                    <p>_______________</p> 
                    <p className='card-text'>5 Social Profiles</p>
                    <p className='card-text'>5 Scheduled Posts per Profile</p>
                    <p className='card-text'>400+ Templates</p>
                    <p className='card-text'>Calender view</p>
                    <p className='card-text'>24/7 Support</p>            
                </div>
            </div>
            <div className="card  color" >
                <div className="card-body center">
                    <h5 className="card-title">Startup </h5>
                    <h2 className="card-subtitle mb-2 white ">$29</h2>
                    <p className='card-text'>per user,per month</p>
                    <button type="button" className="btn btn-outline-primary bt3">Start Your 15 Day Trial</button>
                    <p>_______________</p> 
                    <p className='card-text'>10 Social Profiles</p>
                    <p className='card-text'>25 Scheduled Posts per Profile</p>
                    <p className='card-text'>400+ Templates</p>
                    <p className='card-text'>Calender view</p>
                    <p className='card-text'>24/7 Support</p>            
                </div>
            </div>
            <div className="card " >
                <div className="card-body center">
                    <h5 className="card-title">Startup </h5>
                    <h2 className="card-subtitle mb-2 ">$139</h2>
                    <p className='card-text'>per user,per month</p>
                    <button type="button" className="btn btn-outline-primary bt2">Start Your 15 Day Trial</button>
                    <p>_______________</p> 
                    <p className='card-text'>100 Social Profiles</p>
                    <p className='card-text'>100 Scheduled Posts per Profile</p>
                    <p className='card-text'>400+ Templates</p>
                    <p className='card-text'>Calender view</p>
                    <p className='card-text'>24/7 Support</p>            
                </div>
            </div>
            </div>
        </div>
    );
}

export default Section;
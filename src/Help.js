import './Help.css';

function Help() {
    return (
        <div className='container'>
          <div className='row div'>
            <div className='col-md-5'>
                <br></br><br></br><br></br><br></br><button className='btn'>DESIGN AGENCY</button>
                <h1>Dedicated to bring your ideas to life</h1>
                <br></br><button className='bttn'>Get started</button>
            </div>
            <div className='col-md-5'>
                <img src='/Images/m1.jpg' className='img img-fluid' alt='' width={'800px'} />
            </div>
          </div>
        </div>
    );
}
export default Help;
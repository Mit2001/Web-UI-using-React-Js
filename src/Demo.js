import './Demo.css';

function Demo() {
    return (

        <div className='container'>
             <div className="row div dv">
                <div>
                    <p className='p1'>About us </p>
                    <h2>Know more about us</h2>
                </div>
                
               <div className='col-md-4 dv1'>
                    <h5 className='h5'>About us</h5>
                    <img src='/Images/p1.jpg' alt='' width={'100px'} />
                    <p className='p2'>Sed ut perspiciatis unde omnis iste natus error sit valuptatem accusantium doloremque laudantium,totam rem </p>
                    <a href='#learn more' className='a'>Learn more</a>
                </div>
                <div className='col-md-4 dv2'>
                    <h5 className='h6'>Services</h5>
                    <img src='/Images/p2.jpg' alt='' width={'100px'} />
                    <p className='p3'>Sed ut perspiciatis unde omnis iste natus error sit valuptatem accusantium doloremque laudantium,totam rem </p>
                    <a href='#learn more'>Learn more</a>
                </div>
                <div className='col-md-4 dv3'>
                    <h5 className='h6'>Our Works</h5>
                    <img src='/Images/p3.jpg' alt='' width={'100px'}/>
                    <p className='p3'>Sed ut perspiciatis unde omnis iste natus error sit valuptatem accusantium doloremque laudantium,totam rem </p>
                    <a href='#learn more'>Learn more</a>
                </div>
            </div>
        </div>

    );
}

export default Demo;
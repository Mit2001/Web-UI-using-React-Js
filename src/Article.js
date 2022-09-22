import './Article.css';

function Article() {
    return (

        <div className='container'>
            <div className="row div dv">
                <div>
                    <p className='p1'>Article</p>
                    <h1>Our Latest Post</h1>
                </div>

                <div className='col-md-4 dv4'>

                    <img src='/Images/n1.jpg' alt='' width={'200px'} />
                    <p className='p3'>We Launch Delia</p>
                    <p>Web Flow this Week!</p>

                </div>
                <div className='col-md-4 dv5'>
                    <img src='/Images/n2.jpg' alt='' width={'200px'} />
                    <p className='p3'>We Launch Delia</p>
                    <p>Web Flow this Week!</p>
                </div>
                <div className='col-md-4 dv6'>
                    <img src='/Images/n3.jpg' alt='' width={'200px'} />
                    <p className='p3'>We Launch Delia</p>
                    <p>Web Flow this Week</p>
                </div>
            </div>
        </div>

    );
}

export default Article;
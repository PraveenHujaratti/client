
function Header(props) {

    return (
        <div className="header">
            <div className="logo-container">
                <h2>Delhi Public School</h2>
            </div>
            <div className='header-items-wrap'>
                <div className='header-items'>
                    <ul className='header-list-1'>
                        <li>Free trail - <span>30 Days Trail</span></li>
                        <li>Buy Now</li>
                    </ul>
                    <ul className='header-list-2'>
                        <li><i class="fa fa-user-circle-o" aria-hidden="true"></i></li>
                        <li>John Doremon</li>
                        <li><i class="fa fa-bell" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
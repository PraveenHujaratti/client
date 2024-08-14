import StudentLeaves from "../dashboard/StudentLeaves"

import LeftPanel from "../leftPanel/leftPanel"
import Header from "../header/header"
function Content(params) {

    return (
        <div className="content-container">
            <Header />
            <div className="body-container">
                <div className='left-panel'>
                    <LeftPanel />
                </div>
                <div className='right-panel'>
                    <StudentLeaves />
                </div>
            </div>
        </div>
    )
}
export default Content

function StudentLeaves(props) {

    return (
        <div>
            <h2> Student leaves</h2>
            <div className="options">
                <div className='input-option'>
                    <input type='date' className='date' />
                    <input type='text' placeholder='Search student' className='date' />
                </div>
                <div className='add-leave'>
                    <button>Add new leave</button>
                </div>
            </div>
        </div>
    )
}

export default StudentLeaves;
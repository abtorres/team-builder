import React from 'react';
import './Form.css';

const Form = (props) => {
    // console.log(props)
    return (
        <div className='MemberForm'>
            <h2>Add Team Member</h2>
            <div className='form'>
                <form onSubmit={event => props.addTeamMember(event)}>
                    <label htmlFor='MemberName'>
                        User Name   
                    </label>
                    <input type='text' id='MemberName' placeholder='Team Member Name...' onChange={props.nameHandler}/>
                    <label htmlFor='MemberRole'>
                        Role 
                    </label>
                    <input type='text' id='MemberRole' placeholder='Team Member Role...' onChange={props.roleHandler}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
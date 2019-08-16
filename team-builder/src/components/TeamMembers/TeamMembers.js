import React from 'react';
import './TeamMembers.css'

const TeamMembers = (members) => {
    // console.log(members.teamMembers)
    const memberList = members.teamMembers;
    // console.log(memberList)
    return (
        <div className='members'>
            {memberList.map((member, index) => (
                <div className='memberCard' key={index}>
                    <p>Team Member</p>
                    <h1><span>{member.name}</span></h1>
                    <p><span>Role:</span> {member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;
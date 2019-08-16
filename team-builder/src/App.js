import './App.css';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers/TeamMembers';
import Form from './components/Form/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState( [{name: 'Henry Ford', role: 'Designer'}, {name: 'Alice Liddell', role: 'Rabbit Hole Expert'}, {name: 'Charley Chaplin', role: 'Entertainer'}] );
  const [memberName, setMemberName] = useState('');
  const [memberRole, setMemberRole] = useState('');

  // console.log(memberName)
  // console.log(memberRole)

  const nameHandler = event => {
    setMemberName(event.target.value);
  }

  const roleHandler = event => {
    setMemberRole(event.target.value)
  }

  const addTeamMember = member => {
    member.preventDefault();
    const newMember = {};
    newMember.name = memberName;
    newMember.role = memberRole;
    setTeamMembers( [...teamMembers, newMember] );
  };

  return (
    <div className="App">
      <Header/>
      <Form nameHandler={nameHandler} roleHandler={roleHandler} addTeamMember={addTeamMember}/>
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;

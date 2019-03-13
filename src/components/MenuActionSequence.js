import React from 'react'
import MenuActionSelect from '../components/MenuActionSelect'


const MenuActionSequence = props => 
(<ul className="list-group list-group-flush">
{props.actionSettingsArray.map( (settings, index) => 
    <li key={index} className="list-group-item">
    <MenuActionSelect index={index} settings={settings} recordingOptions={props.recordingOptions} onChange={props.onChange} onDeleteClick={props.onDeleteClick} /></li>
)}
    
</ul>)
    
export default MenuActionSequence
import React from 'react'
import MenuActionSelect from '../components/MenuActionSelect'


const MenuActionSequence = props => 
(<>
{props.actionSettingsArray.map( (settings, index) => 
    <li key={index} className="list-group-item px-0">
    <MenuActionSelect index={index} settings={settings} recordingOptions={props.recordingOptions} onChange={props.onChange} onDeleteClick={props.onDeleteClick} /></li>
)}
</>    
)
    
export default MenuActionSequence
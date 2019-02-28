import React from 'react'
import MenuActionSelect from '../components/MenuActionSelect';


const MenuActionSequence = props => 
(<div>
{props.actionSettingsArray.map( (settings, index) => 
    <MenuActionSelect index={index} settings={settings} onChange={props.onChange} onDeleteClick={props.onDeleteClick} />)}
</div>)
    
export default MenuActionSequence
import React from 'react'

const SectionBorder = ({label, borderBottom, children}) => (
    <div className={"card  border-primary rounded-0 "+(!borderBottom && "border-bottom-0")}>
    <div className="card-header p-0 border-0 bg-white"><button type="button" className="btn btn-primary rounded-0">{label}</button></div>
    <div className="px-0 mx-0 my=3 py-3" >
    {children}
    </div>
    </div>
)

export default SectionBorder
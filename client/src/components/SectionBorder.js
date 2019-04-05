import React from 'react'

const SectionBorder = ({label, borderBottom, children}) => (
    <div className={"card  border-primary rounded-0 "+(!borderBottom && "border-bottom-0")}>
    <div className="card-header p-0 border-0 bg-white"><div className="p-2 d-inline-flex align-items-start bg-primary text-white">{label}</div></div>
    <div className="px-0 mx-0 pt-3" >
    {children}
    </div>
    </div>
)

export default SectionBorder
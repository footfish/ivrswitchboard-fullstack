import React from 'react'

const SectionBorder = ({label, borderBottom, children}) => (
    <div className={"card  border-primary rounded-0 "+(!borderBottom && "border-bottom-0")}>
    <div className="card-header p-0 border-0 bg-white"><button type="button" className="btn btn-primary rounded-0">{label}</button></div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item px-0 mx-0" key={label}>
    {children}
    </li></ul>
        </div>
)

export default SectionBorder
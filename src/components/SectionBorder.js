import React from 'react'

const SectionBorder = ({label, borderBottom, children}) => (
    <div class={"card  border-primary rounded-0 "+(!borderBottom && "border-bottom-0")}>
    <div class="card-header p-0 border-0 bg-white"><button type="button" class="btn btn-primary rounded-0">{label}</button></div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item px-0 mx-0">
    {children}
    </li></ul>
        </div>
)

export default SectionBorder
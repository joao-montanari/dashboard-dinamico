import { useState } from 'react';
import './style.sass';

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div 
            className={`master-container-component ${open ? 'open-sidebar-width' : 'close-sidebar-width'}`}
        >
            <button className='close-open-btn' onClick={() => setOpen(!open)}>X</button>
        </div>
    )
}

export default Sidebar;
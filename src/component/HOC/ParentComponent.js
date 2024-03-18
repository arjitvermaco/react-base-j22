import React from 'react'

export default function ParentComponent({ children, year }) {
    return (
        <div>ParentComponent {year}

            {children}

        </div>
    )
}

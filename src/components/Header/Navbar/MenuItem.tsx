'use client'
import React from 'react'

interface MenuItemProps {
    onClick: () => void;
    label: React.ReactNode;  // Hỗ trợ cả chuỗi và JSX
}

const MenuItem:React.FC<MenuItemProps> = ({onClick, label}):JSX.Element => {
  return (
    <div className='px-4 py-3 hover:bg-neutral-100 transition flex items-center' onClick={onClick}>
        {label}
    </div>
  )
}

export default MenuItem;
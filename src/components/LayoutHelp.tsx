import React, { useState } from 'react'
import { layoutHelpData } from '@/data/layoutConstants'

interface LayoutHelpProps {
  layoutName: string
}

export const LayoutHelp: React.FC<LayoutHelpProps> = ({ layoutName }) => {
  const [isOpen, setIsOpen] = useState(false)

  const help = layoutHelpData[layoutName]

  if (!help) return null

  const toggleVisibility = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="control-group layout-help">
      <button className="help-toggle-button" onClick={toggleVisibility}>
        {isOpen ? 'Hide Help' : `Learn about ${help.title}`}
      </button>

      {isOpen && (
        <div className="help-content">
          <h3>{help.title}</h3>
          <p>{help.description}</p>
          {help.settings && Object.keys(help.settings).length > 0 && (
            <>
              <h4>Key Settings:</h4>
              <ul>
                {Object.entries(help.settings).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}

import React, { useRef, useState } from 'react'

interface CurrentConfigDisplayProps {
  config: Record<string, any>
}

export const CurrentConfigDisplay: React.FC<CurrentConfigDisplayProps> = ({ config }) => {
  const [buttonText, setButtonText] = useState('Copy')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  if (Object.keys(config).length === 0) {
    return null
  }

  const jsonString = JSON.stringify(config, null, 2)

  const handleCopy = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    try {
      await navigator.clipboard.writeText(jsonString)
      setButtonText('Copied!')
    } catch (err) {
      console.error('Failed to copy config to clipboard:', err)
      setButtonText('Failed!')
    }

    timeoutRef.current = setTimeout(() => {
      setButtonText('Copy')
    }, 2000)
  }

  return (
    <div className="control-group config-display" style={{ marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h4>Active Layout Options</h4>
        <button
          onClick={handleCopy}
          style={{
            padding: '4px 8px',
            fontSize: '12px',
            background: buttonText === 'Copied!' ? '#69c4a0' : '#4a5568',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            minWidth: '60px',
            transition: 'background-color 0.2s ease',
          }}
        >
          {buttonText}
        </button>
      </div>
      <pre
        style={{
          background: '#282c34',
          color: '#abb2bf',
          padding: '10px',
          borderRadius: '4px',
          fontSize: '12px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
        }}
      >
        <code>{jsonString}</code>
      </pre>
    </div>
  )
}

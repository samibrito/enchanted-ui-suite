import React, { useState } from 'react';
import { Code, Copy, Check, CaretDown, CaretUp } from '@phosphor-icons/react';

interface CodePreviewProps {
  code: string;
  language?: string;
  title?: string;
  defaultOpen?: boolean;
}

const CodePreview: React.FC<CodePreviewProps> = ({ code, language = 'html', title, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);

  const trimmedCode = code.replace(/^\n+|\n+$/g, '');

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(trimmedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="sb-code-preview" style={{ marginTop: '0.75rem' }}>
      <button
        className="sb-code-preview-toggle"
        onClick={() => setOpen(!open)}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Code size={14} />
          <span>{title || `View ${language.toUpperCase()} Code`}</span>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {open && (
            <button
              className="sb-code-copy-btn"
              onClick={handleCopy}
              title="Copy code"
            >
              {copied ? <Check size={13} weight="bold" /> : <Copy size={13} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
          {open ? <CaretUp size={14} /> : <CaretDown size={14} />}
        </span>
      </button>
      {open && (
        <div className="sb-code-preview-body">
          <pre><code>{trimmedCode}</code></pre>
        </div>
      )}
    </div>
  );
};

export default CodePreview;

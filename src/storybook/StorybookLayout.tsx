import React, { useState, useEffect } from 'react';
import {
  House, Cube, TextAa, ToggleRight, Table as TableIcon,
  ListBullets, ChartBar, Bell, NavigationArrow, Cards,
  PaintBucket, Diamond, ArrowsHorizontal, List, X, MagnifyingGlass,
  CursorClick, Play, Moon, Sun
} from '@phosphor-icons/react';

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
  category: string;
}

const sections: Section[] = [
  { id: 'overview', label: 'Overview', icon: <House size={18} />, category: 'Getting Started' },
  { id: 'colors', label: 'Colors & Tokens', icon: <PaintBucket size={18} />, category: 'Foundation' },
  { id: 'typography', label: 'Typography', icon: <TextAa size={18} />, category: 'Foundation' },
  { id: 'icons', label: 'Icon Library', icon: <Diamond size={18} />, category: 'Foundation' },
  { id: 'buttons', label: 'Buttons', icon: <Cube size={18} />, category: 'Components' },
  { id: 'forms', label: 'Forms & Inputs', icon: <ToggleRight size={18} />, category: 'Components' },
  { id: 'cards', label: 'Cards', icon: <Cards size={18} />, category: 'Components' },
  { id: 'tables', label: 'Tables', icon: <TableIcon size={18} />, category: 'Components' },
  { id: 'badges', label: 'Badges & Tags', icon: <ListBullets size={18} />, category: 'Components' },
  { id: 'alerts', label: 'Alerts & Feedback', icon: <Bell size={18} />, category: 'Components' },
  { id: 'navigation', label: 'Navigation', icon: <NavigationArrow size={18} />, category: 'Components' },
  { id: 'dataDisplay', label: 'Data Display', icon: <ChartBar size={18} />, category: 'Components' },
  { id: 'layout', label: 'Layout & Misc', icon: <ArrowsHorizontal size={18} />, category: 'Components' },
];

interface StorybookLayoutProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
  children: React.ReactNode;
}

const StorybookLayout: React.FC<StorybookLayoutProps> = ({ activeSection, onSectionChange, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  const categories = [...new Set(sections.map(s => s.category))];
  const filtered = sections.filter(s => s.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'hsl(var(--sb-preview-bg))' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 260,
          minHeight: '100vh',
          background: 'hsl(var(--sb-sidebar))',
          color: 'hsl(var(--sb-sidebar-foreground))',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          left: sidebarOpen ? 0 : undefined,
          zIndex: 50,
          transform: typeof window !== 'undefined' && window.innerWidth < 768 && !sidebarOpen ? 'translateX(-100%)' : undefined,
          transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className={`d-none d-md-flex flex-column ${sidebarOpen ? 'd-flex' : ''}`}
      >
        <div style={{ padding: '1.25rem 1.25rem 0.75rem', borderBottom: '1px solid hsl(220 14% 20%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              background: 'hsl(var(--primary))', display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}>
              <Cube size={16} color="white" weight="bold" />
            </div>
            <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'white' }}>
              Component Kit
            </span>
            <span style={{
              fontSize: '0.625rem', fontWeight: 500,
              background: 'hsl(var(--primary) / 0.2)', color: 'hsl(var(--primary))',
              padding: '0.125rem 0.375rem', borderRadius: 4, marginLeft: 'auto'
            }}>
              v4.0
            </span>
          </div>
          <div style={{ position: 'relative' }}>
            <MagnifyingGlass size={14} style={{ position: 'absolute', left: 8, top: 9, opacity: 0.5 }} />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%', background: 'hsl(220 14% 18%)',
                border: '1px solid hsl(220 14% 22%)', borderRadius: 6,
                padding: '0.375rem 0.5rem 0.375rem 1.75rem',
                fontSize: '0.8125rem', color: 'hsl(220 10% 78%)',
                outline: 'none'
              }}
            />
          </div>
        </div>
        <nav style={{ flex: 1, overflow: 'auto', padding: '0.5rem 0.75rem' }}>
          {categories.map(cat => {
            const items = filtered.filter(s => s.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} style={{ marginBottom: '0.5rem' }}>
                <div style={{
                  fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: '0.06em', color: 'hsl(220 10% 50%)',
                  padding: '0.5rem 0.5rem 0.25rem'
                }}>
                  {cat}
                </div>
                {items.map(s => (
                  <button
                    key={s.id}
                    onClick={() => { onSectionChange(s.id); setSidebarOpen(false); }}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.4375rem 0.625rem', borderRadius: 6, border: 'none',
                      background: activeSection === s.id ? 'hsl(var(--sb-sidebar-active))' : 'transparent',
                      color: activeSection === s.id ? 'white' : 'hsl(var(--sb-sidebar-foreground))',
                      fontSize: '0.8125rem', fontWeight: activeSection === s.id ? 600 : 400,
                      cursor: 'pointer', textAlign: 'left',
                      transition: 'all 150ms',
                    }}
                    onMouseEnter={e => {
                      if (activeSection !== s.id) e.currentTarget.style.background = 'hsl(var(--sb-sidebar-hover))';
                    }}
                    onMouseLeave={e => {
                      if (activeSection !== s.id) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {s.icon}
                    {s.label}
                  </button>
                ))}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile toggle */}
      <button
        className="d-md-none"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{
          position: 'fixed', top: 12, left: 12, zIndex: 60,
          width: 36, height: 36, borderRadius: 8,
          background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: 'var(--shadow-md)'
        }}
      >
        {sidebarOpen ? <X size={18} /> : <List size={18} />}
      </button>

      {/* Main content */}
      <main style={{ flex: 1, marginLeft: 260, minHeight: '100vh' }} className="d-none d-md-block">
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '2.5rem 2rem' }}>
          {children}
        </div>
      </main>
      <main style={{ flex: 1, minHeight: '100vh' }} className="d-md-none">
        <div style={{ padding: '3.5rem 1rem 2rem' }}>
          {children}
        </div>
      </main>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="d-md-none"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 40,
            background: 'hsl(220 20% 14% / 0.5)', backdropFilter: 'blur(4px)'
          }}
        />
      )}
    </div>
  );
};

export default StorybookLayout;

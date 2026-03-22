import React from 'react';
import { House, Gear, User, Bell, MagnifyingGlass, CaretRight } from '@phosphor-icons/react';

const NavigationSection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Navigation</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      Tabs, breadcrumbs, pagination, and navbar components.
    </p>

    <div className="sb-component-section">
      <h3>Tabs</h3>
      <div className="sb-preview-box">
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item"><a className="nav-link active" href="#">Overview</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
          <li className="nav-item"><a className="nav-link disabled" href="#">Billing</a></li>
        </ul>
        <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>
          Tab content would appear here based on the active tab selection.
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Pills</h3>
      <div className="sb-preview-box">
        <ul className="nav nav-pills">
          <li className="nav-item"><a className="nav-link active" href="#">All</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Published</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Drafts</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Archived</a></li>
        </ul>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Breadcrumb</h3>
      <div className="sb-preview-box">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Projects</a></li>
            <li className="breadcrumb-item"><a href="#">Design System</a></li>
            <li className="breadcrumb-item active">Components</li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Pagination</h3>
      <div className="sb-preview-box">
        <nav>
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">‹</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item"><a className="page-link" href="#">›</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Navbar</h3>
      <div className="sb-preview-box" style={{ padding: 0, overflow: 'hidden', borderRadius: '0.75rem' }}>
        <nav className="navbar navbar-expand navbar-light" style={{ borderRadius: '0.75rem' }}>
          <a className="navbar-brand" href="#">Acme Inc</a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Team</a></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button className="btn btn-ghost btn-icon btn-sm"><MagnifyingGlass size={18} /></button>
            <button className="btn btn-ghost btn-icon btn-sm"><Bell size={18} /></button>
            <div className="sb-avatar sb-avatar-sm" style={{ cursor: 'pointer' }}>LM</div>
          </div>
        </nav>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>List Group Navigation</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-6">
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action active" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <House size={16} /> Dashboard
              </a>
              <a href="#" className="list-group-item list-group-item-action" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={16} /> Profile
              </a>
              <a href="#" className="list-group-item list-group-item-action" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Gear size={16} /> Settings
              </a>
              <a href="#" className="list-group-item list-group-item-action" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Bell size={16} /> Notifications
                <span className="badge badge-primary" style={{ marginLeft: 'auto' }}>3</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NavigationSection;

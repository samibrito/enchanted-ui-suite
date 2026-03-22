import React from 'react';
import { ArrowRight, Heart, ChatCircle, Share, MapPin, Clock, Star, DotsThree } from '@phosphor-icons/react';

const CardsSection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Cards</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      Flexible card components for content grouping, profiles, stats, and more.
    </p>

    <div className="sb-component-section">
      <h3>Basic Card</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Simple Card</h5>
                <p className="card-text">A basic card with just a body for flexible content.</p>
                <button className="btn btn-primary btn-sm">Action <ArrowRight size={14} /></button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-header">With Header</div>
              <div className="card-body">
                <p className="card-text">Cards can have headers and footers for structured content.</p>
              </div>
              <div className="card-footer" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn btn-ghost btn-sm">Dismiss</button>
                <button className="btn btn-primary btn-sm">Confirm</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card" style={{ borderLeft: '3px solid hsl(var(--primary))' }}>
              <div className="card-body">
                <h5 className="card-title">Accent Border</h5>
                <p className="card-text">Left border accent draws attention to important cards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Profile Card</h3>
      <div className="sb-preview-box">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-body" style={{ padding: '1.5rem' }}>
                <div className="sb-avatar sb-avatar-xl" style={{ margin: '0 auto 0.75rem', background: 'hsl(199 89% 32%)', color: 'white' }}>CS</div>
                <h5 className="card-title" style={{ marginBottom: '0.125rem' }}>Carolina Silva</h5>
                <p style={{ fontSize: '0.8125rem', color: 'hsl(var(--muted-foreground))', marginBottom: '0.75rem' }}>Product Designer</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.8125rem' }}>
                  <div><strong>147</strong> <span style={{ color: 'hsl(var(--muted-foreground))' }}>Projects</span></div>
                  <div><strong>2.4k</strong> <span style={{ color: 'hsl(var(--muted-foreground))' }}>Followers</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-3">
            <div className="card">
              <div className="card-body" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div className="sb-avatar sb-avatar-lg" style={{ background: 'hsl(152 60% 40%)', color: 'white' }}>RP</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h5 className="card-title" style={{ marginBottom: '0.125rem' }}>Rafael Pereira</h5>
                      <p style={{ fontSize: '0.8125rem', color: 'hsl(var(--muted-foreground))', marginBottom: '0.5rem' }}>
                        <MapPin size={13} style={{ marginRight: 4 }} /> São Paulo, BR · Engineering Lead
                      </p>
                    </div>
                    <button className="btn btn-ghost btn-icon btn-sm"><DotsThree size={18} /></button>
                  </div>
                  <p className="card-text" style={{ marginBottom: '0.75rem' }}>
                    Building scalable systems and mentoring engineering teams. Passionate about developer experience.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span className="sb-tag">React</span>
                    <span className="sb-tag">TypeScript</span>
                    <span className="sb-tag">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Content Card</h3>
      <div className="sb-preview-box">
        <div className="row">
          {[
            { title: 'Design System Principles', cat: 'Design', time: '5 min read', color: 'hsl(var(--primary))' },
            { title: 'Scaling Your API Architecture', cat: 'Engineering', time: '8 min read', color: 'hsl(var(--success))' },
            { title: 'Building Remote-First Culture', cat: 'Culture', time: '4 min read', color: 'hsl(var(--accent))' },
          ].map((c, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card" style={{ cursor: 'pointer' }}>
                <div style={{ height: 4, background: c.color, borderRadius: '0.75rem 0.75rem 0 0' }} />
                <div className="card-body">
                  <span className="badge badge-secondary" style={{ marginBottom: '0.5rem' }}>{c.cat}</span>
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text" style={{ marginBottom: '0.75rem' }}>
                    A brief description of what this article covers and why it matters.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
                      <Clock size={13} style={{ marginRight: 4 }} />{c.time}
                    </span>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      <button className="btn btn-ghost btn-icon btn-sm"><Heart size={16} /></button>
                      <button className="btn btn-ghost btn-icon btn-sm"><Share size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Stats Cards</h3>
      <div className="sb-preview-box">
        <div className="row">
          {[
            { label: 'Total Revenue', value: '$48,293', change: '+12.5%', positive: true },
            { label: 'Active Users', value: '3,847', change: '+8.2%', positive: true },
            { label: 'Bounce Rate', value: '24.1%', change: '-3.4%', positive: false },
            { label: 'Conversion', value: '5.7%', change: '+1.2%', positive: true },
          ].map((s, i) => (
            <div key={i} className="col-md-3 col-6 mb-3">
              <div className="sb-stat-card">
                <div className="sb-stat-label">{s.label}</div>
                <div className="sb-stat-value">{s.value}</div>
                <div className={`sb-stat-change ${s.positive ? 'positive' : 'negative'}`}>
                  {s.change} vs last month
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CardsSection;

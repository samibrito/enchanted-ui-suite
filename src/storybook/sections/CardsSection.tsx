import React from 'react';
import { ArrowRight, Heart, ChatCircle, Share, MapPin, Clock, Star, DotsThree } from '@phosphor-icons/react';
import CodePreview from '../components/CodePreview';

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
      <CodePreview code={`<!-- Simple Card -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Simple Card</h5>
    <p class="card-text">A basic card with just a body.</p>
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>

<!-- Card with Header & Footer -->
<div class="card">
  <div class="card-header">With Header</div>
  <div class="card-body">
    <p class="card-text">Content here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-ghost btn-sm">Dismiss</button>
    <button class="btn btn-primary btn-sm">Confirm</button>
  </div>
</div>

<!-- Accent Border Card -->
<div class="card" style="border-left: 3px solid hsl(var(--primary))">
  <div class="card-body">
    <h5 class="card-title">Accent Border</h5>
    <p class="card-text">Left border accent.</p>
  </div>
</div>`} />
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
      <CodePreview code={`<!-- Centered Profile Card -->
<div class="card" style="text-align: center">
  <div class="card-body">
    <div class="sb-avatar sb-avatar-xl">CS</div>
    <h5 class="card-title">Carolina Silva</h5>
    <p>Product Designer</p>
    <div>
      <strong>147</strong> Projects
      <strong>2.4k</strong> Followers
    </div>
  </div>
</div>

<!-- Horizontal Profile Card -->
<div class="card">
  <div class="card-body" style="display: flex; gap: 1rem">
    <div class="sb-avatar sb-avatar-lg">RP</div>
    <div>
      <h5 class="card-title">Rafael Pereira</h5>
      <p>São Paulo, BR · Engineering Lead</p>
      <span class="sb-tag">React</span>
      <span class="sb-tag">TypeScript</span>
    </div>
  </div>
</div>`} />
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
      <CodePreview code={`<!-- Content Card with color accent -->
<div class="card">
  <div style="height: 4px; background: hsl(var(--primary)); border-radius: 0.75rem 0.75rem 0 0"></div>
  <div class="card-body">
    <span class="badge badge-secondary">Category</span>
    <h5 class="card-title">Article Title</h5>
    <p class="card-text">Brief description here.</p>
    <span>5 min read</span>
  </div>
</div>`} />
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
      <CodePreview code={`<div class="sb-stat-card">
  <div class="sb-stat-label">Total Revenue</div>
  <div class="sb-stat-value">$48,293</div>
  <div class="sb-stat-change positive">+12.5% vs last month</div>
</div>

<div class="sb-stat-card">
  <div class="sb-stat-label">Bounce Rate</div>
  <div class="sb-stat-value">24.1%</div>
  <div class="sb-stat-change negative">-3.4% vs last month</div>
</div>`} />
    </div>
  </div>
);

export default CardsSection;

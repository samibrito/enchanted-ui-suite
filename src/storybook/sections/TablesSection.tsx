import React from 'react';
import { PencilSimple, Trash, DotsThree } from '@phosphor-icons/react';

const data = [
  { name: 'Ana Rodrigues', email: 'ana@company.com', role: 'Admin', status: 'Active', amount: '$2,340' },
  { name: 'Carlos Mendes', email: 'carlos@company.com', role: 'Editor', status: 'Active', amount: '$1,890' },
  { name: 'Juliana Costa', email: 'juliana@company.com', role: 'Viewer', status: 'Inactive', amount: '$945' },
  { name: 'Pedro Almeida', email: 'pedro@company.com', role: 'Editor', status: 'Active', amount: '$3,120' },
  { name: 'Fernanda Lima', email: 'fernanda@company.com', role: 'Admin', status: 'Pending', amount: '$1,560' },
];

const TablesSection: React.FC = () => (
  <div>
    <h1 className="sb-section-title">Tables</h1>
    <p className="sb-section-desc" style={{ marginBottom: '2rem' }}>
      Data tables with sorting indicators, row actions, and responsive behavior.
    </p>

    <div className="sb-component-section">
      <h3>Basic Table</h3>
      <div className="sb-preview-box" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="table table-hover mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Revenue</th>
              <th style={{ width: 80 }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div className="sb-avatar sb-avatar-sm">
                      {d.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span style={{ fontWeight: 500 }}>{d.name}</span>
                  </div>
                </td>
                <td style={{ color: 'hsl(var(--muted-foreground))' }}>{d.email}</td>
                <td><span className="sb-tag">{d.role}</span></td>
                <td>
                  <span className={`badge badge-${d.status === 'Active' ? 'success' : d.status === 'Inactive' ? 'secondary' : 'warning'}`}>
                    {d.status}
                  </span>
                </td>
                <td style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>{d.amount}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    <button className="btn btn-ghost btn-icon btn-sm"><PencilSimple size={15} /></button>
                    <button className="btn btn-ghost btn-icon btn-sm" style={{ color: 'hsl(var(--destructive))' }}><Trash size={15} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div className="sb-component-section">
      <h3>Striped Table</h3>
      <div className="sb-preview-box" style={{ padding: 0, overflow: 'hidden' }}>
        <table className="table table-striped mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {[
              { p: 'Wireless Headphones', c: 'Electronics', pr: '$89.99', s: 234 },
              { p: 'Ergonomic Keyboard', c: 'Peripherals', pr: '$129.00', s: 87 },
              { p: 'USB-C Hub 7-in-1', c: 'Accessories', pr: '$45.50', s: 412 },
              { p: 'Monitor Stand', c: 'Furniture', pr: '$67.00', s: 156 },
            ].map((d, i) => (
              <tr key={i}>
                <td style={{ color: 'hsl(var(--muted-foreground))' }}>{i + 1}</td>
                <td style={{ fontWeight: 500 }}>{d.p}</td>
                <td><span className="badge badge-secondary">{d.c}</span></td>
                <td style={{ fontVariantNumeric: 'tabular-nums' }}>{d.pr}</td>
                <td style={{ fontVariantNumeric: 'tabular-nums' }}>{d.s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default TablesSection;

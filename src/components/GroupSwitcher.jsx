import { roles } from '../data/content';

function GroupSwitcher({ role, onChange }) {
  return (
    <div className="group-switcher">
      {roles.map((r) => (
        <button
          key={r.id}
          type="button"
          className={`group-switch-btn ${role === r.id ? 'group-switch-btn-active' : ''}`}
          onClick={() => onChange(r.id)}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}

export default GroupSwitcher;

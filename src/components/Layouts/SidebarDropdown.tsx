import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RxChevronDown } from 'react-icons/rx';

interface SidebarDropdownProps {
  title: string;
  icon: React.ReactNode;
  links: { label: string; href: string }[];
}

export default function SidebarDropdown({
  title,
  icon,
  links,
}: SidebarDropdownProps) {
  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className={`group relative flex w-full items-center gap-3 rounded text-sm py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-200 ${
          links.some((link) => pathname.includes(link.href))
            ? 'bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 text-gray-400 border border-emerald-400/30 backdrop-blur-sm'
            : 'hover:bg-gray-100/5 dark:hover:bg-emerald-900/30'
        }`}
        onClick={() => setOpen(!open)}
      >
        {icon}
        {title}
        <RxChevronDown
          className={`ml-auto transform transition-transform duration-300 text-lg ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="transform overflow-hidden transition-all duration-300">
          <ul className="mt-2 mb-4 flex flex-col gap-1 ml-4">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2 py-2 text-xs px-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/5 dark:bg-blue-900/5 border-l border-blue-600'
                        : 'hover:bg-gray-100/5 dark:hover:bg-gray-700 border-l border-transparent'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

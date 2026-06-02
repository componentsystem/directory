import type { JSX } from "react";

const iconSize = { width: 120, height: 80, viewBox: "0 0 120 80" };

function ButtonIcon() {
  return (
    <svg {...iconSize}>
      <rect x="10" y="8" width="100" height="18" rx="4" fill="#3b82f6" />
      <text x="60" y="21" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">Primary</text>
      <rect x="10" y="32" width="100" height="18" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="60" y="45" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="sans-serif">Outlined</text>
      <rect x="10" y="56" width="100" height="18" rx="4" fill="#ef4444" />
      <text x="60" y="69" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">Danger</text>
    </svg>
  );
}

function InputIcon() {
  return (
    <svg {...iconSize}>
      <rect x="10" y="25" width="100" height="30" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
      <text x="18" y="44" fill="#9ca3af" fontSize="10" fontFamily="sans-serif">Enter text...</text>
      <line x1="80" y1="33" x2="80" y2="47" stroke="#3b82f6" strokeWidth="1.5">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

function SelectIcon() {
  return (
    <svg {...iconSize}>
      <rect x="10" y="8" width="100" height="26" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
      <text x="18" y="25" fill="#374151" fontSize="9" fontFamily="sans-serif">Select option</text>
      <path d="M98 18 l4 5 l4-5" fill="none" stroke="#6b7280" strokeWidth="1.5" />
      <rect x="10" y="36" width="100" height="38" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1" />
      <rect x="12" y="38" width="96" height="11" rx="2" fill="#eff6ff" />
      <text x="18" y="47" fill="#3b82f6" fontSize="8" fontFamily="sans-serif">Option A</text>
      <text x="18" y="59" fill="#374151" fontSize="8" fontFamily="sans-serif">Option B</text>
      <text x="18" y="71" fill="#374151" fontSize="8" fontFamily="sans-serif">Option C</text>
    </svg>
  );
}

function TableIcon() {
  return (
    <svg {...iconSize}>
      <rect x="8" y="6" width="104" height="68" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="8" y="6" width="104" height="16" rx="4" fill="#f9fafb" />
      <rect x="8" y="6" width="104" height="16" rx="0" fill="#f3f4f6" />
      <text x="16" y="18" fill="#374151" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Name</text>
      <text x="56" y="18" fill="#374151" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Status</text>
      <text x="90" y="18" fill="#374151" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Role</text>
      <line x1="8" y1="22" x2="112" y2="22" stroke="#e5e7eb" />
      <text x="16" y="34" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Alice</text>
      <circle cx="62" cy="32" r="3" fill="#22c55e" /><text x="68" y="34" fill="#6b7280" fontSize="6" fontFamily="sans-serif">Active</text>
      <text x="90" y="34" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Admin</text>
      <line x1="8" y1="38" x2="112" y2="38" stroke="#f3f4f6" />
      <rect x="8" y="38" width="104" height="16" fill="#fafafa" />
      <text x="16" y="50" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Bob</text>
      <circle cx="62" cy="48" r="3" fill="#eab308" /><text x="68" y="50" fill="#6b7280" fontSize="6" fontFamily="sans-serif">Pending</text>
      <text x="90" y="50" fill="#6b7280" fontSize="7" fontFamily="sans-serif">User</text>
      <line x1="8" y1="54" x2="112" y2="54" stroke="#f3f4f6" />
      <text x="16" y="66" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Carol</text>
      <circle cx="62" cy="64" r="3" fill="#22c55e" /><text x="68" y="66" fill="#6b7280" fontSize="6" fontFamily="sans-serif">Active</text>
      <text x="90" y="66" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Editor</text>
    </svg>
  );
}

function ModalIcon() {
  return (
    <svg {...iconSize}>
      <rect x="0" y="0" width="120" height="80" rx="0" fill="#0000001a" />
      <rect x="18" y="10" width="84" height="60" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="18" y="10" width="84" height="18" rx="6" fill="#f9fafb" />
      <text x="26" y="23" fill="#111827" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Confirm</text>
      <text x="94" y="23" fill="#9ca3af" fontSize="10" fontFamily="sans-serif">×</text>
      <rect x="26" y="34" width="60" height="4" rx="2" fill="#e5e7eb" />
      <rect x="26" y="42" width="45" height="4" rx="2" fill="#e5e7eb" />
      <rect x="56" y="54" width="18" height="10" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1" />
      <text x="65" y="62" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="sans-serif">No</text>
      <rect x="78" y="54" width="18" height="10" rx="3" fill="#3b82f6" />
      <text x="87" y="62" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif">Yes</text>
    </svg>
  );
}

function CardIcon() {
  return (
    <svg {...iconSize}>
      <rect x="15" y="4" width="90" height="72" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="15" y="4" width="90" height="28" rx="6" fill="#dbeafe" />
      <rect x="15" y="26" width="90" height="6" fill="#dbeafe" />
      <rect x="23" y="38" width="50" height="5" rx="2" fill="#374151" />
      <rect x="23" y="48" width="74" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="23" y="55" width="60" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="23" y="62" width="40" height="3" rx="1.5" fill="#d1d5db" />
    </svg>
  );
}

function AvatarIcon() {
  return (
    <svg {...iconSize}>
      <circle cx="40" cy="32" r="18" fill="#dbeafe" />
      <circle cx="40" cy="26" r="7" fill="#93c5fd" />
      <ellipse cx="40" cy="44" rx="12" ry="8" fill="#93c5fd" />
      <circle cx="68" cy="32" r="14" fill="#e0e7ff" />
      <circle cx="68" cy="27" r="5.5" fill="#a5b4fc" />
      <ellipse cx="68" cy="40" rx="9" ry="6" fill="#a5b4fc" />
      <circle cx="90" cy="32" r="10" fill="#fce7f3" />
      <circle cx="90" cy="28" r="4" fill="#f9a8d4" />
      <ellipse cx="90" cy="37" rx="7" ry="4.5" fill="#f9a8d4" />
    </svg>
  );
}

function TabsIcon() {
  return (
    <svg {...iconSize}>
      <rect x="8" y="14" width="104" height="56" rx="0" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="8" y="14" width="35" height="16" fill="#3b82f6" />
      <text x="25" y="25" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">Tab 1</text>
      <rect x="43" y="14" width="35" height="16" fill="#f9fafb" />
      <text x="60" y="25" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="sans-serif">Tab 2</text>
      <rect x="78" y="14" width="34" height="16" fill="#f9fafb" />
      <text x="95" y="25" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="sans-serif">Tab 3</text>
      <rect x="16" y="38" width="70" height="4" rx="2" fill="#e5e7eb" />
      <rect x="16" y="48" width="55" height="4" rx="2" fill="#e5e7eb" />
      <rect x="16" y="58" width="40" height="4" rx="2" fill="#e5e7eb" />
    </svg>
  );
}

function CheckboxIcon() {
  return (
    <svg {...iconSize}>
      <rect x="16" y="12" width="14" height="14" rx="3" fill="#3b82f6" />
      <path d="M20 19 l3 3 l5-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="36" y="23" fill="#374151" fontSize="9" fontFamily="sans-serif">Checked</text>
      <rect x="16" y="34" width="14" height="14" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
      <text x="36" y="45" fill="#374151" fontSize="9" fontFamily="sans-serif">Unchecked</text>
      <rect x="16" y="56" width="14" height="14" rx="3" fill="#93c5fd" />
      <line x1="20" y1="63" x2="26" y2="63" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <text x="36" y="67" fill="#374151" fontSize="9" fontFamily="sans-serif">Indeterminate</text>
    </svg>
  );
}

function SwitchIcon() {
  return (
    <svg {...iconSize}>
      <rect x="20" y="18" width="36" height="20" rx="10" fill="#3b82f6" />
      <circle cx="46" cy="28" r="8" fill="white" />
      <text x="64" y="32" fill="#374151" fontSize="9" fontFamily="sans-serif">On</text>
      <rect x="20" y="46" width="36" height="20" rx="10" fill="#d1d5db" />
      <circle cx="30" cy="56" r="8" fill="white" />
      <text x="64" y="60" fill="#374151" fontSize="9" fontFamily="sans-serif">Off</text>
    </svg>
  );
}

function SliderIcon() {
  return (
    <svg {...iconSize}>
      <rect x="16" y="36" width="88" height="4" rx="2" fill="#e5e7eb" />
      <rect x="16" y="36" width="52" height="4" rx="2" fill="#3b82f6" />
      <circle cx="68" cy="38" r="8" fill="#3b82f6" />
      <circle cx="68" cy="38" r="6" fill="white" />
      <rect x="55" y="16" width="26" height="16" rx="4" fill="#1e3a5f" />
      <text x="68" y="28" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">60%</text>
      <path d="M65 32 l3 4 l3-4" fill="#1e3a5f" />
    </svg>
  );
}

function ProgressIcon() {
  return (
    <svg {...iconSize}>
      <rect x="12" y="30" width="96" height="10" rx="5" fill="#e5e7eb" />
      <rect x="12" y="30" width="68" height="10" rx="5" fill="#3b82f6" />
      <text x="60" y="58" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold" fontFamily="sans-serif">70%</text>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg {...iconSize}>
      <rect x="15" y="6" width="90" height="68" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="15" y="6" width="90" height="16" rx="4" fill="#3b82f6" />
      <text x="60" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">March 2026</text>
      {["M","T","W","T","F","S","S"].map((d, i) => (
        <text key={i} x={24 + i * 12} y="32" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="sans-serif">{d}</text>
      ))}
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map((n, i) => {
        const col = i % 7;
        const row = Math.floor(i / 7);
        const isSelected = n === 5;
        return (
          <g key={n}>
            {isSelected && <circle cx={24 + col * 12} cy={40 + row * 11} r="5" fill="#3b82f6" />}
            <text x={24 + col * 12} y={43 + row * 11} textAnchor="middle" fill={isSelected ? "white" : "#374151"} fontSize="6" fontFamily="sans-serif">{n}</text>
          </g>
        );
      })}
    </svg>
  );
}

function TooltipIcon() {
  return (
    <svg {...iconSize}>
      <rect x="35" y="44" width="50" height="20" rx="4" fill="#3b82f6" />
      <text x="60" y="58" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">Button</text>
      <rect x="28" y="12" width="64" height="24" rx="6" fill="#1f2937" />
      <text x="60" y="28" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">Tooltip text</text>
      <path d="M56 36 l4 6 l4-6" fill="#1f2937" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg {...iconSize}>
      <rect x="20" y="20" width="40" height="40" rx="6" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
      <text x="40" y="45" textAnchor="middle" fill="#9ca3af" fontSize="20" fontFamily="sans-serif">☰</text>
      <circle cx="56" cy="24" r="8" fill="#ef4444" />
      <text x="56" y="28" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">5</text>
      <rect x="70" y="30" width="30" height="20" rx="4" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx="96" cy="34" r="4" fill="#ef4444" />
    </svg>
  );
}

function AccordionIcon() {
  return (
    <svg {...iconSize}>
      <rect x="10" y="4" width="100" height="18" rx="3" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="18" y="16" fill="#374151" fontSize="8" fontFamily="sans-serif">Section 1</text>
      <text x="102" y="16" fill="#9ca3af" fontSize="10" fontFamily="sans-serif">▾</text>
      <rect x="10" y="22" width="100" height="28" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="18" y="28" width="70" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="18" y="35" width="55" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="18" y="42" width="40" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="10" y="50" width="100" height="18" rx="3" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="18" y="62" fill="#374151" fontSize="8" fontFamily="sans-serif">Section 2</text>
      <text x="102" y="62" fill="#9ca3af" fontSize="10" fontFamily="sans-serif">▸</text>
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg {...iconSize}>
      <rect x="10" y="12" width="100" height="24" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
      <text x="22" y="28" fill="#f59e0b" fontSize="12" fontFamily="sans-serif">⚠</text>
      <text x="36" y="27" fill="#92400e" fontSize="8" fontFamily="sans-serif">Warning message</text>
      <rect x="10" y="44" width="100" height="24" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
      <text x="22" y="60" fill="#22c55e" fontSize="12" fontFamily="sans-serif">✓</text>
      <text x="36" y="59" fill="#166534" fontSize="8" fontFamily="sans-serif">Success message</text>
    </svg>
  );
}

function BreadcrumbIcon() {
  return (
    <svg {...iconSize}>
      <text x="14" y="42" fill="#3b82f6" fontSize="9" fontFamily="sans-serif">Home</text>
      <text x="42" y="42" fill="#9ca3af" fontSize="9" fontFamily="sans-serif">/</text>
      <text x="50" y="42" fill="#3b82f6" fontSize="9" fontFamily="sans-serif">Products</text>
      <text x="90" y="42" fill="#9ca3af" fontSize="9" fontFamily="sans-serif">/</text>
      <text x="98" y="42" fill="#374151" fontSize="9" fontFamily="sans-serif">Item</text>
    </svg>
  );
}

function CarouselIcon() {
  return (
    <svg {...iconSize}>
      <rect x="15" y="6" width="90" height="56" rx="6" fill="#dbeafe" />
      <text x="60" y="38" textAnchor="middle" fill="#60a5fa" fontSize="20" fontFamily="sans-serif">❮ Slide ❯</text>
      <circle cx="48" cy="68" r="3" fill="#3b82f6" />
      <circle cx="58" cy="68" r="3" fill="#d1d5db" />
      <circle cx="68" cy="68" r="3" fill="#d1d5db" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg {...iconSize}>
      <rect x="15" y="4" width="90" height="72" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="17" y="8" width="86" height="14" rx="2" fill="#eff6ff" />
      <text x="25" y="19" fill="#3b82f6" fontSize="8" fontWeight="bold" fontFamily="sans-serif">Dashboard</text>
      <text x="25" y="37" fill="#6b7280" fontSize="8" fontFamily="sans-serif">Settings</text>
      <text x="25" y="53" fill="#6b7280" fontSize="8" fontFamily="sans-serif">Profile</text>
      <line x1="20" y1="60" x2="100" y2="60" stroke="#f3f4f6" />
      <text x="25" y="71" fill="#6b7280" fontSize="8" fontFamily="sans-serif">Logout</text>
    </svg>
  );
}

function PaginationIcon() {
  return (
    <svg {...iconSize}>
      <text x="14" y="44" fill="#9ca3af" fontSize="12" fontFamily="sans-serif">‹</text>
      <rect x="24" y="30" width="16" height="18" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1" />
      <text x="32" y="43" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="sans-serif">1</text>
      <rect x="44" y="30" width="16" height="18" rx="3" fill="#3b82f6" />
      <text x="52" y="43" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">2</text>
      <rect x="64" y="30" width="16" height="18" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1" />
      <text x="72" y="43" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="sans-serif">3</text>
      <rect x="84" y="30" width="16" height="18" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1" />
      <text x="92" y="43" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="sans-serif">4</text>
      <text x="106" y="44" fill="#9ca3af" fontSize="12" fontFamily="sans-serif">›</text>
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg {...iconSize}>
      <text x="14" y="16" fill="#6b7280" fontSize="9" fontFamily="sans-serif">▾</text>
      <text x="24" y="16" fill="#374151" fontSize="8" fontFamily="sans-serif">Root</text>
      <line x1="20" y1="20" x2="20" y2="50" stroke="#d1d5db" strokeWidth="1" />
      <line x1="20" y1="30" x2="32" y2="30" stroke="#d1d5db" strokeWidth="1" />
      <text x="34" y="18" fill="#6b7280" fontSize="9" fontFamily="sans-serif" />
      <text x="34" y="33" fill="#6b7280" fontSize="8" fontFamily="sans-serif">▾ Parent</text>
      <line x1="40" y1="36" x2="40" y2="56" stroke="#d1d5db" strokeWidth="1" />
      <line x1="40" y1="44" x2="50" y2="44" stroke="#d1d5db" strokeWidth="1" />
      <text x="52" y="47" fill="#374151" fontSize="8" fontFamily="sans-serif">Child 1</text>
      <line x1="40" y1="56" x2="50" y2="56" stroke="#d1d5db" strokeWidth="1" />
      <text x="52" y="59" fill="#374151" fontSize="8" fontFamily="sans-serif">Child 2</text>
      <line x1="20" y1="50" x2="32" y2="50" stroke="#d1d5db" strokeWidth="1" />
      <text x="34" y="53" fill="#374151" fontSize="8" fontFamily="sans-serif">▸ Leaf</text>
    </svg>
  );
}

function FormIcon() {
  return (
    <svg {...iconSize}>
      <text x="12" y="14" fill="#374151" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Name</text>
      <rect x="12" y="17" width="96" height="14" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1" />
      <text x="12" y="44" fill="#374151" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Email</text>
      <rect x="12" y="47" width="96" height="14" rx="3" fill="white" stroke="#d1d5db" strokeWidth="1" />
      <rect x="12" y="66" width="40" height="12" rx="3" fill="#3b82f6" />
      <text x="32" y="75" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif">Submit</text>
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg {...iconSize}>
      <circle cx="60" cy="40" r="18" fill="none" stroke="#e5e7eb" strokeWidth="3" />
      <path d="M60 22 A18 18 0 0 1 78 40" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 60 40" to="360 60 40" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

function SkeletonIcon() {
  return (
    <svg {...iconSize}>
      <circle cx="28" cy="20" r="12" fill="#e5e7eb">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <rect x="48" y="12" width="60" height="6" rx="3" fill="#e5e7eb">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="48" y="22" width="40" height="6" rx="3" fill="#e5e7eb">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="12" y="42" width="96" height="6" rx="3" fill="#e5e7eb">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="12" y="54" width="80" height="6" rx="3" fill="#e5e7eb">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <rect x="12" y="66" width="60" height="6" rx="3" fill="#e5e7eb">
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function DividerIcon() {
  return (
    <svg {...iconSize}>
      <rect x="14" y="14" width="60" height="4" rx="2" fill="#d1d5db" />
      <rect x="14" y="22" width="40" height="4" rx="2" fill="#d1d5db" />
      <line x1="10" y1="36" x2="110" y2="36" stroke="#d1d5db" strokeWidth="1.5" />
      <text x="60" y="40" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="sans-serif">OR</text>
      <line x1="10" y1="46" x2="110" y2="46" stroke="#d1d5db" strokeWidth="1.5" />
      <rect x="14" y="56" width="55" height="4" rx="2" fill="#d1d5db" />
      <rect x="14" y="64" width="70" height="4" rx="2" fill="#d1d5db" />
    </svg>
  );
}

function TimelineIcon() {
  return (
    <svg {...iconSize}>
      <line x1="28" y1="10" x2="28" y2="70" stroke="#e5e7eb" strokeWidth="2" />
      <circle cx="28" cy="16" r="5" fill="#3b82f6" />
      <text x="40" y="19" fill="#374151" fontSize="7" fontFamily="sans-serif">Created project</text>
      <circle cx="28" cy="38" r="5" fill="#22c55e" />
      <text x="40" y="41" fill="#374151" fontSize="7" fontFamily="sans-serif">Deployed v1.0</text>
      <circle cx="28" cy="60" r="5" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1" />
      <text x="40" y="63" fill="#9ca3af" fontSize="7" fontFamily="sans-serif">In progress...</text>
    </svg>
  );
}

function StepsIcon() {
  return (
    <svg {...iconSize}>
      <circle cx="20" cy="30" r="10" fill="#3b82f6" />
      <text x="20" y="34" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">✓</text>
      <text x="20" y="50" textAnchor="middle" fill="#374151" fontSize="6" fontFamily="sans-serif">Done</text>
      <line x1="30" y1="30" x2="50" y2="30" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="60" cy="30" r="10" fill="#3b82f6" />
      <text x="60" y="34" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">2</text>
      <text x="60" y="50" textAnchor="middle" fill="#374151" fontSize="6" fontFamily="sans-serif">Current</text>
      <line x1="70" y1="30" x2="90" y2="30" stroke="#e5e7eb" strokeWidth="2" />
      <circle cx="100" cy="30" r="10" fill="white" stroke="#e5e7eb" strokeWidth="2" />
      <text x="100" y="34" textAnchor="middle" fill="#9ca3af" fontSize="9" fontWeight="bold" fontFamily="sans-serif">3</text>
      <text x="100" y="50" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="sans-serif">Next</text>
    </svg>
  );
}

function TypographyIcon() {
  return (
    <svg {...iconSize}>
      <text x="14" y="38" fill="#374151" fontSize="32" fontWeight="bold" fontFamily="serif">Aa</text>
      <rect x="62" y="14" width="46" height="4" rx="2" fill="#374151" />
      <rect x="62" y="24" width="40" height="3" rx="1.5" fill="#9ca3af" />
      <rect x="62" y="33" width="44" height="3" rx="1.5" fill="#9ca3af" />
      <rect x="62" y="42" width="30" height="3" rx="1.5" fill="#9ca3af" />
      <rect x="14" y="52" width="94" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="14" y="60" width="80" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="14" y="68" width="66" height="3" rx="1.5" fill="#d1d5db" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg {...iconSize}>
      <rect x="15" y="8" width="90" height="64" rx="6" fill="white" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5 3" />
      <path d="M52 30 l8-10 l8 10" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="60" y1="30" x2="60" y2="50" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      <text x="60" y="62" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="sans-serif">Click or drag to upload</text>
    </svg>
  );
}

function RateIcon() {
  return (
    <svg {...iconSize}>
      {[0, 1, 2, 3, 4].map((i) => (
        <text key={i} x={20 + i * 20} y="48" textAnchor="middle" fill={i < 3 ? "#f59e0b" : "#d1d5db"} fontSize="22" fontFamily="sans-serif">★</text>
      ))}
    </svg>
  );
}

function TagIcon() {
  return (
    <svg {...iconSize}>
      <rect x="8" y="16" width="38" height="20" rx="10" fill="#dbeafe" />
      <text x="27" y="30" textAnchor="middle" fill="#2563eb" fontSize="8" fontFamily="sans-serif">Blue</text>
      <rect x="50" y="16" width="38" height="20" rx="10" fill="#dcfce7" />
      <text x="69" y="30" textAnchor="middle" fill="#16a34a" fontSize="8" fontFamily="sans-serif">Green</text>
      <rect x="28" y="44" width="38" height="20" rx="10" fill="#fef3c7" />
      <text x="47" y="58" textAnchor="middle" fill="#d97706" fontSize="8" fontFamily="sans-serif">Yellow</text>
      <rect x="70" y="44" width="38" height="20" rx="10" fill="#fee2e2" />
      <text x="89" y="58" textAnchor="middle" fill="#dc2626" fontSize="8" fontFamily="sans-serif">Red</text>
    </svg>
  );
}

function RadioIcon() {
  return (
    <svg {...iconSize}>
      <circle cx="24" cy="20" r="8" fill="white" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="24" cy="20" r="4" fill="#3b82f6" />
      <text x="38" y="24" fill="#374151" fontSize="9" fontFamily="sans-serif">Option A</text>
      <circle cx="24" cy="44" r="8" fill="white" stroke="#d1d5db" strokeWidth="2" />
      <text x="38" y="48" fill="#374151" fontSize="9" fontFamily="sans-serif">Option B</text>
      <circle cx="24" cy="66" r="8" fill="white" stroke="#d1d5db" strokeWidth="2" />
      <text x="38" y="70" fill="#374151" fontSize="9" fontFamily="sans-serif">Option C</text>
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg {...iconSize}>
      <rect x="12" y="8" width="96" height="64" rx="4" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx="36" cy="28" r="8" fill="#fde68a" />
      <path d="M12 58 l28-20 l16 12 l12-8 l28 18" fill="#86efac" opacity="0.6" />
      <path d="M40 52 l20-16 l36 24 l0 8 l-84 0 l0-4 z" fill="#4ade80" opacity="0.5" />
    </svg>
  );
}

function GenericIcon() {
  return (
    <svg {...iconSize}>
      <rect x="20" y="10" width="80" height="60" rx="8" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1.5" />
      <rect x="32" y="22" width="56" height="6" rx="3" fill="#d1d5db" />
      <rect x="32" y="34" width="40" height="6" rx="3" fill="#d1d5db" />
      <rect x="32" y="46" width="48" height="6" rx="3" fill="#d1d5db" />
    </svg>
  );
}

function DrawerIcon() {
  return (
    <svg {...iconSize}>
      <rect x="0" y="0" width="120" height="80" fill="#0000001a" />
      <rect x="40" y="0" width="80" height="80" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="50" y="16" fill="#111827" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Drawer</text>
      <text x="112" y="16" fill="#9ca3af" fontSize="10" fontFamily="sans-serif">×</text>
      <line x1="40" y1="22" x2="120" y2="22" stroke="#e5e7eb" />
      <rect x="48" y="30" width="60" height="4" rx="2" fill="#e5e7eb" />
      <rect x="48" y="40" width="50" height="4" rx="2" fill="#e5e7eb" />
      <rect x="48" y="50" width="55" height="4" rx="2" fill="#e5e7eb" />
    </svg>
  );
}

function PopoverIcon() {
  return (
    <svg {...iconSize}>
      <rect x="35" y="50" width="50" height="18" rx="4" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
      <text x="60" y="63" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="sans-serif">Trigger</text>
      <rect x="20" y="8" width="80" height="34" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="30" y="22" fill="#374151" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Popover title</text>
      <rect x="30" y="28" width="50" height="3" rx="1.5" fill="#d1d5db" />
      <rect x="30" y="34" width="38" height="3" rx="1.5" fill="#d1d5db" />
      <path d="M56 42 l4 6 l4-6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
    </svg>
  );
}

function DropdownIcon() {
  return (
    <svg {...iconSize}>
      <rect x="25" y="6" width="70" height="18" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
      <text x="35" y="19" fill="#374151" fontSize="8" fontFamily="sans-serif">Actions</text>
      <path d="M83 13 l4 5 l4-5" fill="none" stroke="#6b7280" strokeWidth="1.5" />
      <rect x="25" y="26" width="70" height="48" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1" />
      <rect x="27" y="28" width="66" height="14" rx="2" fill="#eff6ff" />
      <text x="35" y="38" fill="#3b82f6" fontSize="8" fontFamily="sans-serif">Edit</text>
      <text x="35" y="52" fill="#374151" fontSize="8" fontFamily="sans-serif">Duplicate</text>
      <line x1="30" y1="58" x2="90" y2="58" stroke="#f3f4f6" />
      <text x="35" y="69" fill="#ef4444" fontSize="8" fontFamily="sans-serif">Delete</text>
    </svg>
  );
}

function NotificationIcon() {
  return (
    <svg {...iconSize}>
      <rect x="10" y="8" width="100" height="30" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx="24" cy="23" r="6" fill="#3b82f6" />
      <text x="24" y="26" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">i</text>
      <rect x="36" y="16" width="50" height="4" rx="2" fill="#374151" />
      <rect x="36" y="24" width="65" height="3" rx="1.5" fill="#d1d5db" />
      <text x="104" y="18" fill="#9ca3af" fontSize="8" fontFamily="sans-serif">×</text>
      <rect x="10" y="44" width="100" height="30" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
      <circle cx="24" cy="59" r="6" fill="#ef4444" />
      <text x="24" y="62" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif">!</text>
      <rect x="36" y="52" width="50" height="4" rx="2" fill="#991b1b" />
      <rect x="36" y="60" width="65" height="3" rx="1.5" fill="#fca5a5" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg {...iconSize}>
      <rect x="10" y="8" width="100" height="18" rx="3" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx="22" cy="17" r="3" fill="#3b82f6" />
      <rect x="30" y="14" width="50" height="4" rx="2" fill="#374151" />
      <rect x="10" y="30" width="100" height="18" rx="3" fill="#fafafa" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx="22" cy="39" r="3" fill="#22c55e" />
      <rect x="30" y="36" width="60" height="4" rx="2" fill="#374151" />
      <rect x="10" y="52" width="100" height="18" rx="3" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <circle cx="22" cy="61" r="3" fill="#f59e0b" />
      <rect x="30" y="58" width="45" height="4" rx="2" fill="#374151" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg {...iconSize}>
      <rect x="6" y="8" width="44" height="64" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="14" y="22" fill="#374151" fontSize="7" fontFamily="sans-serif">Item 1</text>
      <text x="14" y="34" fill="#374151" fontSize="7" fontFamily="sans-serif">Item 2</text>
      <text x="14" y="46" fill="#3b82f6" fontSize="7" fontFamily="sans-serif">Item 3 ✓</text>
      <text x="57" y="38" fill="#3b82f6" fontSize="12" fontFamily="sans-serif">→</text>
      <text x="57" y="52" fill="#9ca3af" fontSize="12" fontFamily="sans-serif">←</text>
      <rect x="70" y="8" width="44" height="64" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="78" y="22" fill="#374151" fontSize="7" fontFamily="sans-serif">Item 4</text>
      <text x="78" y="34" fill="#374151" fontSize="7" fontFamily="sans-serif">Item 5</text>
    </svg>
  );
}

const iconMap: Record<string, () => JSX.Element> = {
  button: ButtonIcon,
  input: InputIcon,
  textfield: InputIcon,
  textarea: InputIcon,
  inputnumber: InputIcon,
  select: SelectIcon,
  dropdown: DropdownIcon,
  table: TableIcon,
  datatable: TableIcon,
  modal: ModalIcon,
  dialog: ModalIcon,
  card: CardIcon,
  avatar: AvatarIcon,
  tabs: TabsIcon,
  tab: TabsIcon,
  checkbox: CheckboxIcon,
  switch: SwitchIcon,
  toggle: SwitchIcon,
  slider: SliderIcon,
  progress: ProgressIcon,
  progressbar: ProgressIcon,
  calendar: CalendarIcon,
  datepicker: CalendarIcon,
  timepicker: CalendarIcon,
  tooltip: TooltipIcon,
  badge: BadgeIcon,
  accordion: AccordionIcon,
  collapse: AccordionIcon,
  alert: AlertIcon,
  notification: NotificationIcon,
  toast: NotificationIcon,
  message: NotificationIcon,
  breadcrumb: BreadcrumbIcon,
  carousel: CarouselIcon,
  menu: MenuIcon,
  nav: MenuIcon,
  navbar: MenuIcon,
  navigation: MenuIcon,
  sidebar: MenuIcon,
  pagination: PaginationIcon,
  tree: TreeIcon,
  treeselect: TreeIcon,
  treeview: TreeIcon,
  form: FormIcon,
  spinner: SpinnerIcon,
  spin: SpinnerIcon,
  loading: SpinnerIcon,
  skeleton: SkeletonIcon,
  divider: DividerIcon,
  separator: DividerIcon,
  timeline: TimelineIcon,
  steps: StepsIcon,
  stepper: StepsIcon,
  typography: TypographyIcon,
  text: TypographyIcon,
  heading: TypographyIcon,
  title: TypographyIcon,
  upload: UploadIcon,
  dragger: UploadIcon,
  rate: RateIcon,
  rating: RateIcon,
  tag: TagIcon,
  chip: TagIcon,
  radio: RadioIcon,
  radiogroup: RadioIcon,
  image: ImageIcon,
  gallery: ImageIcon,
  drawer: DrawerIcon,
  popover: PopoverIcon,
  popconfirm: PopoverIcon,
  list: ListIcon,
  transfer: TransferIcon,
  generic: GenericIcon,
  layout: GenericIcon,
  grid: GenericIcon,
  space: GenericIcon,
  configprovider: GenericIcon,
  descriptions: GenericIcon,
  empty: GenericIcon,
  result: GenericIcon,
  statistic: GenericIcon,
  segmented: GenericIcon,
  affix: GenericIcon,
  anchor: GenericIcon,
  autocomplete: SelectIcon,
  cascader: SelectIcon,
  colorpicker: GenericIcon,
  floatbutton: ButtonIcon,
  qrcode: GenericIcon,
  tour: TooltipIcon,
  watermark: GenericIcon,
};

export function getComponentIcon(name: string): JSX.Element {
  const normalized = name.toLowerCase().replace(/[\s\-_./]/g, "");
  const Icon = iconMap[normalized] ?? GenericIcon;
  return <Icon />;
}

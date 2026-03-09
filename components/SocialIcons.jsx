const SOCIAL_LINKS = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/people/Shanti-Ratnam/100039183655785/"
  },
  {
    key: "x",
    label: "X",
    href: "https://x.com/SR_AIIMS"
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@saurabhbharill"
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/shantiratnamayushinstitute/"
  }
];

function SocialIcon({ network }) {
  if (network === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M13.25 21v-7.73h2.6l.39-3.03h-2.99V8.31c0-.88.24-1.47 1.51-1.47h1.61V4.13a21.57 21.57 0 0 0-2.35-.12c-2.33 0-3.93 1.42-3.93 4.03v2.2H7.44v3.03h2.65V21h3.16z" />
      </svg>
    );
  }

  if (network === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M23 12s0-3.23-.41-4.79a2.98 2.98 0 0 0-2.1-2.1C18.93 4.7 12 4.7 12 4.7s-6.93 0-8.49.41a2.98 2.98 0 0 0-2.1 2.1C1 8.77 1 12 1 12s0 3.23.41 4.79a2.98 2.98 0 0 0 2.1 2.1c1.56.41 8.49.41 8.49.41s6.93 0 8.49-.41a2.98 2.98 0 0 0 2.1-2.1C23 15.23 23 12 23 12zM9.2 15.47V8.53L15.2 12 9.2 15.47z" />
      </svg>
    );
  }

  if (network === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 7.06A4.94 4.94 0 1 0 16.94 12 4.95 4.95 0 0 0 12 7.06zm0 8.25A3.31 3.31 0 1 1 15.31 12 3.31 3.31 0 0 1 12 15.31z" />
        <circle cx="17.18" cy="6.83" r="1.15" />
        <path d="M12 2.5c3.1 0 3.47.01 4.69.07 1.12.05 1.73.24 2.13.39.53.21.9.45 1.29.84.39.39.63.76.84 1.29.16.4.34 1.01.39 2.13.06 1.22.07 1.59.07 4.69s-.01 3.47-.07 4.69c-.05 1.12-.24 1.73-.39 2.13a3.47 3.47 0 0 1-.84 1.29c-.39.39-.76.63-1.29.84-.4.16-1.01.34-2.13.39-1.22.06-1.59.07-4.69.07s-3.47-.01-4.69-.07c-1.12-.05-1.73-.24-2.13-.39a3.47 3.47 0 0 1-1.29-.84 3.47 3.47 0 0 1-.84-1.29c-.16-.4-.34-1.01-.39-2.13C2.51 15.47 2.5 15.1 2.5 12s.01-3.47.07-4.69c.05-1.12.24-1.73.39-2.13.21-.53.45-.9.84-1.29.39-.39.76-.63 1.29-.84.4-.16 1.01-.34 2.13-.39C8.53 2.51 8.9 2.5 12 2.5zm0-1.5C8.86 1 8.47 1.01 7.23 1.07 5.99 1.13 5.14 1.33 4.41 1.62a4.95 4.95 0 0 0-1.79 1.17 4.95 4.95 0 0 0-1.17 1.79c-.29.73-.49 1.58-.55 2.82C.84 8.64.83 9.03.83 12.17s.01 3.53.07 4.77c.06 1.24.26 2.09.55 2.82.25.65.61 1.26 1.17 1.79.53.56 1.14.92 1.79 1.17.73.29 1.58.49 2.82.55 1.24.06 1.63.07 4.77.07s3.53-.01 4.77-.07c1.24-.06 2.09-.26 2.82-.55a4.95 4.95 0 0 0 1.79-1.17 4.95 4.95 0 0 0 1.17-1.79c.29-.73.49-1.58.55-2.82.06-1.24.07-1.63.07-4.77s-.01-3.53-.07-4.77c-.06-1.24-.26-2.09-.55-2.82a4.95 4.95 0 0 0-1.17-1.79 4.95 4.95 0 0 0-1.79-1.17c-.73-.29-1.58-.49-2.82-.55C15.53 1.01 15.14 1 12 1z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M18.9 2H22l-6.77 7.73L23 22h-6.2l-4.86-6.36L6.37 22H3.27l7.23-8.26L1 2h6.36l4.39 5.79L18.9 2zm-1.09 18h1.72L6.48 3.9H4.62L17.81 20z" />
    </svg>
  );
}

export function SocialLinks({ className = "social-list", withLabels = false }) {
  return (
    <div className={className} aria-label="Social links">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.label}
        >
          <SocialIcon network={link.key} />
          {withLabels ? <span>{link.label}</span> : null}
        </a>
      ))}
    </div>
  );
}


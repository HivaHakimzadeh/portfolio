import type { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  newTab?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = 'secondary',
  icon,
  newTab = false,
}: CTAButtonProps) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noreferrer' : undefined}
    >
      {children}
      {icon}
    </a>
  );
}

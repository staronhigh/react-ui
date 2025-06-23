import './button.scss';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  icon?: 'start' | 'end' | 'only';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  icon,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';
  return (
    <button
      type="button"
      className={['btn', `btn-${size}`, mode, icon ? `btn-icon-${icon}`:'' ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
};

import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary',
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-center";
  
  const variantStyles = {
    primary: "bg-teal text-white hover:bg-teal-dark",
    secondary: "bg-transparent border-2 border-navy text-navy hover:bg-navy hover:text-white"
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = '', size = 36 }: LogoProps) {
  return (
    <img
      src="/favicon.svg"
      alt="Get AI Made"
      width={size}
      height={size}
      className={className}
    />
  );
}

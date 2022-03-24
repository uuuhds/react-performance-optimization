export interface ButtonProps {
  onClick: () => any;
  children: string;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="p-2 bg-amber-200 border-2 rounded" onClick={onClick}>
      {children}
    </button>
  );
}

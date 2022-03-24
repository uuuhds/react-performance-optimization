export interface TitleProps {
  children: any;
}

export function Title({ children }: TitleProps) {
  return <p>{children}</p>;
}

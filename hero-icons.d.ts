// global.d.ts

declare module "@heroicons/react/outline" {
  export interface IconProps {
    size?: number;
    color?: string;
    className?: string;
  }

  export const HomeIcon: (props: IconProps) => JSX.Element;
  export const SunIcon: (props: IconProps) => JSX.Element;
  export const CalendarIcon: (props: IconProps) => JSX.Element;
  export const ChevronDownIcon: (props: IconProps) => JSX.Element;
  export const MoonIcon: (props: IconProps) => JSX.Element;
  export const MagnifyingGlassCircleIcon: (props: IconProps) => JSX.Element;
  export const FilmIcon: (props: IconProps) => JSX.Element;
}

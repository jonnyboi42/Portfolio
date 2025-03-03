export interface CustomButtonProps {
    title: string;
    route: string;
    className?: string;
    icon?: string;
    glowEffect?: boolean; // New optional prop for hover glow effect
    onClick?: () => void;
  }
  
import { Icon } from "@iconify/react";
export const MyIcon = ({ name, size = 20, className = "" }) => {
  return <Icon icon={name} width={size} height={size} className={className} />;
};
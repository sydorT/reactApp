import { Link } from "@mui/material";

const LinkMenu = (props) => {
  return <Link
    href={props.href}
    variant={props.variant}
    color={props.color}
    underline="hover"
    >
      {props.children}
  </Link>;
};

export default LinkMenu;

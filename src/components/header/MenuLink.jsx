import { Link } from "@mui/material";

const LinkMenu = (props) => {
  return <Link
    href={props.href}
    variant={props.variant}
    color={props.color}
    underline={props.underline}
    >
      {props.children}
  </Link>;
};

export default LinkMenu;

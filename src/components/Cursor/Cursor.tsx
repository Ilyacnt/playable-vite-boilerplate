import { CursorContainer } from "./Cursor.styled";
import cursor from "../../assets/cursor.svg";

type TCursorProps = {
  hidden?: boolean;
};

export const Cursor = ({ hidden = false }: TCursorProps) => {
  return <CursorContainer hidden={hidden} src={cursor} />;
};

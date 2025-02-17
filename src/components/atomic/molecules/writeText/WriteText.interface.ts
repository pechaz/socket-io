export interface IWriteTextProps {
  onSend: () => void;
  val: string;
  onValChanged: (val: string) => void;
  className?: string;
}

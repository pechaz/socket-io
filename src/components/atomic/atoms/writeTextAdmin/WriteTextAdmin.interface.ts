export interface IWriteTextAdminProps {
  onSend: () => void;
  val: string;
  onValChanged: (val: string) => void;
  className?: string;
}

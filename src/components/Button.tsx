type Props = {
  styles: any;
};

const Button = ({ styles }: Props) => (
  <button
    type="button"
    className={`button-emrald ${styles}`}
  >
    Hire Me
  </button>
);

export default Button;

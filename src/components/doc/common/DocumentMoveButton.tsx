import SubmitButton, { ISubmitButton } from '@components/common/SubmitButton';
import { useNavigate, useParams } from 'react-router-dom';

interface IProps extends ISubmitButton {
  path?: string;
}

const DocumentMoveButton: React.FC<IProps> = ({
  path = '../',
  children = '버튼',
  $style,
  ...props
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNavigate = () => {
    $style === 'negative'
      ? navigate({
          pathname: path + (id ? +id - 1 : 1),
        })
      : navigate({
          pathname: path + (id ? +id + 1 : 1),
        });
  };

  return (
    <SubmitButton {...props} onClick={handleNavigate} $style={$style}>
      {children}
    </SubmitButton>
  );
};

export default DocumentMoveButton;

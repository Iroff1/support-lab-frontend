import palette from '@assets/colors';
import translateFontSize from '@utils/translateFontSize';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${palette.black.B60};
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => $progress * 100}%;
  height: 100%;
  background-color: ${palette.main.main};
`;

const ProgressBarText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${palette.black.B60};
  ${css(translateFontSize('SB_15'))}
`;

interface IDocumentProgressProps {
  level: number;
}

const DocumentProgress: React.FC<IDocumentProgressProps> = (props) => {
  return (
    <Wrapper>
      <ProgressBar>
        <ProgressBarFill $progress={props.level / 30} />
      </ProgressBar>
      <ProgressBarText>
        <span>{props.level} / 30</span>
      </ProgressBarText>
    </Wrapper>
  );
};

export default DocumentProgress;

import { Typography } from 'components/UI/Typography';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';
import { StepperStyled } from './Steper.styles';

export interface StepperProps {
    label: string;
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export function Stepper({ label, count, onIncrease, onDecrease }: StepperProps) {
    return (
        <StepperStyled>
            <Typography>
                {label}: {count}
            </Typography>
            <span>
                <IconButton
                    css={{ width: 24 }}
                    size={'normal'}
                    color={'primaryLight'}
                    onClick={(e: { preventDefault: () => void }) => {
                        e.preventDefault();
                        if (count <= 1) return;
                        onDecrease();
                    }}
                >
                    <Icon label={'Remove'} size={'medium'} type={Icon.Types.MINUS} />
                </IconButton>
                <IconButton
                    css={{ width: 24 }}
                    size={'normal'}
                    color={'primaryLight'}
                    onClick={(e: { preventDefault: () => void }) => {
                        e.preventDefault();
                        if (count >= 10) return;
                        onIncrease();
                    }}
                >
                    <Icon label={'Remove'} size={'medium'} type={Icon.Types.PLUS} />
                </IconButton>
            </span>
        </StepperStyled>
    );
}

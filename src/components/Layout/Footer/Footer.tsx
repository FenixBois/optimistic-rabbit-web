import { StyledFooter } from './Footer.styles';
import { Icon, Switch } from 'components/UI';

interface FooterProps {}

export function Footer({}: FooterProps) {
    return (
        <StyledFooter>
            <Switch iconOn={<Icon type={Icon.Types.SUN_ICON} />} iconOff={<Icon type={Icon.Types.MOON_ICON} />} />
        </StyledFooter>
    );
}

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import * as S from './styles';
import { ItensMenu } from './header/data';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <HeaderComponent data={ItensMenu} />

      {children}

      <FooterComponent />
    </S.Layout>
  );
}

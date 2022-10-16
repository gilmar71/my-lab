/* React/Next */
import Link from 'next/link';

/* Components */

/* Styles */
import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  text: string;
  href?: string;
  type?: 'submit' | 'button';
}

export function Button({ text, href, type, ...props }: ButtonProps) {
  return (
    <S.Button className="button">
      {href && !type ? (
        <Link href={href} passHref>
          <a href="" className="txt-sz-8-medium uppercase" {...props}>
            {text}
          </a>
        </Link>
      ) : (
        <button
          className="txt-sz-8-medium uppercase"
          type={type ? type : 'submit'}
          {...props}
        >
          {text}
        </button>
      )}
    </S.Button>
  );
}

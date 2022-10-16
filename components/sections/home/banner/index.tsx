/* Components */
/* Styles */
import { Button } from '../../../data/button';
import { Container } from '../../../data/container';
import Item from '../../../data/item';
import * as S from './styles';
import { MyContext } from '../../../../src/contexts/mainContext';

export function Banner() {
  const { state, createNewItem } = MyContext();
  return (
    <S.Banner>
      <Container>
        <div className="top">
          <h1>Grid-list</h1>
          <Button onClick={createNewItem} text="Create new person" />
        </div>
        <div className="person-list">
          {state.items.map((item, index) => (
            <Item key={item.id} position={index} {...item} />
          ))}
        </div>
      </Container>
    </S.Banner>
  );
}

import { H2, Li, Ol } from 'aware-components';

export function MyList() {
  return (
    <>
      <H2>MyList</H2>
      <Ol style={{ backgroundColor: '#666' }}>
        <Li>Item 1</Li>
        <Li>Item 2</Li>
        <li>
          <span>Item 3</span>
        </li>
        <p role='listitem'>Item 5</p>
      </Ol>
    </>
  );
}

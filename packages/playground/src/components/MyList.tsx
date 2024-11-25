import { H2, Li, Ul } from 'aware-components';

export function MyList() {
  return (
    <>
      <H2>MyList</H2>
      <Ul style={{ backgroundColor: '#666' }}>
        <Li>Item 1</Li>
        <Li>Item 2</Li>
        <li>
          <span>Item 3</span>
        </li>
        <p>Item 5</p>
      </Ul>
    </>
  );
}

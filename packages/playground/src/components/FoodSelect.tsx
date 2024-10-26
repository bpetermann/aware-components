import { Label, Optgroup, Select } from 'aware-components';

export function FoodSelect() {
  return (
    <>
      <Label htmlFor='hr-select'>Your favorite food</Label> <br />
      <Select name='foods' id='hr-select'>
        <>
          <option value=''>Choose a food</option>
          <optgroup label='Fruit'>
            <option value='apple'>Apples</option>
            <option value='banana'>Bananas</option>
            <option value='cherry'>Cherries</option>
            <option value='damson'>Damsons</option>
          </optgroup>
          <Optgroup label='Vegetables'>
            <option value='artichoke'>Artichokes</option>
            <option value='broccoli'>Broccoli</option>
            <option value='cabbage'>Cabbages</option>
          </Optgroup>
          <optgroup label='Meat'>
            <option value='beef'>Beef</option>
            <option value='chicken'>Chicken</option>
            <option value='pork'>Pork</option>
          </optgroup>
          <optgroup label='Fish'>
            <option value='cod'>Cod</option>
            <option value='haddock'>Haddock</option>
            <option value='salmon'>Salmon</option>
            <option value='turbot'>Turbot</option>
          </optgroup>
        </>
      </Select>
    </>
  );
}

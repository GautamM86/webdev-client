export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let favoriteCity = "San Diego";
  let favoriteNumber = 2;
  let isFavoriteCity = typeof favoriteCity;
  let isFavoriteNumber = typeof favoriteNumber;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      favoriteCity = {favoriteCity}               <br />
      favoriteNumber = {favoriteNumber}           <br />
      typeof favoriteCity = {isFavoriteCity}      <br />
      typeof favoriteNumber = {isFavoriteNumber}  <br />
      sampleCount = {sampleCount}                 <br />
      typeof sampleCount = {typeof sampleCount}   <br />
      sampleLabel = {sampleLabel}                 <br />
      typeof sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}
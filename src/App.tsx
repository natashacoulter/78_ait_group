import GlobalStyles from "./styles/GlobalStyles";




function App() {
  return (
    // <></> - fragmet. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <>
      <GlobalStyles />
     
    </>
  );
}

export default App;

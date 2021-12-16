import PostCardList from '../components/PostCardList';

function Home({ posts }) {
  return (
    <div>
      <h1>Feel free to checkout some of our posts with react issues</h1>
      <ul>
        <li>1. Załaduj oraz wyświetl ostatnie 10 issues.</li>
        <li>2. Zaimplementuj paginację po 5 elementów - infinite scroll.</li>
        <li>Done 3. Każdy "kafelek" issue powinien zawierać numer issue, tytuł oraz datę utworzenia.</li>
        <li>3. Kiedy klikniemy w wybrany issue, powinno nas przekierować na stronę z zawartością - stan issue, tytuł, treść issue.</li>
        <li>4. Pod wybranym issue, dodaj opcję oceniania issue (tak jak na StackOverflow, inkrementowanie/dekremntowanie punktów) jeden użytkownik może w nieskończoną ilość zaplusować bądź też zminusować issue.</li>
        <li>5. Zakres wyświetlania oceny jest następująca:
          - poniżej -99 wyświetla "99!!"
          - od -99 do 99 wyświetla wybraną liczbę
          - powyżej 99 wyświetla "99!!" </li>
        <li>6. Ilość ocen ma być widoczna po zamknięciu strony, po ponownym otwarciu stan ocen ma wskazywać na taki sam.</li>

        <li>Opcjonalne do wykonania:</li>
        <li>1. Lokalna wyszukiwarka issue</li>
        <li>2. Animacje oraz przejścia</li>

      </ul>
      <p>https://github.com/facebook/react/issues</p>
      <PostCardList posts={posts}/>
    </div>
  );
}

export default Home;

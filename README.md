# prezentacja-vs-code

## Snippety

Aby stworzyć snippety użytkownika należy:
1. Kliknąć przycisk ``F1`` lub ``ctrl+shift+p``
2. Wpisać ``snippets`` i wybrać opcję: ``Preferences: Configure User Snippets``
3. Teraz Mamy wiele opcji do wyboru, wszystkie dotyczą tego samego w zasadzie, ale dwie opcje nas interesują najbardziej:
    - ``New Global Snippets File..``; tutaj stworzy się plik ze snippetami da całej visualki
    - ``New Snippets file for 'nazwa przestrzeni roboczej'``; tutaj w folderze .vscode stworzy się plik i te snippety będą dostępne tylko dla tego projektu
4. Wpisujemy nazwę jak ma się nazywać nasz plik
5. Zostaniemy następnie przeniesieni w nowym oknie do pliku z rozsrzerzeniem ``.code-snippets`` ze składnią json
6. Zaczynamy pisać :D

Bardzo dobry opis tworzenia snippetów: [Dokumentacja snippetów VS Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets "Dokumentacja snippetów VS Code")

### Moje podpowiedzi:
- jeżeli chcemy zrobić wcięcie w kodzie używamy ``\t``
- jeżeli chcemy żeby nasz kursor znajdował się w kilku miejscach piszemy ``$cyfra`` w tych miejscach
- jeżeli chcemy przeskoczyć pomiędzy paroma miejscami kursora klikamy ``tab``

## Emmety

Emmety są domyślnie wbudowane w VS Code
Są one proste w zastosowaniu i najlepiej jest zapoznać się z [Dokumentacja emmet](https://docs.emmet.io/abbreviations/syntax/ 'Dokumentacja Emmet')

## TypeScript w JavaScript

![TypeScript JS meme](/src/tsjsmeme.png "TypeScript vs JavaScript meme")

TS oferuje obsługę typów, a w połączeniu z [JSDoc](https://jsdoc.app/ 'Dokumentacja JSDoc') oferuje nam tworzenie własnej 'dokumentacji' z VS Code dla JavaScript. Więcej: [IntelliSense based on TypeScript Declaration Files](https://github.com/microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio#user-content--intellisense-based-on-typescript-declaration-files 'IntelliSense based on TypeScript Declaration Files')

### Moje podpowiedzi:
- aby stworzyć komentarz JSDoc należy stworzyć następujący komentarz:
 ```
 /**  
 *
 */
 ``` 
- żeby szybko stworzyć komentarz JSDoc nad zdefiniowaną funkcją z parametrami należy napisać ``/** `` i wcisnąć ``tab``
- żeby poprawnie zadeklarować funkcję callback należy użyć następującej składni:
```
/**
*@param {'nasza nazwa dla callbacku'} nazwa_zmiennej
*@callback 'nasza nazwa dla callbacku'
*@param {typ_zmiennej} 'nazwa wartości zwracanej w callbacku' ilość paramów zależy od ilości zmiennych dla callbacku
*/
```

np.

```
/**
 * @param {finalCall} callback
 * @callback finalCall
 * @param {Number[]} finalValues
 */
function funkcja(callback){
    ...
    callback(finalCall);
}

funkcja((finalCall)=>{
    ...
});
```
- żeby korzystać z możliwości TS należy stworzyć plik z rozszerzeniem ``.d.ts`` a następnie skorzystać z komentarza w JSDoc (patrz plik ``app.js`` linijka 21 i plik ``myTypes.d.ts`` w folderze ``app``)

## Debugger oraz Git i GitHub w VSCode

Tutaj mogę polecić dwa filmy, z których sam korzystałem przygotowując się do prezentacji:
- [Git i GitHub w VSCode](https://www.youtube.com/watch?v=F2DBSH2VoHQ 'podstawy gita i githuba w vscode') (Niestety nie ma tam powiedziane o pull requestach o łączeniu branchy)

- [Debuggowanie](https://www.youtube.com/watch?v=7qZBwhSlfOo 'podstawy debbugowania') (jest to na podstawie pythona, ale zasada działania jest w gruncie rzeczy taka sama)

#### Artkuły przydatne przy korzystaniu z debuggera:
- [Debuggowanie w VSCode](https://code.visualstudio.com/docs/editor/debugging 'Debuggowanie w VSCode')
- [Debuggowanie node'a](https://code.visualstudio.com/docs/nodejs/nodejs-debugging 'Debuggowanie node')

### Moje uwagi:
W przypadku chęci debuggowania z użyciem różnych przeglądarek trzeba zainstalować rozszerzenia. Jest tam sposób konfiguracji debuggera, aby to działało oraz rozwiązania najczęstszych problemów. W przypadku jakichkolwiek problem polecam rozpocząć szukanie rozwiązania od dokumentacji wspomnianych rozszerzeń
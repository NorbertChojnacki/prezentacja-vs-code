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

Do tworzenia własnych snippetów polecam stronę [Dokumentacja snippetów VS Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets "Dokumentacja snippetów VS Code")

Moje podpowiedzi:
- jeżeli chcemy zrobić wcięcie w kodzie używamy ``\t``
- jeżeli chcemy żeby nasz kursor znajdował się w kilku miejscach piszemy ``$cyfra`` w tych miejscach
- jeżeli chcemy przeskoczyć pomiędzy paroma miejscami kursora klikamy ``tab``

## Emmety

Emmety są domyślnie wbudowane w VS Code
Są one proste w zastosowaniu i najlepiej jest zapoznać się z [Dokumentacja emmet](https://docs.emmet.io/abbreviations/syntax/ 'Dokumentacja Emmet')

## TypeScript w JavaScript

TS oferuje obsługę typów, a w połączeniu z [JSDoc](https://jsdoc.app/ 'Dokumentacja JSDoc') oferuje nam tworzenie własnej 'dokumentacji' z VS Code dla JavaScript. Więcej: [IntelliSense based on TypeScript Declaration Files](https://github.com/microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio#user-content--intellisense-based-on-typescript-declaration-files 'IntelliSense based on TypeScript Declaration Files')

Moje podpowiedzi:
- aby stworzyć komentarz JSDoc należy stworzyć następujący komentarz:
> ``/**``
> ``*``
> ``*/``
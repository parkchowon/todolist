# ✅ ToDoList

나만의 투두리스트를 작성해보세요!

## ▶️ 프로젝트 소개

- 내일배움캠프에서 진행하는 react 개인 프로젝트
- 개발 기간 : 05.14~05.16
- 개발 언어 : React

## 🌟 이렇게 구현했어요
- localStorage를 이용해서 todolist를 저장, 수정, 삭제 하게 했어요
- swiper를 사용해서 card를 옆으로 넘길 수 있게 했어요.

## 🗂️ 폴더 구조
```
📦public
 ┗ 📜todo-Icon.svg
📦src
 ┣ 📂components
 ┃ ┣ 📜CardListItem.jsx
 ┃ ┣ 📜Header.jsx
 ┃ ┗ 📜ListContainer.jsx
 ┣ 📂styles
 ┃ ┣ 📜App.css
 ┃ ┣ 📜CardListItem.css
 ┃ ┣ 📜Header.css
 ┃ ┣ 📜index.css
 ┃ ┣ 📜ListContainer.css
 ┃ ┗ 📜reset.css
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```
### 🔖 components 설명
- Header : todolist를 저장할 수 있게 하고 빈칸이나 글자가 30이 넘을 시 등록
- ListContainer : todolist를 불러오고 swiper로 슬라이드
- CardListItem : props를 받아서 item안에 정보를 저장 및 todolist 수정, 삭제 기능

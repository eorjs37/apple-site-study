# apple-clone-site 공부

## Section 높이 동적으로 구하기

> window.innerHeight을 이용하여 각 sections을 동적으로 구하기

```javascript
const objs = [
  {
    section: document.querySelector("#section1"),
  },
  {
    section: document.querySelector("#section2"),
  },
  {
    section: document.querySelector("#section3"),
  },
  {
    section: document.querySelector("#section4"),
  },
];
const setSzie = () => {
  const windowHeight = window.innerHeight;
  objs.forEach((obj) => {
    const { section } = obj;
    section.style.height = `${windowHeight}px`;
  });
};
window.addEventListener("resize", setSzie);
```

## 현재 scene 구하기

## 현재 scene의 위치

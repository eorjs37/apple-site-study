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

## scroll 이벤트의 현재 scene 구하기

```javascript
let curScene = 0;

window.addEventListener("scroll", () => {
  let pageYoffset = window.pageYOffset;
  let prevScrollHeight = 0;

  // 현재까지의 scene의 높이 구하기
  for (let i = 0; i < curScene; i++) {
    prevScrollHeight += objs[i].section.clientHeight;
  }

  // 현재 page 높이 > prevScrollHeight(현재 scene까지의 총 scene 높이 총합) +  현재 scene의 높이
  if (pageYOffset > prevScrollHeight + objs[curScene].section.clientHeight) {
    curScene++;
  }

  if (pageYoffset < prevScrollHeight) {
    curScene--;
  }
});
```

## DOMContentLoaded 될 때의 현재 scene 구하기

```javascript
const setSzie = () => {
  //현재 scene 구하기
  let prevHeight = 0;
  const pageYOffset = window.pageYOffset;
};
```

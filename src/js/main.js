/**
 * 즉시 실행함수
 */
(() => {
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
  let curScene = 0;

  const setSzie = () => {
    const windowHeight = window.innerHeight;
    objs.forEach((obj) => {
      const { section } = obj;
      section.style.height = `${windowHeight}px`;
    });

    //현재 scene 구하기
    for (let i = 0; i < objs.length; i++) {
      const pageYOffset = window.pageYoffset;
      let prevHeight = 0;

      const { section } = objs[i];
      const clientHeight = section.clientHeight;

      prevHeight += clientHeight;
    }
  };

  window.onload = () => {
    setSzie();
  };

  window.addEventListener("resize", setSzie);
  window.addEventListener("DOMContentLoaded", setSzie);
  window.addEventListener("scroll", () => {
    let pageYoffset = window.pageYOffset;
    let prevScrollHeight = 0;

    //현재 scene 구하기
    for (let i = 0; i < curScene; i++) {
      prevScrollHeight += objs[i].section.clientHeight;
    }

    if (pageYoffset > prevScrollHeight + objs[curScene].section.clientHeight) {
      curScene++;
    }

    if (pageYoffset < prevScrollHeight) {
      curScene--;
    }

    console.log("curScene : ", curScene);
  });
})();

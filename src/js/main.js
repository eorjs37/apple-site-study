/**
 * 즉시 실행함수
 */
(() => {
  const objs = [
    {
      section: document.querySelector("#section1"),
      messageList: [{ messageA: document.querySelector("#section1 .main-message.a") }],
      values: [{ messageA_opacity_in: [0, 1] }],
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
  let curScenetHeight = 0;

  const setSzie = () => {
    const windowHeight = window.innerHeight * 5;
    objs.forEach((obj) => {
      const { section } = obj;
      section.style.height = `${windowHeight}px`;
    });

    //현재 scene 구하기
    let prevHeight = 0;
    const pageYOffset = window.pageYOffset;
    for (let i = 0; i < objs.length; i++) {
      const { section } = objs[i];
      const clientHeight = section.clientHeight;

      prevHeight += clientHeight;
      if (prevHeight >= pageYOffset) {
        curScene = i;
        break;
      }
    }
  };

  window.onload = () => {
    setSzie();
  };

  const playAnimation = () => {
    const values = objs[curScene].values;
    const messageA = document.querySelector(".main-message.a");

    let rv = 0;
    const { section } = objs[curScene];
    const sceneHeight = section.clientHeight;

    rv = curScenetHeight / sceneHeight;
    messageA.style.opacity = rv;
  };

  window.addEventListener("resize", setSzie);
  window.addEventListener("DOMContentLoaded", setSzie);
  window.addEventListener("scroll", () => {
    let pageYoffset = window.pageYOffset;
    let prevScrollHeight = 0;
    curScenetHeight = 0;

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

    curScenetHeight = pageYoffset - prevScrollHeight;
    if (curScenetHeight < 0) return false;

    playAnimation();
  });
})();

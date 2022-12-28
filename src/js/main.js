/**
 * 즉시 실행함수
 */
(() => {
  const objs = [
    {
      section: document.querySelector("#section1"),
      messageList: [{ messageA: document.querySelector("#section1 .main-message.a") }],
      values: [{ messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }] }, { messageA_opacity_out: [0, 1, { start: 0.22, end: 0.3 }] }],
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
  let menuDom = document.querySelector(".menu");

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
    let prevHeight = 0; //scene 누적 높이
    let rv = 0;
    const { section } = objs[curScene];

    for (let i = 0; i < curScene; i++) {
      prevHeight += objs[i].section.clientHeight;
    }

    switch (curScene) {
      case 0:
        //보여줄수 있는 시작 범위값
        const startHeight = section.clientHeight * values[0].messageA_opacity_in[2].start;

        //보여줄수 있는 종료 범위값
        const endHeight = section.clientHeight * values[0].messageA_opacity_in[2].end;

        // 현재 pageYOffset
        const pageYOffset = window.pageYOffset;
        const arangeHeight = endHeight - startHeight;
        const arangeStart = pageYOffset - startHeight;
        const rv = (arangeStart / arangeHeight) * (values[0].messageA_opacity_in[1] - values[0].messageA_opacity_in[0]) + values[0].messageA_opacity_in[0];

        objs[curScene].messageList[0].messageA.style.opacity = rv;

        //범위안에서의 현재 위치
        break;
    }
  };

  const calcValues = () => {
    //opacity
  };

  const menuEvent = () => {
    const pageYOffset = window.pageYOffset;
    if (menuDom && pageYOffset > 0) {
      menuDom.style.border = "1px solid #fff";
    } else {
      menuDom.style = "";
    }
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

    //메뉴 이벤트
    menuEvent();
  });
})();

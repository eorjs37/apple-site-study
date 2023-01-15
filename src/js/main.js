/**
 * 즉시 실행함수
 */
(() => {
  const container = [
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
  let currentScene = 0;

  const setSize = () => {
    for (let i = 0; i < container.length; i++) {
      const { section } = container[i];
      section.style.height = `${window.innerHeight}px`;
    }

    //현재 scene구하기
  };

  const setCurScene = () => {};

  window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    console.log(window.innerHeight);
  });
  window.addEventListener("resize", setSize);
  window.addEventListener("DOMContentLoaded", setSize);
})();

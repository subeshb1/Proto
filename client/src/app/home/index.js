import React, { Component } from "react";
import { Carousel, Slide1, Slide2, Slide3, Slide4, Slide5 } from "./components";
import { PageTransition } from "../components";
import "./css/index.css";
export default class Home extends Component {
  state = { page: 0 };
  componentDidMount() {
    var slides = document.getElementById("slides");

    var animating = false;

    let changeSlide = slide => {
      this.setState({ page: slide });
    };

    const scrollState = {
      marker: true,
      counter1: 0,
      counter2: 0,
      direction: "",
      lastTouchY: 0
    };
    function touchMove(e) {
      scrollState.counter1 += 1;
      var currentTouchY = e.touches[0].clientY;
      scrollState.direction = Boolean(scrollState.lastTouchY < currentTouchY);
      if (scrollState.marker) {
        // if (!animating)
        scroll(scrollState.direction);
        scrollStart();
      }
      e.preventDefault();
    }
    function touchStart(e) {
      scrollState.lastTouchY = e.touches[0].clientY;
    }

    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchstart", touchStart);

    window.addEventListener("wheel", wheel, {
      capture: true,
      passive: true
    });

    function wheel(e) {
      scrollState.counter1 += 1;
      e = e || window.event;
      if ((e.deltaY || e.detail || e.wheelDelta) > 0) scrollState.direction = 0;
      else scrollState.direction = 1;
      if (scrollState.marker) {
        // if (!animating)
        scroll(scrollState.direction);
        scrollStart();
      }
      return false;
    }

    function scrollStart() {
      scrollState.marker = false;
      scrollAct();
    }

    function scrollAct() {
      scrollState.counter2 = scrollState.counter1;
      setTimeout(function() {
        if (scrollState.counter2 == scrollState.counter1) {
          scrollEnd();
        } else scrollAct();
      }, 50);
    }
    function scrollEnd() {
      scrollState.marker = true;
      scrollState.counter1 = 0;
      scrollState.counter2 = 0;
    }

    var scroll = direction => {
      let next;
      if (direction == 0) next = Math.min(this.state.page + 1, 4);
      else next = Math.max(this.state.page - 1, 0);
      changeSlide(next);
    };
  }
  render() {
    const { page } = this.state;
    return (
      <PageTransition>
        <Carousel
          vertical
          current={page}
          onSlideChange={slide => this.setState({ page: slide })}
        >
          {Slide1}
          {Slide2}
          {Slide3}
          {Slide4}
          {Slide5}
        </Carousel>
      </PageTransition>
    );
  }
}

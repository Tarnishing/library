import { useState } from "react";

import "./App.css";

function Hero() {
  return (
    <div className="Hero">
      <form class="form">
        <div>
          <label for="book"> book </label>
          <input type="text" id="book" name="book" />
        </div>
        <div>
          <label for="author"> author </label>
          <input type="text" id="author" name="author" />
        </div>
        <div>
          <label for="genre"> genre </label>
          <input type="text" id="genre" name="genre" />
        </div>
        <div>
          <label for="status"> status </label>
          <div class="dropdown">
            <div class="select">
              <span class="selected">select a status</span>
              <div class="caret"></div>
            </div>
            <ul class="menu">
              <li>read</li>
              <li>unread</li>
              <li>reading</li>
            </ul>
          </div>
        </div>
        <button class="sbmt">submit</button>
      </form>

      <h1>LIBRARY</h1>
    </div>
  );
}

export default Hero;

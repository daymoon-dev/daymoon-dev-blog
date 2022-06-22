import styled from "styled-components";
import { SubTitle } from "./assets/Titles";
import { Half } from "./landing/HalfContainer";

export default function ContentTemplate() {
  const ContentTemplate = styled(Half)`
    flex-direction: column;
    height: 100%;
    padding-top: 50px;
    overflow: auto;

    span {
      margin-bottom: 0.5em;
      font-size: 1.5em;
      margin: 0 0 0.2em 0;
    }

    p {
      margin: 0 0 1em 0;
      width: 75%;
    }
  `;

  return (
    <ContentTemplate>
      <SubTitle title="Popular" />
      <span>제목란입니다.</span>
      <p>
        Why is Rust being used to replace parts of the JavaScript web ecosystem
        like minification (Terser), transpilation (Babel), formatting
        (Prettier), bundling (webpack), linting (ESLint), and more?
      </p>
      <span>제목란입니다.</span>
      <p>
        Why is Rust being used to replace parts of the JavaScript web ecosystem
        like minification (Terser), transpilation (Babel), formatting
        (Prettier), bundling (webpack), linting (ESLint), and more?
      </p>
      <span>제목란입니다.</span>
      <p>
        Why is Rust being used to replace parts of the JavaScript web ecosystem
        like minification (Terser), transpilation (Babel), formatting
        (Prettier), bundling (webpack), linting (ESLint), and more?
      </p>
      <SubTitle title="All" />
      <span>제목란입니다.</span>
      <p>
        Why is Rust being used to replace parts of the JavaScript web ecosystem
        like minification (Terser), transpilation (Babel), formatting
        (Prettier), bundling (webpack), linting (ESLint), and more?
      </p>{" "}
      <span>제목란입니다.</span>
      <p>
        Why is Rust being used to replace parts of the JavaScript web ecosystem
        like minification (Terser), transpilation (Babel), formatting
        (Prettier), bundling (webpack), linting (ESLint), and more?
      </p>{" "}
      <span>제목란입니다.</span>
      <p>
        Why is Rust being used to replace parts of the JavaScript web ecosystem
        like minification (Terser), transpilation (Babel), formatting
        (Prettier), bundling (webpack), linting (ESLint), and more?
      </p>{" "}
      <span>제목란입니다.</span>
      <p>
        Why is Rust being used to replace parts of the JavaScript web ecosystem
        like minification (Terser), transpilation (Babel), formatting
        (Prettier), bundling (webpack), linting (ESLint), and more?
      </p>
    </ContentTemplate>
  );
}

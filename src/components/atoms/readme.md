➡️ 하나의 구성 요소. 본인 자체의 스타일만 가지고 있으며 다른 곳에 영향을 미치는 스타일은 적용되지 않아야 합니다. 원자는 form labels, inputs, buttons와 같은 basic hmtl elements를 포함합니다.

예시)


// src/components/atoms/button/index.js

`const Button = ({ type = 'button', children = '' }) => (
<button type={type}>{children}</button>   // 가장 기본이 되는 html 태그입니다.
)`

# CRA를 기반으로 eslint, prettier, husky & lint-staged가 설정된 보일러플레이트

## Style Guide

### ESLint
Airbnb의 자바스크립트 스타일 가이드를 기반으로 하되, 우리 상황에 맞게 일부 규칙을 오버라이딩하여 사용  


### ES2015+
권장되는 최소 자바스크립트 버전은 ES6(ECMAScript 2015)이다. 하위 호환이 필요한 경우에는 Babel 트랜스파일러를 통하여 지원하되, 가능한 최신(latest) 문법을 활용할 것.


<br>


#### WebStorm 설정

ESLint 설정하기

Languages & Frameworks > Javascript > Code Quality Tools > ESLint 선택

ESLint 패키지 위치 지정 ( Automatic EsLint configuration ) or 수동 설정



Prettier 설정하기

Languages & Frameworks > Javascript > Prettier 선택

Prettier package 경로 설정,  On ‘Reformat Code’ action 체크

---
#### VSC 설정 (TBU)

ESLint 설정하기

VSC 확장 프로그램 마켓 > ESLint 검색 > Microsoft 인증 마크가 달린 확장 프로그램 설치

추가적인 세부 설정은 프로젝트 폴더에서 수행함

ESLint 저장 시 동작 옵션 설정

VSC 코드 설정 페이지 > 상단의 버튼을 클릭하여 settings.json 파일로 이동

다음 항목을 추가
```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

#### reference - https://huraypositive.atlassian.net/wiki/spaces/dev/pages/2350022657/F.E

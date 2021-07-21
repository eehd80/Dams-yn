# 용인시 교통약자 DAMS

우선 페이지 먼저 빨리 치고 팝업 작업해서 올려놓겠습니다.

-   팝업 개발 작업 시 style값 (style={{ top: "200px", left: "570px", width: "500px", transform: "translate(0,0)" }}) 지워주세요~

## list

-   ~~메모~~(/memo /memoWrite)
-   ~~공지사항~~(/board)

-   **접수/배차**

    -   ~~접수(s1010)~~
        -   ~~pop-차량별 예약 시간표~~ (/pop-s101)
            -   _표가 너무 복잡해서 라이브러리의 옵션을 넣기가 어렵습니다. 표를 넣어주시면 제가 디자인 정리하겠습니다._
    -   ~~콜 현황(s1020)~~
        -   ~~L-예약콜로 수정~~
        -   ~~L-차량검색~~
        -   ~~L-실패/취소 사유선택~~
        -   ~~L-SMS 문자 전송~~
        -   ~~L-콜이력~~
        -   ~~L-배차재현~~
    -   ~~예약콜 현황(s1030)~~
    -   ~~콜 검색(s1040)~~
        -   ~~L-취소~~
        -   ~~L-요금입력~~
        -   ~~L-배차기사/배차지정~~
    -   ~~심야콜 접수(s1050)~~

-   **정보관리**

    -   위치정보관리(s2010) : 기획서 없음
    -   ~~사용자~~
        -   ~~사용자관리(s2020)~~
            -   ~~L-사용자등록~~
            -   ~~L-업체검색~~
        -   ~~회원사관리(s2030)~~
            -   ~~L-회원사등록~~기
    -   ~~고객~~
        -   ~~고객관리(s2040)~~
            -   ~~L-고객등록~~
        -   ~~홈페이지 가입 고객 관리(s2050)~~
            -   ~~L-홈페이지가입고객정보~~
    -   ~~기사~~
        -   ~~기사관리(s2060)~~
            -   ~~L-기사등록~~
        -   ~~운전원근무조관리(s2070)~~
            -   ~~L-기본근무조 설정~~
            -   ~~L-기사목록~~
        -   출퇴근 관리(s2080) : 기획서 없음
        -   ~~기사현황(s2090)~~
    -   차량
        -   ~~차량관리(s2100)~~
            -   ~~L-차량등록~~
            -   ~~L-차량정보~~
        -   차량현황(s2110) : 기획서 없음

-   **메시지**

    -   ~~공지사항(s3010)~~
    -   ~~SMS 문구관리(s3020)~~
    -   SMS 대량전송(s3030) : 기획서 없음
    -   SMS 정산(s3040) : 기획서 없음

-   **통계**

    -   ~~일자별 통계(s4010)~~ : rowSpaning 방법을 잘 몰라서 그 부분 추가 작업해서 올려놓겠습니다.
    -   사용자별 현황(s4020)
    -   ~~구분별 현황(s4030)~~
    -   ~~지역별 현황(s4040)~~
    -   장애종류별 현황(s4050)
    -   장애등급별 현황(s4060)
    -   이용목적별 현황(s4070)
    -   시간대별 현황(s4080)
    -   연령별 현황(s4090)
    -   유형별 현황(s4100)
    -   차량별 주행거리 현황(s4110)
    -   리터당 수입금 현황(s4120)
    -   수입금 현황(s4130)

-   **보고서**

    -   보고
        -   ~~일/주/월 보고(s5010)~~
        -   ~~추진실적(s5020)~~
    -   수입금일지
        -   수입내역 결산서(s5030)
        -   일 수입 집계표(s5040)
        -   년 수입 집계표(s5050)
        -   기간별 수입 집계표(s5060)
    -   결의서
        -   징수결의서(s5070)

-   **운행일지**

    -   ~~차량운행일지(s6010)~~

-   **기초정보관리**

    -   ~~환경설정(s7010)~~
    -   ~~CID설정(s7020)~~
    -   사용자설정(s7030)

-   **시스템설정**

    -   공통코드관리(s8010)
    -   권한관리

        -   ~~시스템메뉴 관리(s8020)~~
            -   ~~L-신규메뉴 등록~~
        -   ~~권한 그룹별 메뉴관리(s8030)~~
            -   ~~L-추가설정~~
        -   ~~사용자별 메뉴관리(s8040)~~

    -   ~~시스템환경 설정(s8050)~~

-   **로그인**

    -   ~~비밀번호변경(s9010)~~
    -   ~~로그인(s9020)~~
    -   ~~프로그램정보(s9030)~~

-   **팝업**
    -   ~~지도 팝업~~ (/popMap)

---

## 1. git 다운로드

```
git clone https://github.com/eehd80/Dams-yn.git .
```

## 2. React 설치

```
yarn install
```

## 3. React 라이브러리 추가 설치

### sass

```
yarn add node-sass@4.14.1

yarn add sass -D //macbook m1 일 경우 추가 설치
```

-   css를 scss로 수정
-   사용방법 : [https://react.vlpt.us/styling/01-sass.html](https://react.vlpt.us/styling/01-sass.html){:target="\_blank"}

### reactstrap

```
npm install --save bootstrap
npm install --save reactstrap react react-dom
```

-   index.js에 아래 라인을 추가해준다.
    -- import 'bootstrap/dist/css/bootstrap.css';

-   사용방법 : [https://reactstrap.github.io/](https://reactstrap.github.io/){:target="\_blank"}
-   components : [https://reactstrap.github.io/components/form/](https://reactstrap.github.io/components/form/){:target="\_blank"}

### react-datetime

```
yarn add react-datepicker
```

-   사용방법 : [https://reactdatepicker.com/](https://reactdatepicker.com/){:target="\_blank"}

### react-number-format

```
npm install react-number-format --save
```

-   사용방법 : [https://www.npmjs.com/package/react-number-format](https://www.npmjs.com/package/react-number-format){:target="\_blank"}

### react-select

```
yarn add react-select
npm i react-select
```

-   사용방법 : [https://react-select.com/home#getting-started](https://react-select.com/home#getting-started){:target="\_blank"}

### ag-grid

```
npm install --save ag-grid-community ag-grid-react
```

-   사용방법 : [https://www.ag-grid.com/react-grid/getting-started/](https://www.ag-grid.com/react-grid/getting-started/){:target="\_blank"}

## react-resize-pannel

```
yarn add react-resize-panel
```

-   사용방법 : <https://reactjsexample.com/a-very-simple-resizable-panel-as-a-react-component/>

## react-resize-detector

```
yarn add react-resize-detector
```

-   사용방법 : <https://github.com/maslianok/react-resize-detector>

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Dams-yn

```

```

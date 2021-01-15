# bestoffer-client

## Build Setup

### 공통 요구사항

1. Node.js
2. Docker, Docker-compose
3. (Mac OS) VMware (도커 설치시)
4. (Windows) WSL2 + Ubuntu (도커 설치시)

:bulb: 로컬에서 프론트엔드 개발을 위한 구성

- 구성요소: 클라이언트 (Nuxt app)
- 구성방법

```bash
# 이 저장소 클론하기
git clone ....

# 저장소가 클론된 디렉토리로 이동
cd bestoffer-client

# npm 패키지 설치
npm install

# 개발모드로 실행

npm run dev
```
이후 브라우저에서 http://localhost:3000 으로 접속

:bulb: Docker-compose 를 이용한 로컬 개발 환경 구성

- 구성요소: 클라이언트 (Nuxt app) + 서버 (Adonis server)

- 예상 설계도: https://www.notion.so/3ab554943d714d3397027bd7c510879c

```bash
# ****** 추후 제공 예정 ******
```

## 프레임워크 기본 지식

:bulb: 라우팅 구성

공식문서: [File System Routing](https://nuxtjs.org/docs/2.x/features/file-system-routing/)

Nuxt 에서는 pages 폴더 안에서 vue 파일을 구성함에 따라 자동으로 라우터 구성이 이루어짐. <br>
각 vue 파일이 구성하는 페이지 정보:

<table style="margin-left: 20%; width:60%; text-align:center;">
    <thead>
        <tr>
            <th style="text-align:center;">파일의 위치</th>
            <th style="text-align:center;">구성되는 URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>pages/index.vue</td>
            <td>http://localhost:3000</td>
        </tr>
        <tr>
            <td>pages/products.vue</td>
            <td>http://localhost:3000/product</td>
        </tr>
        <tr>
            <td>pages/questions/index.vue</td>
            <td>http://localhost:3000/questions</td>
        </tr>
        <tr>
            <td>pages/questions/_id.vue</td>
            <td>http://localhost:3000/questions/13 <- 주어진 수는 <br> id 파라미터로 쓸 수 있음</td>
        </tr>
        <tr>
            <td>pages/_slug/comment.vue</td>
            <td>http://localhost:3000/abc/comment.vue <- 주어진 _slug <br> 위치의 abc 는 slug 파라미터로 사용할 수 있음</td>
        </tr>
    </tbody>
</table>

:bulb: Vue 데이터 관리와 생명주기

공식문서: [데이터와 메소드](https://kr.vuejs.org/v2/guide/instance.html#%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%99%80-%EB%A9%94%EC%86%8C%EB%93%9C)

제공되는 순서: <br>
&nbsp;&nbsp;&nbsp;&nbsp; **페이지 접근 -> data (asyncData), methods || created() -> mounted() -> updated() -> destroyed()**
<br>
브라우저가 url 을 호출하면, 먼저 `<template>` 구성이 시작되고, 이때 template html 스크립트에 쓰인 데이터 및 메소드는 `data()` 와 `methods` 에 정의되어 있어야 함. 그후 `created()`, `methods()` 함수가 차례로 호출되고, data 가 변하는 걸 감지할 때 마다 데이터가 바뀌고 페이지가 re-render 된 후 `updated()` 함수가 호출. 페이지가 닫힐 때 `distroyed()` 함수 호출
<br>
<br>
(예시)
```vue
<template>
    // html 스크립트
</template>
<script>
// ------ 여기를 보시오 ------ //
export default {
    data() {
        return {
            a: '',
            b: 123
        }
    },
    methods: {
        foo() {}
        bar() {}
    },
    mounted() {
        this.a = 'hello world'
    }
}
// ------ 여기를 보시오 ------ //
</script>
```

:bulb: Nuxt 페이지 구성 레이어드

공식문서: [Layouts](https://nuxtjs.org/docs/2.x/directory-structure/layouts/)

레이아웃은 별도로 정의되지 않으면 기본적으로 layouts/default.vue 를 사용한다. 공통 header 와 footer 컴포넌트를 모든 페이지에 설정하려면 이 default.vue 에 정의함으로써 모든 페이지에 적용할 수 있다. components 디렉토리에 Something.vue 파일을 만들면 layout/ 하위 폴더나 pages/ 하위 폴더에서 `<Something />` 으로 사용할 수 있고, props 를 활용하여 동적으로 구성할 수 있다. layout/ 하위의 레이아웃들에 `<Nuxt />` 컴포넌트를 추가하면 pages 의 컴포넌트들이 해당 레이아웃을 해당 컴포넌트 위치에 불러올 수 있다. 
<br>
<img src="https://d33wubrfki0l68.cloudfront.net/ea81946f531a74084921fd77710afc3aca28ceb9/6a4c2/docs/2.x/views.png" style="margin-left:20%; width:60%;">
<br>

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 작업 순서

```bash
# 1. 레포지토리를 클론한 후 develop 브랜치를 받아온다.
git checkout -t origin/develop

# 2. Develop 브랜치를 기준으로 본인 작업 브랜치를 따온다. (ex: dev-junha 혹은 dev-jk)
# (본인의 작업 브랜치는 여러개 만들어도 상관 없지만, develop 브랜치에 바로 개발하지 않도록 하는것이 좋다.)
git checkout -b dev-<yourname>

# 3. 해당 페이지 작업을 적절히 본인 작업 브랜치에 커밋하고 푸시한다.
# 4. 푸시하는 경우 본인 작업 브랜치로 푸시한다.
git add .
git commit -m "some message"
git push origin dev-<yourname>

# 5. 한 페이지 혹은 적당한 분량의 작업이 끝났으면 develop 브랜치로 pull request (PR)를 생성한다.
# 6. 팀원들의 코드 리뷰 후 해당 브랜치를 develop 으로 머지한다.
# 7. 머지가 완료되면 로컬에서 develop 브랜치와 본인의 작업 브랜치에 pull 한다.
git pull origin develop

# 8. 실제 서비스를 위해 develop 브랜치를 master로 머지하면, 자동으로 배포가 가능하다. 😎
```

## 예제 설명

- 빌드를 성공적으로 마치면 http://localhost:3000 으로 접속한 후 상단 헤더의 Elements 를 클릭하면 /elements 페이지로 이동합니다.
- elements 페이지는 v-for 예시와 v-if 예시를 포함합니다.
- 페이지를 이루는 구성요소는 Header, Page Body, Footer 로 구성되어 있고, Header와 Footer는 컴포넌트로 구성되어 components/ 디렉토리에서 찾을 수 있으며, layouts/default.vue 에 추가되어 모든 페이지에 기본으로 적용됩니다.
- pages/elements.vue 는 페이지 디렉토리 내 파일 위치로 생성된 자동 라우트를 가지기 때문에 http://localhost:3000/elements 으로 접근이 가능합니다.
- elements.vue 의 `<script>` 테그에서 vue의 기본 구성요소인 data, methods, mounted 의 사용법을 확인할 수 있습니다.
- 크롬 브라우저의 개발자 도구를 이용해 콘솔 메세지를 확인할 수 있습니다.

---
### TEAM OAKS 콜라보레이션 [Notion 바로가기](https://www.notion.so/Collaboration-22c1188040124b10a4edeed2557a731f)

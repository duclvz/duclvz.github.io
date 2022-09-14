---
layout: post
title: 8 JS frameworks nhỏ mà có võ
categories: blog
comments: true
tags:
  - javascript
  - frameworks
  - frontend
---

## Dẫn nhập

Vào những năm 2000, các thư viện jQuery, Mootools, Dojo... đã từng là cứu tinh của developer, giúp họ cầm cự với khả năng tương thích trong một kỷ nguyên chưa có web standard. Điểm nhấn của của những công cụ này là DOM Manipulation, Event Listener, Features Detection và AJAX. Chúng tạo ra 1 lớp abstraction lấp đầy sự ngăn cách giữa các trình duyệt.

Năm 2010 là một năm cách mạng, đánh dấu bước ngoặt lớn trong thế giới front-end: sự ra đời của hàng loạt framework thế hệ mới, trong đó có phải kể đến bộ tứ [BackboneJS](http://backbonejs.org/), [AngularJS](https://angularjs.org/), [Knockout](https://knockoutjs.com/) và [SproutCore](http://sproutcore.com/). Tính đột phá của chúng nằm ở những khái niệm mới mẻ: Data Binding, Templating... đặc biệt là các biến thể của kiến trúc MV-W(hatever) lấy cảm hứng từ mô hình MVC phía server. Với Templating và two-ways Data Binding, người ta rời khỏi DOM và các trình xử lý sự kiện để hướng vào dòng chảy của dữ liệu. Sự biến đổi của dữ liệu trong Model sẽ tự động phản chiếu ra ngoài View.

Từ nửa cuối 2015 trở đi, thế giới tiến vào thời kỳ của Web Component, Shadow DOM, virtual/incremental DOM, Progressive Web Apps... đánh dấu bởi sự xuất hiện của [Polymer](https://github.com/Polymer/polymer), [React](https://github.com/facebook/react), [Circle.js](https://github.com/cyclejs/cyclejs), [Vue](https://github.com/vuejs/vue)... AngularJS cũng nhanh chóng cho ra mắt [Angular](https://github.com/angular/angular) phiên bản mới, trong khi Rob Eisenberg và một vài thành viên rời nhóm để phát triển [Aurelia](https://github.com/aurelia/framework) theo triết lý riêng của họ.

Giai đoạn này cũng bắt đầu trào lưu Functional và Reactive Programming. Những người phát triển bắt đầu lưu ý đến tính cách Functional và Reactive của chương trình. Do đó đã sinh ra nhiều thư viện hỗ trợ: [rxjs](https://github.com/ReactiveX/rxjs), [Ramda](https://github.com/ramda/ramda), [Bacon.js](https://github.com/baconjs/bacon.js), [Most.js](https://github.com/cujojs/most), [Folktale](https://github.com/origamitower/folktale), [Sanctuary](https://github.com/sanctuary-js/sanctuary)... Tuy nhiên phần đông vẫn trung thành với [Underscore.js](https://github.com/jashkenas/underscore), [Lodash](https://github.com/lodash/lodash)... có từ cách mạng 2010.

Các kỹ thuật Data Binding và Templating vẫn được áp dụng nhưng giữa tầng xử lý logic và real DOM thường có thêm 1 tầng virtual DOM nữa tồn tại. Từ đó nảy sinh các giải pháp HyperScript và JSX để viết template. Ở phương diện khác, sự phân tách Model - View không cần được nhấn mạnh. Dưới quan điểm về Web Component, điều này diễn ra tự nhiên. Mọi thứ đều là component, mỗi component có phần hiển thị ra ngoài và phần logic xử lý bên trong, còn data được chứa trong các store, có thể dễ dàng nạp vào component.

Hiện nay, biểu đồ trending vẫn đang ủng hộ React và Vue, rồi Angular, Ember... Nhu cầu tuyển dụng chủ yếu xoay quanh 3 cái tên này. Trong khi Angular đang dần bị thất sủng dù vẫn không ngừng vật vã tự làm mới. React, Vue lại rất được yêu thích nhờ thế mạnh vượt trội về performance và tính linh hoạt trong kiến trúc. Cả 2 chỉ tập trung vào xử lý phần View, dùng virtual DOM và template syntax riêng để render và update giao diện người dùng cuối. Do đó chúng được gọi là UI framework. Tầng data sẽ do một bộ xử lý khác (vuex, redux...) quán xuyến, tùy theo sở thích của developer trong việc xây dựng và thiết kế chương trình.

JS frameworks hiện nay còn 1 điểm chung nổi bật nữa là chúng luôn có hệ sinh thái riêng. Đi kèm với core framework là những cli tool, dev tool, test tool, deploy tool, starter kit và nhiều đồ nghề lỉnh kỉnh khác để transpile/compile, kéo theo đó sự hoành hành của các builder như Webpack, Rollup, Parcel... Làm web vốn đơn giản, nhưng phát triển web ngày nay đã trở thành công việc rắc rối hơn bao giờ hết. Bởi vì sử dụng 1 framework đồng nghĩa với rơi vào mê cung hệ sinh thái bao quanh nó. Code base ngày một cồng kềnh, cứ `npm i` phát là lôi về hàng trăm repos, hàng chục MB source code, learning curve phức tạp khiến người sợ hãi...

![Marc and React](https://i.imgur.com/mWZiKBV.png)

## 8 JavaScript frameworks nhỏ xinh

May mắn thay, thế giới vẫn còn không ít người đang nỗ lực tìm kiếm cái đẹp giản dị, thuần khiết, những người chủ trương "less is more", họ theo đuổi Minimalism và ủng hộ nguyên tắc KISS.

![KISS principle](https://i.imgur.com/lr30YDJ.jpg)

Sau đây xin giới thiệu với các bạn 8 trong số nhiều JavaScript frameworks rất nhỏ gọn nhưng không kém phần mạnh mẽ. Danh sách bao gồm cả 1 vài frameworks cũ nhưng còn nguyên giá trị tham khảo đối với developer.

### 1. HyperApp
_~1 KB minimized & gzip_

Release lần đầu vào 2/2/2017, micro-framework này vô cùng nhỏ gọn, hiệu quả. Tuy không phải JavaScript framework đầu tiên mô phỏng kiến trúc Elm nhưng [HyperApp](https://github.com/jorgebucaran/hyperapp) được Jorge Bucaran maintain rất tốt, đã có cộng đồng nhất định. V2 đang phát triển hứa hẹn sẽ có thêm nhiều features hấp dẫn khác như Effect API, Lazy Lists, Middleware...

Với HyperApp, bạn có thể khai thác thế mạnh của virtual DOM bằng HyperScript tích hợp sẵn hoặc dùng JSX với sự trợ giúp của các thư viện nhúng thêm. Tất nhiên, để làm 1 web app đơn giản thì chỉ cần HyperApp và [HyperApp Router](https://github.com/hyperapp/router) là quá đủ. Tổng dung lượng của chúng khoảng 4KB sau minimizing và gzip.

Nếu ưa thích SSR, bạn cũng có thể dùng [hyperapp-render](https://github.com/kriasoft/hyperapp-render) để xử lý ứng dụng trên Node.js server, sau đó ném HTML xuống cho browser.

Sample code:

    import { h, app } from "hyperapp"
    
    const state = {
      count: 0
    }
    
    const actions = {
      down: value => state => ({ count: state.count - value }),
      up: value => state => ({ count: state.count + value })
    }
    
    const view = (state, actions) => (
      <div>
        <h1>{state.count}</h1>
        <button onclick={() => actions.down(1)}>-</button>
        <button onclick={() => actions.up(1)}>+</button>
      </div>
    )
    
    app(state, actions, view, document.body)
    

### 2. Riot.js
_~10 KB minimized & gzip_

[Riot.js](https://github.com/riot/riot) lấy cảm hứng WebComponent từ React và Polymer, nhưng tinh gọn hơn rất nhiều. Thư viện này ra đời cuối năm 2013, sau React vài tháng. Hiện nay vẫn rất active. Hầu hết issues đều được giải quyết nhanh chóng.

Riot cung cấp cho bạn custom tags, observable và routing. Custom tags cho phép tạo ra các components, observable giúp các components này giao tiếp với nhau, còn routing là để map URL vào component tương ứng. Chừng đó xem như đủ cho bạn làm bất cứ điều gì với web apps.

Giống như React, Riot là UI framework, không có sẵn kiến trúc. Tất nhiên bạn có thể đem những pattern phổ biến như Redux, Flux bên React vào cho Riot.

Đặc biệt Riot hỗ trợ preprocessor, trong file components bạn có thể viết script bằng coffee, typescript, hoặc es6; hoặc thay HTML tag bằng Pug syntax. Nếu cần, bạn có thể tùy biến parser function để hỗ trợ thêm các processor khác.

Sample code:

    <todo>
      <h3>TODO</h3>
    
      <ul>
        <li each={ item, i in items }>{ item }</li>
      </ul>
    
      <form onsubmit={ handleSubmit }>
        <input ref="input">
        <button>Add #{ items.length + 1 }</button>
      </form>
    
      this.items = []
    
      handleSubmit(e) {
        e.preventDefault()
        var input = this.refs.input
        this.items.push(input.value)
        input.value = ''
      }
    </todo>
    

### 3. Dio.js
_~8.5 KB minimized & gzip_

[Dio.js](https://github.com/thysultan/dio.js) do Sultan Tarimo phát triển là một phiên bản thu nhỏ của React. Cũng giống như Preact, Dio.js có APIs và lifecycle methods gần tương tự React, cùng tổ chức View theo components... Dio.js hỗ trợ tốt SSR để bạn sử dụng nó trên Node.js server.

Tính chất Functional Programming và Declarative Paradigm trong Dio.js thể hiện khá rõ. Hiệu năng xử lý của nó cao hơn Preact một chút. Tuy nhiên, framework này không có quá nhiều đột phá về mặt kỹ thuật, sức hút của nó kém xa Preact.

### 4. Choo
_~4 KB minimized & gzip_

Yoshua Wuyts viết những dòng code đầu tiên của [Choo](https://github.com/choojs/choo) vào khoảng giữa 2016. Thư viện này có built-in template helper, router, event emitter... thiết kế với tư tưởng Functional Programming và Universal JavaScript.

Nhìn code ví dụ của Choo khá giống ExpressJS với các methods `use()`, `route()` quen thuộc:

    var html = require('choo/html')
    var devtools = require('choo-devtools')
    var choo = require('choo')
    
    var app = choo()
    app.use(devtools())
    app.use(countStore)
    app.route('/', mainView)
    app.mount('body')
    
    function mainView (state, emit) {
      return html`
     <body>
     <h1>count is ${state.count}</h1>
     <button onclick=${onclick}>Increment</button>
     </body>
     `
    
      function onclick () {
        emit('increment', 1)
      }
    }
    
    function countStore (state, emitter) {
      state.count = 0
      emitter.on('increment', function (count) {
        state.count += count
        emitter.emit('render')
      })
    }
    

Đã có thời điểm Choo được đầu tư rất chuyên nghiệp, đã hình thành đường nét của [một hệ sinh thái](https://github.com/choojs/awesome-choo) lớn. Di sản documentation và handbook cho thấy phần nào quá khứ huy hoàng ngắn ngủi đó. Hiện Choo vẫn được maintain nhưng nếu không có gì đột biến xảy ra, chắc nó sẽ dần chìm vào quên lãng.

### 5. Mithril
_~9 KB minimized & gzip_

Được maintain bởi Leo Horie, một dev của Uber, [Mithril](https://github.com/MithrilJS/mithril.js) sớm gây được ấn tượng xuất sắc nhờ performance cao và download size cực nhỏ. Có sẵn Router và XHR utils.

Đáng tiếc rằng kiến trúc của Mithril còn mơ hồ. Thực ra nó giống như 1 bản nâng cấp của jQuery, gia cố thêm bằng virtual DOM và two-ways data binding hơn là 1 framework hoàn thiện. Bạn hoàn toàn có thể dùng Mithril thay cho jQuery trong các trang web phổ thông, nó làm việc rất tốt với CSS và AJAX.

Do xuất hiện trước HyperApp và AppRun những 2 năm nên Mithril có lượng contributors đông vượt trội. Repo hiện do Pat Cavit maintain, vẫn khá active. Hy vọng sẽ có những phiên bản cải tiến mạnh mẽ hơn trong thời gian tới.

### 6. innerself
_~0.4 KB minimized & gzip_

[innerself](https://github.com/stasm/innerself) là hiện tượng độc đáo cuối 2017. Nó xuất hiện một cách tình cờ khi Staś Małolepszy, một developer ở Mozilla, làm game tham dự [js13kGames](http://js13kgames.com/).

Nếu như [js1k](https://js1k.com/) đặt ra giới hạn 1 KB cho tổng dung lượng code, thì js13kGames là sân chơi của HTML5 Game Developers có giới hạn 13 KB và không dùng thêm thư viện ngoài. Điều đó buộc Staś Małolepszy phải tạo ra 1 engine nhỏ gọn. Đó chính là `innerself` được thiết kế dựa trên mô hình React + Redux.

Supper mini framework này có dung lượng cực nhỏ, chỉ khoảng 350 bytes sau khi optimizing. Tuy mi nhon vậy nhưng kiến trúc của nó rất đẹp. Để sử dụng innerself, bạn cũng phải viết View, Reducer, nạp initial data và Reducer vào Store, rồi dùng `dispatch` để bắn event + arguments từ View sang cho Reducer khi cần.

Sự chú ý của cộng đồng khiến Staś Małolepszy ngạc nhiên và hứng thú. Nhưng đáng tiếc chỉ sau một thời gian ngắn, anh ta đã không còn để tâm đến nó nữa.

Dù sao `innerself` vẫn đủ cho bạn xây dựng các ứng dụng nhỏ, đồng thời đem lại nhiều giá trị tham khảo nếu bạn muốn làm ra những framework tương tự.

### 7. AppRun
_~3 KB minimized & gzip_

Cùng tuổi với HyperApp, [AppRun](https://github.com/yysun/apprun) của Yiyi Sun cũng áp dụng virtual DOM và kiến trúc Elm. Thêm vào đó là built-in PubSub pattern cho phép các modules tương tác với nhau.

Framework này có performance rất tốt, ngang ngửa HyperApp, nhưng repo ít được chăm chút và không thu hút được nhiều contributor. AppRun cũng không có sẵn routing, mặc dù bạn có thể dễ dàng kết hợp với các micro libraries chuyên dụng như [page.js](https://github.com/visionmedia/page.js), [navigo](https://github.com/krasimir/navigo), [rlite](https://github.com/chrisdavies/rlite)...

Mặc định, bạn có thể dùng Template Literals để viết template trong view thay vì JSX. AppRun hỗ trợ tốt Pure Function Component và đang có plan tích hợp thêm khả năng extend component như class để reuse và inherit.

Cá nhân mình thích dùng AppRun hơn so với các framework mô phỏng Elm architecture khác. Nhất là PubSub pattern gợi nhớ đến các behaviors trong [T3.js](https://github.com/box/t3js) của Nicholas C. Zakas và [Marionette.js](https://github.com/marionettejs/backbone.marionette), 1 biến thể khá thành công trên nền Backbone.

Sample code:

    const state = 0;
    const view = state => {
      return `<div>
        <h1>${state}</h1>
        <button onclick='app.run("-1")'>-1</button>
        <button onclick='app.run("+1")'>+1</button>
      </div>`;
    };
    const update = {
      '+1': state => state + 1,
      '-1': state => state - 1
    };
    app.start('my-app', state, view, update);
    

### 8. RadiJS
_~9.3 KB minimized & gzip_

Framework này chỉ mới ra đời cách đây vài tháng, ít contributors nhưng khá nhiều stars. Tác giả của nó, Mārcis Bergmanis, có bài "[How I built super fast JS framework](https://medium.com/@marcisbee/how-i-built-super-fast-js-framework-faster-than-react-ea99f0d03150)" cũng gây được tiếng vang nhất định.

Framework này thao tác trực tiếp trên real DOM thay vì virtual DOM. Các bài test performance của [RadiJS](https://github.com/radi-js/radi) khá ấn tượng.

Sample code:

    state: {
      count: 0
    }
    
    @action change(diff) {
      return {
        count: this.state.count + diff
      }
    }
    
    <template>
      <h2>{ this.state.count }</h2>
    
      <button
        class="btn"
        disabled={ this.state.count <= 0 }
        onclick={ () => -1 |> this.change }>
        -
      </button>
    
      <button
        class="btn"
        onclick={ () => 1 |> this.change }>
        +
      </button>
    </template>
    

Ngoài những framework kể trên, còn một số cái tên đáng lưu ý khác, gồm [Bobril](https://github.com/Bobris/Bobril), [Nerv](https://github.com/NervJS/nerv) và [Svelte](https://github.com/sveltejs/svelte). Bobril và Nerv vay mượn kiến trúc từ React - Reduct, nhưng thêm vào nhiều chức năng sáng giá như Fast Virtual DOM diffing, Scroll notification, Drag & drop...

Svelte có APIs khá giống Vue, tuy nhiên tác giả của nó - Rich Harris - đề cao triết lý "framework without framework". Ý tưởng của anh là dịch source code của chương trình - bao gồm framework và code do developer viết - thành JavaScript thuần ngay khi build, thay vì giữ nguyên như vậy để chạy lúc run (trên browser). Do vậy Svelte đi kèm với bộ build riêng, cho kết quả performance rất tốt, gần với vanilla JS.

## Kết luận

Các frameworks được tạo ra để giúp phát triển dự án nhanh hơn. Chúng tạo ra tính đồng bộ, dưới dạng một lớp abstraction mang theo tập nguyên tắc tổ chức và thao tác nhất định, điều này cho phép thống nhất cách làm việc trong cả nhóm. Nhưng nếu dự án đơn giản, ít người làm, thì không nhất thiết phải phụ thuộc vào framework. Developers cũng nên tập sắp đặt kiến trúc của riêng mình. Và cách tốt nhất là học hỏi từ các frameworks lớn nhỏ.

React, Angular, Vue... cũng như những ngôi sao showbiz, sáng rồi tắt, ồn ào náo nhiệt 1 thời gian rồi sẽ bị thay thế bằng những tên tuổi mới. Developer không nhất thiết phải chạy theo chúng. Cứ học tốt 1 nhạc cụ và chơi theo cách của bạn. Không cần quan tâm những live show đình đám và thần tượng ai cả! Thỉnh thoảng dõi theo 1 ông chú miệt vườn chèo xuồng ba lá ca mấy câu Vọng cổ, hay lắng tai nghe em gái Kinh Bắc ngân nga đôi làn Quan họ, cũng thú không kém đâu :D

_Bài viết sưu tầm của tác giả Dong Nguyen Dai @kipalog.com_
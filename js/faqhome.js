/*@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic|Montserrat:400,700|Questrial&subset=latin,greek,greek-ext,vietnamese,cyrillic-ext,latin-ext,cyrillic);*/
@import "../google--felink-font.css";
.scroll-div{
    margin: 0 auto;
    padding: 40px 0;
    max-width: 960px;
}
.faq-layer {
    margin: 0 auto;
    /*padding: 90px 0;*/
    max-width: 960px;
}
.faq-layer h2 {
    margin: 0;
    padding: 0;
    font-family: 'Microsoft YaHei',寰蒋闆呴粦, sans-serif;
    font-weight: 100;
    font-size: 46px;
}
.faq-layer p{
    padding: 0;
    line-height: 28px;
    font-size: 16px;
}
.faq-layer a{
    color: #3c79e6;
}
.faq-layer div p{
    margin: 0;
}
/* FAQ */
.faq-layer p.faq-info,
.video-tutorial-layer p.video-tutorial-info {
    margin: 40px 0 90px;
}

.faq-layer ul.faq-directory {
    float: left;
    display: block;
    margin: 30px 0 0;
    width: 240px;
}

.faq-layer ul.faq-directory li {
    line-height: 40px;
    margin: 20px 0 20px 0;
    background: url('http://static.felinkapps.com/official-website/dev_20160216/images/about/faqline.png') repeat-x left bottom;
    background-size: 100% 1px;
}

.faq-layer ul.faq-directory li:last-of-type {
    background: none;
}

.faq-layer ul.faq-directory li a {
    display: block;
    color: #333333;
    font-family: 'Microsoft YaHei',寰蒋闆呴粦, sans-serif;
    font-weight: 300;
    font-size: 18px;
}

.faq-layer ul.faq-directory li a.current,
.faq-layer ul.faq-directory li a:hover {
    color: #3c79e6;
}
.faq-scroll,
.faq-layer .answer {
    float: right;
    width: 660px;
}

.faq-layer div p {
    padding: 0 0 30px;
    border-bottom: dotted 2px #ececec;
    color: #808080;
    word-wrap:break-word;
    font-family: 'Microsoft YaHei',寰蒋闆呴粦, sans-serif;
    font-weight: 300;
}

.faq-layer div p:last-of-type {
    border-bottom: none;
}

.faq-layer div h4 {
    margin: 50px 0 20px;
    font-family: 'Microsoft YaHei',寰蒋闆呴粦, sans-serif;
    font-weight: 300;
}
.faq-layer div h6 {
    margin-top: 30px;
}
/*head*/

.navbar-default-black{
    background-color: #4b4b4b !important;
}
.navbar-default .navbar-nav > li > a {
    color: #fffffd !important;;
}
.navbar-default .navbar-nav > li.active > a,
.navbar-default .navbar-nav > li.sfHover > a,
.navbar-default .navbar-nav > li.active > a:hover,
.navbar-default .navbar-nav > li.sfHover > a:hover,
.navbar-default .navbar-nav > li.active > a:focus,
.navbar-default .navbar-nav > li.sfHover > a:focus {
    color: #999999 !important;;
}
.navbar-brand:before {
    content: url(http://static.felinkapps.com/official-website/dev_20160216/images/Home/felinkLOGO-white.png) !important;
    top: 4px !important;
}

/* @Media */
@media screen and (max-width: 600px) {
    .faq-layer{
        padding: 20px 0;
    }
    .faq-layer h2{
        margin: 0 5%;
        font-size: 26px;
    }
    /* FAQ */
    .faq-layer p,
    .contact-layer p,
    .video-tutorial-layer p.video-tutorial-info,
    .about-layer p,
    .promotion-policy-layer p,
    .promotion-policy-layer ul,
    .privacy-policy-layer p,
    .terms-of-use-layer p,
    .ju-content-layer ul li,
    .testimonials-layer p,
    .news-events p,
    .news-events-content-layer p {
        line-height: 20px;
        font-size: 13px;
    }

    .faq-layer p.faq-info,
    .video-tutorial-layer p.video-tutorial-info {
        margin: 20px 5% 50px;
    }

    .faq-layer div {
        margin: 0 5%;
        /*border-top: dotted 1px #ececec;*/
    }

    .faq-layer div h4,
    .contact-layer div h4 {
        margin: 40px 0 10px;
        font-size: 17px;
    }

    .faq-layer ul.faq-directory {
        margin: 30px 5% 0;
        width: 90%;
    }

    .faq-layer ul.faq-directory li {
        line-height: 45px;
    }

    .faq-layer ul.faq-directory li a {
        background: url('http://static.felinkapps.com/official-website/dev_20160216/images/mobile/faq_view.png') no-repeat right center;
        background-size: 4px auto;
        font-size: 14px;
    }
    .faq-layer .answer {
        display: none;
    }
    .faq-scroll{
        margin: 0 5%;
        width: 90%;
    }
    .scroll-div{
        padding: 10px 0;

    }
}


@media (min-width: 601px) and (max-width: 720px) {
    .faq-layer{
        padding: 20px 0;
    }
    .faq-layer h2{
        margin: 0 5%;
        font-size: 36px;
    }
    .faq-layer p{
        line-height: 26px;
        font-size: 13px;
    }

    /* FAQ */
    .faq-layer p.faq-info,
    .contact-layer p.contact-info,
    .video-tutorial-layer p.video-tutorial-info {
        margin: 20px 5% 50px;
    }

    .faq-layer div,
    .contact-layer div,
    .video-tutorial-layer .video-layer,
    .about-layer,
    .promotion-policy-layer,
    .privacy-policy-layer,
    .terms-of-use-layer,
    .ju-content-layer,
    .testimonials-layer,
    .news-events-layer,
    .news-events-content-layer {
        margin: 0 5%;
    }

    .faq-layer div h4,
    .contact-layer div h4 {
        margin: 40px 0 10px;
        font-size: 20px;
    }

    .faq-layer ul.faq-directory {
        margin: 30px 5% 0;
        width: 90%;
    }
    .faq-layer .answer {
        display: none;
    }
    .faq-scroll {
        margin: 0 5%;
        width: 90%;
    }
    .scroll-div{
        padding: 10px 0;

    }
}
@media (min-width: 721px) and (max-width: 959px) {
    .faq-layer h2,
    .faq-layer div{
        margin: 0 5%;
    }

    /* FAQ */
    .faq-layer p.faq-info,
    .contact-layer p.contact-info {
        margin: 40px 5% 90px;
    }

    .faq-layer ul.faq-directory {
        margin: 30px 5% 0;
        width: 90%;
    }
    .faq-scroll,
    .faq-layer .answer {
        margin: 0 5%;
        width: 90%;
    }

}

/*===========================================*/
/* Privacy Policy */
.bottom-line{
    background: url('http://static.felinkapps.com/official-website/dev_20160216/images/line.png') repeat-x left bottom;
    background-size: 100% 1px;
}

.privacy-policy-layer {
    position: relative;
    margin: 0 auto;
    padding: 10px 0 70px;
    max-width: 960px;

}
.terms-of-use-layer {
    position: relative;
    margin: 0 auto;
    padding: 110px 0 70px;
    max-width: 960px;
}

.privacy-policy-layer .privacy-policy-tab,
.terms-of-use-layer .terms-of-use-tab,
.join-us-layer .join-us-tab {
    width: 100%;
    height: 75px;
    text-align: left;
}

.privacy-policy-tab a,
.terms-of-use-tab a,
.join-us-tab a {
    padding: 0 15px;
    display: inline-block;
    line-height: 75px;
    text-align: center;
    font-size: 20px;
    color: #444;
    text-align: center;
    font-family: 'Microsoft YaHei',寰蒋闆呴粦, sans-serif;
}

.privacy-policy-tab a span,
.terms-of-use-tab a span,
.join-us-tab a span {
    display: block;
    line-height: 75px;
}

.privacy-policy-tab a.current span,
.terms-of-use-tab a.current span,
.join-us-tab a.current span {
    background: url('http://static.felinkapps.com/official-website/dev_20160216/images/nav_current_line.png') repeat-x left bottom;
    background-size: 100% 3px;
    /*color: #6b63e1;*/
    color: #3c79e7;
}

.pp-content-layer,
.tou-content-layer {
    margin: 90px 0 0;
}

.pp-content-layer span.last-updated-time,
.tou-content-layer span.last-updated-time {
    margin: 0 0 10px;
    display: block;
    font-size: 14px;
}

.pp-content-layer h3,
.tou-content-layer h3 {
    margin: 30px 0 10px;
    padding: 0;
    font-family: 'Microsoft YaHei',寰蒋闆呴粦, sans-serif;
    font-size: 24px;
    color: #3c79e6;
}

.pp-content-layer ul.pp-list,
.tou-content-layer ul.tou-list {
    list-style: upper-roman inside;
    font-size: 24px;
}

.pp-content-layer ul.pp-list li ul.pp-son-list,
.tou-content-layer ul.tou-list li ul.tou-son-list {
    margin: 0 0 0 7%;
    list-style: decimal outside;
    font-size: 20px;
}

.pp-content-layer ul.pp-list li ul.pp-son-list h4,
.pp-content-layer ul.pp-list li ul.pp-son-list b,
.tou-content-layer ul.tou-list li ul.tou-son-list h4,
.tou-content-layer ul.tou-list li ul.tou-son-list b {
    font-size: 20px;
}

.pp-content-layer ul.pp-list li ul.pp-son-list b,
.tou-content-layer ul.tou-list li ul.tou-son-list b {
    margin: 0 10px 0 0;
}

.pp-browser,
.pp-msg-center,
.pp-booster,
.pp-flashlight,
.tou-browser,
.tou-msg-center,
.tou-booster,
.tou-flashlight,
.ju-products-operating,
.ju-market-business,
.ju-comprehensive {
    display: none;
}


/* @Media */
@media screen and (max-width: 600px) {
    .privacy-policy-layer .privacy-policy-tab{
        text-align: center;
    }
    .privacy-policy-layer p{
        line-height: 20px;
        font-size: 13px;
    }
    .privacy-policy-layer{
        margin: 0 5%;
    }
    .privacy-policy-layer{
        padding: 50px 0 40px;
    }
    .privacy-policy-layer,
    .terms-of-use-layer {
        padding: 20px 0 40px;
    }

    /*.privacy-policy-layer .privacy-policy-tab,
    .terms-of-use-layer .terms-of-use-tab,
    .join-us-layer .join-us-tab,
    .job-slogan,
    .hot-news-layer {
        display: none;
    }*/

    .privacy-policy-layer .privacy-policy-tab,
    .terms-of-use-layer .terms-of-use-tab,
    .join-us-layer .join-us-tab {
        height: 45px;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        z-index: 17;
    }

    .privacy-policy-layer .privacy-policy-tab a,
    .terms-of-use-layer .terms-of-use-tab a,
    .join-us-layer .join-us-tab a,
    .privacy-policy-tab a span,
    .terms-of-use-tab a span,
    .join-us-tab a span {
        line-height: 45px;
        font-size: 13px;
    }

    .privacy-policy-tab a.current span,
    .terms-of-use-tab a.current span,
    .join-us-tab a.current span {
        background: url('http://static.felinkapps.com/official-website/dev_20160216/images/nav_current_line.png') repeat-x left bottom;
        background-size: 100% 2px;
        color: #3c79e7;
    }

    .job-slogan,
    .hot-news-layer {
        display: none;
    }

    .pp-content-layer span.last-updated-time,
    .tou-content-layer span.last-updated-time {
        margin: 17px 0 10px;
    }

    .privacy-policy-layer .pp-content-layer,
    .terms-of-use-layer .tou-content-layer {
        margin: 0;
    }

    .pp-content-layer h3,
    .tou-content-layer h3 {
        margin: 20px 0 20px;
    }

    .pp-content-layer span.last-updated-time,
    .tou-content-layer span.last-updated-time {
        font-size: 12px;
    }

    .privacy-policy-layer h4,
    .pp-content-layer ul.pp-list,
    .terms-of-use-layer h4,
    .tou-content-layer ul.tou-list {
        font-size: 15px;
    }

    .pp-content-layer ul.pp-list li ul.pp-son-list,
    .pp-content-layer ul.pp-list li ul.pp-son-list h4,
    .tou-content-layer ul.tou-list li ul.tou-son-list,
    .tou-content-layer ul.tou-list li ul.tou-son-list h4 {
        font-size: 14px;
    }

    .pp-content-layer ul.pp-list li ul.pp-son-list,
    .tou-content-layer ul.tou-list li ul.tou-son-list {
        margin: 0 0 0 10%;
    }
}
@media (min-width: 601px) and (max-width: 720px) {
    .privacy-policy-layer .privacy-policy-tab{
        text-align: center;
    }
    .privacy-policy-layer p{
        line-height: 26px;
        font-size: 13px;
    }
    .privacy-policy-layer{
        margin: 0 5%;
    }

    /* Pricacy Policy */
    .privacy-policy-layer,
    .terms-of-use-layer {
        padding: 20px 0 40px;
    }

    .privacy-policy-layer .pp-content-layer,
    .terms-of-use-layer .tou-content-layer {
        margin: 0;
    }

    /*.privacy-policy-layer .privacy-policy-tab,
    .terms-of-use-layer .terms-of-use-tab,
    .join-us-layer .join-us-tab,
    .job-slogan,
    .hot-news-layer {
        display: none;
    }*/

    .privacy-policy-layer .privacy-policy-tab,
    .terms-of-use-layer .terms-of-use-tab,
    .join-us-layer .join-us-tab {
        height: 45px;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        z-index: 17;
    }

    .privacy-policy-layer .privacy-policy-tab a,
    .terms-of-use-layer .terms-of-use-tab a,
    .join-us-layer .join-us-tab a,
    .privacy-policy-tab a span,
    .terms-of-use-tab a span,
    .join-us-tab a span {
        line-height: 45px;
        font-size: 14px;
    }

    .job-slogan,
    .hot-news-layer {
        display: none;
    }

    .pp-content-layer span.last-updated-time,
    .tou-content-layer span.last-updated-time {
        margin: 17px 0 10px;
    }

}
@media (min-width: 721px) and (max-width: 959px) {
    .privacy-policy-layer .privacy-policy-tab{
        text-align: center;
    }

    .privacy-policy-layer{
        margin: 0 5%;
    }
}
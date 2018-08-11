<template>
    <div class="page" data-page="home">
        <f7-navbar>
            <f7-nav-left>
                <f7-link panel-open="left" icon="fa fa-bars"></f7-link>
            </f7-nav-left>
            <f7-nav-title style="width:100%;">
                <f7-searchbar
                        placeholder="输入款号或商品名称…"
                        search-container="#attr-found"
                        searchIn=".item-title"
                        :disableButton="false"
                ></f7-searchbar>
            </f7-nav-title>
            <f7-nav-right>
                <f7-link panel-open="right" icon="fa fa-gear fa-fw"></f7-link>
            </f7-nav-right>
            <f7-subnavbar v-if="isFixed">
                <f7-segmented>
                    <f7-button :class="{'tab-link-active': clickActive}" @click="showTab('#essay', '#essay', true)">新品</f7-button>
                    <f7-button :class="{'tab-link-active': !clickActive}" @click="showTab('#prod', '#prod', false)">推荐</f7-button>
                </f7-segmented>
            </f7-subnavbar>
        </f7-navbar>

        <div class="page-content tabs" ref="pageScroll">
            <f7-swiper pagination>
                <f7-swiper-slide><img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/men/IMG8634220a9f4c40e297fcafa4dd20b1c1.jpg"></f7-swiper-slide>
                <f7-swiper-slide><img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/men/IMG194426b80d0e41479986299bcf0a6073.jpg"></f7-swiper-slide>
                <f7-swiper-slide><img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/men/IMG28c9837f94d74b3699869d6a209cb231.jpg"></f7-swiper-slide>
            </f7-swiper>

            <div class="list" style="margin: 0px 0px;">
                <div class="item-content">
                    <div class="item-media"><i class="f7-icons">menu</i></div>
                    <div class="item-inner">
                        <div class="item-title" style="font-weight: bold;">热门分类</div>
                    </div>
                </div>
            </div>

            <f7-row no-gap>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMGf65d8120f5f1449097784a4059c0b806.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMGf65d8120f5f1449097784a4059c0b806.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMGf65d8120f5f1449097784a4059c0b806.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMGf65d8120f5f1449097784a4059c0b806.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMG8a78ce5ce60b440c833149e2f248a31c.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMG8a78ce5ce60b440c833149e2f248a31c.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMG8a78ce5ce60b440c833149e2f248a31c.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMG8a78ce5ce60b440c833149e2f248a31c.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMGf659ca01815e43fca394b4840c89c268.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMGf659ca01815e43fca394b4840c89c268.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMGf659ca01815e43fca394b4840c89c268.jpg">
                </f7-col>
                <f7-col width="25">
                    <img src="https://aa.edgaradou.com/rsconfig/images/adPhoto/phonePhoto/113/IMGf659ca01815e43fca394b4840c89c268.jpg">
                </f7-col>
            </f7-row>

            <div v-if="!isFixed" style="background: #f7f7f8;" id="fixedBar" :class="{fixedBar: isFixed}" :style="{top: fixBarMarginTop, marginTop: isFixed ? '0px' : '10px'}">
                <f7-segmented style="padding: 10px 8px;">
                    <f7-button id="essayTab" tab-link="#essay" :class="{'tab-link-active': clickActive}" @click="showTab('', '#essay', true)">新品</f7-button>
                    <f7-button id="prodTab" tab-link="#prod" :class="{'tab-link-active': !clickActive}" @click="showTab('', '#prod', false)">推荐</f7-button>
                </f7-segmented>
            </div>

            <div id="essay" class="tab tab-active" :style="{marginTop: contentMarginTop}">
                <div class="card demo-facebook-card cardCss" v-for="essay in essayList">
                    <div class="card-header">
                        <div class="demo-facebook-avatar"><img :src="http_rsconfig + essay.user.headPath" width="34" height="34"/></div>
                        <div style="float:right;">
                            <div style="color:darkred"></div>
                        </div>
                        <div style="">
                            <div class="demo-facebook-name">{{essay.user.userName}}</div>
                            <div class="demo-facebook-date">{{essay.createTime}}</div>
                        </div>
                    </div>
                    <div class="card-content card-content-padding">
                        <f7-link href="/prodDetail/">
                            <img :src="http_rsconfig + essay.mainImgPath">
                        </f7-link>
                        <div class="card-content-div">{{essay.essayTitle}}</div>
                    </div>
                    <div class="card-footer"><a href="#" class="link">赞</a><a href="#" class="link">留言</a><a href="#" class="link">分享</a></div>
                </div>
            </div>

            <div id="prod" class="tab" :style="{marginTop: contentMarginTop}">
                <div class="card demo-facebook-card cardCss" v-for="prod in prodList">
                    <div class="card-header">
                        <div class="demo-facebook-avatar"><img src="https://aa.edgaradou.com/rsconfig/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg" width="34" height="34"/></div>
                        <div style="float:right;">
                            <div style="color:darkred"></div>
                        </div>
                        <div style="">
                            <div class="demo-facebook-name">simple</div>
                            <div class="demo-facebook-date">2018-05-29 11:11</div>
                        </div>
                    </div>
                    <div class="card-content card-content-padding">
                        <div class="list media-list">
                            <ul>
                                <li>
                                    <a href="#" class="item-link item-content">
                                        <div class="item-media"><img src="https://aa.edgaradou.com/rsconfig/images/f8cce677608c301401608c49c5960018/thumb_f8cce67760e43c390160ed65cee90cb2.jpg" width="80"/></div>
                                        <div class="item-inner">
                                            <div class="item-title-row">
                                                <div class="item-title">棒球领收口加厚迷彩外套{{prod.name}}</div>
                                                <div class="item-after">￥{{prod.price}}</div>
                                            </div>
                                            <div class="item-subtitle"></div>
                                            <div class="item-text">测试{{prod.price}}</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-content-div">爆款加推！手快有手慢无！</div>
                    </div>
                    <div class="card-footer"><a href="#" class="link">赞</a><a href="#" class="link">留言</a><a href="#" class="link">分享</a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    //import {mapState} from 'vuex'
    //import store from '../../../vuex/storage.js'

    export default {
        name: 'home',
        // store,
        data: function () {
            return {
                //essayList:[]
                prodList:(function () {
                    var it = [];
                    for (var i = 0; i < 10; i++){
                        var prod = {'price':i+1,'name':'测试'+(i+1)};
                        it.push(prod);
                    }
                    return it;
                })(),
                essayList:[{"commentCount":0,"createTime":"2018-01-09 18:02:22","creator":"f8cce677600b4ceb016010e7e422004d","enabled":1,"essayContent":"毛衣、牛仔裤和马丁靴，冬日最棒的内搭！","essayDesc":"<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/fc60584d-a62d-404a-ab37-508e0335778f.jpg\" style=\"width: 100%;\" /><span style=\"color: rgb(62, 62, 62); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 16px; widows: 1;\">高领毛衣是最不用动脑想搭配的单品，南方姑娘可以单穿一条牛仔裤就能时髦出街了。</span><span style=\"color: rgb(62, 62, 62); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 16px; widows: 1;\">虽然毛衣+牛仔裤是不需要过多费心的搭配，但是有一些技巧却不得不注意。如果是</span><span style=\"color: rgb(62, 62, 62); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 16px; widows: 1;\">宽松的</span><span style=\"color: rgb(62, 62, 62); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 16px; widows: 1;\">毛衣可以搭配</span><span style=\"color: rgb(62, 62, 62); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 16px; widows: 1;\">稍微紧身的</span><span style=\"color: rgb(62, 62, 62); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 16px; widows: 1;\">牛仔裤是最好的哦。</span><span style=\"color: rgb(62, 62, 62); font-family: &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; font-size: 16px; widows: 1;\">新年来了，想要增添点节日气氛不妨选择一款红色毛衣来凹造型，如果你觉得红色毛衣太过扎眼，可以搭配蓝色或者黑色的牛仔裤中和一下，就会起到很好的效果，建议大家可以尝试一下哦。</span></p>\n","essayTitle":"毛衣、牛仔裤和马丁靴，冬日最棒的内搭！","flgDeleted":"N","id":"f8cce67760da35330160da5eef870174","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce67760da35330160da5eee6e0171.jpg","prodRef":"[]","readCount":135,"user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":0},{"commentCount":0,"createTime":"2018-01-09 17:09:37","creator":"f8cce677600b4ceb016010e7e422004d","enabled":1,"essayContent":"每天都是精致的工装男孩","essayDesc":"<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/25e3caa4-bba0-4be4-96e2-f65ad0ad9f48.jpg\" style=\"width: 100%;\" /><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/443231.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">复古</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">飞行员宽松短款夹棉夹克，秋冬是一个释放男性荷尔蒙的季节，一件工装夹克可以让你MAN爆全，而这款，我觉得他应该算是&ldquo;改良版工装夹克&rdquo;它有工装较经典的胸前双翻盖口袋，你会发现就如&ldquo;6叔&rdquo;都很喜欢穿工装类夹克，不但</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/2344049.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">潮流</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">，而且十分的利索，短装夹克能很好的让你的身段拉伸，衣服除了样子潮流，抗风保暖的功能还是基本要素，这款就是工装的风格跟飞行夹克来了个crossover。内搭的</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/462707.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">灰色</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">连帽卫衣，简约的款式，衬托了整体干净整洁的感觉。简约的</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/2343955.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">纯色</a><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/1702069.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">休闲</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">九分裤自带松紧腰带的设计，更加的方便，裤脚的条纹设计，精选优良的材质质地，舒适有型，久穿不易变形，字母印花设计，正面细节，彰显你的个人魅力。</span></p>\n","essayLabel":"男装","essayTitle":"每天都是精致的工装男孩","flgDeleted":"N","id":"f8cce67760da2b2f0160da2ea1110013","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce67760da2b2f0160da2ea0260010.jpg","prodRef":"[]","readCount":73,"user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":0},{"commentCount":1,"createTime":"2018-01-09 16:46:00","creator":"f8cce677600b4ceb016010e61781004b","enabled":1,"essayContent":"为啥满身日潮的小哥哥撩不到妹？","essayDesc":"<div>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/78006c1a-b9ed-42df-832d-0eae0c0445fd.jpg\" style=\"width: 100%;\" />外套是余文乐同款系列男士休闲牛仔夹克，此款系列中蓝色男士休闲牛仔夹克，纯色简约的设计，简约而不简单，精湛的车工线，不易脱线，棉质面料的使用，柔软舒适，出街不错的选择,带有多口袋款式细节。内搭Gitman Vintage系列蓝衬衫 。下身自然也少不了wtaps军事风多袋军裤系列男士休闲牛仔裤 宽松舒适的版型，适合搭配多种衣服。还有最近很走火的吴亦凡同款鸭舌帽男百搭破洞磨边复古中国风文字刺绣帽。</div>\n<div>\n\t&nbsp;</div>\n","essayTitle":"日潮、美潮？我只在乎跟谁能高潮。","flgDeleted":"N","id":"f8cce67760da014e0160da1902400052","mainImgPath":"/images/f8cce677600b4ceb016010e61781004b/f8cce67760da014e0160da220d5c0061.jpg","prodRef":"[]","readCount":64,"updateTime":"2018-01-09 16:55:53","updater":"f8cce677600b4ceb016010e61781004b","user":{"createTime":"2017-12-01 15:06:42","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e61781004b/head/head.png","id":"f8cce677600b4ceb016010e61781004b","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADS","deptName":"商品部","deptNum":3,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d7a3d20041","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品基础信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e61781004b/head/thumb_head.png","updateTime":"2018-01-18 16:19:14","updater":"f8cce677600b4ceb016010e61781004b","userAccount":"ADS001","userName":"康剑铭","userPassword":"52c69e3a57331081823331c4e69d3f2e","version":9,"wrongCount":0},"version":1},{"commentCount":1,"createTime":"2018-01-09 16:03:48","creator":"f8cce677600b4ceb016010e7e422004d","enabled":1,"essayContent":"大衣搭卫衣，简约不简单","essayDesc":"<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/7baec6b7-8a79-47d0-9430-d7c90b2ab590.jpg\" style=\"width: 100%;\" /><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">外套是简约的素色羊毛大衣，修身的款式拉长了身形。内搭的基础款连帽卫衣版型，姜黄配色温暖热烈，棉质亲肤面料舒适透气，适合贴身穿着，腰身侧边立体</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/433961.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">拼接</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">剪裁，增添视觉层次感，上身更有型~打底的&nbsp;高领修身羊毛</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/2344011.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">长袖</a><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/93121.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">T恤</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">，羊毛材质，更挺括饱满，厚实有型。高领设计，防风保暖。随身版型，穿着</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/1702069.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">休闲</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">舒适。下身简约休闲九分裤，黑色卡其色双色可选，</span><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">简约却不失细节，简单的裤型，没有多余的修饰，是一个不错的选择。</span></p>\n","essayLabel":"男装","essayTitle":"大衣搭卫衣，简约不简单","flgDeleted":"N","id":"f8cce67760d9ee5f0160d9f26055000a","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce67760d9ee5f0160d9f25f3c0007.jpg","prodRef":"[]","readCount":66,"user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":0},{"commentCount":2,"createTime":"2018-01-09 15:20:14","creator":"f8cce677600b4ceb016010e7e422004d","enabled":1,"essayContent":"美式复古也可以文艺绅士","essayDesc":"<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/90bb502a-886b-4924-889a-92918a12f9cf.jpg\" style=\"width: 100%;\" /><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">男式夹克</span><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">外套，实用性绝佳，陪你轻松踏上探索征程。夹克在军旅风的基础上增加了实用的现代都市元素，无论是步行，还是摩托车、骑单车，或随性出行的都市人都可以全天穿着，从日到夜，无缝衔接。内搭的</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/512933.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">牛仔</a><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/2344011.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">长袖</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">衬衫 此款选用</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/443231.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">复古</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">水洗牛仔面料，上身立显怀旧气息，肩部</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/433961.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">拼接</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">设计，创意设计感十足，修身版型，显瘦易搭，秋冬世界，外穿或是内搭都是不错的选择~脚上的</span><a class=\"a-anchor\" href=\"https://www.yohobuy.com/chanpin/1702069.html\" style=\"margin: 0px; padding: 0px; border: 0px; font-variant-numeric: inherit; font-stretch: inherit; line-height: inherit; font-family: arial, SimHei, sans-serif; font-size: 14px; vertical-align: baseline; color: rgb(147, 180, 197);\" target=\"_blank\">休闲</a><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">运动鞋，经典复刻款式，复古感和舒适感兼备。高帮系带，偏窄鞋头与修长鞋型，上脚优雅显瘦，凸显简洁经典的设计。不对称鞋头挡泥板，经典制作。金属银色鞋孔，光亮的鞋围条和鞋头，具复古感。</span></p>\n","essayLabel":"男装","essayTitle":"美式复古也可以文艺绅士","flgDeleted":"N","id":"f8cce67760d94ca90160d9ca7d45016f","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce67760d94ca90160d9ca7c5b016c.jpg","prodRef":"[]","readCount":52,"user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":0},{"commentCount":0,"createTime":"2018-01-09 14:50:18","creator":"f8cce677600b4ceb016010e7e422004d","enabled":1,"essayContent":"轻松hold住复古运动风","essayDesc":"<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/661bb8a0-e6f4-47e2-bc66-e085c79c8647.jpg\" style=\"width: 100%;\" /><span style=\"color: rgb(0, 0, 0); font-family: arial, SimHei, sans-serif; font-size: 14px;\">外套是纯色的加厚款面包服马甲，用夹棉加厚处理的棉质面料，穿着柔软舒适。宽松的廓形设计，藏肉显瘦。小高领，保护颈部肌肤不收寒风侵袭，防寒保暖性佳。秋冬季可搭配针织衫或者卫衣。内搭复古运动套头卫衣。腰间的格纹长袖衬衫，不仅增添了穿搭的层次感，更在不经意间提升了腰线，轻松打造大长腿。下半身的蓝色复古A型牛仔裙，精选牛仔棉，亲肤舒适，似阳光般照射，带着淡淡暖意。简单的款式，更易于搭配的哦。腰间与下摆处的毛边流苏设计，复古chic，更主要的是显腿长哦</span></p>\n","essayLabel":"运动风女装","essayTitle":"轻松hold住复古运动风","flgDeleted":"N","id":"f8cce67760d94ca90160d9af17ef013c","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce67760d94ca90160d9af17050139.jpg","prodRef":"[]","readCount":22,"user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":0},{"commentCount":0,"createTime":"2018-01-09 14:07:34","creator":"f8cce677600b4ceb016010e7e422004d","enabled":1,"essayContent":"穿对了羽绒服，小仙女每天都做","essayDesc":"<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/d6acaed3-04d3-4142-bf28-c7000e58a6f4.jpg\" style=\"width: 100%;\" />外套是复古金属拉链羽绒服Rock chic style 正在时尚界蔓延，羽绒服的设计上加入摇滚气息，个性的金属拉链，别致的后幅设计，在寒冷季节温暖包裹，实用又时尚。内搭的纯色多扣长款连衣裙，下装搭配浅蓝色短裤和肉色丝袜让怕冷的姑娘们过一个保暖的冬季。怕对于爱美的姑娘来说，一年四季钟爱的除了防晒霜之外，也许只有连衣裙，春夏秋冬不知穿什么，那便选一件连衣裙吧，单穿也好，内搭也罢都适宜。装饰的口袋还能放下些小物件。直筒型的版是修饰身型的一把好手，多了可拆卸腰带的帮助，能穿出更多的造型。</p>\n","essayLabel":"女装羽绒服","essayTitle":"穿对了羽绒服，小仙女每天都做","flgDeleted":"N","id":"f8cce67760d94ca90160d987f67400b8","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce67760d94ca90160d98b25e400c2.jpg","prodRef":"[]","readCount":36,"updateTime":"2018-01-09 14:11:03","updater":"f8cce677600b4ceb016010e7e422004d","user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":2},{"commentCount":1,"createTime":"2017-12-27 17:47:59","enabled":1,"essayContent":"飞行员夹克，顾名思义，最初是专为飞行员们设计的服装，主要目的是为了在6000米的高空御寒保暖，大多采用长及膝和掐腰的款式，衣身以皮革为主。","essayDesc":"<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/9f7f7e5a-2112-4781-b60b-5cf87799ded0.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/9e904b4b-8315-4a3b-8604-0f7b59e7444d.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/e51a2718-8130-4629-bf03-2362277ea43e.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/a019a0be-ea33-41cb-a632-f5e0e5624a06.jpg\" style=\"width: 100%;\" /></p>\n<p>\n\t&nbsp;</p>\n<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/7b573f90-b58e-4adc-989e-9f0957381a70.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/0904cf08-31f3-4c48-aa27-634e8a454b97.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/1eb386b1-afd6-4bb2-9006-11dc8d8316cb.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/245cb111-b661-4134-b94b-9f3b468e12d7.jpg\" style=\"width: 100%;\" /></p>\n<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/eca8e19a-a8f2-41c0-a477-6e8883d567f2.jpg\" style=\"width: 100%;\" /></p>\n<p>\n\t&nbsp;</p>\n<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/cf08fdbf-5dd2-485e-991f-ca17dbb5e598.jpg\" style=\"width: 100%;\" /></p>\n<p>\n\t&nbsp;</p>\n<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/7bb855fb-4f73-4082-bc8c-64c92806117c.jpg\" style=\"width: 100%;\" /></p>\n","essayLabel":"男装","essayTitle":"飞行员夹克丨穿上就真的可以飞吗？","flgDeleted":"N","id":"f8cce67760972f1f0160975f15920055","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce67760972f1f0160975f14880052.jpg","prodRef":"[]","readCount":84,"updateTime":"2017-12-27 17:49:18","user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":1},{"commentCount":2,"createTime":"2017-12-27 14:59:59","enabled":1,"essayContent":"很多时候对于普通的床品四件套，大家还是比较钟爱全棉床品四件套\r\n棉料的不管是衣服还是床品都给人自然安全健康的感觉","essayDesc":"<p>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/6bdf796e-7c0b-4c67-a5d1-2ea3f5446c3a.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/5ba5525f-7286-4082-9e28-3b71c3ca168f.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/076c26e1-9dca-4d32-bb5f-cbd32a45bf8d.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/801a5d46-7f10-4194-b0c1-fa12b73a866c.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/5d7bc2b8-d877-4a92-9224-7604abaa7028.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/f818917c-1652-4d78-ab29-b2cca40024c1.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/31ce03f6-5fc4-422c-9eb5-7ff8732ec56c.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/aef38814-a5cc-43ec-bdcb-053a21406bbe.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/7a569b43-942f-4bbb-93cb-fef9c65db56c.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/0246db10-b8ed-47ad-85b8-7d18d00d0208.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/4434d35f-7a23-491b-bdb8-377c08ffb869.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/1f8ac7a7-b873-4d98-acf1-a839cef8781e.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/73d305c7-12c4-470d-941e-c52279f296f1.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/613bcd34-7aec-4a53-b709-d91ef04a39d6.jpg\" style=\"width: 100%;\" /><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/b5475f78-6fdd-4591-9ffd-6fb7e473c050.jpg\" style=\"width: 100%;\" /></p>\n","essayLabel":"床上用品","essayTitle":"床上你不懂的那些事","flgDeleted":"N","id":"f8cce6776092454f016096c5462d00c4","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce6776092454f016096c5452300c1.jpg","prodRef":"[]","readCount":72,"user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":0},{"commentCount":0,"createTime":"2017-12-27 11:02:33","enabled":1,"essayContent":"一件连帽卫衣玩出秋冬新","essayDesc":"<h3 style=\"color: blue; text-align: center;\">\n\t<span style=\"color:#000000;\"><span style=\"font-size:14px;\">最近早晚温差越来越大，外套＋内搭会更多地出现在每个人的日常搭配中。</span></span></h3>\n<h3 style=\"color: blue; text-align: center;\">\n\t<span style=\"color:#000000;\"><span style=\"font-size:14px;\">连帽卫衣本身就很方便，不管上学，逛街，还是吃饭，随手穿一件都可以轻松出门。所以今天来介绍一些连帽卫衣的搭配～</span></span></h3>\n<p style=\"text-align: center;\">\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/6bddb3e5-9f9e-489a-957f-524b7c9dee34.gif\" style=\"width: 100%;\" /></p>\n<h3 style=\"color: blue; text-align: center;\">\n\t<span style=\"color: rgb(0, 0, 0);\">连帽卫衣有多牛逼？</span></h3>\n<div style=\"text-align: center;\">\n\t<h3 style=\"color: blue;\">\n\t\t&nbsp;</h3>\n\t<div>\n\t\t&nbsp;</div>\n\t<div>\n\t\t<span style=\"color:#000000;\">如今的很多休闲单品，其实都是当年工人的工作服。连帽卫衣也不例外，它本是由Champion Products 专门为室外工人/运动员而发明的的单品。</span></div>\n\t<div>\n\t\t&nbsp;</div>\n\t<div>\n\t\t<span style=\"color:#000000;\">直到70年代Hip－hop文化崛起后，连帽卫衣连带着牛仔裤等一干单品，成了亚文化挑战主流文化的象征。</span></div>\n\t<div>\n\t\t&nbsp;</div>\n\t<div>\n\t\t<span style=\"color:#000000;\">而最为时尚的搭配之一的街头穿法，下图这种，连帽卫衣+假两件哈伦裤+高帮帆布鞋。</span></div>\n\t<div>\n\t\t&nbsp;</div>\n\t<div>\n\t\t&nbsp;</div>\n\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/035b0806-25e1-4487-ad67-922a377334d5.png\" style=\"width: 100%;\" /><br />\n\t<h3 style=\"color:blue;\">\n\t\t<span style=\"color:#000000;\">连帽卫衣该怎么穿？</span></h3>\n\t<h3 style=\"color:blue;\">\n\t\t<span style=\"color:#000000;\">外搭夹克</span></h3>\n\t<h3 style=\"color:blue;\">\n\t\t&nbsp;</h3>\n\t<h3 style=\"color:blue;\">\n\t\t<span style=\"color:#000000;\">这是一般常见的连帽卫衣搭夹克很方便，外搭夹克也是经典穿法。虽然我个人觉得红色过于出挑，</span></h3>\n\t<h3 style=\"color:blue;\">\n\t\t<span style=\"color:#000000;\">但这套因为上衣下身单品的廓形感很好，所以整体在视觉上还是很出彩。</span></h3>\n\t<h3 style=\"color:blue;\">\n\t\t<span style=\"color:#000000;\">利用内长外短来打造出层次感。</span></h3>\n\t<h3 style=\"color:blue;\">\n\t\t<span style=\"color:#000000;\">帽子，内搭和鞋子的三处颜色呼应很好地修饰了整体比例。</span></h3>\n\t<p>\n\t\t<span style=\"color:#000000;\"><img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/c68b7f85-dca4-4144-bdc8-a72efb6484db.jpg\" style=\"width: 100%;\" /></span></p>\n\t<div>\n\t\t<img alt=\"\" src=\"http://aa.edgaradou.com/rsconfig/upload/ab881616-e0c6-4b03-b3fc-873810bcf0c6.png\" style=\"width: 100%;\" /></div>\n\t<div>\n\t\t&nbsp;</div>\n</div>\n<p>\n\t&nbsp;</p>\n","essayLabel":"男装卫衣","essayTitle":"一件连帽卫衣玩出秋冬新花样！","flgDeleted":"N","id":"f8cce6776092454f016095ebe70f000a","mainImgPath":"/images/f8cce677600b4ceb016010e7e422004d/f8cce6776092454f016095ebe5a80007.jpg","prodRef":"[]","readCount":54,"updateTime":"2018-01-07 14:39:12","user":{"createTime":"2017-12-01 15:08:40","creator":"402881e5544b55ed01544b570efb0001","enabled":1,"flgDeleted":"N","headPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","id":"f8cce677600b4ceb016010e7e422004d","isSys":0,"sex":"1","sys":0,"sysDept":{"deptCode":"ADB","deptName":"编辑部","deptNum":2,"enabled":1,"flgDeleted":"N","id":"f8cce677600b4ceb016010d576f0003e","pId":"f8cce6775f90fafc015f9f0b0aea005e","remark":"负责商品信息及文章信息编辑","sysEmployees":[],"version":0},"thumbHeadPath":"/images/user/f8cce677600b4ceb016010e7e422004d/head/head.jpg","updateTime":"2018-03-07 10:31:16","updater":"f8cce677600b4ceb016010e7e422004d","userAccount":"ADB002","userName":"simple","userPassword":"75f18489dfd060675d0099d8f932b81e","version":8,"wrongCount":0},"version":1}],
                http_rsconfig:"https://aa.edgaradou.com/rsconfig",
                btnShow: false,
                pageScroll: '',
                pageScrollTop: 0,
                scrollHide: true,
                // 因为footer是fixed定位 如果padding-bottom为0 数据列表拉到最下面的时候 会有部分数据被footer挡住
                isFixed: false, // bar浮动
                fixedBar: '',
                offsetTop: 0,   // 触发bar浮动的阈值
                contentMarginTopInit: '0px',
                contentMarginTop: '0px',   // 触发bar浮动的同时 给数据列表一个margin-top 防止列表突然上移 会很突兀
                homeNavbar: '',
                fixBarMarginTop: '44px',
                clickActive : true,
            }
        },
        methods:{
            hideToolBar(hide) {
                const self = this;
                const app = self.$f7;
                //隐藏toolbar
                if(hide){
                    setTimeout(()=>{
                        app.toolbar.hide("#MainToolbar", true);
                    },0);
                }else{
                    setTimeout(()=>{
                        app.toolbar.show("#MainToolbar", true);
                    },0);
                }
            },
            handleScroll () {
                var scrollTop = this.pageScroll.scrollTop;
                //console.log(scrollTop);
                // 设置bar浮动阈值为 #fixedBar 至页面顶部的距离
                //this.offsetTop = document.querySelector('#fixedBar').offsetTop;
                //console.log("offsetTop==" + this.fixedBar.offsetTop);
                const app = this.$f7;
                const $$ = this.$$;

                this.homeNavbar = document.querySelector('#home .navbar');
                this.offsetTop = this.fixedBar.offsetTop > this.offsetTop ? this.fixedBar.offsetTop : this.offsetTop;
                //判断是否上下滚动，是否隐藏导航栏
                if(scrollTop > this.pageScrollTop){
                    app.navbar.hide('#home .navbar');
                    this.isFixed = scrollTop > this.offsetTop;
                    this.fixBarMarginTop = '0px';

                }else if(scrollTop < this.pageScrollTop){
                    this.isFixed = scrollTop > this.offsetTop - this.homeNavbar.offsetHeight;
                    this.fixBarMarginTop = this.homeNavbar.offsetHeight + 'px';
                    if(this.scrollHide){
                        app.navbar.show('#home .navbar');
                    }
                }
                this.scrollHide = true;
                this.pageScrollTop = scrollTop;
                /*if($$(this.homeNavbar).hasClass('navbar-hidden')){
                    this.isFixed = scrollTop > this.offsetTop;
                    this.fixBarMarginTop = '0px';
                }else{
                    this.isFixed = scrollTop > this.offsetTop - this.homeNavbar.offsetHeight;
                    this.fixBarMarginTop = this.homeNavbar.offsetHeight + 'px';
                }*/
                this.contentMarginTop = this.isFixed ? this.contentMarginTopInit : '0px';
            },
            showTab(tabName, tabLink, active) {
                this.clickActive = active;
                this.goAnchor(tabLink);

                if(tabName){
                    const app = this.$f7;
                    app.tab.show({
                        tabEl: tabName,
                        tabLinkEl: tabLink + 'Tab',
                        animate: true,
                    });
                }
            },
            goAnchor(selector) {
                this.scrollHide = false;
                this.pageScroll.scrollTop = this.offsetTop;
            }
        },
        computed: {
            // ...mapState({
            //     showType: stage => stage.showType,
            // })
        },
        on: {
            pageInit(event, pageData) {
                console.log("init");
            },
            pageReInit(event, pageData) {
                console.log("pageReInit");
            },
        },
        updated(){
          console.log("updated");
        },
        mounted(){
            // 设置初始的 padding-bottom 值为 footer 的高度 +20 防止数据列表拉到最下面被footer挡住 +多少自定
            //this.paddingBottom = document.querySelector('.footer').offsetHeight + 20 + 'px';
            this.fixedBar = document.querySelector('#fixedBar');
            // 首先通过$refs获取dom元素
            this.pageScroll = this.$refs.pageScroll;
            // 监听这个dom的scroll事件
            this.pageScroll.addEventListener('scroll', this.handleScroll, false)
            this.contentMarginTopInit = this.fixedBar.offsetHeight + 10 + 'px';
            //this.hideToolBar(true);
            //this.getEssayList();
        },
        destroyed () {
            this.pageScroll.removeEventListener('scroll', this.handleScroll); // 离开页面 关闭监听 不然会报错
        },
    };

</script>
<style lang="less">
    #home{
        .fixedBar {
            position: fixed;
            z-index: 999;
            width: 100%;
        }

        .media-list .item-media img {
            width: 65px;
        }

        .card-content img, .row img, .swiper-slide img{
            width:100%;
        }
        div[class*="col"] {
            background: #fff;
            text-align: center;
            color: #000;
            border: 1px solid #ddd;
            padding: 5px;
            font-size: 12px;
        }

        .cardCss{
            margin-top:0 !important;
            margin-left:0 !important;
            margin-right:0 !important;
            margin-bottom: 0.2rem;
        }
    }
</style>

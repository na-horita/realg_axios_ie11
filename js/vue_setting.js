// サブメニュー設定
   new Vue({
      el: '.main',
      methods:{
      	currentSlugFlg:function(currentData){
           //return currentData.slug === "/consulting/aaaa/"
           return currentData.slug === location.pathname;
        }
      },
      data: {
        consulting:[
        {
        'slug':'/consulting/equivalentexchange/',
        'name':'コーポラ等価交換'
        },
        {
        'slug':'/consulting/land01/',
        'name':'狭小地・不整形地有効活用'
        },
        //{
        //'slug':'/consulting/land02/',
        //'name':'不整形地有効活用'
        //},
        {
        'slug':'/consulting/land03/',
        'name':'その他土地有効活用'
        },
        {
        'slug':'/consulting/renovation/',
        'name':'リノベーション・コンバージョン'
        },
        {
        'slug':'/consulting/townplanning/',
        'name':'まちづくりコンサル'
        }
       ],
      contents:[
        {
        'slug':'/contents/',
        'name':'コーポラティブハウス'
        },
        {
        'slug':'/contents/detached/',
        'name':'戸建・テラスハウス'
        },
        {
        'slug':'/contents/communityrent/',
        'name':'コミュニティ賃貸'
        },
        {
        'slug':'/contents/hostel/',
        'name':'ホステル・商業施設'
        },
        {
        'slug':'/contents/residence/',
        'name':'分譲住宅・賃貸住宅'
        }
     ],
      coplus:[
        {
        'slug':'/coplus/company/',
        'name':'会社概要'
        },
        {
        'slug':'/coplus/staff/',
        'name':'事業部紹介'
        },
        {
        'slug':'/coplus/representative/',
        'name':'代表メッセージ'
        }
     ]
    }
  })
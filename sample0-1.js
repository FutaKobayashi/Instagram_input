(function ($) {
    $.ajax({  // jQueryのajaxでjsonデータを取得しますね
        type: 'GET',
        url: 'https://graph.facebook.com/v16.0/17841452900515096?access_token=EAAM9udmo87gBAK4yAt9ojW0tvKshCY0qhXMm82ckGslgLvvaz9AtuOPDRT22nZCFw8ml7r6CQqbBWgXp2NZAZCga6oEDa6WswZCV58hiu5V7LwwZB6WvsOH8MRxMMoL0WLBAOGjgLEwuRUxhquWtwXYHLZAKYneggyJdTrZAKX6VcbtpP1XuLPIbz46e2p2ODe67tsgtWXwWTFgnV3du7kKE7ae1609CZAGtmZARgU2m9DwZDZD&fields=name,media{caption,like_count,media_url,permalink,timestamp,username}',
        dataType: 'json',　
        success: function (json) {
            var insta = json.media.data;
            for (var i = 0; i < 6; i++) {
              let url = insta[i].media_url; // 動画ソースのURLを取得
              let href = insta[i].permalink; // リンク先URLを取得
              let caption = insta[i].caption; //　投稿のキャプションを取得
              let like = insta[i].like_count; //　いいね！数の取得
              if(url.indexOf('.mp4') <= 0){ // 今回は動画は除外させました .mp4以外を<li>タグで描画します
                $('.insta_list').append(` // テンプレートリテラルはバッククォート
<li>
  <a href="${href}" target="qoo_insta">
    <img src="${url}" alt="${caption}">
    <p>${caption}</p>
    <p><span>${like}</span> Likes!!</p>
  </a>
</li>
              `);
}
            }
        }
    });
})(jQuery);

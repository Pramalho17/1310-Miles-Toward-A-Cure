jQuery(function(e){var t=window.FEED||{};t.TWEET=function(){e(".tweets_feed").twittie({template:'<div class="tweet_user"><span class="icon-twitter"><i class="fa fa-twitter"></i></span><span class="username">{{screen_name}}</span></div><div class="tweet_text">{{tweet}}</div><div class="tweet_time"><a href="{{url}}">{{date}}</a></div>'},function(){e(".tweets_feed").owlCarousel({pagination:!0,navigation:!0,autoPlay:!0,singleItem:!0})})},e(document).ready(function(){t.TWEET()})}); 
<?php

$CONFIG = array(

    // Instagram login
    'LOGIN' => 'nails.chic',

    // CLIEN_ID of Instagram application
    'CLIENT_ID' => '4141f99bb43a4e84852e805033f5d083',

    // Get pictures from WORLDWIDE by tag name.
    // Use this options only if you want show pictures of other users.
    // Important! Profile avatar and statistic will be hidden.
    'HASHTAG' => '',

    // Random order of pictures [ true / false ]
    'imgRandom' => true,

    // How many pictures widget will get from Instagram?
    'imgCount' => 30,

    // Cache expiration time (hours)
    'cacheExpiration' => 6,

    // Default language [ ru / en ] or something else from lang directory.
    'langDefault' => 'ru',

    // Language auto-detection [ true / false ]
    // This option may no effect if you set language by $_GET variable
    'langAuto' => false,

);

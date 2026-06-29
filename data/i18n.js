/* ============================================================
 * IDW 아이동월드 — UI 스트링 테이블 (i18n)
 * 키-값 구조. 시드는 ko / en 만 채움. 나머지 언어는 fallback(en→ko).
 * 69개 언어는 [IDW]dc1-6 스트링테이블 시트에서 같은 키로 채워 넣으면 됨.
 *
 * HTML 쪽은 data-i18n="key" 속성으로 연결.  값에 \n 은 줄바꿈으로 렌더.
 * 프로덕션에서는 i18n/{lang}.json 으로 분리해 fetch 해도 동일하게 동작.
 * ============================================================ */
window.IDW_I18N = {
  ko: {
    top_label:       "아이동월드",
    hero_caption:    "IDOL + 動物 = 아이동",
    clock_kicker:    "지금, K-pop 시계",
    clock_tag_hour:  "時",
    clock_tag_minute:"分",
    clock_hour_fmt:  "{n}시",
    clock_minute_fmt:"{n}분",
    lang_kicker:     "당신의 언어로",
    lang_title:      "별빛을 따라,\n당신의 별을 톡",
    lang_hint:       "반짝이는 별을 누르면 그 언어로 바뀌어요.",
    about_kicker:    "아이동월드란?",
    about_title:     "아이돌과 동물이 만난 작은 바다",
    about_body:      "K-POP 아이돌(IDOL)과 동물(動物)이 합쳐져 태어난 ‘아이동’들이 헤엄치는 바다.\n저마다의 끼와 취향을 가진 아이동들과 함께, 매일의 아침·점심·저녁을 보내요.",
    island_kicker:   "반짝섬",
    island_title:    "아이동들로 반짝이게 될 나의 작은 회색 섬",
    island_body:     "별빛이 닿는 바다 한가운데, 아이동들의 무대가 열리는 곳.\n나의 섬. 아이동을 빛으로, 색으로 물들일 내 마음의 무대.",
    cta_button:      "준비 중 · 2026년 11월 Coming Soon",
    support_label:   "한국콘텐츠진흥원 지원 작품",
    biz_copyright:   "ⓒ MEJE Works Corp.",
    biz_rights:      "All Rights Reserved.",
    biz_info:        "주식회사 메제웍스ㅣ대표자 : 김동은ㅣ772-87-02365ㅣ서울특별시 강남구 역삼로 217. 503호(역삼동)ㅣ0507-1420-1205"
  },
  en: {
    top_label:       "IDONG World",
    hero_caption:    "IDOL + DONGMUL (animal) = IDONG",
    clock_kicker:    "Now · the K-pop Clock",
    clock_tag_hour:  "HR",
    clock_tag_minute:"MIN",
    clock_hour_fmt:  "{n} h",
    clock_minute_fmt:"{n} min",
    lang_kicker:     "In your language",
    lang_title:      "Follow the twinkle —\ntap your star",
    lang_hint:       "Tap a sparkling star to switch the page into that language.",
    about_kicker:    "What is IDONG World?",
    about_title:     "A little sea where idols meet animals",
    about_body:      "A sea where the ‘IDONG’ swim — born when a K-POP IDOL meets a DONGMUL (animal).\nSpend every morning, noon and night with idongs, each with their own flair and taste.",
    island_kicker:   "Twinkle Island",
    island_title:    "My little grey island, to be lit up by idongs",
    island_body:     "In the middle of a starlit sea, where the idongs’ stage opens.\nMy island — the stage of my heart, to color the idongs with light and hue.",
    cta_button:      "In the works · Coming November 2026",
    support_label:   "Supported by KOCCA (Korea Creative Content Agency)",
    biz_copyright:   "ⓒ MEJE Works Corp.",
    biz_rights:      "All Rights Reserved.",
    biz_info:        "MEJE Works Inc. | Kim Dong-eun | 772-87-02365 | 503, 217, Yeoksam-ro, Gangnam-gu, Seoul | 0507-1420-120"
  }
};

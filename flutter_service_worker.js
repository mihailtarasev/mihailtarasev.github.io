'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "4b8c915fd73774e1f694403f8c69a5c8",
"index.html": "db708d681258b6d3bdae8be6471513e6",
"/": "db708d681258b6d3bdae8be6471513e6",
"main.dart.js": "5f3cf716f2501abe5471198cabf91ba2",
"sqlite3.wasm": "37f9207919949cbd1ab7b81907e9f1f9",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "98378d5bb2c3660b6d23d86cef072db9",
"worker.dart": "e9f6baf9efb39986bc1430c5e218e161",
"icons/Icon-192.png": "0d7c7062a5ec2838a888072c7ac411d6",
"icons/Icon-maskable-192.png": "0d7c7062a5ec2838a888072c7ac411d6",
"icons/Icon-maskable-512.png": "772bde3c1d2eb59436b9a6664dc1ada4",
"icons/Icon-512.png": "772bde3c1d2eb59436b9a6664dc1ada4",
"manifest.json": "b19f83740247857884bb48e1afe4d014",
"assets/AssetManifest.json": "ed935ccd5f1efa23c77de4f8c8472b5e",
"assets/NOTICES": "a649e754e94b8ce9489ea6bc67c10236",
"assets/FontManifest.json": "f823b699524e7c4d79292acfd2f42848",
"assets/AssetManifest.bin.json": "4f3438b0905c1c9cb917fb97eb85bc9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "f442007d3b790d98a0723c01ea67f267",
"assets/fonts/sf_compact_rounded_bold.otf": "96e8c78a4e6dc6b2a56e417418a6f46d",
"assets/fonts/sf_compact_rounded_semibold.otf": "53de705fadc2182e79b76021d97610bb",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/background/background_launch.png": "8f6a0378ef490acdb2931c29dc7f8e95",
"assets/assets/images/background/frame_scope_bottom.png": "aeb7028e35eaade727dc39c7297e6422",
"assets/assets/images/background/frame_scope_top.png": "5985f3cf04a0df09d6bcda834693e071",
"assets/assets/images/background/2.0x/background_launch.png": "a12ee18a61d093fdc06ab047e5160e56",
"assets/assets/images/background/2.0x/frame_scope_bottom.png": "41de6cc94da4f3493bf4c8129364acee",
"assets/assets/images/background/2.0x/frame_scope_top.png": "3ecae37453ce77c27aaa52936489dd4f",
"assets/assets/images/background/2.0x/background_fantasy.png": "fa994e54d0ae40eb986be6aac5dc3280",
"assets/assets/images/background/2.0x/background_pink.png": "2df4310020e99e96c2ec089b2155d8b0",
"assets/assets/images/background/2.0x/frame_game_scope.png": "abb230c74a5efc9a12b2cfe6918c0c46",
"assets/assets/images/background/2.0x/frame_scope_rect.png": "17d5d8a1ca70cb5299acca86a9df90df",
"assets/assets/images/background/2.0x/background_yellow.png": "f32f2a369cf0401422d5db1a412cae63",
"assets/assets/images/background/2.0x/background_castle.png": "bb47edc3cb3c316cb56c7c1886f2cf19",
"assets/assets/images/background/2.0x/frame_scope_center.png": "c9ed5c0f8d4e24c9294c2a9b6737222f",
"assets/assets/images/background/2.0x/background_sky.png": "abc6835a96aae37a0391015704bc41d6",
"assets/assets/images/background/background_fantasy.png": "42340cdf51341cbb04557e9e937b0fa6",
"assets/assets/images/background/background_pink.png": "4704ec52be662d0b3a8bd25998e63a78",
"assets/assets/images/background/frame_game_scope.png": "3b77b0cc7212eef787110d477d4590bd",
"assets/assets/images/background/frame_scope_rect.png": "2615f0aef4174485e6ca3f314055345e",
"assets/assets/images/background/4.0x/background_launch.png": "1fb23ff761bd9c2bfcfe8b747ae2e5e2",
"assets/assets/images/background/4.0x/frame_scope_bottom.png": "04107b1b787f1c77ffa1b9d3beb33c49",
"assets/assets/images/background/4.0x/frame_scope_top.png": "c458a095ad65ce184a879deab8500b3b",
"assets/assets/images/background/4.0x/background_fantasy.png": "17969a8145d9bd05bf27b54d9e00e6c1",
"assets/assets/images/background/4.0x/background_pink.png": "98529e1a2553f8832e310cb78cc16371",
"assets/assets/images/background/4.0x/frame_game_scope.png": "ed75ae0e705cc96fd48544d05ea3a29f",
"assets/assets/images/background/4.0x/frame_scope_rect.png": "6dcb399353ac4c056f73af82ca3e7e37",
"assets/assets/images/background/4.0x/background_yellow.png": "af528b54b30e4c110190b790465a4666",
"assets/assets/images/background/4.0x/background_castle.png": "46769036d8d96c115141882a08532410",
"assets/assets/images/background/4.0x/frame_scope_center.png": "bf05b9f49e7221c5ef79dbcf6fc97ee5",
"assets/assets/images/background/4.0x/background_sky.png": "40abd8c443a2ba58b97f042ed121b0b7",
"assets/assets/images/background/background_yellow.png": "1f9cae04cc4602cd669abdf00809e019",
"assets/assets/images/background/background_castle.png": "643dfae5e6b3a448847a416585417933",
"assets/assets/images/background/frame_scope_center.png": "e355f79219d063d3299c180055647170",
"assets/assets/images/background/background_sky.png": "3a6de9e01b3fa2c60a8272243330dd7a",
"assets/assets/images/board/board_brown.png": "6f9c0778c0db3b213c3e009697afd5d1",
"assets/assets/images/board/board_game_item_dragon_gold.png": "2b038c82982b98ce843e0a98a6a94c1c",
"assets/assets/images/board/title_fight.png": "aa56054d853aff509cbd984f6cd4a972",
"assets/assets/images/board/border_bottom_right.png": "9429c37816904d74647e52ca486ba4e5",
"assets/assets/images/board/2.0x/board_brown.png": "54d86a086aa19f6af1b8ec45ee03b6f1",
"assets/assets/images/board/2.0x/board_game_item_dragon_gold.png": "1f316d210e292b57703f30c7a1fe5b3e",
"assets/assets/images/board/2.0x/title_fight.png": "ea3e745db11d2da119fd94be40d5cc7d",
"assets/assets/images/board/2.0x/title_average.png": "9c57545bdf40403be71047f3e4c90ada",
"assets/assets/images/board/2.0x/board_rect.png": "03ae6549c77fd04763bb89e276183326",
"assets/assets/images/board/2.0x/board_game_item.png": "e32657b141bbcc5df0efa1c904a60bc2",
"assets/assets/images/board/2.0x/board_game_item_dragon_yellow.png": "40e95015ceff0d05efd8c9bbb4301321",
"assets/assets/images/board/2.0x/board_game_item_dragon_blue.png": "9ded5c566258764fca9bc86753766557",
"assets/assets/images/board/2.0x/title_dragon.png": "8c89f1dadf5b33ac13fd5966afcdcbb7",
"assets/assets/images/board/2.0x/board_game_item_dragon_birch.png": "e27e2c8d65073675c55da438c07d52bf",
"assets/assets/images/board/title_average.png": "a63328e79d1f3854cbbc7a10438072d8",
"assets/assets/images/board/board_rect.png": "e4ffb7de10f35085bc40aeb8208c236b",
"assets/assets/images/board/board_game_item.png": "f600efaac8b579be43dffd7c30132bc8",
"assets/assets/images/board/board_game_item_dragon_yellow.png": "517a5bfd701c542c0112103beaaf8817",
"assets/assets/images/board/border_top_left.png": "db1dcc186bbc87ead32e2c9edb492508",
"assets/assets/images/board/4.0x/board_brown.png": "7161478bf9933b6c389eed416a7c4477",
"assets/assets/images/board/4.0x/board_game_item_dragon_gold.png": "90d16562964be0c8c6ce3377637863a7",
"assets/assets/images/board/4.0x/title_fight.png": "cd65cdb5910e2f3d52a6bce01d431a99",
"assets/assets/images/board/4.0x/title_average.png": "8f514cf83fed174ac47dfefd6eee99f1",
"assets/assets/images/board/4.0x/board_rect.png": "226ad5a595b5f380f03d4bbee75e67e5",
"assets/assets/images/board/4.0x/board_game_item.png": "1cf58dd4c94c7487b0ad1c74c320b5b1",
"assets/assets/images/board/4.0x/board_game_item_dragon_yellow.png": "5f8e7f63e2f7cf713f2eb7bca7710bbe",
"assets/assets/images/board/4.0x/board_game_item_dragon_blue.png": "391e464d86432919d57737cfa499d080",
"assets/assets/images/board/4.0x/title_dragon.png": "5d839f6c605f462310134997ac9bfe13",
"assets/assets/images/board/4.0x/board_game_item_dragon_birch.png": "49595ee9765bd054f8bf26668415ea0b",
"assets/assets/images/board/board_game_item_dragon_blue.png": "995e7232a15f0359078b8c08d40e17b9",
"assets/assets/images/board/title_dragon.png": "2688dc5caee3e110ffa952a329251736",
"assets/assets/images/board/border_bottom_left.png": "295aa3e2eb0bdac54caadb3db9eb4285",
"assets/assets/images/board/border_top_right.png": "bfe532447c473b384577d6bd7f03fabc",
"assets/assets/images/board/board_game_item_dragon_birch.png": "5b739d64d8c42bf8b30a17628cd3940e",
"assets/assets/images/button/button_history.png": "9d1320f8e0c055c901d30cbb796bb4be",
"assets/assets/images/button/2.0x/button_history.png": "6988b74340564a024336955d915e4fec",
"assets/assets/images/button/2.0x/button_sound.png": "458042b191d3f5ce73abff48395c6df3",
"assets/assets/images/button/2.0x/button_mute.png": "f7431a904855b74e13da869292236d1e",
"assets/assets/images/button/2.0x/button_brown.png": "8cb8c85b35f9e1bdc6d5e53c3db4e377",
"assets/assets/images/button/button_sound.png": "f03230ad57f3693e29bc2658eda96c3f",
"assets/assets/images/button/4.0x/button_history.png": "bca14d2e4e201bf0009043929d85c65c",
"assets/assets/images/button/4.0x/button_sound.png": "fca034424fbc57c8e777dc0add37ea73",
"assets/assets/images/button/4.0x/button_mute.png": "d790f3095d68aa552850070a3f7e47dc",
"assets/assets/images/button/4.0x/button_brown.png": "d0ed67e42174e303f999290f3a09eadd",
"assets/assets/images/button/button_mute.png": "15ab2c3fff45dc5fd201f95335a35488",
"assets/assets/images/button/button_brown.png": "eba973c0fb41467751bce5bb0b271bc8",
"assets/assets/images/terrain/terrain_pink.png": "b273845e26229eb08e80769964cc177e",
"assets/assets/images/terrain/terrain_fantasy.png": "36f5b1983eb73092bb094b16646e68b6",
"assets/assets/images/terrain/2.0x/terrain_pink.png": "a3d78655db506018832496a1f624847b",
"assets/assets/images/terrain/2.0x/terrain_fantasy.png": "3a5d00cb2cac700d8ac35a689438484a",
"assets/assets/images/terrain/2.0x/terrain_sky.png": "9641cc8577c79120de4db9c84732c126",
"assets/assets/images/terrain/4.0x/terrain_pink.png": "2642f94d786fdbc096951f4608a51c9d",
"assets/assets/images/terrain/4.0x/terrain_fantasy.png": "ce5e5588e3ada39712c8dae76839428a",
"assets/assets/images/terrain/4.0x/terrain_sky.png": "3d8092b70747fa34feb839f11bc6e7d2",
"assets/assets/images/terrain/terrain_sky.png": "96b7dbb581529f970084a624bd1b6f14",
"assets/assets/images/castle/2.0x/castle_fantasy.png": "beaf49f06cdc649c69f4e05adcdec5bb",
"assets/assets/images/castle/2.0x/castle_pink.png": "a7d716c648eca731c6a3a30b410a8d25",
"assets/assets/images/castle/2.0x/castle_sky.png": "86b28bad013ebbaef8ff333e437befac",
"assets/assets/images/castle/castle_fantasy.png": "9342029e9cb7163823fe0c5d2f9cdf63",
"assets/assets/images/castle/4.0x/castle_fantasy.png": "82162f220216406dc63b5527d2f2e745",
"assets/assets/images/castle/4.0x/castle_pink.png": "94925920f8785b5c081326e87227ffa9",
"assets/assets/images/castle/4.0x/castle_sky.png": "3b67fa830cc726aa378bcf1ee4b8e75e",
"assets/assets/images/castle/castle_pink.png": "51a0abd1d8e81e4a60a90d2df242de12",
"assets/assets/images/castle/castle_sky.png": "1f85dc008d44efcc5cafa9b002436931",
"assets/assets/images/actor/actor_casket.png": "e50bd3f9291ca69d48cd823c976d2ccc",
"assets/assets/images/actor/actor_dragon_gold.png": "9504ed9893ef0e40f54a10307530a2a6",
"assets/assets/images/actor/2.0x/actor_casket.png": "2da464a44078798889df8297dd8a2d35",
"assets/assets/images/actor/2.0x/actor_dragon_gold.png": "719f577d79a63f5fcf0ed672602ff1ac",
"assets/assets/images/actor/2.0x/actor_dragon_blue.png": "8a52e88d1b260cf0f945e1ccc0532ece",
"assets/assets/images/actor/2.0x/actor_legend_dragon.png": "f982719050e8a343a3e0d095769b4748",
"assets/assets/images/actor/2.0x/actor_castle.png": "f2b279f0c195d97882308399f8254395",
"assets/assets/images/actor/2.0x/actor_dragon_birch.png": "aaeeeaf76ea64757d4c09874bb86f5b4",
"assets/assets/images/actor/2.0x/actor_dragon_yellow.png": "729cb675086bd4b8d1ee1bcfdb8e5db7",
"assets/assets/images/actor/2.0x/actor_knight.png": "ce6f9398079f02485d3bb82990409e4a",
"assets/assets/images/actor/4.0x/actor_casket.png": "0fed0c482acd3171e0cfd23e223f8497",
"assets/assets/images/actor/4.0x/actor_dragon_gold.png": "9c4f617ba572129482e083a7db60ef10",
"assets/assets/images/actor/4.0x/actor_dragon_blue.png": "4667bd18fb6b8f4a71d9b4de9c547833",
"assets/assets/images/actor/4.0x/actor_legend_dragon.png": "1992635f0a9ae2cb8eb289a9a2fb2311",
"assets/assets/images/actor/4.0x/actor_castle.png": "4099b0a5eb3fb9f0e75acd3985f74628",
"assets/assets/images/actor/4.0x/actor_dragon_birch.png": "a05b50cc09e387ddf0e4d61d643531a6",
"assets/assets/images/actor/4.0x/actor_dragon_yellow.png": "885ce479c2d090c533fbf54809a55e20",
"assets/assets/images/actor/4.0x/actor_knight.png": "86a3402e823d0e870e12960b174911b1",
"assets/assets/images/actor/actor_dragon_blue.png": "e897b50a0473b319fe73b4f69baca420",
"assets/assets/images/actor/actor_legend_dragon.png": "3b9d2bff47bee14e828d8b48e3d60cad",
"assets/assets/images/actor/actor_castle.png": "27cb5dd13a7b26b16ed7b433df0672b4",
"assets/assets/images/actor/actor_dragon_birch.png": "8dcd5e26a9eb3deb25f68acc9f3ba38b",
"assets/assets/images/actor/actor_dragon_yellow.png": "e1e03ecb8462382c5b3bb54e5a74914a",
"assets/assets/images/actor/actor_knight.png": "865cb1666f9394bd940be90a85b61ffa",
"assets/assets/images/banner/banner_history.png": "3fde6e58fa66a243db81744149060014",
"assets/assets/images/banner/banner_battle.png": "819882e846e485cb1f9544530b7da69f",
"assets/assets/images/banner/banner_memory.png": "6dfd6b907ef198f3a2d8ff6d1a278193",
"assets/assets/images/banner/2.0x/banner_history.png": "1606f952ef9c615579c5bc51f45ba86f",
"assets/assets/images/banner/2.0x/banner_battle.png": "ab846d562b9353a4d1e089bfca8eeef4",
"assets/assets/images/banner/2.0x/banner_memory.png": "ebfdf7523d780d32424010bd616dab6c",
"assets/assets/images/banner/2.0x/banner_casket.png": "7ace819639d3485e87e4ad0ea136aff9",
"assets/assets/images/banner/2.0x/banner_dragons.png": "4063b73dd4619e4595c96521c6ced0dc",
"assets/assets/images/banner/2.0x/banner_legend.png": "41e52bebf006148cf05f6aba80ba75c5",
"assets/assets/images/banner/2.0x/banner_castle.png": "5007d315a907921a65e9697c6b12f131",
"assets/assets/images/banner/banner_casket.png": "a578f89c8b0a5667e1bc05617289c0a4",
"assets/assets/images/banner/4.0x/banner_history.png": "24dc04b7b9ad8a7dc7926e7ba31a2d5f",
"assets/assets/images/banner/4.0x/banner_battle.png": "2189d071e3d82cc28d6b9a7beff08636",
"assets/assets/images/banner/4.0x/banner_memory.png": "1dd46ea5d4bd68042930ed5d4c29ed3c",
"assets/assets/images/banner/4.0x/banner_casket.png": "65246958bc762e25148203db81e6e7fd",
"assets/assets/images/banner/4.0x/banner_dragons.png": "7a9628de85ab4a4fb00d9c9bb378b2c9",
"assets/assets/images/banner/4.0x/banner_legend.png": "dc625efaec45d235af72a3276837ca89",
"assets/assets/images/banner/4.0x/banner_castle.png": "1ae3b0387abf94c28f9d6b9f883f361e",
"assets/assets/images/banner/banner_dragons.png": "6c11731b5a4c222d58415452e96033b3",
"assets/assets/images/banner/banner_legend.png": "5d6ead0a67909d8e9d308117c3f4083d",
"assets/assets/images/banner/banner_castle.png": "f0c40243a05f51e4d17ef200012645b4",
"assets/assets/images/banner/banner_logo.png": "4c4d61160fb5f260d67346e9708d299a",
"assets/assets/images-ru/background/background_launch.png": "efc76aca01bba3b19c94462abaf21f22",
"assets/assets/images-ru/background/2.0x/background_launch.png": "a12ee18a61d093fdc06ab047e5160e56",
"assets/assets/images-ru/background/4.0x/background_launch.png": "1fb23ff761bd9c2bfcfe8b747ae2e5e2",
"assets/assets/images-ru/board/title_fight.png": "502d4d4dfdf1d70a2ecba11af385ecdd",
"assets/assets/images-ru/board/title_average.png": "43d98219af133fc2530c1f14692067da",
"assets/assets/images-ru/board/title_dragon.png": "489ee96ce50ccfc1b957f3bb92a4028b",
"assets/assets/images-ru/banner/banner_history.png": "fb361f169338f6dd536d347d7358ea47",
"assets/assets/images-ru/banner/banner_battle.png": "5d972461940f42f7e31451a05bc43b60",
"assets/assets/images-ru/banner/banner_memory.png": "973fcfdf30685f8db492d5f75823b68a",
"assets/assets/images-ru/banner/banner_casket.png": "a86b445f04025a4362fbf3884472e370",
"assets/assets/images-ru/banner/banner_dragons.png": "d773ad2005685c7b46f56bfb33bcc712",
"assets/assets/images-ru/banner/banner_legend.png": "74637a118ddb54fb2ed5435eea9944c9",
"assets/assets/images-ru/banner/banner_castle.png": "32034940f253924e1ae556f54641482b",
"assets/assets/images-ru/banner/banner_logo.png": "035db63b9fac7e38400f952d4784d5a1",
"assets/assets/sound/thud_2.mp3": "82714c41328519733b72a16d2ac96700",
"assets/assets/sound/epic_2.mp3": "2b7c089b1daf6f0112c655824799aca4",
"assets/assets/sound/epic_1.mp3": "dcf267e718c470361e80c08865ec0700",
"assets/assets/sound/unavailable.mp3": "f27437d8ec536916872a4b2726a4b340",
"assets/assets/sound/fanfare.mp3": "9e1538f55d6a248d4ade7007aa2ca903",
"assets/assets/sound/ring_2.mp3": "9ad371e9bdce7be44b09946a649b0de2",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

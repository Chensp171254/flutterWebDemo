'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "8c16287b5630f695451531e7caf49ae9",
"assets/AssetManifest.smcbin": "a99d494e84b366caaff6dd4ba1ea657e",
"assets/assets/images/bg_empty.webp": "6e427c0d09475cae2813d53ed6c3d8d5",
"assets/assets/images/bg_insight_type1.png": "4c30a582e180b672b99fe7e62ee35743",
"assets/assets/images/bg_insight_type2.png": "1878795603c75c7b7843f3f2df2693aa",
"assets/assets/images/bg_insight_type3.png": "e6b71ccda1546e485bfc24cbfcb4ea31",
"assets/assets/images/bg_statistics_week.png": "4de5d9232851191d29f601846ebe93e2",
"assets/assets/images/bg_statistics_year.png": "a67f63869a50915a24fb1f263cdc01c0",
"assets/assets/images/icon_arrow_down_white.png": "188617864899cfe86d18b01b5bd6f500",
"assets/assets/images/icon_bad_Image.png": "f827c0c85f349a21e33c0fb3ec8b803d",
"assets/assets/images/icon_close_black.png": "01d32d595411c698d5ac5e004e5cc036",
"assets/assets/images/icon_close_eyes.png": "8d388156e17aaa5b64c12ef7ec7685fc",
"assets/assets/images/icon_company_increase_top1.png": "30053cb275daecf1b78310cad5409d42",
"assets/assets/images/icon_company_increase_top2.png": "6261ffa8d0dd57fe538224d22663bfc0",
"assets/assets/images/icon_company_increase_top3.png": "4145b6a13b3649e5ae015c5975e6f4bd",
"assets/assets/images/icon_company_top1.png": "718fd3aca578d79814fb846845748aaf",
"assets/assets/images/icon_company_top2.png": "482f299ba88a9d76369214cf01edae22",
"assets/assets/images/icon_company_top3.png": "73f4fd1057b2088954f9d689474c19df",
"assets/assets/images/icon_empty.png": "867837642ff943cca8e311251b76e16f",
"assets/assets/images/icon_flag_statistics_3i.png": "3a84584b15a1a1a6aaa65477be23dc06",
"assets/assets/images/icon_flag_statistics_company.png": "50288fb74c8f9aab853297a9d39e1677",
"assets/assets/images/icon_flag_statistics_company_increase.png": "534c8518e79fb80ef4cb302b83210a31",
"assets/assets/images/icon_inquiry_acc_rig_blue.png": "93950078db6d58e670fa4660559126ca",
"assets/assets/images/icon_inquiry_alloc_btn.png": "c6797a3fdc6295d6eb43446250ad2acc",
"assets/assets/images/icon_inquiry_daichakan.png": "2dec1f78b095399b329542f55b958b0d",
"assets/assets/images/icon_inquiry_jxsqg.png": "4a532cb0cf26f6426a3c56dff6aa1496",
"assets/assets/images/icon_inquiry_menu_issed.png": "66bad8338b81ff4705a824f1accfb9ce",
"assets/assets/images/icon_inquiry_mes_nobeaksel.png": "3d3140f756b285c110d06a7470aead54",
"assets/assets/images/icon_inquiry_mes_nosel.png": "a70839817a1bdc935954bbf7f50664b8",
"assets/assets/images/icon_inquiry_mes_seled.png": "01b5314e65080f392cb722bc5f76cf88",
"assets/assets/images/icon_inquiry_nosee.png": "0fe8d7e33d922d40717a11fa9dfd48b9",
"assets/assets/images/icon_inquiry_pro.png": "ad52fcce0f378749052b19d3e3dac866",
"assets/assets/images/icon_inquiry_tipLd.png": "1916c6a9a78639c6802938d772306deb",
"assets/assets/images/icon_inquiry_tipth.png": "c3efe2a9a8ab290ddfda722be8d36b03",
"assets/assets/images/icon_inquiry_yichakan.png": "41dc6cef31329998b9ebf913133829e1",
"assets/assets/images/icon_inquiry_yifenpei.png": "6a39808c6cebbdbf3d1c4d71c7f9731b",
"assets/assets/images/icon_inquiry_youzhisj.png": "880c938768963a0ea7f1f16816ea4041",
"assets/assets/images/icon_inquiry_yzqg.png": "8ff2ba0c9c01bb2c6beccb0981692444",
"assets/assets/images/icon_inquiry_zsqg.png": "1eb529f714cd7c1cb5a5d0509943e8d6",
"assets/assets/images/icon_insight_group_back.png": "d62f065c1a2d64c93594fa8d9972ca5a",
"assets/assets/images/icon_insight_home_top_p.png": "bd950b22df5aba0223f21f886c2371c4",
"assets/assets/images/icon_insight_list_all_bg.png": "ac06d5c51308f519a0aca41a2d62c027",
"assets/assets/images/icon_insight_list_all_ins.png": "7a2ddf76d686816c1b89cd1193bc7d9f",
"assets/assets/images/icon_insight_list_all_zb.png": "3794e96e6880b6a7c272870cb78e32b6",
"assets/assets/images/icon_instrument_logo.png": "874c0adbbd1d651b50b19299e466dee4",
"assets/assets/images/icon_loading_error.png": "e90bc5e8bc2e44c3c1f16ead351fbef7",
"assets/assets/images/icon_my_insight_text.png": "50df55428eadfb9820a100e68c2de52a",
"assets/assets/images/icon_net_error.png": "66afb22b0981f8cdee3f50a8fa52a95e",
"assets/assets/images/icon_no_permission.png": "dbe3ef2bc6c254667771a85e392887ce",
"assets/assets/images/icon_open_eyes.png": "e2c57c461f689a26c2f1e0ecc231adb7",
"assets/assets/images/icon_permission_red.png": "afafb0c45d47144ac0fb78cba241741d",
"assets/assets/images/icon_placeHolder_gray.png": "bebbb3be6faab67114d8a7b447867678",
"assets/assets/images/icon_selector_per.png": "460fe7b46909d573bf35f9599ac80e10",
"assets/assets/images/icon_selector_yes.png": "733665427bebc2db881516a4aebb452b",
"assets/assets/images/icon_serve_phone.png": "2e8a865356613b0bd960b61c590bd6f3",
"assets/assets/images/icon_share.png": "4f6c4629a32cf11f2f4017ab49992590",
"assets/assets/images/icon_sys_placeholder_gray.png": "bebbb3be6faab67114d8a7b447867678",
"assets/assets/images/icon_tel_received.png": "03e6af72468fdfc4cfbed9e8a9c0eb74",
"assets/assets/images/icon_tel_unreceived.png": "829d849c0e2c6cf217cb4ae4b3f7f1cd",
"assets/assets/images/icon_virtual_item.png": "9fe59d569209f61177f9e03c2695e3da",
"assets/assets/images/icon_virtual_item2.png": "ab99620af3a21bc65d45280916d45e14",
"assets/assets/images/insight_home_title.png": "f4bdfd12f860c1f00526d27d31e612c4",
"assets/assets/images/insight_home_top_bg.png": "1ec40a54743b80445e9aab8ad6271505",
"assets/assets/images/sys_null_gray.png": "252356ba2de83756067ea750d083fd3c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b3fb00d7b87be546f78240c6e57fff7d",
"assets/NOTICES": "0f35cbb8c2ad86b0673b943c4d99fde9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1bbd2e642062f58b0b0b0404c69961f9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "c440ce86861103d7ed91aa7d852b221f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"index.html": "fdda9cf0c21e21ccbe68cfb81f609c8f",
"/": "fdda9cf0c21e21ccbe68cfb81f609c8f",
"main.dart.js": "f87f60cbc8f742e39983ec6cc121e76f",
"manifest.json": "99f0540ceacf981aba992210283e53b9",
"version.json": "aaea9ec1b1d5e9bf7b814f9c5f8692e8"};
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c0e1d786ece2c1eb105f12bcf70abde5",
"assets/assets/beep.mp3": "e3bff22444468aed7ab2e979d886b2c0",
"assets/assets/din.gif": "6fcb6772fe66dfdb5651bdfa00ed0662",
"assets/assets/end.mp3": "fc28ef149e94eff1540eecc9ef84f795",
"assets/assets/i00.png": "0214422174f23878add9f4fa10dd3010",
"assets/assets/i01.png": "77609284c95aa4486d70aa5d7a0a680a",
"assets/assets/i02.png": "ccd8c756c663acd0cef28a9011be50a4",
"assets/assets/i03.png": "8a271ecf64c2dc5f09e8f4081c57603a",
"assets/assets/i04.png": "b2144bda3c6ca6fb5bd35fb146601e80",
"assets/assets/i05.png": "bb5a8b2b6dcdfaf61e99b9003b3c76b3",
"assets/assets/in01.mp3": "f6b6482947037cf014d709d13364bd23",
"assets/assets/in02.mp3": "9eb77ec47cdf979e94e7cb9afa9b4980",
"assets/assets/in03.mp3": "bd54fa865ff44c3764fe0a9d9779ae1d",
"assets/assets/in04.mp3": "a5505c534c2ec9a393d7b2aae66df109",
"assets/assets/in05.mp3": "17ac1af24e4033059589773c13cd5af5",
"assets/assets/in06.mp3": "f6b0aa56ff9c189fa6d5067451721c46",
"assets/assets/in07.mp3": "47891f6eb1a5561ad43dc8dd5117f396",
"assets/assets/in08.mp3": "b30187cc554ca50a9af2a14679302074",
"assets/assets/in09.mp3": "56c05b9b4a52dd1a95f5f9c4d12bd314",
"assets/assets/in10.mp3": "196916d35b3fba1a1a3c25e33cfb267b",
"assets/assets/inend.mp3": "781e55329f58c84035d80483c2ed2fac",
"assets/assets/nwarts.mp3": "3dae6e5600041ac44083d048c9c42f41",
"assets/assets/p2001.jpg": "6fc9fd4cc5de9328c209ac712f8a5983",
"assets/assets/p2002.jpg": "9e04f0fee8277c1a62ac5e515d54e6c4",
"assets/assets/p2003.jpg": "86197afd641522aa60ad6fc8add406fc",
"assets/assets/p2004.jpg": "d04d6ba2f76bf74bece9779a2e7960d7",
"assets/assets/p2005.jpg": "1fd309e3194d2ebe9aef0c3a11f646e7",
"assets/assets/p2006.jpg": "7c1e9e2a08fed94253461590cd3ed94b",
"assets/assets/p2007.jpg": "6e003b26fb93e231d81ec6c150b05dc1",
"assets/assets/p2008.jpg": "e1f922cdf6b188df08e4582b55db3cd5",
"assets/assets/p2009.jpg": "be9894b9d2406173a0641fd2e38ecc54",
"assets/assets/p2010.jpg": "40110f94aa71fc44e67fe1b88438b99a",
"assets/assets/p4101.jpg": "ba3a2d629e713beb7eab2ed566d7ced4",
"assets/assets/p4102.jpg": "022a0b25aada2174e390600a52c31b91",
"assets/assets/p4103.jpg": "dfa0bd842c5d98c42c06b86d6960e885",
"assets/assets/p4104.jpg": "d4e6a20ad21fb244d8b984f76c4b16fd",
"assets/assets/p4105.jpg": "d092c7a89cf069d3a90146ba8975fc6b",
"assets/assets/p4106.jpg": "e0c915e160bea91b8abd462f13933f63",
"assets/assets/p4107.jpg": "813b2396ce7df6f45d9a3c965d6a0352",
"assets/assets/p4108.jpg": "7d16167e29930e5d01d7e11911f03a00",
"assets/assets/p4109.jpg": "4694e12d5c41acaf33dc4b4aef982d31",
"assets/assets/p4110.jpg": "239e394b12496993de3390ea2e9b96c9",
"assets/assets/p4201.jpg": "2bcb19bd55df628a98ca0b48eca7eaa2",
"assets/assets/p4202.jpg": "573ab15a98f51aeda0f95def58e45418",
"assets/assets/p4203.jpg": "3eb732624b6e9b0a97b0be04d5c4ced8",
"assets/assets/p4204.jpg": "4c5c43513f8b743390d6084f1d8a14be",
"assets/assets/p4205.jpg": "0d6e1235602617d8c001af1feead5fbf",
"assets/assets/p4206.jpg": "c119dfc39bf420c235fb4799d87daa69",
"assets/assets/p4207.jpg": "11414cad31410a0c1782bcd8a0b01c2a",
"assets/assets/p4208.jpg": "ca747bba699c772af7e80202c184793d",
"assets/assets/p4209.jpg": "f19df289c1b48754d3cd70e594d998ea",
"assets/assets/p4210.jpg": "d7b62d686b8732fd52c4946df3deaff4",
"assets/assets/qu101.mp3": "bb4ceceefd73a8ca16e966f0065dd408",
"assets/assets/qu102.mp3": "c141eade35132a61c6ea4898126e0b17",
"assets/assets/qu103.mp3": "9a1ce5a5d7f9e82f549751492e2de757",
"assets/assets/qu104.mp3": "44870f2bf004ae14b94a59278fbc7df2",
"assets/assets/qu105.mp3": "45f22ddc4ea433d5cadeffa2b9e6ef59",
"assets/assets/qu106.mp3": "6c4c42f22aa86e5dc6db00d118703814",
"assets/assets/qu107.mp3": "fff447bfa10e27302726325c903fc8fb",
"assets/assets/qu108.mp3": "fdbee410dcffdd7f2ee0ad8ceb0e4314",
"assets/assets/qu109.mp3": "e1906156eeaeb65a448690fd5e460641",
"assets/assets/qu110.mp3": "432a9130cc932d3ba4cb4499d6172633",
"assets/assets/qu201.mp3": "eeb10b53fce2524a36f4cdf0105e082c",
"assets/assets/qu202.mp3": "5454574c4ba2058c0b762ee8bc3600aa",
"assets/assets/qu203.mp3": "69e105e9eb2201c986dbc495ca992dc4",
"assets/assets/qu204.mp3": "eb70eeca2dcbf385868c72656fec1384",
"assets/assets/qu205.mp3": "22e226bde8f574b54e483836cf2857d0",
"assets/assets/qu206.mp3": "e5c56daaff376ffa02dc463bc85931c8",
"assets/assets/qu207.mp3": "d44f68f7e72feb8f28bc6a06645fda6c",
"assets/assets/qu208.mp3": "ff1d31544ebc0d4e7e6bbaf71fef4e5c",
"assets/assets/qu209.mp3": "27b60c3d38b053d447c8fbcdd5d003d4",
"assets/assets/qu210.mp3": "584112c98c9c8153ab75f6b374516245",
"assets/assets/qu301.mp3": "71b4a3c05820f11ea4b885c3f13cfa4e",
"assets/assets/qu302.mp3": "0f5065e6085f0c7d70e4f5d50d4df8bd",
"assets/assets/qu303.mp3": "ddf33d385346c79352f3441c530d6c18",
"assets/assets/qu304.mp3": "2bb286e24e3c5e500eac9ec84c38857b",
"assets/assets/qu305.mp3": "50b3521388138dc943a828e342b4abc3",
"assets/assets/qu306.mp3": "07ecc234bc03138367d6213f26693103",
"assets/assets/qu307.mp3": "667e870a0df2a1930d1a8fd44a7ea555",
"assets/assets/qu308.mp3": "77208b8d85b26816bf5d3461c4b7809f",
"assets/assets/qu309.mp3": "2842e755cc14e59c8d7aa149cce52f8f",
"assets/assets/qu310.mp3": "eb32e50c5985453a52d9698271dc0498",
"assets/assets/qu401.mp3": "a8a1283c6d918036e43bda053458abcc",
"assets/assets/qu402.mp3": "b5a0df8c791521ff24a62db5f4309bae",
"assets/assets/qu403.mp3": "75eeadd14abd7ae3facf84d6f9c36863",
"assets/assets/qu404.mp3": "4da7bf4fc6ac43cefc38cff1013d9c09",
"assets/assets/qu405.mp3": "14c5e8eb319bd9b9d2bce36b895c6ef8",
"assets/assets/qu406.mp3": "1e0964e379ebc36d0c0f461bdc1ec5df",
"assets/assets/qu407.mp3": "4b7cd7cce445c2dce60c19b30d6a469b",
"assets/assets/qu408.mp3": "a3abe150aafb4fafea23894997e8b507",
"assets/assets/qu409.mp3": "229560790b233473423551396c8ef5eb",
"assets/assets/qu410.mp3": "3dbb3dd19ea300203b977dbb5a846c76",
"assets/assets/qu501.mp3": "b4ff1c7547de4342898d18a1f7e17e0f",
"assets/assets/qu502.mp3": "bef3a758c420f50b4ed500a4bd18c9df",
"assets/assets/qu503.mp3": "4ca320ecd3724ad8b9f2f1028abe1d9d",
"assets/assets/qu504.mp3": "7fddfc67dd14374cd81c3ccdfb4a1e5f",
"assets/assets/qu505.mp3": "cc557dd19b7dc8f458118a24a8002c33",
"assets/assets/qu506.mp3": "797f7867ab3a3e32a504325c7e71c905",
"assets/assets/qu507.mp3": "7fe497ec8d08d922cc1451cfe541ff01",
"assets/assets/qu508.mp3": "66bd6df24782f690c678f3cf19b57cc4",
"assets/assets/qu509.mp3": "5dde644595a4ba32f360d6cc79624c42",
"assets/assets/qu510.mp3": "3d420947b74409442d4b657eba6ac840",
"assets/assets/ssp.mp3": "bb08fd6a4441967f856ea0af0f42bd17",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "18014201e3a21cfead7da668fc30b840",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_player.js": "ab009562c726b262f996cb55447ef32a",
"assets/packages/flutter_sound_web/js/flutter_sound/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/js/howler/howler.core.min.js": "55e0af0319483be8a7371a2cceacf921",
"assets/packages/flutter_sound_web/js/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/js/howler/howler.min.js": "0245b64fba989b9e3fd5b253f683d0e4",
"assets/packages/flutter_sound_web/js/howler/howler.spatial.min.js": "28305f7b4898c9b49d523b2e80293ec8",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "61afa1e4d597c809fce88879300bf0b7",
"icons/Icon-192.png": "971240233ba8ac9259026937be41d440",
"icons/Icon-512.png": "10ecf3cd088cb288b2e4d54f830d2a0f",
"icons/Icon-maskable-192.png": "3e6b513a6a9237ae72a40e3d66644d70",
"icons/Icon-maskable-512.png": "393b427da31d8d099c7e96e4bf077280",
"index.html": "e01ed7a9441b5cb70581c86452b42792",
"/": "e01ed7a9441b5cb70581c86452b42792",
"main.dart.js": "619848b5b9c83a6eeef4f100048047be",
"manifest.json": "caea445244bbc41916f020067c84ec88",
"version.json": "5398b2c434e120c84a5bc551b2ac3689"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
